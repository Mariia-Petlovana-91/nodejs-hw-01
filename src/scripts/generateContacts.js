import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
	// const arr = [];
	// for (let index = 0; index < number; index += 1) {
	// 	let contact = createFakeContact();
	// 	arr.push(contact);
	// }
      const contacts = await readContacts();
	const newContacts = Array(number).fill({}).map(createFakeContact);
	const newList = [...contacts, ...newContacts];
	await writeContacts(newList);

};

generateContacts(2);
