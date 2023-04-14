//your JS code here. If required.
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var sizeInfo = document.getElementById('sizeInfo');
  sizeInfo.innerHTML = 'Width: ' + width + 'px, Height: ' + height + 'px';
});

