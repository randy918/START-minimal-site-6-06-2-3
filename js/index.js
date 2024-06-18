//?  ████████████████████████████████████  STRICT MODE

'use strict'

//?  ████████████████████████████████████  IMPORTS

//^  ████████████████████████████████████  GLOBAL SCOPE

//^  ████████████████████████████████████  GLOBAL SCOPE VARIABLES


//_  ████████████████████████████████████  VARIABLE EXPRESSIONS


//_  ████████████████████████████████████  FUNCTION FACTORIES


class Person {

    constructor(first, last) {

this.first = first;
this.last = last;
}
fullName() {

    return `${this.first} ${this.last}`;
}

}


//>  ████████████████████████████████████  ACTUAL PROGRAM

const aGuy = new Person('jake', 'thomas');

c(aGuy.fullName());