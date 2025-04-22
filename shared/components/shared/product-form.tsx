"use client";

import React from "react";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";

interface Props {
  product: ProductWithRelations;
  onSubmit?: () => void;
  className?: string;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + " добавлен в корзину");

      _onSubmit?.();
    } catch (e) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(e);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};