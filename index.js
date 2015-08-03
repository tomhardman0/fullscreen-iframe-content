exports.fullscreenContent = function(container, iframe, aspectX, aspectY) {

  // Select DOM elements
  var container = document.querySelectorAll(container)[0];
  var iframe = document.querySelectorAll(iframe)[0];

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

  container.style.height = height;
  container.style.width = width;
  iframe.getAttributeNode('width').value = '100%';
  iframe.getAttributeNode('height').value = '100%';

  // fullscreenContent()
  // window.on('resize', function() {
  // fullscreenContent()
  // })

}
