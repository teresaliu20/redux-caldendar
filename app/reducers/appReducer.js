import Modal from 'react-modal';
import timeslots from '../data/timeslotData.js';
import ls from 'local-storage';

const currState = ls.get('state') ? ls.get('state') : timeslots;

const appReducer = (state = currState, action) => {
  switch(action.type) {
    case 'PLAN_EVENT':
      // Find the clicked time slot and keep track of its index
      let slotIndex = 0;
      const clickedSlot = state.find((item, index) => {
        slotIndex = index;
        return item.id === action.id
      })
      // Clone the state and update its event and description
      var clonedState = JSON.parse(JSON.stringify(state));
      clonedState[slotIndex].event = action.event;
      clonedState[slotIndex].description = action.description;
      
      // Return the newly updated state, save to local storage
      ls.set('state', clonedState);
      return clonedState;

    case 'CANCEL_EVENT': 
      // Find the clicked time slot and keep track of its index
      let slotIndexCancel = 0;
      const clickedSlotCancel = state.find((item, index) => {
        slotIndexCancel = index;
        return item.id === action.id
      })
      // Clone the state and update its event and description
      var clonedStateCancel = JSON.parse(JSON.stringify(state));
      clonedStateCancel[slotIndexCancel].event = '';
      clonedStateCancel[slotIndexCancel].description = '';
      console.log(clonedStateCancel[slotIndexCancel]);
      console.log(clonedStateCancel)
      
      // Return the newly updated state, save to local storage
      ls.set('state', clonedState);
      return clonedStateCancel;
      
    default:
      return state;
  }
}

export default appReducer;