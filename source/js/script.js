/* в этот файл добавляет скрипты*/
 // Creating map options
 var mapOptions = {
  center: [59.968137, 30.316272],
  zoom: 35
}
// Creating a map object
var map = new L.map('map', mapOptions);

// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

// Icon options
var iconOptions = {
  iconUrl: 'img/map/pin.png',
  iconSize: [40, 50]
}
// Creating a custom icon
var customIcon = L.icon(iconOptions);

// Creating Marker Options
var markerOptions = {
  title: "Location",
  clickable: true,
  draggable: true,
  icon: customIcon
}
// Creating a Marker
var marker = L.marker([59.968137, 30.316272], markerOptions);

// Adding popup to the marker
marker.bindPopup('Энергия аккумулируется здесь').openPopup();

// Adding marker to the map
marker.addTo(map);

// Carousel On

let list = Array.from(document.body.querySelectorAll('.carousel__item'));
let pagination = Array.from(document.body.querySelectorAll('.carousel__toggle'));

let element = document.body.querySelector('.carousel');
const changeBackground = () => {
  i = list.indexOf(document.body.querySelector('.carousel__item--show'));
switch (i) {
  case 0:
    element.style.cssText = 'background-color: #f3ebe1';
    break;
  case 1:
    element.style.cssText = 'background-color: #eae6fc';
    break;
  case 2:
    element.style.cssText = 'background-color: #e5e6e8';
    break;
  }
};

document.body.querySelector('.carousel__button--prev').addEventListener ('click', () => {
	j = list.indexOf(document.body.querySelector('.carousel__item--show'));
	document.body.querySelector('.carousel__item--show').classList.remove('carousel__item--show');
  document.body.querySelector('.carousel__toggle--active').classList.remove('carousel__toggle--active');
  if (j >= 1) {
		list[j-1].classList.add('carousel__item--show');
		} else {
			list[0].classList.add('carousel__item--show');
		}
    changeBackground();
    pagination[i].classList.add('carousel__toggle--active');
  }
);

document.body.querySelector('.carousel__button--next').addEventListener ('click', () => {
  j = list.indexOf(document.body.querySelector('.carousel__item--show'));
	document.body.querySelector('.carousel__item--show').classList.remove('carousel__item--show');
  document.body.querySelector('.carousel__toggle--active').classList.remove('carousel__toggle--active');
  if ((list.length - 2) >= j) {
    list[j+1].classList.add('carousel__item--show');
    } else {
      list[list.length - 1].classList.add('carousel__item--show');
    }
    changeBackground();

    pagination[i].classList.add('carousel__toggle--active');
  }
);

document.body.querySelectorAll('.carousel__toggle').forEach((element) => {
  element.addEventListener ('click', (evt) => {
    document.body.querySelector('.carousel__item--show').classList.remove('carousel__item--show');
    document.body.querySelector('.carousel__toggle--active').classList.remove('carousel__toggle--active');
    evt.target.classList.add('carousel__toggle--active');
    list[pagination.indexOf(evt.target)].classList.add('carousel__item--show');
    changeBackground();
  });
});

let navMain = document.querySelector('.menu-nav');
let navToggle = document.querySelector('.menu-nav__toggle');

navMain.classList.remove('menu-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('menu-nav--closed')) {
    navMain.classList.remove('menu-nav--closed');
    navMain.classList.add('menu-nav--opened');
  } else {
    navMain.classList.add('menu-nav--closed');
    navMain.classList.remove('menu-nav--opened');
  }
});
