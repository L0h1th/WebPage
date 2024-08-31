function sendToWhatsapp(){
    let number = "+919110280326";
    let name = document.getElementById('name').ariaValueMax;
    let email = document.getElementById('email').ariaValueMax;

    var url = "http://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a"
    + "Email/Number : " +email+ "%0a";

    window.open(url, '_blank').focus();
}