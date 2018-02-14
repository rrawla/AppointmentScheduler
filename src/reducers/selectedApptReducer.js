
import { SELECT_APPT } from '../constants/ActionTypes';

export default function selectedAppt(state={},action) {
    switch(action.type){
        case SELECT_APPT:
            return action.data;
        default:
            return state;
    }  
}
