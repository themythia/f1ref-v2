import React from 'react';
import NewsListItem from './NewsListItem';
import NewsThumbItem from './NewsThumbItem';

const NewsItem = ({ news, size }) => {
  return (
    <>
      <NewsThumbItem news={news} size={size} />
      <NewsListItem news={news} />
    </>
  );
};
export default NewsItem;
