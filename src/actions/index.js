import * as types from '../constants/ActionTypes';

export const updateAppt = (data) => ({ type: types.UPDATE_APPT, data });
export const AppointmentSelected=(appt) => ({type: types.SELECT_APPT,data:appt});