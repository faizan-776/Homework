function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller",];
make_great(magicians);
show_magicians(magicians);
