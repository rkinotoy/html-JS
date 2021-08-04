// Contrast.js (c) 2013 matsuda
function start() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var image = new Image();
  image.onload = function() {
    context.drawImage(image, 0, 0);
    var imageData = context.getImageData(0, 0, image.width, image.height);
    // 画像全体のコントラストを変更する
    var length = imageData.data.length;
    var pixel = imageData.data;
    var k = 2;

    for (var i = 0; i < length; i += 4) {
      pixel[i + 0] = (pixel[i + 0] - 128) * k + 128; // Rを変える
      pixel[i + 1] = (pixel[i + 1] - 128) * k + 128; // Gを変える
      pixel[i + 2] = (pixel[i + 2] - 128) * k + 128; // Bを変える
    }
    context.putImageData(imageData, 0, 0);
  };
  image.src = 'sky.png';
}
