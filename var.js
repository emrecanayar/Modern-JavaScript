// Var
function myTestFunction() {

    //var ile değişken tanımlama => Back-end programlama dillerinden farklı olarak JavaScript içerisinde bulunan var ile tanımlanan değişkenler aynı isimle birden çok kez farklı değerler alabilir. Aşağıda bunun örneğini görebilirsiniz.
    var firstName = "emre can"
    console.log(firstName);
    var firstName = "ayar";
    console.log(firstName);
    var firstName = true;

    firstName = 28;

    console.log(firstName);

    if (firstName === 28) {
        var message = "Doğru Cevap"
    }
    //If gibi scope gerektiren bazı yapılarda var ile tanımlanan değişken if scope blokları içerisinde tanımlanmsa bile scope dışında da kullanılabilir.
    console.log(message);

    //NOT => Fonksiyon içerisinde tanımlanan değişkenler dışarıda global olarak kullanımazlar.
}

myTestFunction();
