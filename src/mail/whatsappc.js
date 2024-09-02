function sendToWhatsappc(){
    let numberra = "+919742006710";
    // let numbersa = "+917019051108";
    let name = document.getElementById('namec').value; 
    let email = document.getElementById('emailc').value;
    let subject = document.getElementById('subjectc').value;
    let message = document.getElementById('messagec').value;

    var url = "http://wa.me/" + numberra + "?text="
    + "Name : " +name+ "%0a"
    + "Email/Number : " +email+ "%0a"
    + "Subject: " +subject+ "%0a"
    + "Message : " +message+ "%0a";

    // var url = "http://wa.me/" + numbersa + "?text="
    // + "Name : " +name+ "%0a"
    // + "Email/Number : " +email+ "%0a";


    window.open(url, '_blank').focus();
}