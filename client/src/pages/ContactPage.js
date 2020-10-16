import React from "react";
import ContactBanner from "../components/ContactBanner";

function ContactPage() {
  return (
    <>
      <ContactBanner />
      <div style={{ backgroundColor: "white", paddingBottom:"20px" }}>
        <h1 className="main-headers">Contributors</h1>
        <p>
          Business related news and information is contributed by{" "}
          <a href="https://www.bloomberg.com">bloomberg.com</a>.
        </p>
        <h1 className="main-headers">Advertising on Biz-Dashboard</h1>
        <p>
          Please contact us through one of our social media handles and one of
          our experts will get back to you as soon as possible.
        </p>
        <h1 className="main-headers">Information</h1>
        <p>
          Contact us through email by selecting the google icon above to get any
          information or to ask any questions you may have.
        </p>
      </div>
    </>
  );
}

export default ContactPage;
