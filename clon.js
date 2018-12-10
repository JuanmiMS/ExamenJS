var contador = 137;

function clon() {

    this.id = getId(),
    this.ondas = "altas",
    this.habla = "Es Rick-dículo!"

    function getId() {
        let num = contador+1;
        contador++;
        return "C-"+num;
    }
}

exports.clon = function () {
    return new clon();
};