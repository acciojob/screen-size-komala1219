//your JS code here. If required.
// window.addEventListener('resize', function() {
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var sizeInfo = document.getElementById('sizeInfo');
//   sizeInfo.innerHTML = 'Width: ' + width + 'px, Height: ' + height + 'px';
// });
 const sizeInfo = document.querySelector("#sizeInfo h1");

      function updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        sizeInfo.textContent = `Width: ${width}px, Height: ${height}px`;
      }

      window.addEventListener("resize", updateSize);
      updateSize();
