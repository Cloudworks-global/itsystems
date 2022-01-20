import { HeaderContact } from "../components/contacts/HeaderContact";
import { FormContact } from "../components/contacts/FormContact";
import { MapsContact } from "../components/contacts/MapsContact";

export const Contact = () => {
    return (
        <div id="top">
         <HeaderContact />   
         <FormContact />
         <MapsContact />
        </div>
    )
}
