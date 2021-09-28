var words = ['Andie', 'Kelly', 'Silke', 'Sven'];
var result = words.filter(function (word) { return word.length <= 4; });
console.log(result);
words = ['Sven', 'Andie', 'Kelly', 'Nabil', 'Silke', 'Muhammed'];
console.log(words.sort(function (a, b) { return a.length - b.length; }));
console.log(words.reverse());
var numbers = [99, 1, 2, 4, 49];
console.log(numbers.sort());
