const container = document.querySelector('.container')

function calcularGrid() {
    let grid = 18 
}

function crearGrid() {
    for(let i = 0; i < 900; i++) {
        const div1 = document.createElement('div');
        div1.setAttribute('style', 'width: 16px; height: 16px; border: 1px solid black');
        container.appendChild(div1);

        dibujar(div1);
    }
}
crearGrid()

function dibujar(div1) { // Agrega atributo de background-color cada vez que el mouse pasa por encima de una cuadrado.
    div1.addEventListener('mouseover', () => {
        div1.setAttribute('style', 'width: 16px; height: 16px; border: 1px solid black; background-color: black')
    })
}



    