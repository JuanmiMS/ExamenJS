var importaRick = require('./rick');
var importaMorty = require('./morty');
var contador = 137;

function clon() {

    this.id = getId(),
    this.ondas = "altas",
    this.habla = "Es Rick-dículo!"
    this.createClon = function(clon){
        if(clon === 'rick'){
            let clonRick = importaRick.singletonRick().get();
            clonRick.id = getId();
            return clonRick;
        }
        else if(clon === 'morty'){
            let clonMorty = importaMorty.singletonMorty().get();
            clonMorty.partner = importaRick.singletonRick().get();
            return clonMorty;
        }

    }
    function getId() {
        let num = contador+1;
        contador++;
        return "C-"+num;
    }
}

exports.clon = function () {
    return new clon();
};