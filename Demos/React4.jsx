import { useState } from 'react';

const characterList = [{
	name: 'Spongebob',
	house: 'Pineapple',
	species: 'Sponge'
	}, {
	name: 'Squidward',
	houe: 'Face??',
	species: 'Squid'
	}, {
	name: 'Patrick',
	house: 'Rock',
	species: 'Starfish'
	}];
	
function ThisFunctionWillNotWork() {
	var index = 0;
	
	function handleClick() {
		index = index + 1;
	}
	
	var characters = characterList[index];
	
	return (
		<>
			<h1>----------------------------------</h1>
			<button onClick={handleClick}>
			Next
			</button>
			<h2>
				<i>{characters.name} </i> 
				lives in a {characters.house}
			</h2>
			<h3>
				({index + 1} of {characterList.length})
			</h3>
			<p>
				{characters.name} is a {characters.species}.
			</p>
		</>
	);
}

function ThisFunctionWillWork() {
	const [index, setIndex] = useState(0);
	
	function handleClick() {
		  setIndex((index + 1) % characterList.length);
	}
	
	var characters = characterList[index];
	
	return (
		<>
			<h1>----------------------------------</h1>
			<button onClick={handleClick}>
			Next
			</button>
			<h2>
				<i>{characters.name} </i> 
				lives in a {characters.house}
			</h2>
			<h3>
				({index + 1} of {characterList.length})
			</h3>
			<p>
				{characters.name} is a {characters.species}.
			</p>
		</>
	);
}

function MultipleStates() {
	const [index, setIndex] = useState(0);
	const [speciesToClick, setSpecies] = useState(false);
	
	function handleNextClick() {
		  setIndex((index + 1) % characterList.length);
	}
	
	function handleSpeciesClick() {
		setSpecies(!speciesToClick);
	}
	
	var characters = characterList[index];
	
	return (
		<>
			<h1>----------------------------------</h1>
			<button onClick={handleNextClick}>
			Next
			</button>
			<h2>
				<i>{characters.name} </i> 
				lives in a {characters.house}
			</h2>
			<h3>
				({index + 1} of {characterList.length})
			</h3>
			<button onClick={handleSpeciesClick}>
				{speciesToClick ? 'Hide' : 'Show'} species
			</button>
			{speciesToClick && <p>{characters.name} is a {characters.species}.</p>}
		</>
	);
}

export default function App() {
	return(
	<>
		<ThisFunctionWillNotWork />
		<ThisFunctionWillWork />
		<MultipleStates />
		<MultipleStates />
	</>
	);
}
