




var mp3=new Audio("https://lingjiati.github.io/oh.mp3");

mp3.play();

var png = document.createElement("img");

png.src="https://lingjiati.github.io/oh.jpg";

document.body.appendChild(png);

png.style.position="fixed";

png.style.zIndex="100";
mp3.loop=true;
png.style.top="50vh";
png.style.left="50vw";
png.style.transform="translate(-50%,-50%)";
setInterval(function(){png.style.display="none";setTimeout(function(){png.style.display="block"},200)},400);
