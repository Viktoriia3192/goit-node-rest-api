import Contact from '../models/Contacts.js';

export const listContacts = () => Contact.find({}, "name email phone");

export const getContactById = id => Contact.findById(id);

export const addContact = data => Contact.create(data);

export const updateContactById = (id, data) => Contact.findByIdAndUpdate(id, data, { new: true, runValidators: true});

export const removeContact = id => Contact.findByIdAndDelete(id);

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
updateContactById
}











// import fs from 'fs/promises';
// import { nanoid } from 'nanoid';
// import path from 'path';

// const contactsPath = path.resolve("db", "contacts.json");


// async function listContacts() {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data)
// }

// async function getContactById(id) {
//   const contacts = await listContacts();
//   const result = contacts.find(item => item.id === id);
//   return result || null;
// }

// async function removeContact(id) {
//   const remContact = await listContacts();
//   const index = remContact.findIndex(item => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const result = remContact.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(remContact));
//   return result;
// }

// async function addContact(data) {
//   const contact = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     ...data
//   }
//   contact.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
//   return newContact;
// }

// async function updateContactById(id, body) {
//   const allContacts = await listContacts();
//   const contactIdSrt = String(id);
//   const contactIdx = allContacts.findIndex(
//     (contact) => contact.id === contactIdSrt
//   );
//   if (contactIdx === -1) return null;
//   allContacts[contactIdx] = { id: contactId, ...body };
//   await fs.writeFile(contactsPath, JSON.stringify(allContacts));
//   return allContacts[contactIdx];
// }

