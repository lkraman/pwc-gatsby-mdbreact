import React from 'react';
import '../components/layout.css';
import liability_ins_handheld_form from '../images/liability_ins_handheld_form.jpg';
import protection_image from '../images/protection_image.jpg';
import Layout from '../components/layout';

import SEO from '../components/seo';

import { MDBContainer, MDBRow, MDBView, MDBCol, MDBMask } from 'mdbreact';

export const ServicesPage = () => (
  <Layout pageInfo={{ pageName: 'services' }}>
    <SEO title="PWC Insurance Group services" />
    <MDBContainer>
      <section className="my-5">
        <h2 className="contactHeader h1-responsive font-weight-bold text-center my-2">
          We Serve Your Business and Your Family
        </h2>
        <h4 className="text-center">
          Be proactive! Get the insurance coverage you need before it's too
          late.
        </h4>
        <p className="lead w-responsive text-center mx-auto mb-5"></p>
        <br />

        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <MDBView>
              <img
                src={liability_ins_handheld_form}
                alt="liability insurance"
                className="img-fluid rounded z-depth-1"
              />
              <MDBMask
                overlay="stylish-light"
                className="flex-center"
              ></MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">
                  Customizable Business Insurance Solutions
                </h5>
                <p>
                  Every business has unique insurance needs. Whether you're a
                  startup or an established business, we offer personalized
                  solutions to protect everything you have worked so hard to
                  achieve.
                </p>

                <h6 className="services font-weight-bold mb-3">
                  Businesses Services We Offer:
                </h6>
                <ul>
                  <li>Business Liabilty</li>
                  <li>Workman's Compensation</li>
                  <li>Life</li>
                  <li>Health</li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />

        <MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2"></MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="services font-weight-bold mb-3">
                  Customizable Personal Insurance Solutions
                </h5>
                <p>
                  There is no one-size-fits-all insurance solution to meet your
                  needs. We provide personalized insurance solutions that
                  satisfy the uniqueness of you and your family. Whether solely
                  for you or your entire family, we offer customizable insurance
                  solutions to protect you and the people that matter most you.
                </p>

                <h6 className="services font-weight-bold mb-3">
                  Personal Services We Offer:
                </h6>
                <ul>
                  <li>Life</li>
                  <li>Health</li>
                  <li>Auto</li>
                </ul>

                {/* <div>
                  <Animation
                    className="services-button justify-content-center"
                    type="rubberBand"
                    duration="2s"
                  >
                    <MDBBtn
                      className="services-button mb-4"
                      outline
                      rounded
                      hover="true"
                      waves-effect="true"
                      size="lg"
                      href="mailto:paola.rosas@pwcinsurancegroup.com"
                    >
                      <MDBIcon icon="paper-plane" className="services mr-3" />{' '}
                      Email me
                    </MDBBtn>
                  </Animation>
                </div> */}
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView>
              <img
                src={protection_image}
                alt=""
                className="img-fluid rounded z-depth-1"
              />
              <MDBMask
                overlay="stylish-light"
                className="flex-center"
              ></MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default ServicesPage;
