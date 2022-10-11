const container = document.querySelector('.container')
const btn = document.querySelector('.boton1')

function calcularGrid() {
    let grid = 18 
}

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

function calcularCuadrilla(){
    btn.addEventListener('click', () => {
        let gridValor = prompt('Ingresa tamaño de la cuadricula:(maximo: 100x100)');
        if (gridValor > 100) {
            alert("Cuadricula demasiado grande");
        } else {
            let cuboPequeño = 530 / gridValor - 2;
            let numCubos = gridValor * gridValor;
            crearGrid(cuboPequeño, numCubos);
        }
    })
}

calcularCuadrilla()