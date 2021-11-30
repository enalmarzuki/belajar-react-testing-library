import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter as Router } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of incomplate tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplate tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

// it('should render "task" when the number of incomplate tasks is one 2', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeTruthy();
// });

// it('should render "task" when the number of incomplate tasks is one 3', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();

//   // toBeVisible adalah kita ber ekspektasi bahwa komponen kita kelihatan oleh user.
//   // jika komponen kita memiliki opacity = 0 maka test ini akan failed krn komponen kita tidak kelihatan oleh user
// });

// it('should render "task" when the number of incomplate tasks is one 4', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML('p');
// });

// it('should render "task" when the number of incomplate tasks is one 5', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId('footer-text');
//   expect(paragraphElement).toHaveTextContent('1 task left');
// });

// it('should render "task" when the number of incomplate tasks is one 6', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId('footer-text');
//   expect(paragraphElement).not.toBeFalsy();
// });

// it('should render "task" when the number of incomplate tasks is one 7', () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId('footer-text');
//   expect(paragraphElement.textContent).toBe('1 task left');
// });
