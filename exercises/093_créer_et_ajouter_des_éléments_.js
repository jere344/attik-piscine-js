const titre = document.getElementById('titre');
        const nouveauParagraphe = document.createElement('p');
        nouveauParagraphe.textContent = 'Bienvenue dans ma boutique en ligne !';
        titre.insertAdjacentElement('afterend', nouveauParagraphe);

        const liste = document.createElement('ul');
        const items = ['Accueil', 'Produits', 'Contact'];
        items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        liste.appendChild(li);
        });
        document.body.appendChild(liste);

        const produitsSection = document.getElementById('produits');
        const produitCard = document.createElement('div');
        produitCard.className = 'produit';
        const nomProduit = document.createElement('h2');
        nomProduit.textContent = 'Produit 1';
        const descriptionProduit = document.createElement('p');
        descriptionProduit.textContent = 'Ceci est une description du produit 1.';
        const prixProduit = document.createElement('span');
        prixProduit.className = 'prix';
        prixProduit.textContent = '19.99 €';
        produitCard.appendChild(nomProduit);
        produitCard.appendChild(descriptionProduit);
        produitCard.appendChild(prixProduit);
        produitsSection.appendChild(produitCard);

        setTimeout(() => {
        nouveauParagraphe.remove();
        }, 5000);