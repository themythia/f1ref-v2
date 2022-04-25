const scrapeNews = () => {
  const corsProxy = 'https://pacific-caverns-96128.herokuapp.com/';
  const rssFeedUrl = 'https://www.motorsport.com/rss/f1/newsdfgfdd/';

  return fetch(corsProxy + rssFeedUrl)
    .then((res) => res.text())
    .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then((data) => {
      const newsItems = [...data.querySelectorAll('item')].slice(0, 5);
      const newsObj = newsItems.map((news) => {
        const newsChildren = [...news.children];
        return {
          title: newsChildren.find((child) => child.tagName === 'title')
            .textContent,
          link: newsChildren.find((child) => child.tagName === 'link')
            .textContent,
          description: newsChildren.find(
            (child) => child.tagName === 'description'
          ).textContent,
          image: newsChildren.find((child) => child.tagName === 'enclosure')
            .attributes.url.textContent,
        };
      });
      return newsObj;
    })
    .then((newsObj) => newsObj)
    .catch((e) => console.warn('Scraping news unsuccessful', e));
};

export default scrapeNews;
