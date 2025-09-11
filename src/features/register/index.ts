import { selectRegisterStep } from "./model/selectors/selectRegisterStep/selectRegisterStep";
import { registerReducer, registerActions } from "./model/slice/registerSlice";
import {
  type RegisterFormSchema,
  type FormStepsType,
  FormSteps,
} from "./model/types/registerFormSchema";
import { RegisterForm } from "./model/ui/RegisterForm/RegisterForm";

export {
  RegisterForm,
  registerReducer,
  registerActions,
  FormSteps,
  selectRegisterStep,
};
export type { RegisterFormSchema, FormStepsType };
