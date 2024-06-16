import Title from './Title';
import Experience from './Experience';
import Education from './Education';

export default function Main() {
	return (
		<main className='main black'>
			<Title firstName='geeza' lastName='mama' />
			<Experience />
      <Education />
		</main>
	);
}
