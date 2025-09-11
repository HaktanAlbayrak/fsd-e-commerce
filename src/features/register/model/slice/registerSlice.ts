import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { AuthMethod, type AuthMethodType } from "@/shared/config";

import { register } from "../services/register";
import { resendCode } from "../services/resendCode";
import { verifyCode } from "../services/verifyCode";
import {
  FormSteps,
  type FormStepsType,
  type RegisterFormSchema,
} from "../types/registerFormSchema";

const initialState: RegisterFormSchema = {
  email: "",
  phone: "",
  password: "",
  isLoading: false,
  error: undefined,
  method: AuthMethod.EMAIL,
  step: FormSteps.CREDENTIALS,
};

export const registerSlice = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setMethod: (state, action: PayloadAction<AuthMethodType>) => {
      state.method = action.payload;
    },
    setStep: (state, action: PayloadAction<FormStepsType>) => {
      state.step = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.phone = "";
      state.password = "";
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(resendCode.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resendCode.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(resendCode.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(verifyCode.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyCode.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(verifyCode.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
