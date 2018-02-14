import * as types from '../constants/ActionTypes';
import * as actions from './index';
let testData={id:2,'time':"11:00 AM - 12:00 PM",Name:'test data',Phone:'678-901-2345'};
describe('appt actions', () => {
it('update appt should create UPDATE_APPT action', () => {
    expect(actions.updateAppt(testData)).toEqual({
      type: types.UPDATE_APPT,
      data: testData
    });
  });
it('select appt should create SELECT_APPT action', () => {
    expect(actions.AppointmentSelected(testData)).toEqual({
      type: types.SELECT_APPT,
      data: testData
    });
  });
});
