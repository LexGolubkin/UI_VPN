let tg = window.Telegram.WebApp;
let textColor = tg.themeParams.text_color;
let bgColor = tg.themeParams.bg_color;

let user_id = '';
let username = '';
let user_photo = '';
let user_language = '';

let doing = document.querySelector("#doing");
let order = document.querySelector("#order");
let close = document.querySelector("#close");

tg.expand();

const user_info_output = function (parentObj, info, tag) {
    let user_info_tag = document.createElement("h4");
    user_info_tag.textContent = tag;

    let user_info = document.createElement("p");
    user_info.textContent = info;

    // user_info_tag.style.color;

    parentObj.appendChild(user_info_tag);
    parentObj.appendChild(user_info);
};


window.addEventListener("load", () => {
    // Init's
    let user_query = tg.initData;
    document.body.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
    // log info
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
        img.style.borderRadius = "50px";
        sect.appendChild(img);

        user_info_output(sect, user_id, "User Id:");
        user_info_output(sect, username, "Username:");
        user_info_output(sect, user_language, "Language:");
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
    tg.close();
});