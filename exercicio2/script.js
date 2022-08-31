const number = prompt('Digite um número de 1 a 10')

const fator = [0,1,2,3,4,5,6,7,8,9,10]

for(num in fator){
    const multiplicacao = num*number
    console.log(`${number} x ${num} = ${multiplicacao}`)
}

// // no for in a variavel i se refere ao índice. Então nesse caso,
// não importa qual número eu coloque dentro da Array,
// pois o que será mutltiplicado é o indice