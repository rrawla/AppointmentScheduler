import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { Provider}  from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';
let store = createStore(rootReducer);


it('renders without crashing', () => {
  const rendered = renderer.create(<Provider store={store}><App/></Provider>).toJSON();
  expect(rendered).toBeTruthy();
});
