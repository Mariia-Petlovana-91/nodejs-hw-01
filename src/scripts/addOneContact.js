import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
export const addOneContact = async () => {
	const contactsLists = await readContacts();
	const newContact = createFakeContact();
	await writeContacts([...contactsLists, newContact]);
 };

addOneContact();
