const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the alternative text for each image file */
const value = ["human eye", "ocean", "flower", "ancient wall painting", "butterfly"]
/* Looping through images */
for (var i = 1; i<6; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    newImage.setAttribute('alt', `${value[i-1]}`);
    thumbBar.appendChild(newImage);
}

for(var i=0; i<5; i++){
    thumbBar.addEventListener("click", (events)=>{
        const imgSrc = events.target.src;
        const imgAlt = events.target.alt;
        displayedImage.src = imgSrc;
        displayedImage.alt = imgAlt;
    })
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){
    if(btn.className === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }else if(btn.className === "light"){
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});
