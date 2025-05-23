import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { _ingredients, categories, products } from "./constants";

async function up() {
  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496",
      },
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640",
      },
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020",
      },
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958",
      },
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737",
      },
      {
        previewImageUrl:
          "https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284",
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE",
      },
      {
        storyId: 1,
        sourceUrl:
          "https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE",
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        fullName: "John",
        email: "john@example.com",
        password: hashSync("password", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@example.com",
        password: hashSync("password", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });
  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });
  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 15),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      //   Пепперони фреш
      { productId: pizza1.id, pizzaType: 1, price: 289, size: 20 },
      { productId: pizza1.id, pizzaType: 1, price: 349, size: 30 },
      { productId: pizza1.id, pizzaType: 1, price: 459, size: 40 },
      { productId: pizza1.id, pizzaType: 2, price: 349, size: 30 },
      { productId: pizza1.id, pizzaType: 2, price: 459, size: 40 },
      //   Сырная
      { productId: pizza2.id, pizzaType: 1, price: 299, size: 20 },
      { productId: pizza2.id, pizzaType: 1, price: 389, size: 30 },
      { productId: pizza2.id, pizzaType: 1, price: 499, size: 40 },
      { productId: pizza2.id, pizzaType: 2, price: 389, size: 30 },
      { productId: pizza2.id, pizzaType: 2, price: 499, size: 40 },
      //   Чоризо фреш
      { productId: pizza3.id, pizzaType: 1, price: 389, size: 20 },
      { productId: pizza3.id, pizzaType: 1, price: 469, size: 30 },
      { productId: pizza3.id, pizzaType: 1, price: 559, size: 40 },
      { productId: pizza3.id, pizzaType: 2, price: 469, size: 30 },
      { productId: pizza3.id, pizzaType: 2, price: 559, size: 40 },
      //   Остальные продукты
      { productId: 1, price: 219 },
      { productId: 2, price: 219 },
      { productId: 3, price: 169 },
      { productId: 4, price: 299 },
      { productId: 5, price: 199 },
      { productId: 6, price: 199 },
      { productId: 7, price: 199 },
      { productId: 8, price: 199 },
      { productId: 9, price: 199 },
      { productId: 10, price: 199 },
      { productId: 11, price: 199 },
      { productId: 12, price: 199 },
      { productId: 13, price: 199 },
      { productId: 14, price: 199 },
      { productId: 15, price: 199 },
      { productId: 16, price: 199 },
      { productId: 17, price: 199 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, token: "111111", totalAmount: 0 },
      { userId: 2, token: "222222", totalAmount: 0 },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      quantity: 2,
      cartId: 1,
      ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
