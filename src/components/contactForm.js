import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const ContactFormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <p className="h4 text-center py-4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <div className="catering-button justify-content-center">
              <MDBBtn className="catering-button mb-4">
                <MDBIcon icon="paper-plane" className="catering mr-3"></MDBIcon>{" "}
                Email Us <br />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactFormPage;
