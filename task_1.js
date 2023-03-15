const myCat = function(cat) {
  cat = {
    name: 'Mr.Midnight',
    color: 'black',
    age: 5,
    weight: 4.5
  }
for (let key in cat) {
  console.log(key + ': ' + cat[key]);
  }
}
myCat();