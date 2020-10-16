import React from "react";
import ContactBanner from "../components/ContactBanner";

function ContactPage() {
  return (
    <>
      <ContactBanner />
      <div style={{ backgroundColor: "white", paddingBottom:"20px", marginTop:"5px", paddingTop:"5px" }}>
        <h1 className="main-headers" style={{paddingLeft:"15px"}}>Contributors</h1>
        <p style={{paddingLeft:"30px"}}>
          Business related news and information is contributed by{" "}
          <a href="https://www.bloomberg.com">bloomberg.com</a>.
        </p>
        <h1 className="main-headers" style={{paddingLeft:"15px"}}>Advertising on Biz-Dashboard</h1>
        <p style={{paddingLeft:"30px"}}>
          Please contact us through one of our social media handles and one of
          our experts will get back to you as soon as possible.
        </p>
        <h1 className="main-headers" style={{paddingLeft:"15px"}}>Information</h1>
        <p style={{paddingLeft:"30px"}}>
          Contact us through email by selecting the google icon above to get any
          information or to ask any questions you may have.
        </p>
      </div>
    </>
  );
}

export default ContactPage;
