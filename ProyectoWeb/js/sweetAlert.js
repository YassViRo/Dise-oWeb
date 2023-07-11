function modal_01(event) {
    event.preventDefault(); // Evitar la recarga de página

    var username = document.getElementById('login__username').value;
    var password = document.getElementById('login__password').value;

    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Inicio finalizada',
      text: "Se ha iniciado sesión con éxito!",
      showConfirmButton: true,
      confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="index.html">Aceptar</a>',
      confirmButtonColor: '#3085d6',
      allowOutsideClick: false,
      timer: 5000,
      timerProgressBar: true,
      willClose: () => {
        window.location.href = "index.html";
      }
    });
  }


function modal_02() {
    event.preventDefault();
    Swal.fire({
        icon: 'success',
        title: 'Inicio finalizada',
        text: "Se ha iniciado sesión con éxito!",
        showConfirmButton: true,
        confirmButtonText: '<a style="color: white; text-decoration: none;" class="inicio" href="index.html">Aceptar</a>',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false,
        timer: 5000,
        timerProgressBar: true,
        willClose: () => {
            window.location.href = "index.html";
        }
    });    
}


