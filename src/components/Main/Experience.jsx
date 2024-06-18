import Container from '../Utils/Container';
import DateContent from '../Utils/DateContent';
import { useState } from 'react';

// yearStart + |yearEnd - yearStart|
let experiences = [
	{
		yearStart: 2017,
		yearEnd: 2017,
		title: 'Intern',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		yearStart: 2020,
		title: 'Manager',
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
		yearStart: 2018,
		yearEnd: 2018,
		title: 'Junior Engineer',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

function sortFormula(experience1, experience2) {
	return (
		experience1.yearStart +
		(experience1.yearEnd
			? Math.abs(experience1.yearEnd - experience1.yearStart)
			: 9999) -
		experience2.yearStart +
		(experience2.yearEnd
			? Math.abs(experience2.yearEnd - experience2.yearStart)
			: 9999)
	);
}

export default function Experience() {
	let [experienceList, setExperienceList] = useState(experiences);
	experienceList = experienceList.sort((experience1, experience2) => {
		return sortFormula(experience1, experience2);
	});
	console.log(experienceList);

	function handleDelete(index) {
		setExperienceList(experienceList.filter((_, idx) => idx !== index));
	}

	return (
		<Container header='experience' addBtn={true} className='black'>
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
