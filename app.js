const letras_1 = ['q','w','e','r','t','y','u']
const letras_2 = ['i','o','p','a','s','d','f']
const letras_3 = ['g','h','j','k','l','z','x']
const letras_4 = ['c','v','b','n','m']
const pizarraHTML = document.getElementById('pizarra')
const inputTexto = document.getElementById('input-texto')
const parrafo = document.getElementsByClassName('card-body')[0].children[0]
const parrafo2 = document.getElementsByClassName('card-body')[1].children[0]
const inputNumero = document.getElementById('input-numero')
const buttonNumero = document.getElementById('button-numero')
let parrafoVal = ''
let parrafoLetra = ''

function memoria() {
    const numero = Math.floor(Math.random() * 10 )
    parrafo.innerText = parrafoVal + numero
    parrafoVal = parrafo.innerText
    setTimeout(() => {
        parrafo.innerText = ''
    }, 3000);
}
buttonNumero.addEventListener('click',() =>{
    if(parrafoVal == inputNumero.value) {
        console.log('correcto')
        inputNumero.value = ''
        memoria()
    }else{
        console.log(parrafoVal,inputNumero.value,'incorrecto vuelve a participar')
    }
})
memoria()
function dibujar() {
    pizarraHTML.innerHTML = ''
    const letras = Math.floor(Math.random() * 4)
    if (letras == 0) {
        const numero = numeroAleatorio(letras_1)
        const letra = letras_1[numero]
        parrafo2.innerText = letra
        parrafoLetra = parrafo2.innerText
        pizarraHTML.appendChild(imprimirLetras(letras_1))
        setTimeout(() => {
            parrafo2.innerText = ''
        }, 3000);
    }
    if (letras == 1) {
        const numero = numeroAleatorio(letras_2)
        const letra = letras_2[numero]
        parrafo2.innerText = letra
        parrafoLetra = parrafo2.innerText
        pizarraHTML.appendChild(imprimirLetras(letras_2))
        setTimeout(() => {
            parrafo2.innerText = ''
        }, 3000);
    }
    if (letras == 2) {
        const numero = numeroAleatorio(letras_3)
        const letra = letras_3[numero]
        parrafo2.innerText = letra
        parrafoLetra = parrafo2.innerText
        pizarraHTML.appendChild(imprimirLetras(letras_3))
        setTimeout(() => {
            parrafo2.innerText = ''
        }, 3000);
    }
    if (letras == 3) {
        const numero = numeroAleatorio(letras_4)
        const letra = letras_4[numero]
        parrafo2.innerText = letra
        parrafoLetra = parrafo2.innerText
        pizarraHTML.appendChild(imprimirLetras(letras_4))
        setTimeout(() => {
            parrafo2.innerText = ''
        }, 3000);
    }
}

function imprimirLetras(letras) {
    const fragmento = document.createDocumentFragment()
    letras.forEach(letra => {
        const columna = document.createElement('div')
        columna.className = 'col bg-info m-3'
        columna.innerHTML = `<h1>${letra}</h1>`
        fragmento.appendChild(columna)
    });
    return fragmento
}
function numeroAleatorio(arreglo) {
    const numero = Math.floor(Math.random() * arreglo.length)
    return numero
}


pizarraHTML.addEventListener('click',(e) =>{
    if(e.target.className == 'col bg-info m-3'){
        inputTexto.value += e.target.children[0].innerText
    }else if(e.target.tagName == 'H1'){
        inputTexto.value += e.target.innerText
    }
},)
inputTexto.parentElement.children[1].addEventListener('click', () => {
    if(parrafoLetra == inputTexto.value){
        console.log('correcto')
        dibujar()
        inputTexto.value = ''
    }else{
        inputTexto.value = ''
        console.log('repitelo!!!!!!!!!!')
    }
})
dibujar()