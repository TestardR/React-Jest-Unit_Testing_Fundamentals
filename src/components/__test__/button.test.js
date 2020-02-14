import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button.component';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="Click Me"></Button>);
  expect(getByTestId('button')).toHaveTextContent('Click Me');
});

it("it matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot();
})