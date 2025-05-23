import React from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export const ErrorText: React.FC<Props> = ({ text, className }) => {
  return <p className={cn(className, "text-red-500 text-sm mt-2")}>{text}</p>;
};