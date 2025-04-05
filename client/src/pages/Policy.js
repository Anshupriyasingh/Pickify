import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const policyStyles = {
    container: {
      padding: "50px 20px",
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      marginBottom: "140px", // Added space between content and footer
    },
    contentWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
     
    },
    imageContainer: {
      flex: "1",
      minWidth: "300px",
    },
    image: {
      width: "100%",
      maxWidth: "500px",
      borderRadius: "12px",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)", // Slight zoom effect on hover
      },
    },
    
    textContainer: {
      flex: "1",
      minWidth: "300px",
      padding: "20px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#343a40",
      marginBottom: "20px",
      borderBottom: "3px solid #007bff",
      display: "inline-block",
      paddingBottom: "5px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#495057",
      lineHeight: "1.4",
      marginBottom: "15px",
    },
    highlight: {
      fontWeight: "bold",
      color: "#007bff",
    },
  };


  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus" style={policyStyles.container}>
        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt="contactus" style={policyStyles.image} />
        </div>
        <div className="col-md-6" style={policyStyles.textContainer}>
          <h2 style={policyStyles.heading}>Our Commitment to Your Privacy</h2>
          <p style={policyStyles.paragraph}>
            At <span style={policyStyles.highlight}>PICKIFY</span>, we take your privacy seriously.
            This Privacy Policy outlines how we collect, use, and protect your personal information.
          </p>
          <p style={policyStyles.paragraph}>
            <span style={policyStyles.highlight}>1. Data Collection:</span> We collect only necessary information
            for improving our services.
          </p>
          <p style={policyStyles.paragraph}>
            <span style={policyStyles.highlight}>2. Data Usage:</span> Your data is used solely to enhance
            your experience and is never shared with third parties without consent.
          </p>
          <p style={policyStyles.paragraph}>
            <span style={policyStyles.highlight}>3. Security Measures:</span> We implement strict security
            protocols to safeguard your data from unauthorized access.
          </p>
          <p style={policyStyles.paragraph}>
            <span style={policyStyles.highlight}>4. Your Rights:</span> You have the right to request access, correction,
            or deletion of your data at any time.
          </p>
          <p style={policyStyles.paragraph}>
            For more details, please review our complete privacy policy or contact our support team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
