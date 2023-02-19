let obj = [
  {
    img: "../images/catalog-1.png",
    text: "Молоко, сыр, яйцо",
  },
  {
    img: "../images/catalog-2.png",
    text: "Хлеб",
  },
  {
    img: "../images/catalog-3.png",
    text: "Фрукты и овощи",
  },
  {
    img: "../images/catalog-4.png",
    text: "Замороженные продукты",
  },
  {
    img: "../images/catalog-5.png",
    text: "Напитки",
  },
  {
    img: "../images/catalog-7.png",
    text: "Кондитерские изделия",
  },
  {
    img: "../images/catalog-8.png",
    text: "Чай, кофе",
  },
  {
    img: "../images/catalog-6.png",
    text: "Бакалея",
  },
  {
    img: "../images/catalog-9.png",
    text: "Здоровое питание",
  },
  {
    img: "../images/catalog-10.png",
    text: "Зоотовары",
  },
  {
    img: "../images/catalog-11.png",
    text: "Детское питание",
  },
  {
    img: "../images/catalog-12.png",
    text: "Мясо, птица, колбаса",
  },
  {
    img: "../images/catalog-13.png",
    text: "Непродовольственные товары",
  },
];

let section = document.querySelector(".catalogRow");

const searcher = document.querySelector(".searcher");
const resulter = document.querySelector(".results");

function catalogCard(img, text) {
  return `
    <div id="#${text}" class="col-12 col-md-6 col-lg-3 mt-3 catalog_main">
    <div class="catalog-card">
    <img src="${img}" alt="...">
    <div class="catalog-card-body">
    <p class="position-absolute">${text}</p>
    </div>
    </div>
    </div>
    `;
}

function getProductSs(obj) {
  section.innerHTML = "";
  for (el of obj) {
    section.innerHTML += catalogCard(el.img, el.text);
  }

  resulter.innerHTML = obj.length
    ? `${obj.length} ta mahsulot topildi !`
    : "Mahsulot topilmadi";
}
getProductSs(obj);

let catalog_card = document.getElementsByClassName("catalog_main");

catalog_card[0].classList.remove("col-lg-3");
catalog_card[9].classList.remove("col-lg-3");
catalog_card[11].classList.remove("col-lg-3");

searcher.addEventListener("input", function () {
  let res = [];
  for (el of obj) {
    let title = el.text.toLowerCase();
    let search = this.value.toLowerCase().trim();
    if (title.includes(search)) {
      res.push(el);
    }
  }
  getProductSs(res);
  
catalog_card[0].classList.remove("col-lg-3");
catalog_card[9].classList.remove("col-lg-3");
catalog_card[11].classList.remove("col-lg-3");
});

