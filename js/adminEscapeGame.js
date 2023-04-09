document.querySelector(".redButton").addEventListener("click", warningDeleteUser);

function warningDeleteUser() {
    //select the validationDeleteUser div near the .deleteUser button that was clicked
    let validationDeleteUser = this.nextElementSibling;
    validationDeleteUser.style.display = "block";
}

document.querySelector(".noDeleteUser").addEventListener("click", noDeleteUser);

function noDeleteUser() {
    document.querySelector(".validationDeleteUser").style.display = "none";
}