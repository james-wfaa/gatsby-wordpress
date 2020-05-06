const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-card-d-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/cardD.js"))),
  "component---src-pages-card-e-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/cardE.js"))),
  "component---src-pages-event-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/event.js"))),
  "component---src-pages-fonts-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/fonts.js"))),
  "component---src-pages-homepage-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/homepage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jamesr/workspace/www/gatsby.uwalumni.com/src/pages/index.js")))
}

