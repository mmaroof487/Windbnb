const x = document.getElementById("filter");
const y = document.getElementById("anime");
const z = document.getElementById("opac")
const b = document.getElementById("list-places");
const c = document.getElementById("list-guests");
const h = document.getElementById("list-search");

// filter show 
x.onclick = () => {
 y.style.animation = "filter .5s forwards"
 z.style.opacity= ".7";
 h.innerHTML= " <img src=\"assets/images/search2.png\"/> " +  " Search"
};
// list opacity 
b.onclick = () => {
    b.style.opacity= "1";
    c.style.opacity=".5"
}
c.onclick = () => {
    c.style.opacity= "1";
    b.style.opacity=".5"
}
// filter vanish 
h.onclick ,z.onclick  = () => {
if( h.innerHTML= " <img src=\"assets/images/search2.png\"/> " +  " Search"){
        z.style.opacity= "1"; 
        y.style.animation = "rev-filter .5s forwards"
    }
}

// location set 
const d = document.getElementById("location-click");
const e = document.getElementById("locations");
d.onclick = () => {
    let m = d.innerHTML;
    e.innerHTML= "Location set to : " + m;
};
// guest set 
const f= document.getElementById("guest-click");
const g = document.getElementById("guests");
f.onclick = () => {
    let n = f.innerHTML;
    g.innerHTML= "Guests : " + n;
};
// search function 
h.onclick  = () => {
    if ( e.innerHTML.length > 17 && g.innerHTML.length > 9 ){
            z.style.opacity= "1"; 
            y.style.animation = "rev-filter .5s forwards"
    }else{
        alert("Please select")
    }
}

    
// card click 
const a = document.getElementById("card");
a.onclick = function() {
    console.log("card clicked");
    a.style.animation = "whoosh 1s forwards"
};