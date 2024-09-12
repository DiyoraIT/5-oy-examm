let box = document.querySelector(".box");
let inp = document.getElementById("input1");
let inp2 = document.getElementById("input2");
let btn = document.querySelector(".btn");
let box2 = document.querySelector(".box2");

let data = [232004];
let data1 = [232004];

alert(`sizningi Login ${data} 
pasword ${data1}`);

btn.addEventListener("click", () => {
  if (inp.value == data && inp2.value == data1) {
    let p = document.querySelector(".id");

    p.innerHTML = `<p>Xush kelibsiz</p>`;
    p.style.color = "#FAFFFD";
    p.style.backgroundColor = "#272727";
    p.style.padding = "10px";
    p.style.borderRadius = "20px";

    let block = document.querySelector(".block");
    block.style.display = "block";
    box2.append(block);
  } else {
    let p = document.querySelector(".id");

    p.innerHTML = `<p>Sizda ID yoki Password tog'ri emas</p>`;
    p.style.padding = "20px";
    p.style.color = "#FAFFFD";
    p.style.backgroundColor = "#272727";
    p.style.borderRadius = "20px";

    let block = document.querySelector(".block");
    block.style.display = "block";
    box2.append(block);
  }
  
    box2.append(p);
    let block = document.querySelector(".block");
    let h2 = document.querySelector(".h2");
    h2.style.color = "white";
    block.style.display = "block";
    box2.append(block);
    box2.append(h2);
});


let btn2 = document.querySelector(".btn2"); 

      btn2.addEventListener("click", () => {
          let question = prompt("Qanday savollingiz bor?");
          if (question) {
              let text = document.querySelector(".sender");
              text.innerHTML = "Ваш вопрос отправлен";
              text.style.color = "#FAFFFD";
              text.style.backgroundColor = "#272727";
              text.style.padding = "20px";
              text.style.borderRadius = "20px";
          }
        })