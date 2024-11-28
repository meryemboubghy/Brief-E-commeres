
        

// Fonction pour calculer le total
function calculateTotal() {
    const prixUnitaire = 100; // Exemple : prix unitaire fixe (MAD)
    const quantite = document.getElementById('quantite').value;

    if (quantite && quantite > 0) {
        const total = prixUnitaire * quantite;
        document.getElementById('total').value = total.toFixed(2) + ' MAD';
    } else {
        document.getElementById('total').value = '0.00 MAD';
        alert('Veuillez entrer une quantité valide.');
    }
}

// Gestion de l'événement pour ajouter une commande au tableau
document.getElementById('button').addEventListener('click', function () {
    // Récupérer les données du formulaire
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const adresse = document.getElementById('adresse').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const quantite = document.getElementById('quantite').value.trim();
    const total = document.getElementById('total').value.trim();

    // Validation : vérifier que tous les champs sont remplis
    if (!nom || !prenom || !email || !adresse || !telephone || !quantite || parseInt(quantite) <= 0) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }

    // Ajouter les informations au tableau
    const tableauBody = document.querySelector('#tableau table tbody');
    const nouvelleLigne = document.createElement('tr');
    nouvelleLigne.innerHTML = `
        <td>${nom} ${prenom}</td>
        <td>${email}</td>
        <td>${adresse}</td>
        <td>${telephone}</td>
        <td>${quantite}</td>
        <td>${total}</td>
    `;

    tableauBody.appendChild(nouvelleLigne);
    

    // Réinitialiser le formulaire
    document.getElementById('Formulaire de commande').reset();
    document.getElementById('total').value = ''; // Réinitialiser le champ total
});



