import React, { Component } from 'react'
// import happy_holidays from '../images/happy_holidays.jpg'
import happy_new_year from '../images/happy_new_year.jpg'
import { MDBContainer, MDBIcon, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact'

class ModalPage extends Component {
  state = {
    modal14: true,
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          {/* <img
            src={happy_holidays}
            className="modal-image"
            width="100%"
            height="50%"
            alt=""
          />  */}
          <img
            src={happy_new_year}
            className="modal-image"
            width="100%"
            height="50%"
            alt=""
          />
          <MDBModalBody
            className="modal-body text-center text-white"
            toggle={this.toggle(14)}
          >
            <div>
              <MDBBtn className="close" onClick={this.toggle(14)}>
                x
              </MDBBtn>
            </div>
            <h2 className="modal-text justify-text-center"> HOLIDAY HOURS:</h2>
            <p className="holiday-modal-notice-text">
              Please note: online orders must be received at least one hour
              prior to closing time
            </p>
            {/* <h3 className="holiday-modal-days justify-text-center">
              12/24 Christmas Eve:
            </h3>
            <p className="holiday-modal-times justify-text-center">
              7AM - 3PM
            </p>

            <h3 className="holiday-modal-days justify-text-center">
              12/25 Christmas Day:
            </h3>
            <p className="holiday-modal-times justify-text-center">
              Closed
            </p> */}
            <h3 className="holiday-modal-days justify-text-center">
              12/31 New Year's Eve:
            </h3>
            <p className="holiday-modal-times justify-text-center">7AM - 4PM</p>
            <h3 className="holiday-modal-days justify-text-center">
              1/1 New Year's Day:
            </h3>
            <p className="holiday-modal-times justify-text-center">7AM - 1PM</p>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ModalPage
