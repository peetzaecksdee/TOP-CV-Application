import Container from './Container';

let experiences = [
	{
		yearStart: 2017,
		yearEnd: 2017,
		title: 'Intern',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		yearStart: 2018,
		yearEnd: 2018,
		title: 'Junior Engineer',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		yearStart: 2019,
		yearEnd: 2019,
		title: 'Senior Engineer',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		yearStart: 2020,
		yearEnd: 2024,
		title: 'Manager',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

function DateContent({ yearStart, yearEnd, title, content }) {
	return (
		<>
			<div className='content-container'>
				<span className='nav-title blue'>{title.toUpperCase()}</span>
				<span>
					{yearStart} - {yearEnd}
				</span>
			</div>
			<span>{content}</span>
		</>
	);
}

export default function Experience() {
	return (
		<Container header='experience' className='black'>
			<ul>
				{experiences.map((experience, index) => {
					return (
						<li key={index}>
							<DateContent
								yearStart={experience.yearStart}
								yearEnd={experience.yearEnd}
								title={experience.title}
								content={experience.content}
							/>
						</li>
					);
				})}
			</ul>
		</Container>
	);
}
