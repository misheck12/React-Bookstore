import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books/books';

const BookItem = ({ book }) => {
  const {
    title, id, author, category,
  } = book;
  const dispatch = useDispatch();

  const HandleRemove = () => {
    console.log(id);
    dispatch(deleteBook(id));
  };

  return (
    <li key={id}>
      <p>
        Book:
        {' '}
        { title }
      </p>
      <p>
        Author:
        {' '}
        { author }
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={HandleRemove}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default BookItem;
