import Container from '../Utils/Container';
import DateContent from '../Utils/DateContent';
import { useState } from 'react';

// yearStart + |yearEnd - yearStart|
// p = present
let experiences = {
	2017: {
		yearStart: 2017,
		yearEnd: 2017,
		title: 'Intern',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	2018: {
		yearStart: 2018,
		yearEnd: 2018,
		title: 'Junior Engineer',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	2019: {
		yearStart: 2019,
		yearEnd: 2019,
		title: 'Senior Engineer',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	'p': {
		yearStart: 2020,
		title: 'Manager',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
};

export default function Experience() {
	const [experienceList, setExperienceList] = useState(experiences);

	function handleDelete(index) {
		setExperienceList(
			experienceList.filter((_, idx) => idx !== index)
		);
	}

	return (
		<Container header='experience' className='black'>
			<ul>
				{experienceList.map((experience, index) => {
					return (
						<li key={index}>
							<DateContent
								yearStart={experience.yearStart}
								yearEnd={experience.yearEnd}
								title={experience.title}
								content={experience.content}
								onDelete={() => handleDelete(index)}
							/>
						</li>
					);
				})}
			</ul>
		</Container>
	);
}
