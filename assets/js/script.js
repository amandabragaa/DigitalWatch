 const horas = document.getElementById('horas');
 const minutos = document.getElementById('minutoutos');
 const segundos = document.getElementById('segundos');

 const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minutos = dateToday.getminutoutes();
    let segundos = dateToday.getSeconds();

    if (hora < 10) hora = '0' + hora;

    if (minutos < 10) minutos = '0' + minutos;
    
    if (segundos < 10) s = '0' + segundos;

    horas.textContent = hora;
    minutoutos.textContent = minutos;
    segundos.textContent = segundos;
 })
  
 