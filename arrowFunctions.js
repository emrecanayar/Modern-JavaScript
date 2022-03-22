//Arrow Functions

//Eski yöntem function tanımlama

function LogMyError(errorMessage) {
    console.error(errorMessage);
}

LogMyError("Bir hata oluştu");

//Arrow Function ile yazımı

const logMyError = errorMessage => console.log(errorMessage);
logMyError("Hata");

const sumUp = (num1, num2) => num1 + num2;
console.log(sumUp(5, 7));


const person = {
    firstName: "Emre Can",
    lastName: "Ayar",
    sayMyName: function () {
        //Normal fonksiyonlardaki this kullanımı bir üstündeki yapıyı hedef alır yani buradaki konumu itibariyle person nesnesini betimler.
        console.log(this.firstName + this.lastName)
    },
    sayMyNameArrow: () => {
        //Arrow functiondaki this kullanımı ise en geniş yelpazeyi betimler yani en tepede bir class varsa onu yoksa window nesnesini betimler.
        console.log(this.firstName + this.lastName)
    }
}

person.sayMyName();
person.sayMyNameArrow();