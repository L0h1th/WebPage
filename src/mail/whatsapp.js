function sendToWhatsapp(){
    let numberra = "+919110280326";
    // let numbersa = "+917019051108";
    let name = document.getElementById('name').value; 
    let email = document.getElementById('email').value;

    var url = "http://wa.me/" + numberra + "?text="
    + "Name : " +name+ "%0a"
    + "Email/Number : " +email+ "%0a";

    // var url = "http://wa.me/" + numbersa + "?text="
    // + "Name : " +name+ "%0a"
    // + "Email/Number : " +email+ "%0a";


    window.open(url, '_blank').focus();
}