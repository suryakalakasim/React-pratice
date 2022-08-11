import { AddContact, ViewContact, DeleteContact } from "./contactTypes";
const initialState = {
    contactInfo:[]
};

export default function contactReducer(state = initialState, action) {
     const { type, payload } = action
    console.log("viewcontact1>>",payload)

    switch (type) {
        case ViewContact:
            return { ...state, contactInfo:payload.value }
       
        // case DeleteContact:
        //     return state.filter(contact => contact.id !== contact.payload)
        default:
            return state;
    }

}