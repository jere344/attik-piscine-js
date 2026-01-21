document.getElementById("ajouter").addEventListener("click", function() {
              const liste = document.getElementById("liste");
              const newItem = document.createElement("li");
              newItem.className = "item";
              newItem.textContent = "Item " + (liste.children.length + 1);
              liste.appendChild(newItem);
          });
  
          document.getElementById("liste").addEventListener("click", function(e) {
              if (e.target.classList.contains("item")) {
                  const items = document.querySelectorAll(".item");
                  items.forEach(item => item.classList.remove("selected"));
                  e.target.classList.add("selected");
              }
          });