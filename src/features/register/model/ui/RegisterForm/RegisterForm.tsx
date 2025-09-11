import { useAppSelector } from "@/shared/lib";

import { selectRegisterStep } from "../../selectors/selectRegisterStep/selectRegisterStep";
import { FormSteps } from "../../types/registerFormSchema";

import { CreatePasswordStep } from "./steps/CreatePasswordStep/CreatePasswordStep";
import { CredentialsStep } from "./steps/CredentialsStep/CredentialsStep";
import { VerificationStep } from "./steps/VerificationStep/VerificationStep";

export const RegisterForm = () => {
  const step = useAppSelector(selectRegisterStep);
  return (
    <>
      {step === FormSteps.CREDENTIALS && <CredentialsStep />}
      {step === FormSteps.PASSWORD && <CreatePasswordStep />}
      {step === FormSteps.VERIFICATION && <VerificationStep />}
    </>
  );
};
