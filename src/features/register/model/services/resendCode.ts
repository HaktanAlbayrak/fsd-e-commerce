import { createAsyncThunk } from "@reduxjs/toolkit";

import { extractErrorMessage, httpClient } from "@/shared/api";

import type { User } from "./../../../../entities/user/model/types/UserSchema";

type ResendArgs = {
  email?: string;
  phone?: string;
};

export const resendCode = createAsyncThunk<
  void,
  ResendArgs,
  { rejectValue: string }
>("features/resendCode", async (resendData, thunkAPI) => {
  try {
    await httpClient.post<User>("/auth/resend-code", resendData);

    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(extractErrorMessage(error));
  }
});
