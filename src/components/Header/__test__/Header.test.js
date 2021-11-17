import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title props', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title props', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title props 2', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole('heading', { name: 'My Header' });
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title props 3', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title props 4', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // FIND BY
// it('should render same text passed into title props 5', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY
// it('should render same text passed into title props 6', async () => {
//   render(<Header title="My Header" />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });
