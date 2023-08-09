const filter = document.getElementById("filter");
const anime = document.getElementById("anime");
const main = document.getElementById("main");
const listPlaces = document.getElementById("list-places");
const listGuests = document.getElementById("list-guests");
const listSearch = document.getElementById("list-search");
const places = document.getElementById("places");
const guest = document.getElementById("guest");
const lists = document.getElementById("lists");
const listInner = document.getElementById("lists").innerHTML;

// *filter appear
filter.onclick = () => {
 anime.style.animation = "filter .5s forwards";
 main.style.opacity = ".7";
};
// *list opacity
listGuests.onmouseover = () => {
 listGuests.style.opacity = "1";
 listPlaces.style.opacity = ".5";
 listPlaces.style.transition = ".5s ease-in-out";
 listGuests.style.transition = ".5s ease-in-out";
};
listPlaces.onmouseover = () => {
 listPlaces.style.opacity = "1";
 listGuests.style.opacity = "0.5";
 listPlaces.style.transition = ".5s ease-in-out";
 listGuests.style.transition = ".5s ease-in-out";
};

// *location set
const locationClick = document.getElementsByClassName("location-click");
const locations = document.getElementById("locations");

for (let i = 0; i < locationClick.length; i++) {
 locationClick[i].onclick = () => {
  let m = locationClick[i].innerHTML;
  locations.innerHTML = `Location set to :  ${m}`;
  places.innerHTML = `${m}`;
 };
}

// *guest set
const guestClick = document.getElementsByClassName("guest-click");
const guests = document.getElementById("guests");
for (let i = 0; i < guestClick.length; i++) {
 guestClick[i].onclick = () => {
  let m = guestClick[i].innerHTML;
  guests.innerHTML = `Number of Guests :  ${m}`;
  guest.innerHTML = `${m}`;
 };
}

// *filter vanish
main.onclick = () => {
 if ((listSearch.innerHTML = `<img src="assets/images/search2.png"/> Search`)) {
  main.style.opacity = "1";
  anime.style.animation = "rev-filter .5s forwards";
  places.innerHTML = "J&K";
  guest.innerHTML = "Add Guests";
  locations.innerHTML = "Location set to : J&K";
  guests.innerHTML = "Guests :";
 }
};

// *responsive filter
if (screen.width < 980) {
 console.log("screen smol");
 listGuests.onmouseover = () => {
  console.log("lol");
  listGuests.style.opacity = "1";
  listGuests.style.zIndex = "9";
 };
}

// *search function
const card = document.getElementsByClassName("cards");
const sgr = document.getElementsByClassName("sgr");
const anant = document.getElementsByClassName("anant");
const barm = document.getElementsByClassName("barm");
const resultant = document.getElementById("resultant-stays");
const result = document.getElementById("resultant-place");
let sgrtest = /Srinagar/;
let anantest = /Anantnag/;
let baratest = /Baramulla/;
const room = document.getElementsByClassName("room");
const apart = document.getElementsByClassName("apart");
const house = document.getElementsByClassName("house");
let roomtest = /1/;
let aparttest = /4/;
let housetest = /8/;

listSearch.onclick = () => {
 if (locations.innerHTML.length > 17 || guests.innerHTML.length > 9) {
  console.log("works");
  main.style.opacity = "1";
  anime.style.animation = "rev-filter .5s forwards";
  for (let i = 0; i < card.length; i++) {
   card[i].style.display = "none";
  }
 }
 if (sgrtest.test(locations.innerHTML)) {
  for (let i = 0; i < sgr.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   result.innerHTML = "Stays in Srinagar";
   sgr[i].style.display = "block";
  }
 } else if (anantest.test(locations.innerHTML)) {
  for (let i = 0; i < anant.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   result.innerHTML = "Stays in Anantnag";
   anant[i].style.display = "block";
  }
 } else if (baratest.test(locations.innerHTML)) {
  for (let i = 0; i < barm.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   result.innerHTML = "Stays in Baramullah";
   barm[i].style.display = "block";
  }
 }
 if (roomtest.test(guests.innerHTML)) {
  for (let i = 0; i <= room.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   room[i].style.display = "block";
  }
 } else if (aparttest.test(guests.innerHTML)) {
  for (let i = 0; i <= anant.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   apart[i].style.display = "block";
  }
 } else if (housetest.test(guests.innerHTML)) {
  for (let i = 0; i <= barm.length; i++) {
   resultant.innerHTML = `${i + 1} stays`;
   house[i].style.display = "block";
  }
 } else {
  for (let i = 0; i < card.length; i++) {
   card[i].style.display = "inline-block";
  }
 }
};

// *nav change on scroll
const nav = document.getElementById("nav");
document.onscroll = () => {
 if (document.documentElement.scrollTop > 10) {
  nav.style.padding = "30px 0";
  nav.style.transition = ".1s ease-in-out";
 }
};
