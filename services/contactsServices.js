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
