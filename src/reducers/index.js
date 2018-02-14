import { combineReducers } from 'redux'
import appointments from './appointmentsReducer';
import selectedAppt from './selectedApptReducer';
const rootReducer = combineReducers({
  appointments,
  appointment:selectedAppt
});

export default rootReducer
