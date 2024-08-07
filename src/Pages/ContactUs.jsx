import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../Components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import bootstrap from "bootstrap";
export const ContactUs = () => {
  const [state, handleSubmit] = useForm("meqbvybe");

  return (
    <>
      <Helmet>
        <title>Contact Us - PharmaCare Billing Solutions</title>
        <meta
          name="description"
          content="Contact Us"
        />
        <meta
          name="keywords"
          content="Yasmin Majumder, 407 N. Broadway Lexington KY 40508, Kentucky, 606-689-0657, PharmaCare Billing Solutions, Contact Us, PharmaCare Billing Solution"
        />
      </Helmet>

      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Contact Us
          </h3>
        </div>
        <div className="p-0 m-0 g-0 contact-container-banner"></div>
      </div>
      <div
        className="px-md-5 px-3 mx-md-4 mx-2 white-bg"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
      >
        <div className="row m-0 p-0 my-3">
          <div className="container">
            <h2 className="div-heading mt-5" data-aos="flip-left">
              Contact Us
            </h2>
            <div className="d-flex flex-md-row flex-column">
              <div className="col-md-6 col-12" data-aos="flip-right">
                <p className="f-18-n">
                Do you have a question or comment? Please feel free to reach out, and our team will get back to you shortly.
                </p>
                <div></div>
                <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-envelope-fill"></i> Email
                <br />
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="mailto:unicarepsychiatry2020@gmail.com"
                  className="f-18-t ml-5"
                >
                  unicarepsychiatry2020@gmail.com
                </a>
                {/* <span className="f-18-t ml-5">unicarepsychiatry2020@gmail.com</span> */}
              </p>
            </div>

            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-chat-dots-fill"></i> Text Only
                <br />
                {/* This span directs user to messanger */}
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="sms:+16066890657"
                  className="f-18-t ml-5"
                >
                  606-689-0657
                </a>
                {/* <span className="f-18-t ml-5">606-689-0657</span> */}
              </p>
            </div>

            <div>
              <p className="f-18-n social-icon">
                <i class="bi bi-geo-alt-fill"></i> Address
                <br />
                {/* <span className="f-18-t ml-5">
                  407 N. Broadway Lexington, KY 40508-1301
                </span> */}
                <a
                  style={{
                    // color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  href="https://www.google.com/maps/search/?api=1&query=407%20N.%20Broadway%20Lexington,%20KY%2040508-1301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-18-t ml-5"
                >
                  407 N. Broadway Lexington, KY 40508
                </a>
              </p>
            </div>
              </div>

              {state.succeeded ? (
                <div className="card shadow m-auto" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    style={{
                      height: "200px",
                      width: "200px",
                      margin: "auto",
                      padding: "35px",
                    }}
                    src="/Images/thankyou.png"
                    alt="Card image cap"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-secondary">Thank you!</h5>
                    <p className="card-text f-18-n">
                    Your message has been sent successfully, and our team will contact you soon.
                    </p>
                    <a
                      href="/"
                      className="my-3 px-md-5 p-2 btn button-primary text-white"
                    >
                      Go Back
                    </a>
                  </div>
                </div>
              ) : (
                <div className="col-md-6 col-12" data-aos="flip-left">
                  <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                      <form onSubmit={handleSubmit}>
                        <div className="my-1">
                          <label htmlFor="firstName">
                            <b>First and Last Name *</b>
                          </label>
                          <input
                            className="form-control"
                            required
                            id="firstName"
                            type="text"
                            name="firstName"
                          />
                        </div>
                        <br />
                        <div className="my-1">
                          <label htmlFor="email">
                            <b>Email *</b>
                          </label>
                          <input
                            className="form-control"
                            id="email"
                            required
                            type="email"
                            name="email"
                          />
                        </div>
                        <br />
                        <div className="my-1">
                          <label htmlFor="email">
                            <b>Message *</b>
                          </label>
                          <textarea
                            className="form-control"
                            required
                            id="message"
                            name="message"
                            placeholder="Type your message here..."
                          />
                        </div>

                        <button
                          className="my-3 px-md-5 p-2 btn button-primary text-white"
                          type="submit"
                          disabled={state.submitting}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
