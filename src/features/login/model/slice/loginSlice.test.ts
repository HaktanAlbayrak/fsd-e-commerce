import { describe, expect, test } from "vitest";

import { AuthMethod } from "@/shared/config";

import { login } from "../services/login/login";
import type { LoginFormSchema } from "../types/loginFormSchema";

import { initialState, loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("setEmail should update email state", () => {
    const testEmail = "test@example.com";
    const newState = loginReducer(
      initialState,
      loginActions.setEmail(testEmail)
    );
    expect(newState.email).toBe(testEmail);
  });
  test("setPhone should update phone state", () => {
    const testPhone = "1234567890";
    const newState = loginReducer(
      initialState,
      loginActions.setPhone(testPhone)
    );
    expect(newState.phone).toBe(testPhone);
  });
  test("setPassword should update password state", () => {
    const testPassword = "password123";
    const newState = loginReducer(
      initialState,
      loginActions.setPassword(testPassword)
    );
    expect(newState.password).toBe(testPassword);
  });
  test("setMethod should update method state", () => {
    const newState = loginReducer(
      initialState,
      loginActions.setMethod(AuthMethod.PHONE)
    );
    expect(newState.method).toBe(AuthMethod.PHONE);
  });
  test("resetForm should clear email,phone,password", () => {
    const filledState: LoginFormSchema = {
      ...initialState,
      email: "test@example.com",
      phone: "1234567890",
      password: "password123",
    };
    const newState = loginReducer(filledState, loginActions.resetForm());
    expect(newState.email).toBe("");
    expect(newState.phone).toBe("");
    expect(newState.password).toBe("");
  });
  test("login.pending should set isLoading true", () => {
    const newState = loginReducer(initialState, { type: login.pending.type });
    expect(newState.isLoading).toBe(true);
  });
  test("login.fulfilled should set isLoading false", () => {
    const loadingState: LoginFormSchema = { ...initialState, isLoading: true };
    const newState = loginReducer(loadingState, { type: login.fulfilled.type });
    expect(newState.isLoading).toBe(false);
  });
  test("login.rejected should set isLoading false and set error", () => {
    const loadingState: LoginFormSchema = { ...initialState, isLoading: true };
    const error = "Login failed";
    const newState = loginReducer(loadingState, {
      type: login.rejected.type,
      payload: error,
    });
    expect(newState.isLoading).toBe(false);
    expect(newState.error).toBe("Login failed");
  });
});
