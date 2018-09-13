const person = {
	// name: 'Luis',
	age: 30,
	location: {
		city: 'Tampa',
		temp: 92
	}
};

const {name: firstName = 'Joe Dirt', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature } = person.location;

if(city && temperature){
	console.log(`it's ${temperature} in ${city}.`);
}