import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkItem from './BookmarkItem';
import {BrowserRouter} from 'react-router-dom'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <BrowserRouter>
  <BookmarkItem />
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
