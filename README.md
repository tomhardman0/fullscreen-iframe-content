# [Fullscreen iFrame Content](http://fullscreen-iframe.xyz/)

Ensures the full content of an iframe, rather than the iframe itself, fills the screen. Great for background video using YouTube, Vimeo, etc.

## Implement

`npm install fullscreen-iframe-content`

Prepare your html:

```jade
.iframe-container
  iframe.iframe(src="https://www.youtube.com/embed/3ge75lXiaMg?autoplay=1&loop=1&playlist=3ge75lXiaMg&showinfo=0" frameborder="0" allowfullscreen width height)
```

Depending on where you're using the iframe, you'll want `overflow:hidden` on the overall container (possibly `body` / `html`). All other styles are applied from the module.

Once imported, call the module:

```javascript
import iframe from 'fullscreen-iframe-content'

export default (app) => {

  iframe.fullscreenContent('.iframe-container', '.iframe', 16, 9);

}
```

The function takes 4 arguments: `(iframe container class, iframe class, aspect ratio x, aspect ratio y)`
