"use client";

import React from "react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "@/shared/components/shared/cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import Image from "next/image";
import { Title } from "./title";
import { SheetClose } from "@/shared/components/ui/sheet";
import { useCart } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
  const [redirecting, setRedirecting] = React.useState(false);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        {totalAmount > 0 ? (
          <>
            <SheetHeader>
              <SheetTitle>
                В корзине{" "}
                <span className="font-bold">{items.length} товара</span>
              </SheetTitle>
            </SheetHeader>
            <div className="-mx-6 mt-5 overflow-auto flex-1">
              {items.map((item) => (
                <div className="mb-2" key={item.id}>
                  <CartDrawerItem
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(
                      item.ingredients,
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize,
                    )}
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onCLickRemove={() => removeCartItem(item.id)}
                  />
                </div>
              ))}
            </div>
            <SheetFooter className="-mx-6 bg-white p-8">
              <div className="w-full">
                <div className="flex mb-4">
                  <span className="flex flex-1 text-lg text-neutral-500">
                    Итого
                    <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                  </span>
                  <span className="font-bold text-lg">{totalAmount} ₽</span>
                </div>
                <Link href="/checkout">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base"
                    loading={redirecting}
                    onClick={() => setRedirecting(true)}
                  >
                    Оформить заказ <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center w-72 mx-auto">
            <SheetTitle />
            <Image
              src={"/assets/images/empty-box.png"}
              alt={"Empty cart"}
              width={120}
              height={120}
            />
            <Title
              text={"Корзина пустая"}
              size={"sm"}
              className="text-center font-bold my-2"
            />
            <p className="text-center text-neutral-500 mb-5">
              Добавьте хотя бы одну пиццу, чтобы совершить заказ
            </p>
            <SheetClose>
              <Button className="w-56 h-12 text-base" size="lg">
                <ArrowLeft className="w-5 mr-2" />
                Вернуться назад
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};