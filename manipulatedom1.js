const img = document.createElement('img');
img.src = 'https://m.media-amazon.com/images/I/31sDQI7yfDL._AC_UF894,1000_QL80_.jpg';
img.style.width = '1000px';
img.style.height = 'auto';

document.body.appendChild(img);

setTimeout(() => {
    img.remove();
}, 5000);
