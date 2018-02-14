import appointments from './appointmentsReducer';
import  * as types  from '../constants/ActionTypes';
import initialState from './initialState';
import updatedState from '../test/data/testData';

describe('appointments reducer', () => {
    it('should handle initial state', () => {
      expect(
        appointments(undefined, {})
      ).toEqual(initialState);
    });
    it('should handle UPDATE_APPT',()=>{
        expect(
            appointments(initialState,{type: types.UPDATE_APPT,
                data: {id:2,'time':"11:00 AM - 12:00 PM",Name:'test data',Phone:'678-901-2345'}})
        ).toEqual(updatedState);
    });
});
  