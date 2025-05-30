
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AlgApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-YEBAOTL7.js",
      "chunk-NEH2W5MY.js"
    ],
    "route": "/AlgApp"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YEBAOTL7.js",
      "chunk-NEH2W5MY.js"
    ],
    "route": "/AlgApp/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HMIX2C4S.js"
    ],
    "route": "/AlgApp/diagrams"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1139, hash: '9b054fc9eece46680566cc42ba5cf865100622e3bafac58d0c36eba4400653e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: 'cdbf5baf4af264badf9304271d6656ca50acd20f27e7051ad022d6fbd058aff1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'diagrams/index.html': {size: 4067, hash: '601c58332cc835d11a6dc87aed9fe6e6b80c6184ecdad7edf80111f167586a61', text: () => import('./assets-chunks/diagrams_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 15452, hash: '0218f9d6e4f2c9fc8875d6dbcef49fa16c2621eeabd41652fcde9f09011ac999', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 15461, hash: 'a0984fded5d8b9b63b5b48a2338ece887e2afc3d1887537b6217dcbb7ba965bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TUSCRK3M.css': {size: 2333, hash: 'Bnehk4tfn6o', text: () => import('./assets-chunks/styles-TUSCRK3M_css.mjs').then(m => m.default)}
  },
};
