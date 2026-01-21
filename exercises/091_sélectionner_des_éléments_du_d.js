let titre = document.getElementById("titre");
console.log(titre.textContent);
let paragraphes = document.querySelectorAll(".paragraphe");
paragraphes.forEach((p) => {
    console.log(p.textContent);
});

let items = document.querySelectorAll("#liste li");
items.forEach((item) => {
    console.log(item.textContent);
});