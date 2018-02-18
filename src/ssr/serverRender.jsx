import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../components/App';

export default function serverRender(url) {
  const context = {};
  const app = (
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

  return new Promise(resolve => {
    const finalRender = () => {
      const markup = ReactDOM.renderToString(app);

      resolve({ context, markup });
    };

    return finalRender();
  });
}
