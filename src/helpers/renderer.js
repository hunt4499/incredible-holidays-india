import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import Routes from "../client/Routes";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <html lang="en">
      <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, user-scalable=no" >
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name: "robots" content: "noindex"/>
        <link rel="manifest" href="/manifest.json">
        <!-- Chrome, Firefox OS, Opera and Vivaldi -->
        <meta name="theme-color" content="#f9a51a">
        <!-- Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#f9a51a">
        <!-- iOS Safari -->
        <meta name="apple-mobile-web-app-status-bar-style" content="#f9a51a">
        <link rel="stylesheet" type="text/css" base href="/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" base href="/css/global.css" />
        <link rel="stylesheet" type="text/css" base href="/css/owl-carousel.css" />
        <link rel="stylesheet" type="text/css" base href="/css/ReactToastify.css">
        </head>
        <body data-spy="scroll" data-target="#itinerary-aside" data-offset="430">
        <noscript>
        You need to enable JavaScript to run this app.
        </noscript>
        <div id="root">${content}</div>
        <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="/bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="/bootstrap/bootstrap.min.js"></script>
        <script src="/js/affix.js"></script>

        
        
        <script src="/js/custom.js"></script>
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/incredible-holiday-india.js').then(function(registration) {
                // Registration was successful
              return null;
              }, function(err) {
                // registration failed
              return null;
              });
            });
          }
          function updateOnlineStatus()
            {
              document.getElementById("mainComponent").style.filter = "grayscale(0%)";
            }

          function updateOfflineStatus()
            {
              document.getElementById("mainComponent").style.filter = "grayscale(100%)";
            }

          window.addEventListener('online',  updateOnlineStatus);
          window.addEventListener('offline', updateOfflineStatus);
          </script>
      </body>
    </html>
          `;
};
