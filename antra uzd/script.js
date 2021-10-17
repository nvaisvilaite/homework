var persons = [];
persons[1] = 'Jon Snow';
persons[2] = 'Cersei Lannister';
persons[3] = 'Daenerys Targaryen';
persons[4] = 'Theon Greyjoy';
persons[5] = 'Tyrion Lannister';
persons[6] = 'Arya Stark';

var number = parseInt(prompt('Įveskite skaičių nuo 1 iki 6.'));

if(isNaN(number) || persons[number] == undefined) {
	alert('Ne skaičius arba masyvas neturi tokio įrašo.');
} else {
  alert('Rasta - peržiūrėti console');
	console.log(persons[number]);
}
