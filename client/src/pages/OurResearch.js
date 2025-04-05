import React from "react";
import Layout from "./../components/Layout/Layout";

const Research = () => {
  const researchStyles = {
    container: {
      padding: "40px",
      fontFamily: "Arial, sans-serif",
    },
    image: {
      width: "100%",
      borderRadius: "8px",
    },
    textContainer: {
      paddingLeft: "20px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#555",
      lineHeight: "1.6",
    },
  };

  return (
    <Layout title={"Our Research"}>
      <div className="row research" style={researchStyles.container}>
        <div className="col-md-6">
          <img src="/images/research.jpeg" alt="research" style={researchStyles.image} />
        </div>
        <div className="col-md-4" style={researchStyles.textContainer}>
          <p style={researchStyles.paragraph}>🔬 We are dedicated to cutting-edge research and innovation.</p>
          <p style={researchStyles.paragraph}>📊 Our studies focus on improving technology and user experience.</p>
          <p style={researchStyles.paragraph}>📚 We collaborate with industry experts and researchers.</p>
          <p style={researchStyles.paragraph}>🌍 Our work aims to make a positive global impact.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Research;
