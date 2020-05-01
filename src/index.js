/* eslint-disable no-undef */
const qrData = document.getElementById('qr-input');
const qrButton = document.getElementById('qr-button');

const qrcode = new QRCode(document.getElementById('qrcode'), {
  text: '',
  width: 300,
  height: 300,
  colorDark: '#551A8B',
  colorLight: '#F1F1F1',
  correctLevel: QRCode.CorrectLevel.H,
});

qrButton.addEventListener('click', () => {
  qrcode.clear();
  qrcode.makeCode(qrData.value);
});
