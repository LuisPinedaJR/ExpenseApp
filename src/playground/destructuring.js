//
// Array destructuring
//


// const person = {
// 	// name: 'Luis',
// 	age: 30,
// 	location: {
// 		city: 'Tampa',
// 		temp: 92
// 	}
// };

// const {name: firstName = 'Joe Dirt', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature } = person.location;

// if(city && temperature){
// 	console.log(`it's ${temperature} in ${city}.`);
// }

const book = {
	title: 'ego is the enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const { name: publisherName = 'Self-published '} = book.publisher;

console.log(publisherName); // Penguin, Self-published


//
// Array destructuring
//


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'NEW YORK'] = address;

// console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName = 'Coffee (cold)', , mediumPrice = '$2.00' ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);