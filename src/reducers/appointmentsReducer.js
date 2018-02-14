
import { UPDATE_APPT } from '../constants/ActionTypes';
import initialState from './initialState';

export default function appointments(state=initialState,action) {
      switch(action.type)
      {
        case UPDATE_APPT:
        {
          return state.map(appt =>appt.id === action.data.id ? action.data : appt)
        }
        default:  {
          return state;
        }
      }
      
}
