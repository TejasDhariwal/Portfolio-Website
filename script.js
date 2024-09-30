function sendToWhatsapp() {
    let number = "+919461564494";

    let name = document.getElementById("name").value;
    let mob = document.getElementById("mob").value;
    let mess = document.getElementById("mess").value;

    var url = "https://wa.me/" + number + "?text=" + "Name : " +name+ "%0a" + "Mob : " +mob+ "%0a" + "Message : " +mess+ "%0a";

    window.open(url, "_blank").focus();
}