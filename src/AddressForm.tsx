import { FormWrapper } from "./FormWrapper";

type AddressForm = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProp = AddressForm & {
  updateFields: (fields: Partial<AddressForm>) => void;
};

export const AddressForm = ({ street, city, state, zip, updateFields}: AddressFormProp) => {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input value={street} autoFocus required type="text" onChange={e => updateFields({street:  e.target.value})} />
      <label>City</label>
      <input value={city} required type="text" onChange={e => updateFields({city:  e.target.value})} />
      <label>State</label>
      <input value={state} required type="text" onChange={e => updateFields({state:  e.target.value})}  />
      <label>Zip</label>
      <input value={zip} required type="text"  onChange={e => updateFields({zip:  e.target.value})} />
    </FormWrapper>
  );
};
