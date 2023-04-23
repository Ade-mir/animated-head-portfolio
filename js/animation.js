// Define DOM elements
const heroImage = document.querySelector("#hero__animation__img");

const tl = document.querySelector("#grid__tl");
const tr = document.querySelector("#grid__tr");
// const bl = document.querySelector("#grid__bl");
// const br = document.querySelector("#grid__br");

const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
// const blBtn = document.querySelector("#grid__bl__btn");
// const brBtn = document.querySelector("#grid__br__btn");

const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
// const blContent = document.querySelector("#grid__bl__content");
// const brContent = document.querySelector("#grid__br__content");

// const projectOne = document.querySelector(".p-1");
// const projectTwo = document.querySelector(".p-2");
// const projectThree = document.querySelector(".p-3");

// Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define corner that is open
let activeCorner = "";

// Add an event listener to the window object to listen for resize events
window.addEventListener("resize", handleWindowResize);

// Function that hanldes the styling when resizing window
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
        trBtn.style.zindex = "100";
        // blBtn.style.zindex = "100";
        // brBtn.style.zindex = "100";
      } else {
        tlActive = "translateX(5vw) translateY(0)";
        tlContent.style.transform = "translateX(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
      }
      break;

    case "top-right":
      if (window.innerWidth <= 1100) {
        trActive = "translateX(0) translateY(0)";
        trContent.style.transform = "translateX(0vw) translateY(0)";
        trContent.style.width = "100vw";
        trContent.style.height = "100vh";
        trContent.style.top = "0";
        trContent.style.display = "flex";
        trContent.style.alignItems = "center";
        trContent.style.justifyContent = "center";
        trContent.style.background = "var(--bg-transparent)";
        trContent.style.zIndex = "200";
        trBtn.style.zIndex = "300";
        tlBtn.style.zindex = "100";
        // blBtn.style.zindex = "100";
        // brBtn.style.zindex = "100";
      } else {
        trActive = "translateX(-5vw) translateY(0)";
        trContent.style.transform = "translateX(-5vw) translateY(0)";
        trContent.style.width = "30vw";
        trContent.style.height = "0";
        trContent.style.top = "10vh";
        trContent.style.display = "block";
      }
      break;

    case "bottom-left":
      // some code
      break;

    case "bottom-right":
      // some other code
      break;

    default:
  }
}

// Store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function
function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  //   blBtn.innerHTML = "Projects"
  //   brBtn.innerHTML = "Contact"

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;
    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;
    // case "bottom-left":
    //   tlBtn.style.background = bgColor;
    //   tlBtn.style.color = textColor;
    //   tlContent.style.transform = tlHidden;
    //   break;
    // case "bottom-right":
    //   tlBtn.style.background = bgColor;
    //   tlBtn.style.color = textColor;
    //   tlContent.style.transform = tlHidden;
    //   break;

    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// Onclick corner button functions
tlBtn.onclick = function () {
  if (activeCorner === "top-left") {
    playClosingAnimation("reverse-animate-top-left");
  } else {
    trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");

    // Change background colors
    trBtn.style.background = bgColor;
    // brBtn.style.background = bgColor;
    // blBtn.style.background = bgColor;
    tlBtn.style.background = bgColorAlt;

    // Change text colors
    trBtn.style.color = textColor;
    // brBtn.style.color = textColor;
    // blBtn.style.color = textColor;
    tlBtn.style.color = textColorAlt;

    // Change positions of the corner content
    trContent.style.transform = trHidden;
    // brContent.style.transform = brHidden;
    // blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
  }
};

trBtn.onclick = function () {
  if (activeCorner === "top-right") {
    playClosingAnimation("reverse-animate-top-right");
  } else {
    tlBtn.innerHTML = "About";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contact";

    // Setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";

    handleWindowResize();
    playAnimation("animate-top-right", "reverse-animate-top-right");

    // Change background colors
    trBtn.style.background = bgColorAlt;
    // brBtn.style.background = bgColor;
    // blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // Change text colors
    trBtn.style.color = textColorAlt;
    // brBtn.style.color = textColor;
    // blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // Change positions of the corner content
    trContent.style.transform = trActive;
    // brContent.style.transform = brHidden;
    // blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};

// blBtn.onclick = function () {
//   if (activeCorner === "bottom-left") {
//     playClosingAnimation("reverse-animate-bottom-left");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     brBtn.innerHTML = "Contact";

//     Setting activeCorner
//     activeCorner = "bottom-left";
//     blBtn.innerHTML = "Projects<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

//     Change background colors
//     trBtn.style.background = bgColor;
//     brBtn.style.background = bgColor;
//     blBtn.style.background = bgColorAlt;
//     tlBtn.style.background = bgColor;

//     Change text colors
//     trBtn.style.color = textColor;
//     brBtn.style.color = textColor;
//     blBtn.style.color = textColorAlt;
//     tlBtn.style.color = textColor;

//     Change positions of the corner content
//     trContent.style.transform = trHidden;
//     brContent.style.transform = brHidden;
//     blContent.style.transform = blActive;
//     tlContent.style.transform = tlHidden;
//   }
// };

// brBtn.onclick = function () {
//   if (activeCorner === "bottom-right") {
//     playClosingAnimation("reverse-animate-bottom-right");
//   } else {
//     tlBtn.innerHTML = "About";
//     trBtn.innerHTML = "Experience";
//     blBtn.innerHTML = "Projects";

//     Setting activeCorner
//     activeCorner = "bottom-right";
//     brBtn.innerHTML = "Contact<br/>&darr;";

//     handleWindowResize();
//     playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

//     Change background colors
//     trBtn.style.background = bgColor;
//     brBtn.style.background = bgColorAlt;
//     blBtn.style.background = bgColor;
//     tlBtn.style.background = bgColor;

//     Change text colors
//     trBtn.style.color = textColor;
//     brBtn.style.color = textColorAlt;
//     blBtn.style.color = textColor;
//     tlBtn.style.color = textColor;

//     Change positions of the corner content
//     trContent.style.transform = trHidden;
//     brContent.style.transform = brActive;
//     blContent.style.transform = blHidden;
//     tlContent.style.transform = tlHidden;
//   }
// };
