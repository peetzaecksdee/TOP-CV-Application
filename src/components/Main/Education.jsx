import { useState } from 'react';
import Container from '../Utils/Container';
import DateContent from '../Utils/DateContent';

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

function sortFormula(education1, education2) {
	return (
		education1.yearStart +
		education1.yearEnd -
		education1.yearStart -
		(education2.yearStart + education2.yearEnd - education2.yearStart)
	);
}

export default function Education() {
	let [educationList, setEducationList] = useState(educations);
	educationList = educationList.sort((education1, education2) => {
		return sortFormula(education1, education2);
	});

	function handleDelete(index) {
		setEducationList(educationList.filter((_, idx) => idx !== index));
	}

	function handleAdd() {
		setEducationList([
			...educationList,
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
		setEducationList(
			educationList
				.map((education, index) => {
					if (index === idx) {
						return {
							...education,
							[e.target.name]: e.target.value,
						};
					}
					return education;
				})
				.sort((education1, education2) => {
					return sortFormula(education1, education2);
				})
		);
	}

	return (
		<Container header='education' addBtn={handleAdd} className='black'>
			<ul>
				{educationList.map((education, index) => {
					return (
						<li key={index}>
							<DateContent
								yearStart={education.yearStart}
								yearEnd={education.yearEnd}
								title={education.title}
								content={education.content}
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
