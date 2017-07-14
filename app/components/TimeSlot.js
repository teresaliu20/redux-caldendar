import React from 'react';
import Modal from 'react-modal';

class TimeSlot extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      event: '',
      description: ''
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }
  planEvent(event) {
    event.preventDefault();
    console.log("here!")
  }

  render() {
    var slotObject = this.props.slotObject;
    var onPressSlot = this.props.onPressSlot;
    var toggleEventColor = {
      backgroundColor: slotObject.event ? '#FFEED2' : 'white'
    }

    return (
      <div className="timeslot"
      onClick={() => this.openModal()}
      style={toggleEventColor}
      >
      <Modal
          isOpen={this.state.modalIsOpen}
          style={modalStyle}
          contentLabel="Example Modal"
          className="modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>{slotObject.time}</h2>
          <form>
            <div>
              <p>Event</p>
              <input type="text" name="event"
                onChange={(e) => this.setState({event: e.target.value})}/>
            </div>
            <div>
              <p>Description</p>
              <textarea type="text" name="description"
              onChange={(e) => this.setState({description: e.target.value})}></textarea>
            </div>
            <div className="button"
              onClick={() => {
                this.props.onPlanEvent(slotObject.id, this.state.event, this.state.description)
                this.setState({
                  modalIsOpen: false
                })
              }}
            >plan it</div>
            <div className="button"
              onClick={() => {
                this.props.onCancelEvent(slotObject.id, this.state.event, this.state.description)
                this.setState({
                  modalIsOpen: false
                })
              }}
            >free time</div>
            <div className="button"
              onClick={() => {
                this.setState({
                  modalIsOpen: false
                })
              }}
            >Close</div>
          </form>
        </Modal>

        <tr>
          <td className="time-container">{slotObject.time}</td>
          <td className="event-container">{slotObject.event}</td>
          <td className="description-container">{slotObject.description}</td>
        </tr>
      </div>
    )
  }
}

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    color: 'brown',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
}

export default TimeSlot;