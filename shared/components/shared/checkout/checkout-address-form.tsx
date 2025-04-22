import React from "react";
import { Input, Textarea } from "@/shared/components/ui";
import { WhiteBlock } from "@/shared/components/shared";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Input
          className="text-base"
          placeholder="Введите адрес"
          name="adress"
        />
        <Textarea className="text-base" placeholder="Комментарий" rows={5} />
      </div>
    </WhiteBlock>
  );
};