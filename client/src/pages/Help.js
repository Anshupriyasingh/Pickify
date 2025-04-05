import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending to an API or email.
    alert("Form submitted!");
  };

  const helpStyles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center", // Center the children horizontally
      alignItems: "center", // Center the children vertically
      padding: "20px", // Reduced padding for better layout control
      fontFamily: "'Helvetica', sans-serif",
      backgroundColor: "#f4f6f9",
      minHeight: "110vh", // Full height of the viewport

    },
    formContainer: {
      width: "90%", // Make form container responsive, takes full width available
      maxWidth: "500px", // Set a max width for the form container
      backgroundColor: "#ffffff",
      borderRadius: "8px", // Rounded corners
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      height: "auto", // Set to auto to fit content naturally
      minHeight: "300px", // Ensure a minimum height for form container
      margin: "20px 200px", // Add some horizontal spacing between form and content
    },
    textContainer: {
      width: "100%", // Make text container responsive
      maxWidth: "500px", // Set a max width for the text container
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      minHeight: "300px", // Minimum height for text content
      height: "auto", // Let it resize based on the content
      margin: "0 20px", // Add some horizontal spacing between form and content
      marginLeft: "-150px",
      marginRight: "150px",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "15px",
      textAlign: "center",
      fontFamily: "'Helvetica', sans-serif",
    },
    paragraph: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    input: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
      color: "#555",
      outline: "none",
      transition: "all 0.3s",
    },
    textarea: {
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
      color: "#555",
      height: "120px",
      outline: "none",
      transition: "all 0.3s",
    },
    button: {
      padding: "12px 18px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
      transform: "scale(1.05)",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    icon: {
      marginRight: "8px",
      fontSize: "18px",
      color: "#007bff",
    },
  };
  

  return (
    <Layout title={"Help & Support"}>
      <div style={helpStyles.container}>
        {/* Help Form */}
        <div style={helpStyles.formContainer}>
          <h1 style={helpStyles.heading}>Need Help? We’re Here to Assist!</h1>
          <p style={helpStyles.paragraph}>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form style={helpStyles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={helpStyles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={helpStyles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              style={helpStyles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              style={helpStyles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = helpStyles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = helpStyles.button.backgroundColor)}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Informational Content */}
        <div style={helpStyles.textContainer}>
          <p style={helpStyles.paragraph}>💡 Need assistance? We're here to help!</p>
          <p style={helpStyles.paragraph}>📚 Check our FAQs for quick solutions to common issues.</p>
          <p style={helpStyles.paragraph}>📞 Contact us directly for personalized support.</p>
          <p style={helpStyles.paragraph}>📧 Reach out to support@company.com for further inquiries.</p>
          <p style={helpStyles.paragraph}>💬 You can also use our live chat for instant help.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
