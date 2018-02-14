import selectedAppt from './selectedApptReducer';
import  * as types  from '../constants/ActionTypes';

describe('appointments reducer', () => {
    it('should handle initial state', () => {
      expect(
        selectedAppt(undefined, {})
      ).toEqual({});
    });
    it('should handle SELECT_APPT',()=>{
        expect(
            selectedAppt({},{type: types.SELECT_APPT,
                data: {id:1,'time':"09:00 AM - 10:00 AM",Name:'',Phone:''}})
        ).toEqual(
            {id:1,'time':"09:00 AM - 10:00 AM",Name:'',Phone:''}
        );
    });
});
  