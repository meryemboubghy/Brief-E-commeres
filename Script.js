function voirProduits() {
  const sectionProduits = document.getElementById("produits");

  // Défilement vers la section des produits avec un effet fluide
  window.scrollTo({
    top: sectionProduits.offsetTop, // Position verticale de la section
    behavior: "smooth", // Défilement fluide
  });
}
