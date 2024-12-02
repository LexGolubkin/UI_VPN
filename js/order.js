let tg = window.Telegram.WebApp;

let name = "";
let email = "";
let phone = "";

let doing = document.getElementById("doing");
let order = document.getElementById("order");
let close = document.getElementById("close");

tg.expand();

// alert("Добро пожаловать в Shop");


window.addEventListener("load", () => {
    let user_query = tg.initData;       // string is URL-parameters
    let params = new URLSearchParams(user_query);
    
    // Get query params
    let user = JSON.parse(decodeURIComponent(params.get('user')));
    let user_id = user.id;
    let username = user.username;
    let user_photo = user.photo_url;
    let user_language = user.language_code;


    alert('Привет ' + username);

    var img = document.createElement("img");
    img.src = user_photo;
    var src = document.getElementById("user_photo");
    src.appendChild(img);

    document.getElementById('user_id').innerText = user_id;
    document.getElementById('username').innerText = username;
    document.getElementById('lang').innerText = user_language;
});

order.addEventListener("click", () => {
    name = document.getElementById("user_name").value;
    email = document.getElementById("user_email").value;
    phone = document.getElementById("user_phone").value;

    document.getElementById("main").style.display = "block";
    document.getElementById("form").style.display = "none";
});

close.addEventListener("click", () => {
    let data = {
        name: name,
        email: email,
        phone: phone
    };

    tg.sendData(JSON.stringify(data));

    tg.close();
});