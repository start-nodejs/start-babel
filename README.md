# start-babel

Focus on Babel v7+.

[Babel] is a JavaScript compiler. [\[npmjs\]](https://www.npmjs.com/package/babel), [\[github\]](https://github.com/babel/babel)

Official website : [english](https://babeljs.io), [中文](https://www.babeljs.cn)

All Babel7 modules are published as separate npm packages scoped under @babel :

- **[@babel/core](https://www.npmjs.com/package/@babel/core)** - Core Library
- **[@babel/cli](https://www.npmjs.com/package/@babel/cli)** - CLI tool
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)
- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)
- [@babel/plugin-transform-arrow-functions](https://www.npmjs.com/package/@babel/plugin-transform-arrow-functions) - transform ES2015+ syntax into ES5

## Usage

- [babel.config.js doc](https://babeljs.io/docs/en/config-files#project-wide-configuration)
- [.babelrc doc](https://babeljs.io/docs/en/config-files#file-relative-configuration)
- [babel-cli doc](https://babeljs.io/docs/en/babel-cli)
- [babel-core doc](https://babeljs.io/docs/en/babel-core)

Shell :

```shell
$ npx babel src --out-dir lib
// or
./node_modules/.bin/babel src --out-dir dest
// more
// --plugins=@babel/plugin-transform-arrow-functions
// --presets=@babel/env // with babel.config.js
```

JS :

```js
const babel = require("@babel/core");
babel.transform("code", optionsObject);
```



## Important

| Feature     | Browser     | Date    | Link
|-------------|-------------|---------|------
| async/await | Chrome55+   | 2016-12 | [link](https://caniuse.com/#search=async)
|             | Firefox52+  | 2017-03
|             | Safari10.1+ | 2017-03
|             | Edge15+     | 2017-04
|             | Opera42+    | 2016-12

## Last supported browser for Windows XP

| Browser | Version | Date    | Link
|---------|---------|---------|------
| Chrome  | v49.0   | 2016-04 | [link](https://chrome.googleblog.com/2015/11/updates-to-chrome-platform-support.html)
| Firefox | v52.9   | 2018-06 | [link](https://support.mozilla.org/en-US/kb/end-support-windows-xp-and-vista)
| IE      | v8      | 2009-03 | [link](https://support.microsoft.com/help/11531/internet-explorer-system-requirements)

> WinXP-IE6~IE8, Win7-IE9~IE11, Win10-IE11


[Babel]: https://babeljs.io