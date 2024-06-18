import Experience from './Main/Experience';
import Education from './Main/Education';
import { useState } from 'react';

function Title({ firstName = 'geeza', lastName = 'mama', position = 'freelancer' }) {
	const [fullName, setFullName] = useState(firstName + ' ' + lastName);
	const [pos, setPos] = useState(position);
	let splitName = fullName.split(' ');
	if (splitName.length > 2) {
		setFullName(splitName[0] + ' ' + splitName[1]);
	}
	const fN = splitName[0];
	const lN = splitName[1] || '';

	function handleSubtitle(e) {
		setPos(e.target.value);
	}

	function handleName(e) {
		setFullName(e.target.value.replace(/\s{2,}$/g, ' ').replace(/(^\s+|\s{2,})/g, ''));
	}

	function focusInput() {
		document.querySelector('.title-input').focus();
	}

	return (
		<div className='title-container'>
			<input
				className='title-input'
				value={fullName}
				onChange={handleName}
			/>
			<div className='title' onClick={focusInput}>
				<span>{fN.toUpperCase()} </span>
				<span className='blue'>{lN.toUpperCase()}</span>
			</div>
			<input
				className='subtitle'
				onChange={handleSubtitle}
				value={pos.toUpperCase()}
			/>
		</div>
	);
}

export default function Main() {
	return (
		<main className='main black'>
			<Title />
			<Experience />
			<Education />
		</main>
	);
}
