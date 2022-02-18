function iniciaJs() {
    const animado = document.querySelector('.animado');

    const cargarImagen = (entradas) => {
        entradas.forEach(entrada => {
            if(entrada.isIntersecting){
                entrada.target.style.opacity = 1;
                entrada.target.classList.remove('translate-x-20');
            }
        });
    }
    const observador = new IntersectionObserver(cargarImagen, {
        root:null,
        rootMargin:'130px 20px 130px 20px',
        threshold:1.0
    });
     observador.observe(animado);

}

// para barias animaciones se aplica un for

// function iniciaJs() {
//     const animado = document.querySelectorAll('.animado');

//     const cargarImagen = (entradas) => {
//         entradas.forEach(entrada => {
//             if(entrada.isIntersecting){
//                 entrada.target.style.opacity = 1;
//                 entrada.target.classList.remove('translate-x-20');
//             }
//         });
//     }
    
//     const observador = new IntersectionObserver(cargarImagen, {
//         root:null,
//         rootMargin:'80px 0px 80px 0px',
//         threshold:1.0
//     });

//     for (let i = 0; i < animado.length; i++) {
//         observador.observe(animado[i]);
//     }
// }