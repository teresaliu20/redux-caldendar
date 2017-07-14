import React from 'react';
import { connect } from 'react-redux';
import TimeSlot from '../components/TimeSlot'

const AppContainer = ({ timeslots, onPlanEvent, onCancelEvent }) => {
  return (
    <div className="calender">{timeslots.map(slotObject => (
      <TimeSlot
      id={slotObject.id}
      slotObject={slotObject}
      onPlanEvent={onPlanEvent}
      onCancelEvent={onCancelEvent}
      />))}
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    timeslots: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlanEvent: (id, event, description) => dispatch({
      type: 'PLAN_EVENT',
      id: id,
      event: event,
      description: description
    }),
    onCancelEvent: (id) => dispatch({ type: 'CANCEL_EVENT', id: id})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AppContainer);