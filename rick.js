function rick() {

    this.id = "C-137",
    this.ondas = "altas",
    this.habla = "Es Rick-dículo!"

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