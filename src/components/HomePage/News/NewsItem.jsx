import React from 'react';
import NewsListItem from './NewsListItem';
import NewsThumbItem from './NewsThumbItem';

const NewsItem = ({ news, size }) => {
  return (
    <React.Fragment>
      <NewsThumbItem news={news} size={size} />
      <NewsListItem news={news} />
    </React.Fragment>
  );
};
export default NewsItem;
