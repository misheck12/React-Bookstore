import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import Books from './Books';

const BooksPage = () => {
  const bookList = [
    {
      booktitle: ' The Great Gatsby',
      author: ' F. Scott Fitzgerald',
      category: ' Fiction',
      id: uuidv4(),
    },
  ];
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
};

export default BooksPage;
