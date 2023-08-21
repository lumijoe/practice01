'use strict';

//easing
const heading = document.querySelector('#heading');
const keyframes = {
  opacity:  [0, 1],
  translate:['0 50px', 0],
};
const options = {
  duration: 2000,
  easing: 'ease',
};

heading.animate(keyframes, options);


//ハンバーガーメニュー
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#menu-panel');

menuIcon.addEventListener('click', function() {
  mobileMenu.classList.toggle('visible');
});






//title(タブ、ドキュメント)
const practiceName   = 'practiceKojo_';
const practiceNumber = '15'; //
document.title = practiceName + practiceNumber;
const documentTitle = document.getElementById('documentTitle');
documentTitle.textContent = document.title;

//main
//menu
const menu = document.querySelector('#menu');
const lists = [
  {name: 'ザクロドリンク', img: 'drink1_re.jpg'},
  {name: 'ソイサラダボウル', img: 'food1_re.jpg'},
  {name: 'カフェラテ', img: 'coffee1re.jpg'},
];

for (let i = 0; i < lists.length; i++) {
  const {name, img} = lists[i];
  const content = `<div><img src="img/${img}" alt=""><p><br>${name}</p></div>`;
  menu.insertAdjacentHTML('beforeend', content);
}

//Product　オブジェクト指向仕様
class ProductObj{
  constructor(pic, caption) {
    this.pic = pic;
    this.caption = caption;
  }

  display() {
    const imageElement = document.createElement("img");
    imageElement.src = this.pic;

    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    productContainer.appendChild(imageElement);
 
    const captionElement = document.createElement("p");
    captionElement.textContent = this.caption;
    productContainer.appendChild(captionElement);

    document.getElementById("products-container").appendChild(productContainer);
  }
}

const productsData = [
  {pic: "img/handsoap.jpg", caption: "天然ソープ"},
  {pic: "img/cup.jpg", caption: "オリジナルマグカップ"},
  {pic: "img/aromacandle.jpg", caption: "アロマキャンドル / night"},
  {pic: "img/aromacandle2.jpg", caption: "アロマキャンドル / morning"},
];

productsData.forEach(function(data) {
  const product = new ProductObj(data.pic, data.caption);
  product.display();
});

//event
const event = document.querySelector('#event');
const lists2 = [
  {name: 'お誕生日会', img: 'party_birthday.jpg'},
  {name: '結婚式2次会', img: 'party_wedding.jpg'},
  {name: '音楽イベント', img: 'event_music.jpg'},
  {name: 'お料理ワークショップ', img: 'event_workshop.jpg'},
];

for (let i = 0; i < lists2.length; i++) {
  const {name, img} = lists2[i];
  const content = `<div><img src="img/${img}" alt=""><p><br>${name}</p></div>`;
  event.insertAdjacentHTML('beforeend', content);
}
