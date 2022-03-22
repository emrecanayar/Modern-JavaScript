//Template Literal

//Template Literal bize daha okunaklı ve daha anlaşılır stringler oluşturmaya yarar. Aynı zamanda stringlerimizi istediğimiz formata getirme konusunda oldukça faydalı olur.

const firstName = "Emre Can";
const lastName = "Ayar";

//Eski yöntem
console.log("Hoş Geldiniz" + " " + firstName + " " + lastName);

//Template Literal kullanarak Alt+Ü veya AltGr+Shift+,  (``)
console.log(`Hoş Geldiniz ${firstName} ${lastName}`);

//Veya bir fonksiyon oluşturulup onuda template literal olarak kullanabiliriz.

function concatenateString(firstString, lastString) {
    return `${firstString} ${lastString}`
}

console.log(`Hoş Geldiniz ${concatenateString(firstName, lastName)}`);