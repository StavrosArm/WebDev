document.addEventListener("DOMContentLoaded", function () {
    
    //Μόλις πατηθεί το submit καλούμε την validateForm. Αν είναι false 
    //κάνουμε prevent την φόρμα απο το να υποβληθεί
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
      
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  
    //Κάνουμε parse τους 2 κωδικούς
    document.getElementById("password").addEventListener("input", checkPasswordMatch);
    document.getElementById("confirmPassword").addEventListener("input", checkPasswordMatch);
  
    //Εδώ κάνουμε parse , το ονοματεπώνυμο και την ημερομηνία γέννησης
    document.getElementById("fullName").addEventListener("input", checkFullName);
    document.getElementById("birthday").addEventListener("input", checkAge);
  });
  
//------------------------ΕΓΚΥΡΟΤΗΤΑ ΚΩΔΙΚΩΝ ΠΡΟΣΒΑΣΗΣ-----------------------
//Η συνάρτηση αυτή ελέγχει την εγκυρότητα των κωδικών.
//Ελέγχει πρώτα ότι ο κωδικός είναι μεγαλύτερος απο 8 ψηφία
//Και έπειτα ελέγχει ότι οι δύο κωδικοί ταιριάζουν μεταξύ τους

  function checkPasswordMatch() {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      document.getElementById("password").setCustomValidity("Οι κωδικοί δεν ταιριάζουν.");
    } else {
      document.getElementById("password").setCustomValidity("");
      document.getElementById("confirmPassword").setCustomValidity("");
    }
  }
 
//--------------------------ΕΓΚΥΡΟΤΗΤΑ ΟΝΟΜΑΤΕΠΩΝΥΜΟΥ-----------------------------------
//Λαμβάνουμε το όνομα και ελέγχουμε με μια κανονική έκφραση 
//ότι το όνοματεπώνυμο αποτελείται απο 2 λέξεις.
  function checkFullName() {
    let fullName = document.getElementById("fullName").value;
  
    if (!/^\S+ \S+$/.test(fullName)) {
      document.getElementById("fullName").setCustomValidity("Το ονοματεπώνυμο πρέπει να αποτελείται από τουλάχιστον δύο λέξεις.");
    } else {
      document.getElementById("fullName").setCustomValidity("");
    }
  }

//----------------------------ΕΛΕΓΧΟΣ ΓΙΑ ΑΝΩ ΤΩΝ 18-------------------------------------
//Λαμβάνουμε απο την φόρμα την ημερομηνία γέννησης καθώς και λαμβάνουμε την σημερινή 
//ημερομηνία, με χρήση της Date.Με βάση αυτές , υπολογίζουμε την ηλικία του χρήστη.
  function checkAge() {
    let birthdate = new Date(document.getElementById("birthday").value);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
  
    //Αν δεν έχουν έρθει τα γενέθλια για φέτος , μειώνουμε την ηλικία κατά 1.
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
      age--;
    }
  
    if (age < 18) {
      document.getElementById("birthday").setCustomValidity("Πρέπει να είστε τουλάχιστον 18 ετών.");
    } else {
      document.getElementById("birthday").setCustomValidity("");
    }
  }
  
  //Όλη η λογική του validation, καλούμε τις checkFullname , confirmPassword και birthday 
  //Για να δούμε ότι η φόρμα είναι έγκυρη.
  function validateForm() {
    document.getElementById("fullName").addEventListener("input", checkFullName);
    document.getElementById("confirmPassword").addEventListener("input", checkPasswordMatch);
    document.getElementById("birthday").addEventListener("input", checkAge);

    
    return true;
  }
  