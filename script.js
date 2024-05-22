
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const img = document.querySelector("img");
    const yes = document.querySelector(".yes-btn");
    const no = document.querySelector(".no-btn");
  
    yes.addEventListener("click", () => {
        question.innerHTML = "I like you";
        img.src = "./ban2.jpg";
    });
  
    no.addEventListener("click", () =>{
        img.src = "./ban2.jpg";
        alert("u sure ?");
        
    });