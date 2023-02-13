let stockObject = [
  {
    img: "../images/stock-1.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    defPrice: "50,50 ₽",
    description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
  },
  {
    img: "../images/stock-2.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    defPrice: "50,50 ₽",
    description: "Молоко ПРОСТОКВАШИНО паст вареные,...",
  },
  {
    img: "../images/stock-3.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    defPrice: "50,50 ₽",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...",
  },
  {
    img: "../images/stock-4.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    defPrice: "50,50 ₽",
    description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ...",
  },
];

let stockRow = document.getElementById("stockRow");

function getCard(img, cardprice, def, des) {
  let stockCard = document.createElement("div");
  stockCard.className = "stock__card";
  stockCard.classList.add("col-6");
  stockCard.classList.add("col-md-4");
  stockCard.classList.add("col-lg-3");
  stockCard.classList.add("mt-3");
  stockCard.classList.add("mt-lg-0");
  let card_img = document.createElement("img");
  card_img.src = img;
  card_img.className = "w-100";
  card_img.classList.add("stock__card-img");
  stockCard.append(card_img);

  let card_body = document.createElement("div");

  let h3 = document.createElement("h3");
  let h3_2 = document.createElement("h3");
  let price_box = document.createElement("div");
  h3_2.innerHTML = cardprice;
  h3.innerHTML = def;
  price_box.append(h3_2);
  price_box.append(h3);
  card_body.append(price_box);

  let pay_box = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.innerHTML = "C картой";
  p2.innerHTML = "Обычная";
  pay_box.append(p1);
  pay_box.append(p2);
  card_body.append(pay_box);

  let h4 = document.createElement("h4");
  card_body.classList.add("stock__card-body");
  card_body.append(h4);
  h4.className = "stock__card-text";
  h4.innerHTML = des;
  stockCard.append(card_body);

  let card_rating = document.createElement("img");
  card_rating.src = "../images/rating-1.png";
  card_body.append(card_rating);

  let card_btn = document.createElement("button");
  card_btn.className = "stock__card-btn";
  card_btn.innerHTML = "B корзину";
  card_body.append(card_btn);

  return stockCard;
}
for (el of stockObject) {
  let card = getCard(el.img, el.cardPrice, el.defPrice, el.description);
  stockRow.append(card);
}

let newObject = [
  {
    img: "../images/new-1.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
  },
  {
    img: "../images/new-2.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Молоко ПРОСТОКВАШИНО паст. питьевое...",
  },
  {
    img: "../images/new-3.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...",
  },
  {
    img: "../images/new-4.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ...",
  },
];

let newRow = document.getElementById("newRow");

function getCard2(img, cardprice, des) {
  let stockCard = document.createElement("div");
  stockCard.className = "stock__card";
  stockCard.classList.add("col-6");
  stockCard.classList.add("col-md-4");
  stockCard.classList.add("col-lg-3");
  stockCard.classList.add("mt-3");
  stockCard.classList.add("mt-lg-0");
  let card_img = document.createElement("img");
  card_img.src = img;
  card_img.className = "w-100";
  card_img.classList.add("stock__card-img");
  stockCard.append(card_img);

  let card_body = document.createElement("div");
  let h3_2 = document.createElement("h3");
  let price_box = document.createElement("div");
  h3_2.innerHTML = cardprice;
  price_box.append(h3_2);
  card_body.append(price_box);

  let pay_box = document.createElement("div");
  let p1 = document.createElement("p");
  p1.innerHTML = "C картой";
  pay_box.append(p1);
  card_body.append(pay_box);

  let h4 = document.createElement("h4");
  card_body.classList.add("stock__card-body");
  card_body.append(h4);
  h4.className = "stock__card-text";
  h4.innerHTML = des;
  stockCard.append(card_body);

  let card_rating = document.createElement("img");
  card_rating.src = "../images/rating-1.png";
  card_body.append(card_rating);

  let card_btn = document.createElement("button");
  card_btn.className = "stock__card-btn";
  card_btn.innerHTML = "B корзину";
  card_body.append(card_btn);

  return stockCard;
}

for (el of newObject) {
  let card = getCard2(el.img, el.cardPrice, el.description);
  newRow.append(card);
}

let prevRow = document.getElementById("prevRow");

let prevObject = [
  {
    img: "../images/popular-1.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
  },
  {
    img: "../images/popular-2.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Молоко ПРОСТОКВАШИНО паст вареные,...",
  },
  {
    img: "../images/popular-3.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...",
  },
  {
    img: "../images/popular-4.png",
    top: "../images/heart-button.png",
    discount: "../images/notice.png",
    cardPrice: "44,50 ₽",
    description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ...",
  },
];

for (el of prevObject) {
  let card = getCard2(el.img, el.cardPrice, el.description);
  prevRow.append(card);
}

let specObject = [
  {
    title: "Оформите карту «Северяночка»",
    text: "И получайте бонусы при покупке в магазинах сайте",
    src: "../images/spec-1.png",
  },
  {
    title: "Покупайте акционные товары",
    text: "И получайте вдвое больше бонусов",
    src: "../images/spec-2.png",
  },
];

let specRow = document.getElementById("specRow");

function getSpecCard(title, text, src) {
  let mainCard = document.createElement("div");
  let specCard = document.createElement("div");
  mainCard.className = "col-12";
  mainCard.classList.add("col-lg-6");
  mainCard.classList.add("mt-3");
  mainCard.classList.add("mt-lg-0");
  mainCard.classList.add("main__card");
  specCard.classList.add("special__card");

  let card_left = document.createElement("div");

  let card_title = document.createElement("h3");
  card_title.innerHTML = title;
  card_title.innerHTML = title;
  card_left.append(card_title);

  let card_text = document.createElement("p");
  card_text.innerHTML = text;
  card_left.append(card_text);

  let card_img = document.createElement("img");
  card_img.src = src;

  specCard.append(card_left);
  specCard.append(card_img);

  mainCard.append(specCard);
  return mainCard;
}

for (el of specObject) {
  let card = getSpecCard(el.title, el.text, el.src);
  specRow.append(card);
}
