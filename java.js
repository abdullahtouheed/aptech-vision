document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');
    const hov = document.getElementById('hov');
    const nav = document.getElementById('nav');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            hov.style.display = 'flex';
            nav.style.background="linear-gradient(90deg, #667eea 0%, #764ba2 100%);";
        });
    });

    hov.addEventListener('mouseleave', () => {
        hov.style.display = 'none';
        nav.style.background=" linear-gradient(90deg, #667eea 0%, #764ba2 100%);";
    });

    hov.addEventListener('mouseenter', () => {
        hov.style.display = 'flex';
        
    });

    hov.addEventListener('mouseleave', () => {
        hov.style.display = 'none';
    });

    let toggle = false;

    setInterval(() => {
        document.querySelectorAll(".transition").forEach(element => {
            element.style.opacity = 0;
            element.style.transform = "translateX(100%)";
        });

        setTimeout(() => {
            if (toggle) {
                document.querySelector("h2").innerHTML = "Our Concept";
                document.querySelector("h3").innerHTML = "Online Service From Home <br>Provide Good Impression";
            } else {
                document.querySelector("h2").innerHTML = "We Care";
                document.querySelector("h3").innerHTML = "Experience Quality Health Care at Our Facility";
            }

            toggle = !toggle;

            document.querySelectorAll(".transition").forEach(element => {
                element.style.opacity = 1;
                element.style.transform = "translateX(0)";
            });
        }, 1000);
    }, 1000);

    setTimeout(() => {
        document.querySelector("#pre").style.display = "none";
        document.querySelector("#main").style.display = "block";
        
        // Restart the marquee by removing and re-adding the marquee element
        const marquee = document.querySelector('marquee');
        const marqueeParent = marquee.parentElement;
        marqueeParent.removeChild(marquee);
        marqueeParent.appendChild(marquee);
    }, 3500);
});

var a= document.getElementById("c1").addEventListener("mouseover",()=>{
    var b = document.getElementById("car");
    var c =document.getElementById("l1");
    b.style.transform="scale(1.3)";
  

   
});
var b= document.getElementById("c1").addEventListener("mouseleave",()=>{
    var b = document.getElementById("car");
   
    b.style.transform="scale(1)";
  

   
});
var c= document.getElementById("c2").addEventListener("mouseleave",()=>{
    var b = document.getElementById("cars");
   
    b.style.transform="scale(1)";
  

   
});
var d= document.getElementById("c3").addEventListener("mouseleave",()=>{
    var b = document.getElementById("carss");
   
    b.style.transform="scale(1)";
  

   
});
var b= document.getElementById("c4").addEventListener("mouseleave",()=>{
    var b = document.getElementById("carsss");
   
    b.style.transform="scale(1)";
  

   
});

var a= document.getElementById("c2").addEventListener("mouseover",()=>{
    var b = document.getElementById("cars");
    var d=document.getElementById("c1")
    var c =document.getElementById("l1");
    b.style.transform="scale(1.3)";
    d.style.transform="scale(0)";
  

   
});

var a= document.getElementById("c3").addEventListener("mouseover",()=>{
    var b = document.getElementById("carss");
    var d=document.getElementById("c2")
    var c =document.getElementById("l1");
    b.style.transform="scale(1.3)";
    d.style.transform="scale(0)";
  

   
});


var a= document.getElementById("c4").addEventListener("mouseover",()=>{
    var b = document.getElementById("carsss");
    var d=document.getElementById("c3 ")
    var c =document.getElementById("l1");
    b.style.transform="scale(1.3)";
    d.style.transform="scale(0)";
  

   
});
const mouse = newV2();
const center = newV2();
const distanceFromCenter = newV2();
const distanceLerped = newV2();
let simulateMouseMovement = true;

const perspective = 500;
const translateZ = -12;
const rotate = 3;
const skew = 3;

const container = document.getElementById("container");
const copies = document.getElementsByClassName("copy");

function updateCenter() {
  const rect = container.getBoundingClientRect();
  center.x = rect.left + rect.width / 2;
  center.y = rect.top + rect.height / 2;
}

function trackMousePosition(event) {
  simulateMouseMovement = false;
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  distanceFromCenter.x = center.x - mouse.x;
  distanceFromCenter.y = center.y - mouse.y;
}

function fakeMousePosition(t) {
  distanceFromCenter.x = Math.sin(t / 500) * window.innerWidth * 0.5;
  distanceFromCenter.y = Math.cos(t / 500) * window.innerWidth * 0.2;
}

function updateTextPosition(t) {
  if (simulateMouseMovement) fakeMousePosition(t);

  lerpV2(distanceLerped, distanceFromCenter);

  for (var i = 1; i < copies.length + 1; i++) {
    const copy = copies[i - 1];
    copy.style.transform = makeTransformString(
      i * distanceLerped.y * 0.03,
      i * translateZ,
      i * rotate * (distanceLerped.x * 0.003),
      i * skew * (distanceLerped.x * 0.003)
    );
  }

  requestAnimationFrame(updateTextPosition);
}

function makeTransformString(y, z, rotate, skew) {
  return `perspective(${perspective}px) translate3d(0px, ${y}px, ${z}px) rotate(${rotate}deg) skew(${skew}deg)`;
}

function lerpV2(position, targetPosition) {
  position.x += (targetPosition.x - position.x) * 0.2;
  position.y += (targetPosition.y - position.y) * 0.2;
}

function newV2(x = 0, y = 0) {
  return {
    x: x,
    y: y
  };
}

updateCenter();
document.addEventListener("mousemove", trackMousePosition);
window.addEventListener("resize", updateCenter);
requestAnimationFrame(updateTextPosition);
