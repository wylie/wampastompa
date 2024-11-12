document.addEventListener('DOMContentLoaded', () => {
  const txt = document.getElementById('txt');
  const input = document.getElementById('mixName');

  input.addEventListener('input', () => {
    const nam = input.value;

    if (txt && nam) {
      txt.setAttribute('data-text', nam.replace(/[-_\s]/g, " "));
    }
  });

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