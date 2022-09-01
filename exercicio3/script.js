// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso,
//crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const aNumero = [22, 15, 40, 75, 35]
const aNumeroCopia = aNumero.slice()
const aString = ["Lasanha", "Churrasco", "Pizza", "Pastel"]
const aStringCopia = aString.slice()
const aMisto = [72, "Olá", 6 < 3 || 5 == 5]
const aMistoCopia = aMisto.slice()
// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
aNumero.push(45)
console.log(aNumero)
console.log(aNumeroCopia)
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
aString.pop()
console.log(aString)
console.log(aStringCopia)
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
aMisto.splice(1,1)
console.log(aMisto)
console.log(aMistoCopia)