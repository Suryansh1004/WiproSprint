// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const list_fruit = [
    {name: 'banana', color: 'yellow', pricePerKg: "120"} ,
    {name: 'apple', color: 'red', pricePerKg: "200"} , 
    {name: 'kiwi', color: 'brown', pricePerKg: "170"} 
]

const map_list = new Map();

const newMap = () => {
    for(let a = 0;a<list_fruit.length;a+1){
        map_list.set(list_fruit[i].name, list_fruit[i]);
    }

}

newMap();

console.log(map_list.get('kiwi'));
console.log(map_list.get('banana'));
console.log(map_list.get('apple'));

