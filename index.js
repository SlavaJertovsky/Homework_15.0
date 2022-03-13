function toJadenCase(phrase) {

   return phrase.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');

}

console.log(toJadenCase('How can mirrors be real if our eyes aren"t real')); // How Can Mirrors Be Real If Our Eyes Aren"t Real