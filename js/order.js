let tg = window.Telegram.WebApp;

let name = "";
let email = "";
let phone = "";
// ########
let user_id = '';
let username = '';
let user_photo = '';
let user_language = '';

let doing = document.getElementById("doing");
let order = document.getElementById("order");
let close = document.getElementById("close");

tg.expand();


window.addEventListener("load", () => {
    let user_query = tg.initData;       // string is URL-parameters
    let params = new URLSearchParams(user_query);
    
    // Get query params
    let user = JSON.parse(decodeURIComponent(params.get('user')));
    user_id = user.id;
    username = user.username;
    user_photo = user.photo_url;
    user_language = user.language_code;

    // Output Customer info if is a customer
    let sect = document.querySelector("#main_section");
    let img = document.createElement("img");
    img.src = user_photo;
    img.height = "100px";
    img.width = "100px";
    img.radius = "50px";
    sect.appendChild(img);

    let user_info_id = document.createElement("h4");
    user_info_id.textContent = "User ID";
    user_info_id.appendChild(user_id);

    let user_info_username = document.createElement("h4");
    user_info_username.textContent = "Username (tg)";
    user_info_username.appendChild(username);

    let user_info_lang = document.createElement("h4");
    user_info_lang.textContent = "User language";
    user_info_lang.appendChild(user_language);

    // document.querySelector('#user_id').textContent = user_id;
    // document.querySelector('#username').innerText = username;
    // document.querySelector('#lang').innerText = user_language;
});


doing.addEventListener("click", () => {
    alert('Привет ' + username);
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