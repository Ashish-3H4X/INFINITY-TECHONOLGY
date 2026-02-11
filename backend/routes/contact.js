import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Generate Reg Number
const generateRegNo = () => {
  return "INF-" + Date.now();
};

// POST API
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.json({
        success: false,
        message: "All fields required",
      });
    }

    const regNo = generateRegNo();

    const contact = new Contact({
      name,
      email,
      phone,
      message,
      regNo,
    });

    await contact.save();

    res.json({
      success: true,
      regNo,
    });

  } catch (err) {
    console.log(err);

    res.json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;
