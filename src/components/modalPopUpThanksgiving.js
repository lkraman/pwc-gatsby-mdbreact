import React, { Component } from 'react'
import pies from '../images/pies.jpeg'
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
          <img
            src={pies}
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
            <h2 className="modal-text justify-text-center">
              {' '}
              Order Holiday Pies $10
            </h2>
            <p>
              Baked from scratch Apple, Pumpkin, Pineapple, Blueberry, and Wild
              Berry pies will compliment your Holiday feast!
            </p>
            <a
              href="https://cafeamericana.hrpos.heartland.us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBBtn className="modal-button center">
                <MDBIcon
                  icon="utensils"
                  className="mr-2"
                  id="modal-font-awesome"
                ></MDBIcon>{' '}
                Order Now{' '}
              </MDBBtn>
            </a>
            <br />
            (Yes, we are offering Thanksgiving morning pick-up!)
            <br />
            <br />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default ModalPage
