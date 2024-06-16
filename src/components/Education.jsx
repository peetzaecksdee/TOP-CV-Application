import Container from './Container';
import DateContent from './DateContent';

let educations = [
	{
		yearStart: 2010,
		yearEnd: 2014,
		title: 'Bachelor',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		yearStart: 2014,
		yearEnd: 2018,
		title: 'Master',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

export default function Education() {
	return (
		<Container header='education' className='black'>
			<ul>
				{educations.map((education, index) => {
					return (
						<li key={index}>
							<DateContent
								yearStart={education.yearStart}
								yearEnd={education.yearEnd}
								title={education.title}
								content={education.content}
							/>
						</li>
					);
				})}
			</ul>
		</Container>
	);
}
