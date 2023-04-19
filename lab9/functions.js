function pass_check() {
    var passA = document.getElementById("passA").value;
    var passB = document.getElementById("passB").value;
 
    if (passA.length < 8) {
       alert("Password not long enough (Minimum of 8 letters)")
    }
    else if (passA != passB) {
       alert("Passwords don't match")
    }
    else {
       alert("Valid password")
    }
 }