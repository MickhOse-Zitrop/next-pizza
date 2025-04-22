import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/components/shared";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>123123</h1>;
}