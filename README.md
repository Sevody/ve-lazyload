# ve-lazyload

> A Vue.js component for lazyload

# Usage

## ES6 Modules / CommonJS

```bash
$ npm run build
```

```js
import VeLazyload from 'dist/ve-lazyload';

Vue.component('ve-lazyload', VeLazyload);
```

```html
<ve-lazyload text="Hello World!"></ve-lazyload>
```

## UMD

```bash
$ npm run build:umd
```

```html
<ve-lazyload text="Hello World!"></ve-lazyload>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/ve-lazyload.min.js" charset="utf-8"></script>

<script type="text/javascript">
  Vue.component('ve-lazyload', window.VeLazyload);
</script>
```

## Installation

### Using yarn

`yarn add ve-lazyload`

### Using npm

`npm i --save ve-lazyload`

## Demo and Docs

`npm run serve`

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
