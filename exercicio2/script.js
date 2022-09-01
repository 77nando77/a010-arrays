// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:
const aNumero = [22, 15, 40, 75, 35]
const aString = ["Lasanha", "Churrasco", "Pizza", "Pastel"]
const aMisto = [72, "Olá", 6 < 3 || 5 == 5]
// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(aNumero.length)
console.log(aString.length)
console.log(aMisto.length)
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(aNumero[0])
console.log(aString[1],)
console.log(aMisto[2])
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana 
// falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
aNumero.push(5)
console.log(aNumero)
console.log(aNumero.includes(5))
aMisto.push(5 > 2)
console.log(aMisto.includes(false))