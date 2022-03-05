const Api_Url = ' https://api.github.com/users/';


async function UrlApi(user) {
    const ApiUser = await fetch(Api_Url + user);
    const ResData = await ApiUser.json();
    CreatCard(ResData);
}
UrlApi("mahmoudsiaid")
let card = document.querySelector(".card");

function CreatCard(user) {
    card.innerHTML = `
    <div class = "box-img">
    <img src = "${user.avatar_url}">
    </div>
    <div class= "info">
    <h2 class = "name">${user.name}</h2>
    <p class = "des">${user.bio}</p>
    <ul class="icon">
            <li><i class="fa-solid fa-eye"></i> followers ${user.followers}</li>
            <li><i class="fa-solid fa-heart"></i>following  ${user.following}</li>
            <li> <i class="fa-solid fa-file"></i>repos  ${user.public_repos}</li>
        </ul>

    </div>
    
    `

}

let form = document.querySelector("#form");
let search = document.querySelector("#search");

form.addEventListener("submit", e => {
    e.preventDefault();

    let username = search.value;


    if (username) {
        UrlApi(username)
        search.value = ""
    }
})