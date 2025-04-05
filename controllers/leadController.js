import Lead from "../models/leadModel.js";

export const createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newLead = new Lead({ name, email, phone, message });
    await newLead.save();

    res.status(201).json({ success: true, message: "Lead submitted successfully", lead: newLead });
  } catch (error) {
    console.error("Lead submission error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
