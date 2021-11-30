import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const AddTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should render same text passed into title props', () => {
    render(<MockTodo />);

    // not best practice when value is multiple => see test below
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /add/i });

    fireEvent.change(inputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    fireEvent.click(buttonElement);
    // not best practice when value is multiple => see test below

    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple items', () => {
    render(<MockTodo />);

    // best practice
    AddTask(['Go Grocery Shopping', 'Cat is my pet', 'Wash my hands']);
    // best practice

    const divElements = screen.getAllByTestId(/task-container/i);
    expect(divElements.length).toBe(3);
  });

  it('task should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    AddTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('task should have completed class when clicked', () => {
    render(<MockTodo />);
    AddTask(['Go Grocery Shopping']);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });

  it('should footer have length the task', () => {
    render(<MockTodo />);
    AddTask(['Go Grocery Shopping']);
    const paragraphElement = screen.getByTestId('footer-text');
    expect(paragraphElement).toBeInTheDocument(/1 task left/i);
  });
});
