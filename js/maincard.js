const search = document.querySelector(".searcher");
const results = document.querySelector(".results");

let stObject = [
    {
      img: "../images/stock-1.png",
      top: "../images/heart-button.png",
      discount: "../images/notice.png",
      cardPrice: "44,50 ₽",
      defPrice: "50,50 ₽",
      description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
      rating:3,
    },
    {
      img: "../images/stock-2.png",
      top: "../images/heart-button.png",
      discount: "../images/notice.png",
      cardPrice: "44,50 ₽",
      defPrice: "50,50 ₽",
      description: "Молоко ПРОСТОКВАШИНО паст. питьевое...",
      rating:4,
    },
    {
      img: "../images/stock-3.png",
      top: "../images/heart-button.png",
      discount: "../images/notice.png",
      cardPrice: "44,50 ₽",
      defPrice: "50,50 ₽",
      description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
      rating:5,
    },
    {
      img: "../images/stock-4.png",
      top: "../images/heart-button.png",
      discount: "../images/notice.png",
      cardPrice: "44,50 ₽",
      defPrice: "50,50 ₽",
      description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
      rating:2,
    },
  ];

  let stRow = document.getElementById("stockRow");

  function addStar(id,rating){
    let diver=document.getElementsByClassName(id);
   for (const i of diver) {
    i.innerHTML+=`<img src="../images/yellow-star.svg" />`;
   }
  }

function getCard2(img,top,discount,cardprice,def,des){
  return `<div class="stock__card col-6 col-md-4 col-lg-3 mt-3 mt-lg-0">
            <img src="${img}" class="w-100 stock__card\-img" />
            <img src="${top}" class="top"/>
            <img src="${discount}" class="discount" />
            <div class="stock__card-body">
                <div>
                  <h3>${cardprice}</h3>
                  <h3>${def}</h3>
                </div>
                <div>
                  <p>C картой</p>
                  <p>Обычная</p>
                </div>
                <h4 class="stock__card-text">
                  ${des}
                </h4>
              <div class="rating"></div>
              <button class="stock__card-btn">
                B корзину
              </button>
            </div>
          </div>`;
}



function getProducts(stObject) {
  stRow.innerHTML = "";
  for (el of stObject) {
    stRow.innerHTML += getCard2(el.img,el.top,el.discount,el.cardPrice,el.defPrice,el.description);
  }

  results.innerHTML = stObject.length
  ? `${stObject.length} ta mahsulot topildi !`
  : "Mahsulot topilmadi";
}
// console.log(getCard2(stObject[0].img,stObject[0].top,stObject[0].discount,stObject[0].cardPrice,stObject[0].defPrice,stObject[0].description));
getProducts(stObject);

// let starr=document.getElementsByClassName("stock__card");
// for (let i = 0; i < starr.length; i++) {
   addStar("rating",stObject[0].rating);
// }

let newObject = [
    {
      img: "../images/new-1.png",
      top: "../images/heart-button.png",
      cardPrice: "599,99 ₽",
      description: "Г/Ц Блинчики c мясом вес,вареные, Россия",
    },
    {
      img: "../images/new-2.png",
      top: "../images/heart-button.png",
      cardPrice: "44,50 ₽",
      description: "Молоко ПРОСТОКВАШИНО паст. питьевое...",
    },
    {
      img: "../images/new-3.png",
      top: "../images/heart-button.png",
      cardPrice: "159,99 ₽",
      description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ...",
    },
    {
      img: "../images/new-4.png",
      top: "../images/heart-button.png",
      cardPrice: "44,50 ₽",
      description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ...",
    },
  ];

  function getCard3(img,top,cardprice, des) {
    return `<div class="stock__card col-6 col-md-4 col-lg-3 mt-3 mt-lg-0">
      <img src="${img}" class="w-100 stock__card-img" /><img
        src="${top}"
        class="top"
      />
      <div class="stock__card-body">
        <div><h3>${cardprice}</h3></div>
        <div><p>C картой</p></div>
        <h4 class="stock__card-text">${des}</h4>
        <img src="../images/rating-1.png" /><button class="stock__card-btn">
          B корзину
        </button>
      </div>
    </div>
    `;
}


let newRow = document.getElementById("newRow");

function getProducts2(newObject) {
    newRow.innerHTML = "";
    for (el of newObject) {
      newRow.innerHTML += getCard3(el.img,el.top,el.cardPrice,el.description);
    }
  }
  // console.log(getCard2(stObject[0].img,stObject[0].top,stObject[0].discount,stObject[0].cardPrice,stObject[0].defPrice,stObject[0].description));
  getProducts2(newObject);

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

let prevRow = document.getElementById("prevRow");

function getProducts3(prevObject) {
    prevRow.innerHTML = "";
    for (el of prevObject) {
      prevRow.innerHTML += getCard3(el.img,el.top,el.cardPrice,el.description);
    }
  }

  // console.log(getCard2(stObject[0].img,stObject[0].top,stObject[0].discount,stObject[0].cardPrice,stObject[0].defPrice,stObject[0].description));
  getProducts3(prevObject);


  search.addEventListener("input", function () {
    let res = [];
    for (el of stObject) {
      let title = el.description.toLowerCase();
      let search = this.value.toLowerCase().trim();
      if (title.includes(search)) {
        res.push(el);
      }
    }
    getProducts(res);
  });

  search.addEventListener("input", function () {
    let res = [];
    for (el of newObject) {
      let title = el.description.toLowerCase();
      let search = this.value.toLowerCase().trim();
      if (title.includes(search)) {
        res.push(el);
      }
    }
    getProducts2(res);
  });

  search.addEventListener("input", function () {
    let res = [];
    for (el of prevObject) {
      let title = el.description.toLowerCase();
      let search = this.value.toLowerCase().trim();
      if (title.includes(search)) {
        res.push(el);
      }
    }
    getProducts3(res);
  });


