 function validate() {
        if (document.getElementById("login").value == "") {
            alert("User name may not be blank");
        } else if (document.getElementById("password").value == "") {
            alert("Password may not be blank.");
        }
    }