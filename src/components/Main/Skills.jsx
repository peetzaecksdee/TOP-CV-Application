import Container from '../Utils/Container';

let skills = [
	{
		name: 'HTML',
		percentage: 90,
	},
	{
		name: 'CSS',
		percentage: 80,
	},
	{
		name: 'JavaScript',
		percentage: 70,
	},
	{
		name: 'React',
		percentage: 60,
	},
	{
		name: 'Node.js',
		percentage: 50,
	},
	{
		name: 'MongoDB',
		percentage: 40,
	},
];

function PercentageBar({ percentage }) {
	return (
		<div className='bar-container'>
			<div
				className='bar'
				style={{
					width: `${percentage}%`,
				}}
			/>
		</div>
	);
}

function ExperiencePercentage({ name, percentage }) {
	return (
		<div className='content-container'>
			<span className='name'>{name}</span>
			<PercentageBar percentage={percentage} />
		</div>
	);
}

export default function Experience() {
	return (
		<Container header='experience' className='black'>
			<div className='grid-container'>
				{skills.map((skill, index) => {
					return (
						<ExperiencePercentage
							key={index}
							name={skill.name}
							percentage={skill.percentage}
						/>
					);
				})}
			</div>
		</Container>
	);
}
