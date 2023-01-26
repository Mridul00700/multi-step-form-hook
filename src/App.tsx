import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultiStepForm } from "./useMultiStepForm";
import { UserForm } from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  state: string;
  email: string;
  password: string;
  street: string;
  zip: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  city: "",
  email: "",
  state: "",
  street: "",
  zip: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    steps,
    currentstepIndex,
    currentstep,
    isFirstStep,
    next,
    back,
    isLastStep,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm updateFields={updateFields} {...data} />,
    <AccountForm updateFields={updateFields} {...data} />,
  ]);

  function submit(event: FormEvent) {
    event.preventDefault();
    isLastStep ? console.log("submit", data) : next();
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content"
      }}
    >
      <form onSubmit={submit}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentstepIndex + 1}/{steps.length}
        </div>
        {currentstep}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {<button type="submit">{isLastStep ? "Finish" : "Next"}</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
