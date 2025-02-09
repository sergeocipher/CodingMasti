const nam = document.getElementById("name");
const email = document.getElementById("email")
const date = document.getElementById("date");

nam.addEventListener("keydown" , (e) =>{
    if (e.key == "Enter"){
        let nameInput = nam.value;
        let nameRegex = /^[A-Za-z\s]+$/;

        if (nameRegex.test(nameInput)){
            let suc = document.createElement("p");
            suc.innerText = " Sucess ✅";
            suc.style.color ="green";
            suc.classList.add("create")
            nam.insertAdjacentElement("afterend",suc);
            setTimeout(() =>{
                suc.remove();
            },2000)        
        }else{
            let suc = document.createElement("p");
            suc.innerText = " Failed ❌ ";
            suc.style.color ="Red";
            suc.classList.add("create")
            nam.insertAdjacentElement("afterend",suc);
            setTimeout(() =>{
                suc.remove();
                nam.value ="";
            },1000)   

        }
    }
})

email.addEventListener("keydown" , (e) =>{
    if (e.key == "Enter"){
        let nameInput = email.value;
        let nameRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (nameRegex.test(nameInput)){
            let suc = document.createElement("p");
            suc.innerText = " Sucess ✅";
            suc.style.color ="green";
            suc.classList.add("create")
            email.insertAdjacentElement("afterend",suc);
            setTimeout(() =>{
                suc.remove();
            },2000)        
        }else{
            let suc = document.createElement("p");
            suc.innerText = " Failed ❌ ";
            suc.style.color ="Red";
            suc.classList.add("create")
            email.insertAdjacentElement("afterend",suc);
            setTimeout(() =>{
                suc.remove();
                email.value ="";
            },1000)   

        }
    }
})

document.querySelector("button").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "prompt.html"; 
});

