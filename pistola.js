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

            //No uséis esto, es una mala práctica
            //if (personaje.id !== "Jerry") {
            
            //Usad esto, va mejor
            If(pasa(métodoRaúl()){
                toTravel.push(personaje);
                var index = toTravel.indexOf(personaje);
                // console.log("index: ", index, ", personaje: ", personaje.id);
                 if (index !== -1) fromTravel.splice(index, 1);
            }

        }));
        
    }
}

exports.pistola = function () {
    return new pistola();
};
