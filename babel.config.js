const presets = [
  [
    "@babel/env",
    {
      targets: {
        esmodules: true,
        node: "current",
        chrome: "54",
        edge: "17",
        firefox: "60",
        safari: "12",
        opera: "50",
        ios: "12",
        //"ie": "11"
      },
      //useBuiltIns: "usage",
      //modules: "amd",
      debug: true
    },
  ],
];

module.exports = { presets };