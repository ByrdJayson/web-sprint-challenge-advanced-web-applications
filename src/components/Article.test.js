import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';


const testArticle = {
    id:"h2a95h",
    headline: "TESTING",
    author: "",
    summary: "Test",
    body: "Test"
};

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);

    const headline = screen.queryByText(/testing/i);
    expect(headline).toBeInTheDocument();
    const author = screen.queryByTestId('author');
    expect(author).toBeInTheDocument();
});

 test('renders "Associated Press" when no author is given', ()=> {
     render(<Article article={testArticle}/>);
     const ap = screen.queryByText(/Associated Press/i);
     expect(ap).toBeInTheDocument();
 });

 test('executes handleDelete when the delete button is pressed', ()=> {
     render(<Article article={testArticle} handleDelete={handleDelete}/>)
     let deleteButton = screen.queryByTestId('deleteButton');
     const article = screen.queryAllByText('TESTING');
     userEvent.click(deleteButton);
    //incomplete
 });

//Task List:
//1. Complete all above tests. Create test article data when needed.