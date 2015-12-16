var olga = {
    name: 'Olga',
    isAProgrammer: true
}

var jsonOlga = JSON.stringify(olga);

var newOlga = JSON.parse(jsonOlga);

console.log(jsonOlga);
console.log(newOlga);