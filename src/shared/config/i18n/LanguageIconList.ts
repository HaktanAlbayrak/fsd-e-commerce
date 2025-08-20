import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";
import EnglishIcon from "@/shared/assets/icons/English.svg?react";
import TurkiyeIcon from "@/shared/assets/icons/Turkiye.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const LanguageIconList: LanguageIconListType = {
  en: EnglishIcon,
  tr: TurkiyeIcon,
};
