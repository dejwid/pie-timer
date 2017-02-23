# Simple pie timer

## Example
html:
```html
<svg width="50" id="pieOuter" height="50" viewbox="0 0 250 250">
  <path class="border" fill="#fff" transform="translate(125, 125)" />
  <path class="loader" fill="#eee" transform="translate(125, 125) scale(.84)"/>
</svg>
```
js:
```js
// require library
var PieTimer = require('pie-timer');

// create a new timer
var myTimer = new PieTimer(document.getElementById('pieOuter'));

// draw desired alfa
myTimer.draw(120);
```
