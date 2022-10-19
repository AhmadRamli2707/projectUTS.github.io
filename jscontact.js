
document.getElementById('form_contact').addEventListener('submit', function (e) {
    e.preventDefault()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'pesan sudah terkirim!',
        showConfirmButton: false,
        timer: 1500
    })
    document.getElementById('input_nama').value = ''
    document.getElementById('input_text').value = ''
    document.getElementById('input_textarea').value = ''
})

