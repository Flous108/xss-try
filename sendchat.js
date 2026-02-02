$.post('http://bank/transfer', JSON.stringify({
    to: $('#idval').val(),
    amountt: $('#transferval').val()
}));
