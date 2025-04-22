import React from "react";
import { CartItemProps } from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import { cn } from "@/shared/lib/utils";
import * as CartItemDetails from "@/shared/components/shared/cart-item-details";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  className,
  details,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div className={cn(className, "flex items-center justify-between")}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Info name={name} details={details} />
      </div>
      <CartItemDetails.Price value={price} />
      <div className="flex items-center gap-5 ml-20">
        <CartItemDetails.CountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};