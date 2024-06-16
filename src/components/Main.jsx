import Experience from './Main/Experience';
import Education from './Main/Education';
import Skills from './Main/Skills';

Title.defaultProps = {
	firstName: 'geeza',
	lastName: 'lala',
	position: 'freelancer',
};

function Title({ firstName, lastName, position }) {
	return (
		<div className='title-container'>
			<div className='title'>
				<span>{firstName.toUpperCase()} </span>
				<span className='blue'>{lastName.toUpperCase()}</span>
			</div>
			<span className='subtitle'>{position.toUpperCase()}</span>
		</div>
	);
}

export default function Main() {
	return (
		<main className='main black'>
			<Title firstName='geeza' lastName='mama' />
			<Experience />
      <Education />
      <Skills />
		</main>
	);
}
