let compteur = 0;
        const compteurElement = document.getElementById('compteur');
        const incrementerBtn = document.getElementById('incrementer');
        const decrementerBtn = document.getElementById('decrementer');
        const resetBtn = document.getElementById('reset');
  
       incrementerBtn.addEventListener('click', function() {
          compteur++;
          compteurElement.textContent = compteur;
      });
     decrementerBtn.addEventListener('click', function() {
         compteur--;
         compteurElement.textContent = compteur;
     });
    resetBtn.addEventListener('click', function() {
       compteur = 0;
      compteurElement.textContent = compteur;
  });