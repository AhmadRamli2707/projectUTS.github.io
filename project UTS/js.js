//untuk mengecek data login
let username = document.getElementById("username")
let password = document.getElementById("pass")
let error = document.querySelector(".ini-salah");
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault()
    if (username.value == 'Ahmad' && password.value == '12345') {
        Swal.fire({
            title: 'Selamat Datang',
            text: 'anda login sebagai Ahmad',
            icon: 'success',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: 'oke',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.href = "Dashboard.html"
            }
        })
        // window.location.href = "Dashboard.html"
    } else {
        error.style.display = "inline-block";
    }
})
// fungsi logout 
function logout() {
    // let confirmValue = confirm('Apakah anda yakin?')
    // console.log(confirmValue);
    // if (confirmValue == true) {
    //     window.location.href = "home.html"
    // }
    Swal.fire({
        position: 'top-end',
        title: 'Apakah yakin ingin Log out?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'iya',
        denyButtonText: `tidak`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "index.html"
        } else if (result.isDenied) {
        }
    })
}
//fungsi login untuk halaman home
function login() {
    Swal.fire({
        position: 'top-end',
        title: 'Apakah ingin Log in?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'iya',
        denyButtonText: `tidak`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "login.html"
        } else if (result.isDenied) {

        }
    })
}
