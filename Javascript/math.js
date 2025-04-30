console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416

const circuferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circuferencia,
    areaCirculo
});

function calcularCirculo(radio){
    const diametro= radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2)

    return{
        circuferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}


console.groupEnd('Circulo');