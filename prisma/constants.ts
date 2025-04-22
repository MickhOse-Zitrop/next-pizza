export const categories = [
  { name: "Пиццы" },
  { name: "Завтрак" },
  { name: "Закуски" },
  { name: "Коктейли" },
  { name: "Напитки" },
];

export const _ingredients = [
  {
    name: "Сырный бортик",
    price: 179,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    name: "Сливочная моцарелла",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    name: "Сыры чеддер и пармезан",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    name: "Острый перец халапеньо",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    name: "Нежный цыпленок",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    name: "Шампиньоны",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    name: "Бекон",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F",
  },
  {
    name: "Ветчина",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    name: "Пикантная пепперони",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    name: "Острая чоризо",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    name: "Маринованные огурчики",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    name: "Свежие томаты",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    name: "Красный лук",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    name: "Сочные ананасы",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    name: "Итальянские травы",
    price: 39,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    name: "Сладкий перец",
    price: 59,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    name: "Кубики брынзы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    name: "Митболы",
    price: 79,
    imageUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Омлет с ветчиной и грибами",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/0193bb2bfe2a716597c66396669cf5c4.avif",
    categoryId: 2,
  },
  {
    name: "Омлет с пепперони",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee79702bb5be7691740f7999d60823.avif",
    categoryId: 2,
  },
  {
    name: "Кофе Латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d61b0c26a3f85d97a78feee00ad.avif",
    categoryId: 2,
  },
  {
    name: "Дэнвич ветчина и сыр",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796ff0059b799a17f57a9e64c725.avif",
    categoryId: 3,
  },
  {
    name: "Куринные наггетсы",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eef45eacc4d7eabc10e0a0e0c2c67a.avif",
    categoryId: 3,
  },
  {
    name: "Картофель из печи с соусом 👶",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eed646a874549f90802e75f4d358ed.avif",
    categoryId: 3,
  },
  {
    name: "Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f96d11392a2f6dd73599921b9.avif",
    categoryId: 3,
  },
  {
    name: "Острый Додстер",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796fd3b594068f7a752df8161d04.avif",
    categoryId: 3,
  },
  {
    name: "Молочный коктейль Ежевика-малина",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eeb92c801211cbaf91bb30f77568c5.avif",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль Пина Колада",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eea69c98929ad79d1adb5ef4cf22bb.avif",
    categoryId: 4,
  },
  {
    name: "Молочный коктейль с печеньем Орео",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796fa1f50f8f8111a399e4c1a1e3.avif",
    categoryId: 4,
  },
  {
    name: "Классический молочный коктейль",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee796f93fb126693f96cb1d3e403fb.avif",
    categoryId: 4,
  },
  {
    name: "Капучино Яблочный пирог",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ef1d95b2b8f766b6241c06601cb898.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Карамельный капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d61aed6b6d4bfdad4e58d76cf56.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Кокосовый латте",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d61b19fa07090ee88b0ed347f42.avif",
    categoryId: 5,
  },
  {
    name: "Кофе Американо",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11ee7d61b02b810b8767d5ff70d15897.avif",
    categoryId: 5,
  },
  {
    name: "Айс капучино",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11eefb6985e52b9fa2c985ebc42c7e64.avif",
    categoryId: 5,
  },
];
