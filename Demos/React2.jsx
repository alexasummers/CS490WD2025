function BasicList() {
	return (
		<ul>
			<li>Spongebob: Sponge</li>
			<li>Patrick: Starfish</li>
			<li>Squidward: Squid</li>
			<li>Mrs. Squarepants: Sponge</li>
			<li>Mrs. Star: Starfish</li>
		</ul>
	);
	
}

function BasicConst() {
const characters = [
	'Spongebob: Sponge',
	'Patrick: Starfish',
	'Squidward: Squid',
	'Mrs. Squarepants: Sponge',
	'Mrs. Star: Starfish',
];

	const listItems = characters.map(theCharacter =>
		<li>{theCharacter}</li>);
		
		return (
		<ul>{listItems}</ul>
		);
}

function UsingAFilter() {
const characters = [{
	id: 0,
	name: 'Spongebob',
	species: 'Sponge',
	},{
	id: 1,
	name: 'Patrick',
	species: 'Starfish',
	},{
	id: 2,
	name: 'Squidward',
	species: 'Squid',
	},{
	id: 3,
	name: 'Mrs. Squarepants',
	species: 'Sponge',
	},{
	id: 4,
	name: 'Mrs. Star',
	species: 'Starfish',
	}];

const starfish = characters.filter(filteredCharacter =>
	filteredCharacter.species === 'Starfish'
	); 
	
const listItems = starfish.map(filteredCharacter =>
	<li key={filteredCharacter.id}>
		<b>{filteredCharacter.name}</b>
		{' '} is known to be a {' '}
		{filteredCharacter.species}
	</li>);
	
return <ul>{listItems}</ul>
}
	
export default function App() {
	
	return (
	<>
	<BasicConst />
	<BasicList />
	<UsingAFilter />
	</>
	);
}
