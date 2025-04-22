import { PizzaSize, pizzaTypes } from "@/shared/constants/pizza";
import { ProductItem } from "@prisma/client";
import { Variant } from "@/shared/components/shared/group-variants";

export const getAvailablePizzaTypes = (
  size: PizzaSize,
  items: ProductItem[],
): Variant[] => {
  const filteredPizzasBySize = items.filter((item) => item.size === size);

  return pizzaTypes.map((pizzaType) => ({
    name: pizzaType.name,
    value: pizzaType.value,
    disabled: !filteredPizzasBySize.some(
      (pizza) => Number(pizza.pizzaType) === Number(pizzaType.value),
    ),
  }));
};