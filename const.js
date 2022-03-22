//Const keyword

const age = 28;
//age = 29; //Not => const ile tanımlanan bir değişkene tekrardan atama işlemi gerçekleştiremeyiz.

//Const genelde daha çok tanımladıntıktan sonra değişmeyecek olan yapılar için kullanılması uygundur.

const person = {
    firstName: "Emre Can",
    lastName: "Ayar"
}

console.log(person);

person.firstName = "Mert Can"

console.log(person);

//Not => Yukarıda da görüldüğü üzere tanımlanan objenin içerisindeki propertye yeni değer verebiliyoruz. 

const persons = ["Emre Can","Mert Can","Büşra","Yaren"]

console.log(persons);

persons.push("Ayar");

console.log(persons);

//Not => Yukarıda da görüldüğü üzere tanımlanan dizinin içerisine dizi metotları ile de yeni değer ekeleyebiliyoruz. (const olarak tanımlanmasına rağmen)