import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 1. Save data to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });


    // 2. Mail transporter
    const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter early to surface auth/network issues
    await transporter.verify();

    const ticketId = `INF-${Math.floor(1000000 + Math.random() * 9000000)}`;
    // 3. Mail to ADMIN (you)
    await transporter.sendMail({
      from: `"Infinity Technologies Pvt. Ltd." <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission - Infinity Technologies",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px;">
      
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: #2563eb; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Infinity Technologies Pvt. Ltd.</h2>
          <p style="margin: 5px 0 0;">New Contact Form Submission</p>
        </div>

        <!-- Body -->
        <div style="padding: 20px; color: #333333;">
          
          <p>Hello Team,</p>

          <p>We have received a new message from our website contact form.</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>

            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>

            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>

            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>

 <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Registration No.:</td>
              <td style="padding: 8px;">${ticketId}</td>
            </tr>

          </table>

          <p style="margin-top: 20px;">
            Please respond to this inquiry as soon as possible.
          </p>

          <p>
            Regards,<br>
            <strong>Infinity Technologies Pvt. Ltd.</strong>
          </p>

        </div>

        <!-- Footer -->
        <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          © ${new Date().getFullYear()} Infinity Technology. All rights reserved.
        </div>

      </div>

    </div>
      `,
    });

    // 4. Auto reply mail to USER
    // await transporter.sendMail({
    //   from: `"Infinity Technology" <${process.env.EMAIL_USER}>`,
    //   to: email,
    //   subject: "Thanks for contacting Infinity Technology",
    //   html: `
    //     <p>Hi ${name},</p>
    //     <p>Thanks for choosing <b>Infinity Technology</b>.</p>
    //     <p>We have received your message and our tech team will contact you as soon as possible.</p>
    //     <br/>
    //     <p>Regards,<br/>Infinity Technology Pvt. Ltd.</p>
    //   `,
    // });

    await transporter.sendMail({
      from: `"Infinity Technologies Pvt. Ltd." <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: process.env.EMAIL_USER, // So replies come to you
      subject: `Thanks for contacting to Infinity Technologies`,

      html: `
  <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 0 12px rgba(0,0,0,0.1);">

      <!-- Header -->
      <div style="background:#0f172a; padding:25px; text-align:center;">
        <img 
          src="https://png.pngtree.com/png-vector/20240128/ourmid/pngtree-infinity-symbol-clip-art-png-image_11503383.png" 
          alt="Infinity Technology Logo" 
          style="max-width:160px; margin-bottom:10px;"
        />
        <h2 style="color:#ffffff; margin:0;">Infinity Technologies Pvt. Ltd.</h2>
        <p style="color:#cbd5f5; margin:5px 0 0;">Support & Customer Care</p>
      </div>

      <!-- Body -->
      <div style="padding:25px; color:#1f2933;">

        <p style="font-size:16px;">Hi <strong>${name}</strong>,</p>

        <p>
          Thank you for contacting <strong>Infinity Technologies</strong>.
          Your request has been successfully registered in our support system.
        </p>

        <!-- Ticket Box -->
        <div style="background:#eef2ff; padding:15px; border-radius:6px; margin:15px 0;">
          <p style="margin:5px 0;">
            🎫 <strong>Registration ID:</strong> ${ticketId}
          </p>
          <p style="margin:5px 0;">
            📌 <strong>Status:</strong> Open
          </p>
          <p style="margin:5px 0;">
            📅 <strong>Created On:</strong> ${new Date().toLocaleString()}
          </p>
        </div>

        <p>
          Our technical team is currently reviewing your query and will contact you shortly.
        </p>

        <!-- SLA Box -->
        <div style="background:#f1f5f9; padding:15px; border-left:4px solid #2563eb; margin:20px 0;">
          <p style="margin:0;">
            ⏳ Expected Response Time: <strong>Within 24 Hours</strong>
          </p>
        </div>

        <p>
          For faster assistance, please mention your <strong>Registration ID</strong> in all future communication.
        </p>

        <p style="margin-top:25px;">
          Best Regards,<br>
          <strong>Infinity Technologies Pvt. Ltd.</strong><br>
          Web & Software Solutions
        </p>

      </div>

      <!-- Social Media -->
      <div style="text-align:center; padding:15px; background:#f8fafc;">
        
        <p style="margin-bottom:10px; font-weight:bold;">
          Connect With Us
        </p>

        <a href="https://facebook.com/yourpage" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="28" />
        </a>

        <a href="https://instagram.com/yourpage" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" width="28" />
        </a>

        <a href="https://linkedin.com/company/yourpage" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" width="28" />
        </a>

        <a href="https://wa.me/919XXXXXXXXX" style="margin:0 8px;">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="28" />
        </a>

      </div>

      <!-- Footer -->
      <div style="background:#020617; color:#94a3b8; padding:15px; text-align:center; font-size:12px;">
        
        <p style="margin:5px 0;">
          © ${new Date().getFullYear()} Infinity Technologies. All rights reserved.
        </p>

        <p style="margin:5px 0;">
          🌐 www.infinitytechnology.com | 📧 infinitytechnologies50@gmail.com
        </p>

        <p style="margin:5px 0;">
          This is an automated email. Please do not share sensitive information.
        </p>

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
    console.log("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: error?.message || "Server error",
    });
  }
});

export default router;
