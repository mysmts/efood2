import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './../PostComments';

describe('PostComments Component', () => {
  it('renders comments correctly', () => {
    render(<PostComments />);
    const commentText = 'This is a test comment';
    fireEvent.change(screen.getByRole('textbox'), { target: { value: commentText } });
    fireEvent.click(screen.getByRole('button', { name: /comentar/i }));
    expect(screen.getByText(commentText)).toBeInTheDocument();
  });
});
