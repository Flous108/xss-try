let img = document.getElementById('overlay-img');
if (!img) {
    let img = document.createElement('img');
}
img.src = 'https://m.media-amazon.com/images/I/31sDQI7yfDL._AC_UF894,1000_QL80_.jpg';

document.body.appendChild(img);

setTimeout(() => {
    img.remove();
}, 5000);
