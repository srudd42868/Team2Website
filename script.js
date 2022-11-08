const img = document.createElement("img");
img.src = "http://wallpapercave.com/wp/mszxCDr.jpg";
var clicker = document.getElementsByClassName("clicker");
console.log(clicker);
var count = 0;

img.addEventListener("click", function() {
    console.log(count);
    clicker[0].textContent = 'Moon has been clicked ' + count++ + ' times.';
  })


document.body.appendChild(img);