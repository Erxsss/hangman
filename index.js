const keyboard = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const keyCont = document.getElementsByClassName("keyCont")[0];
const word = [
  "Erkhs galzu",
  "Bachig",
  "hanbajamba",
  "guideg mashin",
  "semben ovoo",
];
const and = document.getElementsByClassName("head")[0];
const upper = document.getElementsByClassName("an")[0];
const ald = document.getElementById("myH1");
const hi = document.getElementsByClassName("hi")[0];
const hw = document.getElementById("hw");
const audio = document.getElementById("mya");
const restart =document.getElementById("Restart");
const start = document.getElementById("start");
let aldaa = 0;
let inii = "";
let arr = [];
function random() {
  upper.style = "background-image: url(photos/0.jpg);";
  audio.currentTime = 0;
  ald.textContent = `Алдаа:0`;
  audio.play();
  aldaa = 0;
  us=0  ;
  arr = [];
  hi.style.display = "none";
  keyCont.innerHTML = "";
  and.innerHTML = "";
  const ran = Math.floor(Math.random() * word.length);
  inii = word[ran].toLowerCase();
  console.log(inii);
  come();

  for (let i = 0; i < keyboard.length; i++) {
    const ke = document.createElement("button");
    ke.textContent = keyboard[i];
    ke.style.width = "30px";
    ke.style.height = "30px";

    ke.addEventListener("click", () => {
      ke.disabled = true;
      let us = 0;
      let zov = 0;
      const usg = ke.textContent.toLowerCase();
      for (let j = 0; j < inii.length; j++) {
        const a = inii.includes(usg);
        if (a === false) {
          us++;
          console.log(us);
        }
        if (us === inii.length) {
          aldaa++;
          console.log(aldaa);
        }
        if (inii[j] === usg) {
          arr[j].textContent = usg;
          let x = true;
          for (let i = 0; i < arr.length; i++) {
            if (arr[i].textContent === "_") {
              x = false;
            }
          }
          if (x) {
            hi.style.display = "block";
            hw.textContent = "You win !";
            document.querySelector(".hi").style.display = "flex";
            stop();
          }
        }
        if (aldaa === 1) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/1.jpg);";
        }
        if (aldaa === 2) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/2.jpg);";
        }
        if (aldaa === 3) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/3.jpg);";
        }
        if (aldaa === 4) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/4.jpg);";
        }
        if (aldaa === 5) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/5.jpg);";
        }
        if (aldaa === 6) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/6.jpg);";
        }
        if (aldaa === 7) {
          ald.textContent = `Алдаа:${aldaa}`;
          upper.style = "background-image: url(photos/7.jpg);";
          hi.style.display = "block";
          hw.textContent = "You lost !";
          document.querySelector(".hi").style.display = "flex";
          stop();
        }
      }
    });
    keyCont.appendChild(ke);
  }
  function come() {
    for (let i = 0; i < inii.length; i++) {
      const lin = document.createElement("div");
      if (inii[i] === " ") {
        lin.textContent = " ";
        and.appendChild(lin);
        arr.push(lin);
      } else {
        lin.textContent = "_";
        and.appendChild(lin);
        arr.push(lin);
      }
    }
  }
  function stop(){
    audio.pause();
  }
}
start.addEventListener("click", () => {
  random();
  audio.play();
});
restart.addEventListener("click",()=>{
  random();
  audio.play();
});