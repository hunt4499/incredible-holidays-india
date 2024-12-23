import React from "react";
import App from "./App";
import Home from "./pages/home";
import Contact from "./pages/contact";
import BlogPage from "./pages/blogs";
import BlogDetails from "./pages/blog-details";
import ItineraryDetails from "./pages/itineraryDetails";
import Testing from "./pages/testing";
import ItineraryListing from "./pages/itineraryListing";
import SearchedItineraryListing from "./pages/searchResults";
import Page404 from "./pages/page-404";
import Testimonials from "./pages/testimonials";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...ItineraryDetails,
        path: "/itinerary-details/:slug",
        exact: true
      },
      {
        ...BlogPage,
        path: "/blogs",
        exact: true
      },
      {
        ...BlogDetails,
        path: "/blog-details/:slug",
        exact: true
      },
      {
        ...ItineraryListing,
        path: "/itinerary-listing",
        exact: true
      },
      {
        ...Testing,
        path: "/testing",
        exact: true
      },
      {
        ...SearchedItineraryListing,
        path: "/itinerary-search-results",
        exact: true
      },
      {
        ...Contact,
        path: "/contact-us",
        exact: true
      },
      {
        ...Testimonials,
        path: "/testimonials",
        exact: true
      },
      {
        ...Page404
      }
    ]
  }
];
