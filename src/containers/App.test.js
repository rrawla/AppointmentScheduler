import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
test('renders without crashing', () => {
    const container=renderer.create(<App/>,);
    let tree = container.toJSON();
     expect(tree).toMatchSnapshot();
  });