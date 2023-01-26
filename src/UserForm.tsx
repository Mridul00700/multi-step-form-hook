import { FormWrapper } from "./FormWrapper";

type UserDetails = {
    firstName : string;
    lastName : string;
    age : string;
}

type UserDetailsProps = UserDetails & { 

    updateFields : (fields : Partial<UserDetails>)=>void
 }

export const UserForm = ({firstName, lastName, age, updateFields} : UserDetailsProps) => {
    return(
        <FormWrapper title="User Details">
        <label>First Name</label>
        <input autoFocus required type="text" value={firstName} onChange={e => updateFields({firstName : e.target.value})} />
        <label>Last Name</label>
        <input required type="text" value={lastName} onChange={e => updateFields({lastName : e.target.value})} />
        <label>Age</label>
        <input min={1} required type="number" value={age} onChange={e => updateFields({age : e.target.value})}/>
        </FormWrapper>
    )
}