let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  async function fetchToys(toyName, toyImage, toyLikes){
  const response = await fetch("http://localhost:3000/toys", 
  {method: "POST", 
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
   
  body: JSON.stringify({
    "name": toyName,
    "image": toyImage,
    "likes": toyLikes
  })
}
  )
    .then(function(response) {
      return response.json();
    }) 
    .then(function(json) {
      let alltoys = document.getElementById("toy-collection")
      let toy = document.createElement("div");
      toy.className = "card";
      alltoys.appendChild(toy);
      let name = document.createElement("h2");
      let image = document.createElement("img");
      image.className = "toy-avatar";
      let likes = document.createElement("p");
      let likebutton = document.createElement("button");
      likebutton.className = "like-btn"
      for (i in json) {
      name.innerHTML = json["name"];
      image.src = json["image"]
      likes.innerHTML = json["likes"]
      likebutton.innerText = "Like <3"
      toy.appendChild(name);
      toy.appendChild(image)
      toy.appendChild(likes)
      toy.appendChild(likebutton)
      
    }
    }) 
  
});
