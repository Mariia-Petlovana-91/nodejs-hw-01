import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
	// const arr = [];
	// for (let index = 0; index < number; index += 1) {
	// 	let contact = createFakeContact();
	// 	arr.push(contact);
	// }

	const newContacts = Array(number).fill({}).map(createFakeContact);
	console.log(newContacts);
};

generateContacts(2);
