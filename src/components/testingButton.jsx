import React, { useState } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";

function testingButton() {
    const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
  )
}

export default testingButton;


// testing
test('rendering button', () => {
    render(<testingButton />)
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Count: 1');
})