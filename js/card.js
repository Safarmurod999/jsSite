

// let prevRow = document.getElementById("prevRow");

// let prevObject = [
//   {
//     img: "../images/popular-1.png",
//     top: "../images/heart-button.png",
//     discount: "../images/notice.png",
//     cardPrice: "44,50 ₽",
//     description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
//   },
//   {
//     img: "../images/popular-2.png",
//     top: "../images/heart-button.png",
//     discount: "../images/notice.png",
//     cardPrice: "44,50 ₽",
//     description: "Молоко ПРОСТОКВАШИНО паст вареные,...",
//   },
//   {
//     img: "../images/popular-3.png",
//     top: "../images/heart-button.png",
//     discount: "../images/notice.png",
//     cardPrice: "44,50 ₽",
//     description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...",
//   },
//   {
//     img: "../images/popular-4.png",
//     top: "../images/heart-button.png",
//     discount: "../images/notice.png",
//     cardPrice: "44,50 ₽",
//     description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ...",
//   },
// ];

// for (el of prevObject) {
//   let card = getCard2(el.img,el.top, el.cardPrice, el.description);
//   prevRow.append(card);
// }

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

let statObject = [
  {
    img: "../images/status-1.png",
    title: "Режим использования масок и перчаток на территории магазинов",
    description:
      'Подробная информация o режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется.',
  },
  {
    img: "../images/status-2.png",
    title: "Весеннее настроение для каждой",
    description:
      "8 Марта - это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.\n",
  },
  {
    img: "../images/status-3.png",
    title: "ЗОЖ или ФАСТФУД. A вы на чьей стороне? Голосуем!",
    description:
      "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
  },
];

let statusRow = document.getElementById("statusRow");

function getStatus(img, title, description) {
  let statusCard = document.createElement("div");
  let mainStatus = document.createElement("div");
  mainStatus.className = "col-12";
  mainStatus.classList.add("col-lg-4");
  mainStatus.classList.add("mt-3");
  mainStatus.classList.add("mt-lg-0");

  let status_body=document.createElement("div");

  statusCard.classList.add("status__card");
  let status_img = document.createElement("img");
  status_img.src = img;
  statusCard.append(status_img);

  let status_date = document.createElement("h5");
  status_date.innerHTML = "05.03.2021";
  status_body.append(status_date);

  let status_title = document.createElement("h4");
  status_title.innerHTML = title;
  status_body.append(status_title);

  let status_description = document.createElement("p");
  status_description.innerHTML = description;
  status_body.append(status_description);

  let status_btn = document.createElement("button");
  status_btn.innerHTML = "Подробнее";
  status_body.append(status_btn);

  statusCard.append(status_body);

  mainStatus.append(statusCard);

  return mainStatus;
}

for (el of statObject) {
  let card = getStatus(el.img, el.title, el.description);
  statusRow.append(card);
}
