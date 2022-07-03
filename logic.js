function calculateTip() {
    //recuperation de la saisie de l'utilisateur
    var billAmt = document.getElementById("total").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

    //s'assurer que l'utilisateur a bien saisie des valeurs dans le formulaire
    if(billAmt === "" || serviceQual == 0) {
        alert("Merci de renseigner les champs");
        return;
    }

    //corriger la saisie de personnes a partager l'addition au cas ou la saisie est 0 ou negatif
    if(numOfPeople == "" || numOfPeople <=1) {
        numOfPeople = 1;
        //si il n'ya qu'une seule personne a partager l'addition alors enlever la legende "Par personne"
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calcul
    var total = (billAmt * serviceQual) / numOfPeople;
    //arrondir a deux chiffres aprés la virgule
    total = Math.round(total*100)/100;
    //recuperer seulement 2 chiffres aprés la virgule
    total = total.toFixed(2);
    //afficher le montant de pourboire
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//cacher le montant du porboir lors de changement de la page
document.getElementById("totalTip").style.display = "none";

//calculer le montant a chaque click sur le bouton 
document.getElementById("calculate").onclick = function() {
    calculateTip();
}

