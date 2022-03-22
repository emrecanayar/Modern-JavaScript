//Ternary Operator

//Kullanacağımız if-else bloklarını tek bir satırda kullanmamızı sağlar. Kodların okunabilirliğini oldukça artırır.

let age = 25;
let canHaveIt = false;
let canHaveItText = "";

//Karmaşık Yöntem.
if (age >= 18) {
    canHaveIt = true;
}
else {
    canHaveIt = false;
}

console.log(`Kullanıcı ehliyet alabir mi? ${canHaveIt}`)


//Ternary ile yazım şekli

canHaveIt = age >= 18 ? true : false;
console.log(`Kullanıcı ehliyet alabir mi? ${canHaveIt}`)

//Ternary ifade de önce şart yazılır eğer şart doğru ise ? kısmından sonraki gelen değer çalışır eğer şart yanlış olarak sonuçlanırsa : kısmından sonraki değer çalışır.

canHaveItText = canHaveIt ? "Ehliyet alabilir" : "Ehliyet Alamaz"
console.log(`${canHaveItText}`);