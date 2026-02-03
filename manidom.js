let img = document.getElementById('crackimg');
if (!img) {
    img = document.createElement('img');
    img.id = 'crackimg';
}
img.src = 'https://m.media-amazon.com/images/I/31sDQI7yfDL._AC_UF894,1000_QL80_.jpg';

img.style.position = 'fixed';      // fixiert am Bildschirm
img.style.top = '50%';             // vertikal zentrieren
img.style.left = '50%';            // horizontal zentrieren
img.style.transform = 'translate(-50%, -50%)'; // echte Mitte
img.style.zIndex = '9999';         // über alles andere
img.style.width = '200px';         // optional
img.style.height = 'auto';         // optional

document.body.appendChild(img);

setTimeout(() => {
    img.remove();
}, 5000);
