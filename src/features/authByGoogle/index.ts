import { selectAuthByGoogleError } from "./model/selectors/selectAuthByGoogleError/selectAuthByGoogleError";
import { selectAuthByGoogleIsLoading } from "./model/selectors/selectAuthByGoogleIsLoading/selectAuthByGoogleIsLoading";
import {
  authByGoogleActions,
  authByGoogleReducer,
} from "./model/slice/authByGoogle";
import type { AuthByGoogleSchema } from "./model/types/authByGoogle";
import { AuthByGoogleButton } from "./ui/AuthByGoogleButton/AuthByGoogleButton";

export {
  authByGoogleActions,
  authByGoogleReducer,
  AuthByGoogleButton,
  selectAuthByGoogleError,
  selectAuthByGoogleIsLoading,
};
export type { AuthByGoogleSchema };
