"use client";

import React from "react";
import {
  AddressInput,
  ErrorText,
  FormTextarea,
  WhiteBlock,
} from "@/shared/components";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex flex-col gap-5">
        <Controller
          render={({ field, fieldState }) => (
            <>
              <AddressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
          name="address"
          control={control}
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Комментарий"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
