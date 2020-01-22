import React from 'react'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn,
  MDBView,
  MDBMask,
} from 'mdbreact'
import are_you_covered_laptop from '../images/are_you_covered_laptop.jpg'
import are_you_covered_form from '../images/are_you_covered_form.jpg'

const CarouselPage = () => {
  return (
    <MDBCarousel
      activeItem={1}
      length={2}
      showControls={false}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={are_you_covered_form}
              alt="Insurance photo form"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={are_you_covered_laptop}
              alt="Insurance photo"
            />
            <MDBMask overlay="black-strong" />
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default CarouselPage
