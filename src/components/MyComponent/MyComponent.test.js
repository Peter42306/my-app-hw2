import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  test('it should mount', () => {
    render(<MyComponent />);

    const MyComponent = screen.getByTestId('MyComponent');

    expect(MyComponent).toBeInTheDocument();
  });
});