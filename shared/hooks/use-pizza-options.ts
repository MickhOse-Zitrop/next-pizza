import React from "react";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Variant } from "@/shared/components/shared/group-variants";
import { useSet } from "react-use";
import { getAvailablePizzaTypes } from "@/shared/lib";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  availableTypes: Variant[];
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(30);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([]),
  );
  const availableTypes = getAvailablePizzaTypes(size, items);

  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size,
  )?.id;

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
    selectedIngredients,
    availableTypes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};