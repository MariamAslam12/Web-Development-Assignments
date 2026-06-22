var season = prompt(
"Choose Season: Summer, Winter, Spring, Autumn"
);
var data={

    summer:{

title:"Summer",
temp:"35°C",
img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
particle:"☀️"

},

winter:{

title:"Winter",
temp:"5°C",
img:"https://i.ebayimg.com/images/g/ZSMAAOSwPyhoHA6l/s-l1200.png",
particle:"❄️"

},

spring:{

title:"Spring",
temp:"25°C",
img:"https://images.stockcake.com/public/e/3/d/e3d9e18c-0a81-49e6-951a-41b65db3de18_large/blooming-orchard-view-stockcake.jpg",
particle:"🌸"

},

autumn:{

title:"Autumn",
temp:"18°C",
img:"https://static.vecteezy.com/system/resources/previews/074/014/648/non_2x/a-vibrant-autumn-forest-path-is-covered-with-bright-orange-and-red-fallen-leaves-photo.jpg",
particle:"🍂"

}
};

var body=document.body;

var card=document.getElementById("weatherCard");

if(season){


var s=season.toLowerCase();

if(data[s]){


document.querySelector("h1").innerHTML=data[s].title;



card.innerHTML=`

<div class="card">

<img src="${data[s].img}">


<div class="card-content">

<h2>${data[s].title}</h2>

<div class="temp">
${data[s].temp}
</div>


</div>


</div>

`;
card.style.display="block";

for(var i=0;i<25;i++){


var p=document.createElement("div");


p.className="particle";

p.innerHTML=data[s].particle;


p.style.left=Math.random()*100+"%";


p.style.animationDuration=
(3+Math.random()*5)+"s";



p.style.fontSize=
(15+Math.random()*25)+"px";

p.style.zIndex = "1";

body.appendChild(p);


}



}

else{

alert("Invalid Season");

}



}