const container = document.querySelector('.container')
const btn = document.querySelector('.boton1')

btn.addEventListener('click', () => { // Llama al prompt y ejecuta funciones para crear la cuadrilla
    eliminarCuadrilla();
    
    let gridValor = prompt('Ingresa tamaño de la cuadricula:(maximo: 100x100)');
    calcularCuadrilla(gridValor);
})

function crearGrid(cuboPequeño, numCubos) {
    
    for(let i = 0; i < numCubos; i++) {
        const div1 = document.createElement('div');
        div1.setAttribute('style', `width: ${cuboPequeño}px; height: ${cuboPequeño}px; border: 1px solid black`);
        container.appendChild(div1);

        div1.addEventListener('mouseover', () => { // Agrega atributo de background-color cada vez que el mouse pasa por encima de una cuadrado.
            div1.setAttribute('style', `width: ${cuboPequeño}px; height: ${cuboPequeño}px; border: 1px solid black; background-color: black`);
        })
    }     

}

function calcularCuadrilla(gridValor) { // Calcula el tamaño de los bloques de la cuadrilla segun el prompt recibido.

    if (gridValor > 100) {
        alert("Cuadricula demasiado grande");
    } else {
        let cuboPequeño = 530 / gridValor - 2;
        let numCubos = gridValor * gridValor;
        crearGrid(cuboPequeño, numCubos);
    }

}


function eliminarCuadrilla() { // Limpia la cuadrilla

    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }

}

