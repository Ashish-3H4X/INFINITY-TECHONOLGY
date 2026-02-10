import express from "express";
import Contact from "../models/Contact.js";
import { Resend } from "resend";

const router = express.Router();
console.log("RESEND KEY:", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save to DB
    await Contact.create({ name, email, phone, message });

    const ticketId = `INF-${Math.floor(1000000 + Math.random() * 9000000)}`;

    // ================= ADMIN MAIL =================

    await resend.emails.send({
      from: `Infinity Technologies Pvt. Ltd. <${process.env.FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL],
      subject: "New Contact Form Submission - Infinity Technologies",

      html: `
<div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">

<div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">

<div style="background: #2563eb; color: #ffffff; padding: 20px; text-align: center;">
  <h2>Infinity Technologies Pvt. Ltd.</h2>
  <p>New Contact Form Submission</p>
</div>

<div style="padding: 20px; color: #333333;">

<p>Hello Team,</p>

<table style="width: 100%; border-collapse: collapse;">

<tr><td><b>Name:</b></td><td>${name}</td></tr>
<tr><td><b>Email:</b></td><td>${email}</td></tr>
<tr><td><b>Phone:</b></td><td>${phone}</td></tr>
<tr><td><b>Message:</b></td><td>${message}</td></tr>
<tr><td><b>Registration No:</b></td><td>${ticketId}</td></tr>

</table>

<p>Regards,<br><b>Infinity Team</b></p>

</div>
</div>
</div>
      `,
    });

    // ================= USER MAIL =================

    await resend.emails.send({
      from: `Infinity Technologies Pvt. Ltd. <${process.env.FROM_EMAIL}>`,
      to: [email],
      subject: "Thanks for contacting Infinity Technologies",

      html: `
<div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:20px;">

<div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden;">

<div style="background:#0f172a; padding:25px; text-align:center;">
  <h2 style="color:#ffffff;">Infinity Technologies Pvt. Ltd.</h2>
  <p style="color:#cbd5f5;">Support & Customer Care</p>
</div>

<div style="padding:25px; color:#1f2933;">

<p>Hi <b>${name}</b>,</p>

<p>Thank you for contacting Infinity Technologies.</p>

<div style="background:#eef2ff; padding:15px; margin:15px 0;">
  <p>🎫 <b>Registration ID:</b> ${ticketId}</p>
  <p>📌 <b>Status:</b> Open</p>
  <p>📅 <b>Date:</b> ${new Date().toLocaleString()}</p>
</div>

<p>Our team will contact you shortly.</p>

<p>Regards,<br><b>Infinity Team</b></p>

</div>

<div style="background:#020617; color:#94a3b8; padding:15px; text-align:center; font-size:12px;">
© ${new Date().getFullYear()} Infinity Technologies
</div>

</div>
</div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error("Contact error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Try again later.",
    });
  }
});

export default router;
