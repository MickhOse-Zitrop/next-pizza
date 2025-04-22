import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({ src, className }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("w-[60px] h-[60px]", className)} src={src} alt="Image" />
  );
};