function pistola() {

    this.historial = [];
    this.addDimension = function (dim) {
        this.historial.push(dim);
    },
        this.scan = function () {
            console.log(this.historial)
        },
    this.cruzarDimension = function (toTravel, fromTravel) {

        fromTravel.map((personaje => {
            if (personaje.id !== "Jerry") {
                toTravel.push(personaje);
                fromTravel.shift()
            }
        }));

        this.addDimension(toTravel);
        
    }
}

exports.pistola = function () {
    return new pistola();
};