let btn = document.getElementById("btn");
let loader = document.querySelector(".loader");
let holder = document.querySelector(".holder");
const clientID = "Ov23li7KxiILIkmUk1rj";

const querystring = window.location.search;
const codeID = new URLSearchParams(querystring);
const code = codeID.get("code");
console.log(code);

const loginwithGithub = () => {
  if (localStorage.getItem("accessToken")) {
    window.location.href = `/user`;
  } else {
    window.location.assign(
        `https://github.com/login/oauth/authorize?client_id=${clientID}`
      );
  }
};

if (code && localStorage.getItem("accessToken") == null) {
  async function getAccessToken() {
    await fetch(`/getAccesstoken?code=${code}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
          window.location.href = `/user`;
        }
      });
  }
  getAccessToken();
}

btn.addEventListener("click", () => {
  loginwithGithub();
  holder.classList.add("blurr-effect");
  loader.style.display = "flex";
});
