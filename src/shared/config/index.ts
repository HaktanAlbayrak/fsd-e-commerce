import { API_URL } from "./api/api";
import {
  AuthMethod,
  AuthProviders,
  LOCAL_STORAGE_USER_KEY,
  type AuthMethodType,
  type AuthProvidersType,
} from "./auth/auth";
import {
  LanguageIconList,
  type SupportedLngsType,
} from "./i18n/LanguageIconList";
import { AppRoutes, routePaths } from "./router/routePaths";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  type ThemeType,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export {
  API_URL,
  AppRoutes,
  AuthMethod,
  AuthProviders,
  LanguageIconList,
  LOCAL_STORAGE_THEME_KEY,
  LOCAL_STORAGE_USER_KEY,
  routePaths,
  Theme,
  ThemeContext,
  useTheme,
  type AuthMethodType,
  type AuthProvidersType,
  type SupportedLngsType,
  type ThemeType,
};
