const formulaire = document.getElementById('monFormulaire');
        const messageDiv = document.getElementById('message');
        formulaire.addEventListener('submit', function(event) {
            event.preventDefault(); 
           const nom = document.getElementById('nom').value;
           const email = document.getElementById('email').value;
           messageDiv.textContent = `Formulaire soumis ! Nom: ${nom}, Email: ${email}`;
           formulaire.reset(); 
       });