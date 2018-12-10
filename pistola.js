function pistola() {

    this.historial = [];
    this.addDimension = function (dim) {
        this.historial.push(dim);
    }
}

exports.pistola = function () {
    return new pistola();
};