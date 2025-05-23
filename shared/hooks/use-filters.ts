import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    QueryFilters,
    string
  >;

  // Фильтр ингредиентов
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    new Set<string>(searchParams.get("ingredients")?.split(",")),
  );

  // Фильтр размеров
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : [],
    ),
  );

  // Фильтр типов пиццы
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      searchParams.has("pizzaTypes")
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          searchParams.get("pizzaTypes")?.split(",")
        : [],
    ),
  );

  // Фильтр стоимости
  const [prices, setPrices] = React.useState<PriceProps>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  return React.useMemo(
    () => ({
      selectedIngredients,
      sizes,
      pizzaTypes,
      prices,
      setSelectedIngredients: toggleIngredients,
      setSizes: toggleSizes,
      setPizzaTypes: togglePizzaTypes,
      setPrices: updatePrice,
    }),
    [sizes, selectedIngredients, pizzaTypes, prices],
  );
};