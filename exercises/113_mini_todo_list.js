const input = document.getElementById('nouveauTodo');
        const ajouterBtn = document.getElementById('ajouter');
        const liste = document.getElementById('listeTodos');
      function ajouterTodo() {
        const texte = input.value.trim();
        if (texte === '') return;
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.textContent = texte;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.addEventListener('click', () => {
        li.remove();
        });
        li.appendChild(deleteBtn);
        liste.appendChild(li);
        input.value = '';
    }
    ajouterBtn.addEventListener('click', ajouterTodo);
    input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      ajouterTodo();
        }
    });