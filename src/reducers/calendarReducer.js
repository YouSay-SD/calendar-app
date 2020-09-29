import moment from 'moment';
import { types } from '../types/types';

const initialState = {
  events: [{
    title: 'Cumpleanos del Jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hours' ).toDate(),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'YouSay'
    }
  }],
  activeEvent: null
};

export const calendarReducer = ( state = initialState, action ) => {

  switch ( action.type ) {

    case types.eventSetActive:
      return {
        ...state,
        activeEvent: {
          ...action.payload
        }
      }
  
    default:
      return state;
  }

}