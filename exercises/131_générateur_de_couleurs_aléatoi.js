function genererCouleurHex() {
            const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
            return `#${hex.toUpperCase()}`;
        }

        function getLuminance(hex) {
            const r = parseInt(hex.substr(1, 2), 16) / 255;
            const g = parseInt(hex.substr(3, 2), 16) / 255;
            const b = parseInt(hex.substr(5, 2), 16) / 255;
            return 0.299 * r + 0.587 * g + 0.114 * b;
        }

        document.getElementById('generer').addEventListener('click', function() {
            const couleur = genererCouleurHex();
            document.body.style.backgroundColor = couleur;
            document.getElementById('couleur').textContent = couleur;

            const luminance = getLuminance(couleur);
            document.getElementById('couleur').style.color = 'black';
        });