import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter
      className="position-relative w-100 p-3"
      expand="md"
      style={{ marginTop: '10rem' }}
    >
      <div className="footer-copyright text-center py-6">
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href="https://pwcinsurancegroup.com" alt="">
          {' '}
          PWC Insurance Group Inc{' '}
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
