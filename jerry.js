function jerry() {

    this.id = "Jerry",
    this.monedas = ["R2-D2","R2-D2","R2-D2","R2-D2"],

    function speak() {
        return "Tengo una colección de monedas antiguas raras!"
    }
}


function singletonJerry() {

    const prototipo = new jerry();

    return {
        get: function () {
            return prototipo;
        }
    };
}

exports.singletonJerry = function () {
    return singletonJerry();
};