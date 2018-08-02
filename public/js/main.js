var socket = io.connect(window.location.hostname);

socket.on('value', function (data) {
    //$('#count').html(data.value);
    document.getElementById('count').innerHTML = data.value + " " + document.getElementById('count').innerHTML;
    
});

$('#start').click(function() {
    socket.emit('click:start');
});

$('#stop').click(function() {
    socket.emit('click:stop');
});

$('#reset').click(function() {
    socket.emit('click:reset');
});
