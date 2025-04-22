import React from "react";
import { cn } from "@/shared/lib/utils";
import {
  ClearButton,
  ErrorText,
  RequiredSymbol,
} from "@/shared/components/shared";
import { Input } from "@/shared/components/ui";
import { useFormContext } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {
  function onClickClear() {}

  return (
    <div className={cn(className, "")}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton onClick={onClickClear} />
      </div>
      <ErrorText text="Поле обязательно для заполнения" className="mt-2" />
    </div>
  );
};