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
		yearEnd: new Date().getFullYear(),
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
		experience1.yearEnd -
		experience1.yearStart -
		(experience2.yearStart + experience2.yearEnd - experience2.yearStart)
	);
}

export default function Experience() {
	let [experienceList, setExperienceList] = useState(experiences);
	experienceList = experienceList.sort((experience1, experience2) => {
		return sortFormula(experience1, experience2);
	});

	function handleDelete(index) {
		setExperienceList(experienceList.filter((_, idx) => idx !== index));
	}

	function handleAdd() {
		setExperienceList([
			...experienceList,
			{
				yearStart: 2000,
				yearEnd: 2000,
				title: 'none',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			},
		]);
	}

	function handleChange(e, idx) {
		setExperienceList(
			experienceList
				.map((experience, index) => {
					if (index === idx) {
						return {
							...experience,
							[e.target.name]: e.target.value,
						};
					}
					return experience;
				})
				.sort((experience1, experience2) => {
					return sortFormula(experience1, experience2);
				})
		);
	}

	return (
		<Container header='experience' addBtn={handleAdd} className='black'>
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
								onChange={(e) => handleChange(e, index)}
							/>
						</li>
					);
				})}
			</ul>
		</Container>
	);
}
