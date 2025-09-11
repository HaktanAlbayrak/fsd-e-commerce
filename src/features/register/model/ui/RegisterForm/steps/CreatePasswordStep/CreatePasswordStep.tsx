import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { passwordRequirements } from "@/features/register/config/passwordRequirements";
import { register } from "@/features/register/model/services/register";
import { registerActions } from "@/features/register/model/slice/registerSlice";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import CheckIcon from "@/shared/assets/icons/Check.svg?react";
import { cn, useAppDispatch, useAppSelector } from "@/shared/lib";
import { AppIcon, Button, Input } from "@/shared/ui";

import { selectRegisterEmail } from "../../../../selectors/selectRegisterEmail/selectRegisterEmail";
import { selectRegisterIsLoading } from "../../../../selectors/selectRegisterIsLoading/selectRegisterIsLoading";
import { selectRegisterPassword } from "../../../../selectors/selectRegisterPassword/selectRegisterPassword";
import { selectRegisterPhone } from "../../../../selectors/selectRegisterPhone/selectRegisterPhone";

import styles from "./CreatePasswordStep.module.scss";

export const CreatePasswordStep = () => {
  const { t } = useTranslation("auth");
  const dispatch = useAppDispatch();

  const [validationError, setValidationError] = useState<boolean>(false);

  const email = useAppSelector(selectRegisterEmail);
  const phone = useAppSelector(selectRegisterPhone);
  const password = useAppSelector(selectRegisterPassword);
  const isLoading = useAppSelector(selectRegisterIsLoading);

  const handleChangePassword = (value: string) => {
    dispatch(registerActions.setPassword(value));

    const isValid = passwordRequirements.every((requirement) =>
      requirement.test(value)
    );

    if (!isValid) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validationError) {
      dispatch(register({ email, phone, password }));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        disabled={isLoading}
        value={password}
        className={styles.input}
        onChange={handleChangePassword}
        label={t("register.password.title")}
        type="password"
        placeholder={t("register.password.enterPassword")}
      />
      <div className={styles.requirementsList}>
        {passwordRequirements.map((requirement) => {
          const isMet = requirement.test(password);
          return (
            <div key={requirement.key} className={styles.requirement}>
              <AppIcon
                Icon={CheckIcon}
                size={16}
                className={cn(styles.requirementIcon, { [styles.met]: isMet })}
              />
              <span className={styles.requirementText}>
                {t(requirement.key)}
              </span>
            </div>
          );
        })}
      </div>
      <Button
        className={styles.button}
        isLoading={isLoading}
        disabled={validationError}
        type="submit"
        fullWidth
        size="md"
      >
        {t("register.continueButton")} <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
