exports.fullscreenContent = function(container, iframe, aspectX, aspectY) {

  // Select DOM elements
  var container = document.querySelectorAll(container)[0];
  var iframe = document.querySelectorAll(iframe)[0];

  container.parentNode.style.overflow = 'hidden';
  container.style.position = 'absolute';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%,-50%)';


  var iframeResize = function(container, iframe, aspectX, aspectY) {

    // Measure dimensions and calculate correct size
    var width = window.innerWidth
    var height = window.innerHeight
    var wide = aspectX / aspectY;
    var aspect = width / height;
    var multiRatio = wide / aspect


    if (multiRatio >= 1) {
      width *= multiRatio
      height *= multiRatio
    } else {
      width /= multiRatio
      height /= multiRatio
      }

    // Style container, parent, and iFrame
    container.style.height = height.toString() + 'px';
    container.style.width = width.toString() + 'px';
    iframe.getAttributeNode('width').value = '100%';
    iframe.getAttributeNode('height').value = '100%';

  }

  window.bind('load resize', function() {

    iframeResize()

  })

}
