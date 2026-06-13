emailjs.init("TBEmv6j-2wdm83SW-");

document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_sw4gfhc", "template_uverlk5", {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        vehicle: document.getElementById('vehicle').value,
        service: document.getElementById('service').value,
        notes: document.getElementById('notes').value
    })
    .then(function() {
        document.getElementById('quoteForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    })
    .catch(function(error) {
        console.log(error);
        alert("Failed to send request.");
    });
});
