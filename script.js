document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('mixName');
  const canvas = document.getElementById('textCanvas');
  const ctx = canvas.getContext('2d');

  input.addEventListener('input', () => {
    const nam = input.value;
    drawText(nam.replace(/[-_\s]/g, " "));
  });

  function drawText(text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.font = 'bold 5.5rem "Open Sans", Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.translate(canvas.width / 2, 75); // Adjust the y-coordinate to position the text correctly
    ctx.rotate(-20 * Math.PI / 180);
    ctx.transform(1, 0, -0.36, 1, 0, 0); // Skew transformation
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#d33aea');
    gradient.addColorStop(1, '#e62b43');
    ctx.fillStyle = gradient;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  console.log('html2canvas in script.js:', typeof html2canvas);

  if (typeof html2canvas !== 'undefined') {
    document.getElementById('downloadBtn').addEventListener('click', function() {
      const imgElement = document.querySelector('.img');
      html2canvas(imgElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'wampastompa.png';
        link.click();
      });
    });
  } else {
    console.error('html2canvas is not defined');
  }
});