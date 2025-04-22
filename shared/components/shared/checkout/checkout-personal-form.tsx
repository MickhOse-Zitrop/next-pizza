import React from "react";
import { FormInput, WhiteBlock } from "@/shared/components";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput className="text-base" placeholder="Имя" name="firstName" />
        <FormInput
          className="text-base"
          placeholder="Фамилия"
          name="lastName"
        />
        <FormInput className="text-base" placeholder="E-mail" name="email" />
        <FormInput className="text-base" placeholder="Телефон" name="phone" />
      </div>
    </WhiteBlock>
  );
};
