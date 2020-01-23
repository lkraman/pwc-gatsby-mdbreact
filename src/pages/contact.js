import React from 'react';
import '../components/layout.css';

import SEO from '../components/seo';
import Layout from '../components/layout';

import {
  MDBContainer,
  MDBCardImage,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBBtn
} from 'mdbreact';

export const ContactPage = () => (
  <Layout pageInfo={{ pageName: 'contact' }}>
    <SEO title="Directions and Contact information for PWC Insurance Group" />
    <MDBContainer>
      <section className="my-5">
        <h2 className="contactHeader h1-responsive font-weight-bold text-center my-5">
          Contact Us
        </h2>

        <p
          className="contactinfo lead w-responsive text-center mx-auto mb-5"
          style={{ fontSize: '1em' }}
        >
          Contact us! Day or night, we are here to assist you with your business
          and home insurance needs.
        </p>
        <br />
        <MDBRow>
          <MDBCol md="12">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12253.79326944724!2d-75.72294731297444!3d39.84178514821698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6561d895093b9%3A0x7a00a323f0aee14c!2st%26b%20solution%20inc!5e0!3m2!1sen!2sus!4v1579794059712!5m2!1sen!2sus"
                title="Cafe Americana Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating>
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p
                  className="contactinfo"
                  style={{
                    fontSize: '1em'
                  }}
                >
                  326 W. Cedar St.
                  <br />
                  Suite 1
                  <br />
                  Kennett Square, Pa 19348
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn
                  tag="a"
                  floating
                  href="tel:1-610-444-4749"
                  rel="nofollow"
                >
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p className=" contactinfo mb-md-0" style={{ fontSize: '1em' }}>
                  <a
                    href="tel:1-610-444-4749"
                    rel="nofollow"
                    className="contactinfo-nav-link"
                    style={{ fontSize: '1em' }}
                  >
                    (610) 444-4749
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating href="mailto:cmck@cafeamericana.net">
                  <MDBIcon icon="envelope" />
                </MDBBtn>

                <p className=" contactinfo mb-md-0" style={{ fontSize: '1em' }}>
                  <a
                    className="contactinfo-nav-link"
                    href="mailto:paola.rosas@pwcinsurancegroup.com"
                    style={{ fontSize: '1em', wordWrap: 'break-word' }}
                  >
                    paola.rosas@pwcinsurancegroup.com
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  </Layout>
);

export default ContactPage;
