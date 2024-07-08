function editName() {
    let name=prompt("Please enter your name ");
    if(name){
        document.getElementById("name").value=name;
    }
    else{
        alert("You must enter your name.");
    }
}

function editMail() {
    let mail=prompt("Enter your mail");
    if(mail){
        document.getElementById("mail").value=mail;
    }
    else{
        alert("You must enter your mail.");
    }
}

// function editPhNo() {
//     let phNo=prompt("Enter your Phone number ");
//     if(phNo.length()>9){
//         document.getElementById("phNo").value=phNo;
//     }
//     else{
//         alert("Phone number must be consist of 10 digit.");
//     }
// }

function editPhNo() {
    let phNo = prompt("Enter your phone number");
    // Regular expression to check if the phone number consists of exactly 10 digits
    let phoneRegex = /^\d{10}$/;
    if (phoneRegex.test(phNo)) {
        document.getElementById("phNo").value = phNo;
    } else {
        alert("Phone number must consist of exactly 10 digits.");
    }
}
