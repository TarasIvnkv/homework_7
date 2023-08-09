sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winterSports = sports.slice(0,5);
summerSports = sports.slice(5);
fruits = [winterSports[2], summerSports[2], summerSports[3]];

winterSports.splice(2,1);
summerSports.splice(2,2);

console.log(`***Winter Sports***`);
for (i = 0; i < winterSports.length; i++) {
	console.log(`${winterSports[i][0]} : ${winterSports[i][1]}`);
}

console.log(`\n***Summer Sports***`);
for (i = 0; i < summerSports.length; i++) {
	console.log(`${summerSports[i][0]} : ${summerSports[i][1]}`);
}

console.log(`\n***Fruits***`);
for (i = 0; i < fruits.length; i++) {
	console.log(`${fruits[i][0]} : ${fruits[i][1]}`);
}


