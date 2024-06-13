import Container from './Container';

Title.defaultProps = {
	firstName: 'geeza',
	lastName: 'lala',
	position: 'freelancer',
};

export default function Title({ firstName, lastName, position }) {
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
