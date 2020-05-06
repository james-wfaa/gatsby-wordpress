// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-card-d-js": () => import("./../src/pages/cardD.js" /* webpackChunkName: "component---src-pages-card-d-js" */),
  "component---src-pages-card-e-js": () => import("./../src/pages/cardE.js" /* webpackChunkName: "component---src-pages-card-e-js" */),
  "component---src-pages-event-js": () => import("./../src/pages/event.js" /* webpackChunkName: "component---src-pages-event-js" */),
  "component---src-pages-homepage-js": () => import("./../src/pages/homepage.js" /* webpackChunkName: "component---src-pages-homepage-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

