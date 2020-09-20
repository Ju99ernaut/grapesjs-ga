# Grapesjs Google Analytics

Easily link to your google analytics or google tag manager

[DEMO](https://codepen.io/ju99ernaut/pen/BaKGadb)

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-ga"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-ga'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-ga`
* Components
    * `gtm`
    * `ga`
* Blocks
    * `gtm-block`
    * `ga-block`



## Options

| Option | Description | Default |
|-|-|-
| `gtmId` | value from google tag manager dashboard | ` ` |
| `gtmLabel` | label for google tag manager block | `Tag Manager` |
| `gtmCategory` | category for google tag manager block | `Google` |
| `gtmBlock` | options to extend google tag manager block | `{}` |
| `gtmComponent` | options to extend google tag manager component model | `{}` |
| `gaId` | value from google analytics dashboard | ` ` |
| `gaLabel` | label for google analytics block | `Analytics` |
| `gaCategory` | category for google analytics block | `Google` |
| `gaBlock` | options to extend google analytics block | `{}` |
| `gaComponent` | options to extend google analytics component model | `{}` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-ga`
* NPM
  * `npm i grapesjs-ga`
* GIT
  * `git clone https://github.com/ju99ernaut/grapesjs-ga.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-ga.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-ga'],
      pluginsOpts: {
        'grapesjs-ga': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-ga';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/ju99ernaut/grapesjs-ga.git
$ cd grapesjs-ga
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
