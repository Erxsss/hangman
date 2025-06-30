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
const word = ["asdfskdf", "asdfasdih", "sysdffm", "sybsd", "asdfsd"];
const head = document.getElementsByClassName("head")[0];
const and = document.getElementsByClassName("an")[0];

function random() {
  keyCont.innerHTML = "";
  head.innerHTML = "";
  and.innerHTML = "";

  const ran = Math.floor(Math.random() * word.length);
  const inii = word[ran]; 
  const app = document.createElement("div"); 
  app.textContent = inii;
  app.style.gap = "5px";
  app.classList.add("appp");
  and.appendChild(app);
  app.style.display = "none";
  for (let i = 0; i < inii.length; i++) {
    const lin = document.createElement("div");
    lin.textContent = "__";
    lin.style.display = "inline-block";
    lin.style.marginRight = "5px";
    head.appendChild(lin);
  }

  for (let i = 0; i < keyboard.length; i++) {
    const ke = document.createElement("button");
    ke.textContent = keyboard[i];
    ke.style.width = "20px";
    ke.style.height = "20px";

    ke.addEventListener("click", () => {
      for (let j = 0; j < inii.length; j++) {
        const a = inii[j]
          .toLowerCase()
          .includes(keyboard[i].toLowerCase());
        if (a) {
          console.log("ok");
          for(let s = 0 ; s<app.length ; s++){
            const sd = app.includes(ke)
                if(sd){
                    app.style.display = "block";
                }
          }
        }
      }
    });

    keyCont.appendChild(ke);
  }
}

window.onload = random;
