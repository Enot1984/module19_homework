function pet (cat, name) {
    return (name in cat);
};
const myCat = {
    name: 'Mr.Midnight', 
    color: 'black',
    age: 5,
    weight: 4.5
};
console.log(pet(myCat, 'surname'));
console.log(pet(myCat, 'name'));