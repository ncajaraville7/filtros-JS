// VARIABLES

const resultado = document.getElementById('resultado');

const marca = document.getElementById('marca');
const years = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 12;

const datosBusqueda = {
    marca: '',
    year: '',
    PrecioMax: '',
    PrecioMin: '',
    Puertas: '',
    Transmision: '',
    Color: ''
}

//EVENTOS

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelectYears();
});

marca.addEventListener('change', ()=> {
    datosBusqueda.marca = marca.value

    filtrarAuto();
});

years.addEventListener('change', ()=> {
    datosBusqueda.year = parseInt(years.value)

    filtrarAuto();
});

minimo.addEventListener('change', ()=> {
    datosBusqueda.PrecioMin = minimo.value

    filtrarAuto();
});

maximo.addEventListener('change', ()=> {
    datosBusqueda.PrecioMax = maximo.value

    filtrarAuto();
});

puertas.addEventListener('change', ()=> {
    datosBusqueda.Puertas = parseInt(puertas.value)

    filtrarAuto();
});

transmision.addEventListener('change', ()=> {
    datosBusqueda.Transmision = transmision.value

    filtrarAuto();
});

color.addEventListener('change', ()=> {
    datosBusqueda.Color = color.value
    console.log(datosBusqueda)

    filtrarAuto();
});

//FUNCIONES

function mostrarAutos(autos) {
    limpiarHTML();

   autos.forEach( auto => {
    const autosHTML = document.createElement('p');
    const {marca, modelo, year, puertas, transmision, precio, color} = auto;
    autosHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Color: ${color} - Precio: $${precio}`
    resultado.appendChild(autosHTML);
   });
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelectYears() {
    for(let i = maxYear; i > minYear; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        years.appendChild(opcion);
    }
}

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarPrecioMinimo ).filter( filtrarPrecioMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor)

    // console.log(resultado)
    mostrarAutos(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        alertaResultados();
    }
}

function alertaResultados() {
    const alerta = document.createElement('p')
    alerta.textContent = 'No se encontraron resultados';
    resultado.appendChild(alerta);
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } 
    return auto;
}

function filtrarPrecioMinimo(auto) {
    if(datosBusqueda.PrecioMin) {
        return auto.precio >= datosBusqueda.PrecioMin;
    } 
    return auto;
}

function filtrarPrecioMaximo(auto) {
    if(datosBusqueda.PrecioMax) {
        return auto.precio <= datosBusqueda.PrecioMax;
    } 
    return auto;
}

function filtrarPuertas(auto) {
    if(datosBusqueda.Puertas) {
        return auto.puertas === datosBusqueda.Puertas;
    } 
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.Transmision) {
        return auto.transmision === datosBusqueda.Transmision;
    } 
    return auto;
}

function filtrarColor(auto) {
    if(datosBusqueda.Color) {
        return auto.color === datosBusqueda.Color;
    } 
    return auto;
}