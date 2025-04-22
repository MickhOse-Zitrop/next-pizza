import React from "react";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Variant } from "@/shared/components/shared/group-variants";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
}

export const usePizzaOptions = (availableTypes: Variant[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);

  React.useEffect(() => {
    const isDisabledType = availableTypes?.find(
      (item) => Number(item.value) === type && !item.disabled,
    );
    const availableType = availableTypes?.find((item) => !item.disabled);

    if (!isDisabledType && availableType) {
      setType(Number(availableType.value) as PizzaType);
    }
  }, [size]);

  return {
    size,
    type,
    setSize,
    setType,
  };
};