let words = [ 'Andie', 'Kelly', 'Silke' ,'Sven']
const result = words.filter(word => word.length <= 4)
console.log(result);
words = [ 'Sven', 'Andie', 'Kelly', 'Nabil', 'Silke', 'Muhammed' ]

console.log(words.sort(function(a, b){return a.length - b.length;}))
console.log(words.reverse());
let numbers = [99, 1, 2, 4, 49 ]
console.log(numbers.sort())