const filter = document.getElementById("filter");
const anime = document.getElementById("anime");
const main = document.getElementById("main")
const listPlaces = document.getElementById("list-places");
const listGuests = document.getElementById("list-guests");
const listSearch = document.getElementById("list-search");

// filter appear
filter.onclick = () => {
    anime.style.animation = "filter .5s forwards"
    main.style.opacity = ".7";
    listSearch.innerHTML = `<img src="assets/images/search2.png"/> Search`
};
// list opacity 
listPlaces.onclick = () => {
    listPlaces.style.opacity = "1";
    listGuests.style.opacity = ".5"
}
listGuests.onclick = () => {
    listGuests.style.opacity = "1";
    listPlaces.style.opacity = ".5"
}
// filter vanish 
main.onclick = () => {
    if (listSearch.innerHTML = `<img src="assets/images/search2.png"/> Search`) {
        main.style.opacity = "1";
        anime.style.animation = "rev-filter .5s forwards"
    }
}

// location set 
const locationClick = document.getElementsByClassName("location-click");
const locations = document.getElementById("locations");

for (let i = 0; i < locationClick.length; i++) {
    locationClick[i].onclick = () => {
    let m = locationClick[i].innerHTML;
    locations.innerHTML = `Location set to :  ${m}`;
 TODO:locationClick[i].innerHTML = "J&K";  
   }
}

// guest set 
const guestClick = document.getElementsByClassName("guest-click");
const guests = document.getElementById("guests");

for (let i = 0; i < guestClick.length; i++) {
    guestClick[i].onclick = () => {
    let m = guestClick[i].innerHTML;
    guests.innerHTML = `Location set to :  ${m}`;
    }
}

// search function 
const card = document.getElementsByClassName("card");
const sgr = document.getElementsByClassName("sgr");
const anant = document.getElementsByClassName("anant");
const barm = document.getElementsByClassName("barm");
const resultant = document.getElementById("resultant-stays");
const result = document.getElementById("resultant-place");
let sgrtest = /Srinagar/;
let anantest = /Anantnag/;
let baratest = /Baramulla/;

listSearch.onclick = () => {
    if (locations.innerHTML.length > 17 || guests.innerHTML.length > 9) {
        main.style.opacity = "1";
        anime.style.animation = "rev-filter .5s forwards";
        for(let i = 0; i < card.length; i++){
            card[i].style.display = "none";
        }
    }
    if (sgrtest.test(locations.innerHTML)) {
        for(let i = 0; i < sgr.length; i++){  
           resultant.innerHTML = `${i + 1} stays`;
           result.innerHTML = "Stays in Srinagar";
           sgr[i].style.display = "block";
        }
    } else if (anantest.test(locations.innerHTML)){
            for(let i = 0; i < anant.length; i++){  
               resultant.innerHTML = `${i + 1} stays`;
               result.innerHTML = "Stays in Anantnag";
               anant[i].style.display = "block";
            }
    } else if (baratest.test(locations.innerHTML)){
        for(let i = 0; i < barm.length; i++){  
            resultant.innerHTML = `${i + 1} stays`;
            result.innerHTML = "Stays in Baramullah";
            barm[i].style.display = "block";
         } 
        } else {
            for(let i = 0; i < card.length; i++){
                card[i].style.display = "inline-block";
            }
         }
    }


// card click TODO:
for(let i = 0; i < card.length; i++){
    card[i].onclick = function () {
        console.log("card clicked");
        card[i].style.animation = "whoosh 1s forwards"
    };
}

// nav change on scroll 
let nav = document.getElementById("nav");
document.onscroll = () => {
    if (document.width > 1000){
    if (document.documentElement.scrollTop > 60){
        console.log("scrolled");
        nav.style.padding = "30px 0"
    }else{
        nav.style.padding = "50px 0" 
    }
}
}
