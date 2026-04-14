window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      let opacity = Math.min(scroll / 300, 1);

      document.getElementById("overlay").style.opacity = opacity;
    });

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let opacity = Math.min(scroll / 300, 1);
  document.getElementById("overlay").style.opacity = opacity;
});


const bubbleLayer = document.querySelector(".bubble-layer");

function createBubble() {
    const bubble = document.createElement("div");

    let size = Math.random() * 80 + 20;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.position = "absolute";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.bottom = "-50px";
    bubble.style.borderRadius = "50%";
    bubble.style.background = "rgba(255,255,255,0.5)";
    bubble.style.opacity = Math.random() * 0.5 + 0.3;
    bubble.style.boxShadow = "0 0 15px rgba(255,255,255,0.8)";

    bubbleLayer.appendChild(bubble);

    let speed = Math.random() * 2 + 1;
    let pos = -50;

    function animateBubble() {
        pos += speed;
        bubble.style.bottom = pos + "px";

        if (pos < window.innerHeight + 50) {
            requestAnimationFrame(animateBubble);
        } else {
            bubble.remove();
        }
    }

    animateBubble();
}

setInterval(createBubble, 1000);


function toggleMenu() {
  const nav = document.querySelector(".navbar");
  const burger = document.getElementById("hamburger");

  nav.classList.toggle("active");
  burger.classList.toggle("active");
}

const canvas = document.getElementById("air");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("load", function() {
            var semuaBar = document.querySelectorAll(".progress-bar .isi");
        
            setTimeout(function() {
                semuaBar.forEach(function(bar) {
                    var nilai = bar.getAttribute("data-nilai");
                    bar.style.width = nilai + "%";
                });
            }, 300);
        });
        

 window.addEventListener("load", function() {
            var items = document.querySelectorAll(".timeline-item");
            items.forEach(function(item, i) {
                setTimeout(function() {
                    item.style.opacity = "1";
                    item.style.transform = "translateX(0)";
                }, i * 300);
            });
        });



window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});