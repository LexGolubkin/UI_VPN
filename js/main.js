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
    let user_query = tg.initData;
    console.log("query - " + user_query);
    console.log("queryType " + typeof user_query)       // string is URL-parameters

    if (user_query == "") {
        let sect = document.querySelector("#main_section");
        let hi = document.createElement("p");
        hi.textContent = 'Привет новый пользователь.';
        sect.appendChild(hi);
        return;
    } else {
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
        img.style.height = "100px";
        img.style.width = "100px";
        img.style.radius = "50px";
        sect.appendChild(img);

        sect.appendChild(document.createElement("h4").textContent = "User ID");
        sect.appendChild(document.createElement("p").textContent = user_id);

        let user_info_username = document.createElement("h4");
        user_info_username.textContent = "Username (tg)";
        sect.appendChild(user_info_username);
        user_info_username.appendChild(username);

        let user_info_lang = document.createElement("h4");
        user_info_lang.textContent = "User language";
        sect.appendChild(user_info_lang);
        user_info_lang.appendChild(user_language);

        // document.querySelector('#user_id').textContent = user_id;
        // document.querySelector('#username').innerText = username;
        // document.querySelector('#lang').innerText = user_language;
    }
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