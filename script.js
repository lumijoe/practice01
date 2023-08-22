'use strict';

//easing
const heading = document.querySelector('#heading');
const keyframes = {
  opacity:  [0, 1],
  translate:['0 50px', 0],
};
const options = {
  duration: 2000,
  easing: 'ease-in-out',
};

heading.animate(keyframes, options);

//ハンバーガーメニュー
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#menu-panel');
const closeIcon = mobileMenu.querySelector('.visible');

menuIcon.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
});
closeIcon.addEventListener('click', function() {
mobileMenu.classList.add('hidden');
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (target.closest('a[href="#menu-area"]')) {
    mobileMenu.classList.remove('hidden'); // メニューを閉じる
  }
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

//wear
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
const mainImage = document.querySelector('.gallery-image img');

thumbImages.forEach(function(thumbImage) {
  thumbImage.addEventListener('mouseover', function(event) {
    mainImage.src = event.target.src;
    mainImage.animate({ opacity: [0, 1] }, 500);
  });
});

window.addEventListener('DOMContentLoaded', function() {
  const firstThumbnail = document.querySelector('.gallery-thumbnails li:first-child img');
  const galleryImage = document.querySelector('.gallery-image img');

  // 最初のサムネイル画像を初期ギャラリー画像に設定
  galleryImage.src = firstThumbnail.src;
});