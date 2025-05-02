const inputPrice = document.querySelector('#price')
const inputDescuento =  document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const P_resultado = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento(){
    const precio = Number(inputPrice.value);
    const descuento = Number(inputDescuento.value);
    
    if (!precio || !descuento){
        P_resultado.innerText ='Favor de llenar el formulario';
        return;
    }
    
    if (descuento > 100){
        P_resultado.innerText ='Favor de colocar un numero de descuento menor a 100';
        return;
    }

    const newprice = (precio *(100 - descuento)) /100;

    P_resultado.innerText = 'El nuevo precio es $' + newprice

}