import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const LeadForm = () => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/leads", lead);
      if (data.success) {
        toast.success("Lead submitted successfully!");
        setLead({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Error submitting lead");
      console.error(error);
    }
  };

  return (
    <div className="lead-form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={lead.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={lead.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={lead.phone}
          onChange={handleChange}
          placeholder="Your Phone"
          required
        />
        <textarea
          name="message"
          value={lead.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeadForm;
