/* Write a Program to convert an array of objects to an object
	based on a given key */



	const convert = (arr, key ) => {
		// Write your code here
		// negative test case where arr is empty
	if(!Array.isArray(arr)){
		return null;
	}
	// storing the object based on key new new variable
	const key_obj = (arr,key) =>
	  arr.reduce((obj,item) => {
		obj[item[key]] = item
		return obj
	},{});
	return key_obj(arr,key);
	};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
