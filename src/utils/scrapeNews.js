const scrapeNews = async () => {
  const corsProxy = process.env.REACT_APP_CORS_PROXY;
  const rssFeedUrl = 'https://www.motorsport.com/rss/f1/news/';

  try {
    const res = await fetch(corsProxy + rssFeedUrl);
    const data = await res.text();
    const parsedData = new window.DOMParser().parseFromString(data, 'text/xml');
    const newsItems = [...parsedData.querySelectorAll('item')].slice(0, 5);
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
  } catch {
    console.warn('Scraping news unsuccesful');
  }
};

export default scrapeNews;
