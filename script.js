import People from "./people.js";


let peopleContainer = document.getElementsByClassName("people")[0];

People.forEach((person) => {
let personElement = document.createElement("div");
personElement.classList.add("person");

//product image design
let personImage = document.createElement("img");
personImage.src = person.image;
let personImageContainer = document.createElement("div");
personImageContainer.appendChild(personImage);
personImageContainer.classList.add("person-image");
//append product image

personElement.appendChild(personImageContainer);


//name



//information
let infoContainer = document.createElement("div");
infoContainer.classList.add("information")
infoContainer.innerHTML = person.information;
personElement.appendChild(infoContainer);
personElement.addEventListener("click", ()=>{
    console.log(infoContainer.style.height);
    if (!infoContainer.style.height || infoContainer.style.height == "0px"){
        // infoContainer.style.minHeight = "fit-content";
        infoContainer.style.height = "250px";
       
    }
    else{
        infoContainer.style.height = "0px";
    }

})

//append product to products container
peopleContainer.appendChild(personElement);
})