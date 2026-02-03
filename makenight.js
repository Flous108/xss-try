fetch('https://weathersync/setTime', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
    transition: 0,
    freeze: false
  })
});
