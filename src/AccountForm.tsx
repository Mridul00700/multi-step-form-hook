import { FormWrapper } from "./FormWrapper";

type AcountForm = {
  email: string;
  password: string;
};

type AccountFormProps = AcountForm & {
  updateFields: (fields: Partial<AcountForm>) => void;
};

export const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="Account creation">
      {" "}
      <label>Email</label>
      <input value={email} autoFocus required type="email"  onChange={e => updateFields({email:  e.target.value})} />
      <label>Password</label>
      <input value={password} required type="password"  onChange={e => updateFields({password:  e.target.value})} />
    </FormWrapper>
  );
};
