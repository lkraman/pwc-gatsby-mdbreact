import React, { Component } from 'react'
// import holiday_backdrop from '../images/holiday_backdrop.jpeg'
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
            src={holiday_backdrop}
            className="modal-image"
            width="100%"
            height="50%"
            alt=""
          /> */}
          <MDBModalBody
            className="modal-body text-center text-white"
            toggle={this.toggle(14)}
          >
            <div>
              <MDBBtn className="close" onClick={this.toggle(14)}>
                x
              </MDBBtn>
            </div>
            <h1 className="modal-text justify-text-center"> Happy Holidays!</h1>
            <p>
              Please observe our Holiday Hours. Online orders must be received
              one hour prior to closing.
            </p>
            <h3 className="modal-text justify-text-center">
              12/24 CHRISTMAS EVE: <br />
              7AM - 3PM
            </h3>

            <h3 className="modal-text justify-text-center">
              12/25 CHRISTMAS DAY: <br />
              Closed
            </h3>
            {/* <h3 className="modal-text justify-text-center">
              12/31 NEW YEAR'S EVE: <br />
              7AM - 4PM
            </h3>
            <h3 className="modal-text justify-text-center">
              1/1 NEW YEAR'S DAY: <br />
              7AM - 1PM
            </h3> */}

            <br />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ModalPage
