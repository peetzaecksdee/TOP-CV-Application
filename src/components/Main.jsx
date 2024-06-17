import Experience from './Main/Experience';
import Education from './Main/Education';
import Skills from './Main/Skills';
import { useState } from 'react';

Title.defaultProps = {
	firstName: 'geeza',
	lastName: 'mama',
	position: 'freelancer',
};

function Title({ firstName, lastName, position }) {
	const [pos, setPos] = useState(position);

	function handleSubtitle(e) {
		setPos(e.target.value);
	}

	return (
		<div className='title-container'>
			<div className='title'>
				<span>{firstName.toUpperCase()} </span>
				<span className='blue'>{lastName.toUpperCase()}</span>
			</div>
			<input className='subtitle' onChange={handleSubtitle} value={pos.toUpperCase()} />
		</div>
	);
}

export default function Main() {
	return (
		<main className='main black'>
			<Title />
			<Experience />
      <Education />
      <Skills />
		</main>
	);
}
