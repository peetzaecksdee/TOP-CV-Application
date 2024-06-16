import Container from '../Utils/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocation, faWindowMaximize, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

let contacts = [
	{
		icon: faPhone,
		text: '+00 000-000-0000',
	},
	{
		icon: faLocation,
		text: '1 Home, Street, Universe',
	},
	{
		icon: faEnvelope,
		text: 'peetzaecksdee@skiff.com',
	},
	{
		icon: faWindowMaximize,
		text: 'www.github.com/peetzaecksdee',
	},
]

export default function Contact() {
	const [contactList, setContactList] = useState(contacts);

	function handleChange(idx, e) {
		setContactList(contactList.map((contact, index) => {
			if (index === idx) {
				return {
					...contact,
					text: e.target.value,
				};
			}
			return contact;
		}));
	}

	return (
		<Container header="contact">
			{contactList.map((contact, index) => {
				return (
					<div className='content-container' key={index}>
						<FontAwesomeIcon icon={contact.icon} className="white" />
						<input className='white small' value={contact.text} onChange={(e) => {handleChange(index, e)}} />
					</div>
				)
			})}
		</Container>
	);
}
