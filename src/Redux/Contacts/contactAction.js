import { AddContact, ViewContact, DeleteContact } from "./contactTypes";
export const addContact = (value) => {
    return {
        type: AddContact,
        payload: { value }
    }
}
export const viewContact = (value) => {
    console.log("viewcontact>>",value)

    return {
        type: ViewContact,
        payload: { value }
    }
}
export const deleteContact = (value) => {
    return {
        type: DeleteContact,
        payload: { value }
    }
}