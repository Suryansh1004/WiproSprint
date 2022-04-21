// Write a JavScript Program that returns a duplicate-free Array
// 
function duplicatefree(arr){

    let unique_elements = [];
    arr.forEach((e) => {
        if (!unique_elements.includes(e)) {
            unique_elements.push(e);
        }
    }); 
return unique_elements;
}

const arr = [1, 2,3,4,5,2, 3, 4, 5, 4, 6, 2 ];

console.log(duplicatefree(arr));

