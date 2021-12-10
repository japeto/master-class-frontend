import { render, screen } from '@testing-library/react';
import App from '.';

test("Testing main APP", ()=>{
  render(<App />);
  const titleElement = screen.getAllByText(/Contact me!/);
  // expect(titleElement).toBeInTheDocument();
})

