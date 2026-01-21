let nombreADeviner;
         let tentatives;
         let historiquePropositions = [];
         const propositionInput = document.getElementById('proposition');
         const messageDiv = document.getElementById('message');
         const tentativesSpan = document.getElementById('tentatives');
         const recordSpan = document.getElementById('record');
         const historiqueDiv = document.getElementById('historique');
 
         function initialiserJeu() {
             nombreADeviner = Math.floor(Math.random() * 100) + 1;
             tentatives = 0;
             historiquePropositions = [];
             tentativesSpan.textContent = tentatives;
             messageDiv.textContent = '';
             historiqueDiv.innerHTML = '';
             propositionInput.value = '';
         }

         function verifierProposition() {
             const proposition = parseInt(propositionInput.value);
             if (isNaN(proposition) || proposition < 1 || proposition > 100) {
                 messageDiv.textContent = 'Veuillez entrer un nombre valide entre 1 et 100.';
                 return;
             }
             tentatives++;
             tentativesSpan.textContent = tentatives;
             historiquePropositions.push(proposition);
             afficherHistorique();
             if (proposition < nombreADeviner) {
                 messageDiv.textContent = '📈 C\'est plus !';
             } else if (proposition > nombreADeviner) {
                 messageDiv.textContent = '📉 C\'est moins !';
             } else {
                 messageDiv.textContent = `🎉 Bravo ! C'était bien ${nombreADeviner} ! Gagné en ${tentatives} tentatives.`;
                 const meilleurScore = localStorage.getItem('meilleurScore');
                 if (!meilleurScore || tentatives < parseInt(meilleurScore)) {
                     localStorage.setItem('meilleurScore', tentatives);
                     recordSpan.textContent = tentatives;
                 }
             }
         }
        
         function afficherHistorique() {
             historiqueDiv.innerHTML = '<h3>Historique des propositions :</h3>' + historiquePropositions.join(', ');
         }
       document.getElementById('verifier').addEventListener('click', verifierProposition);
       document.getElementById('nouvelle-partie').addEventListener('click', initialiserJeu);
      const meilleurScore = localStorage.getItem('meilleurScore');
      if (meilleurScore) {
          recordSpan.textContent = meilleurScore;
        }
        initialiserJeu();