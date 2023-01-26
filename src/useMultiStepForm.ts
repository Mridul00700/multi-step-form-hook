import { ReactElement, useState } from "react";


export const useMultiStepForm = (steps : ReactElement[]) => {

    const [currentstepIndex, setCurrentStepIndex] = useState(0);


    const next = () => {
        setCurrentStepIndex( prev => prev + 1)
    }

    const back = () => {
        setCurrentStepIndex( prev => prev -1)
    }

    const goTo = (index : number) => {
        setCurrentStepIndex(index);
    }

    return {
        currentstep : steps[currentstepIndex],
        currentstepIndex,
        goTo,
        next,
        back,
        steps,
        isFirstStep: currentstepIndex === 0,
        isLastStep: currentstepIndex === steps.length -1
            }

}

