var importaRick = require('./rick');

function morty() {

    this.id = "earthMorty",
    this.ondas = "bajas",
    this.habla = "Oohh man!",
    this.partner = importaRick.singletonRick().get();
}

morty.prototype.partner = function () {
    return this.partner
};

morty.prototype.habla = function () {
    return this.habla
};

function singletonMorty() {

    const prototipo = new morty();

    return {
        get: function () {
            return prototipo;
        }
    };
}





exports.singletonMorty = function () {
    return singletonMorty();
};