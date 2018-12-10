// var gun = require('./pistola');
function rick() {

    this.id = "C-137",
    this.ondas = "altas",
    this.habla = "Es Rick-dículo!"
    this.dispara = function (gun, uni, dim) {
        gun.addDimension(dim);
        uni[dim] = [];
    }

}

function singletonRick() {

    const prototipo = new rick();

    return {
        get: function () {
            return prototipo;
        }
    };
}

exports.singletonRick = function () {
    return singletonRick();
};