# Require Polyfills

[![npm version](https://badge.fury.io/js/require-polyfills.svg)](https://badge.fury.io/js/require-polyfills)
[![DragsterJS gzip size](http://img.badgesize.io/https://raw.githubusercontent.com/fluidweb-co/require-polyfills/master/dist/require-polyfills.min.js?compression=gzip
)](https://raw.githubusercontent.com/fluidweb-co/require-polyfills/master/dist/require-polyfills.min.js)

Collection of polyfils that load automatically using [require-bundle-js](https://github.com/fluidweb-co/require-bundle-js) by detecting what is missing in the browser.

## Installation

Require Polyfills also need [Require Bundle JS](https://github.com/fluidweb-co/require-bundle-js) which needs to be loaded first. Download the scripts from __dist__ folder and include them in your HTML preferably inside the document `<head>` element.

```html
<script type="text/javascript" src="path/to/dist/require-bundle.min.js"></script>
<script type="text/javascript" src="path/to/dist/require-polyfills.min.js"></script>
```

The required polyfills for the current browser will be loaded automatically as Require Polyfills test if the browser supports the feature for each polyfill.

### NPM

Require Polyfills is also available on NPM:

```sh
$ npm install require-polyfills
```



## Supported Polyfills

- `bind`
- `classList`
- `closest`
- `CustomEvents`
- `matches`
- `matchMedia`
- `ObjectEntries`
- `Promise`
- `requestAnimationFrame`




## Contributing to Development

This isn't a large project by any means, but you are definitely welcome to contribute.

### Development environment

Clone the repo and run [npm](http://npmjs.org/) install:

```
$ cd path/to/require-polyfills
$ npm install
```

Run the build command:

```
$ gulp build
```

Build on file save:

```
$ gulp
$ gulp watch
```


## License

Licensed under MIT.
