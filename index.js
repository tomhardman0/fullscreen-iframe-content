module.exports = function fullscreenContent(container, iframe, aspectX, aspectY) {

  // Select DOM elements
  const container = document.querySelectorAll(container)[0];
  const iframe = document.querySelectorAll(iframe)[0];

  // Generic styles for container
  container.style.pointerEvents = 'none';
  container.style.position = 'absolute';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%,-50%)';

  let iframeResize = function() {

    // Measure dimensions and calculate correct size
    let width = window.innerWidth;
    let height = window.innerHeight;
    let wide = aspectX / aspectY;
    let aspect = width / height;
    let multiRatio = wide / aspect;


    if (multiRatio >= 1) {
      width *= multiRatio;
      height *= multiRatio;
    } else {
      width /= multiRatio;
      height /= multiRatio;
    }

    // Style container, parent, and iframe
    container.style.height = height.toString() + 'px';
    container.style.width = width.toString() + 'px';
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');

  }

  // call iframe resize on window resize
  if(window.attachEvent) {
    window.attachEvent('onresize', function() {
      iframeResize();
    });
  }
  else if(window.addEventListener) {
    window.addEventListener('resize', function() {
      iframeResize();
    }, true);
  }

  // Call on page load
  iframeResize();

}
