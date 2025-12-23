import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { blogPosts } from './data/posts';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}

export function getRoutes() {
  const routes = ['/', '/blog', '/about', '/certificates'];
  const postRoutes = blogPosts.map(post => `/post/${post.id}`);
  return [...routes, ...postRoutes];
}
