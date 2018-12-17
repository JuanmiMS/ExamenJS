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
                var index = fromTravel.indexOf(personaje);
                if (index !== -1) fromTravel.splice(index, 1);
            }

        }));
        
    }
}

exports.pistola = function () {
    return new pistola();
};
