# @verndale/object-fit
[![npm version](https://badge.fury.io/js/%40verndale%2Fobject-fit.svg)](https://badge.fury.io/js/%40verndale%2Fobject-fit)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@verndale/object-fit)
[![GitHub license](https://img.shields.io/github/license/verndale/object-fit)](https://github.com/verndale/object-fit/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/@verndale/object-fit)

Pollyfill for `object-fit` and `object-position`.

## Settings

| Attribute | Supported options | Default |
|---|---|---|
| `data-object-fit` | [`cover` \| `contain`] | `cover` |
| `data-object-position` | [ `top` \| `center` \| `bottom` ]<br /> [ `percentage` \| `length` (px, em, rem, etc) \| `left` \| `center` \| `right`  ]<br />`inherit`  | `center` |

## Usage

### Installing using npm

```sh
npm i @verndale/object-fit
```

And then simply import the pollyfill.

### JS
```javascript
import '@verndale/object-fit';
```

### HTML

Set `data-object-fit` and `data-object-position`.

```html
<img
  src="example.jpg"
  data-object-fit="cover"
  data-object-position="center"
/>
```

### CSS

Customize your properties for browsers that do support these properties.

```css
img {
  object-fit: cover;
  object-positon: center;
}
```

### Demo

You can see the demo here: https://833jx.csb.app/