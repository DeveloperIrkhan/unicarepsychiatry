import React from "react";
import { Footer } from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const BipolarDisorderService = () => {
  return (
    <div>
      <Helmet>
        <title>Bipolar Disorder - Unicare Psychiatry</title>
        <meta name="description" content="Unicare, Unicare Psychiatry" />
        <meta
          name="keywords"
          content="What is Bipolar Disorder?, Unicare, Unicare Psychiatry, US health company, us best health company, us top listed mdical company"
        />
      </Helmet>
      <div className="biopolar-container">
        <div className="biopolar-container-header row p-0 m-0 ">
          <h3 className="col text-center p-3 p-0 m-0 g-0 text-white bg-primary">
            Bipolar Disorder
          </h3>
        </div>
        <div className="p-0 m-0 g-0 biopolar-container-banner"></div>
        <div className="biopolar-container-header row p-0 m-0 g-0 f-18-n text-white bg-secondary text-center ">
          <p
            data-aos="fade-right"
            data-aos-duration="3000"
            className="p-3 custom-padding custom-text-alignment"
          >
            Bipolar disorder (formerly called manic-depressive illness or manic
            depression) is a mental illness that causes unusual shifts in a
            person’s mood, energy, activity levels, and concentration. These
            shifts can make it difficult to carry out day-to-day tasks.
          </p>
        </div>

        <div className="container my-5">
          <div className="d-flex flex-md-row flex-column justify-content-center align-items-center">
            <div
              data-aos="fade-left"
              className="col-md-6 col-12 f-18-n order-2 order-md-1 my-3 custom-text-alignment p-md-5 p-3"
            >
              <p className="f-22-b text-primary">
              Bipolar Disorder Diagnoses And Treatment at Unicare Psychiatry?
              </p>
              <p className="f-18-n">
              At Unicare psychiatry, we spend time discussing your symptoms,
            concerns, and medical history to pinpoint the specific type of
            bipolar disorder you have. Our providers may also recommend
            cognitive testing to assess your mental functioning. We work with
            you as a partner to create a personalized treatment plan based on
            your needs, focusing your mental, physical and spiritual needs. For
            details schedule an appointment online today.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="col-md-6 col-12 f-18-n order-1 order-md-2"
            >
              <img
                className="img-fluid  shadow-plus-border"
                src="Images/BipolarDisorder.png"
                alt="picture"
              />
            </div>
          </div>
        </div>
        <hr className="container line my-5" />
        <div className="p-0 m-0">
          <div className="d-flex">
            <div className="biopolar-image-container h-100 w-100">
              <div className="col-12 py-5">
                <h2 className="f-35-b text-white text-center">
                  Schedule An Appointment{" "}
                </h2>
              </div>
              <div className="row my-5">
                <div className="d-flex justify-content-center align-items-center">
                  <NavLink
                    className="btn button-primary"
                    to="/book-an-appointment"
                  >
                    Book Appointment
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BipolarDisorderService;
