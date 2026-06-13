emailjs.init("TBEmv6j-2wdm83SW-");

document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("218Detailing", "template_uverlk5", {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        vehicle: document.getElementById('vehicle').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    })
    .then(function() {
        document.getElementById('quoteForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    })
    .catch(function(error) {
        alert("Failed to send request. Please try again.");
        console.log(error);
    });
});
