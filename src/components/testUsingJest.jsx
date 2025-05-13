import React from 'react'
import {render,screen} from '@testing-library/react'

function testUsingJest({name}) {
  return (
    <h1>Hello, {name}</h1>
  )
}

export default testUsingJest;

test('renders greeting with name', () => {
    render(<testUsingJest name='Pinky' />);
    expect(screen.getByText('Hello, Pinky')).toBeInTheDocument();
});


