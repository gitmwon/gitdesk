import{assignData,assignRepoData,assignFollowerData,assignFollowingData,assignforkedData} from "./data.js";
let userURL = "http://localhost:8080/userData";
async function fetchData(user) {
  return await fetch(user, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  }).then((res) => {
    return res.json();
  });
}

function checkURL(){
  let tempURL = "";
  const params = new URLSearchParams(window.location.search)
  let name = params.get("search");
  const newurl = `https://api.github.com/users/${name}`;
  name? tempURL = newurl : tempURL = userURL; 
  return tempURL;
}

async function getUserData() {
  let tempURL = checkURL();
  fetchData(tempURL).then((data) => {
    assignData(data);
  });
}

getUserData();

async function getRepoData() {
  let tempURL = checkURL();
  return fetchData(tempURL).then(async (data) => {
    return fetch(data.repos_url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        assignRepoData(data);
        return data;
      });
  });
}

getRepoData();

async function getFollowerData() {
  let tempURL = checkURL();
  fetchData(tempURL).then(async (data) => {
    await fetch(data.followers_url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        assignFollowerData(data);
      });
  });
}

async function getFollowingData() {
  let tempURL = checkURL();
  fetchData(tempURL).then(async (data) => {
    await fetch(`https://api.github.com/users/${data.login}/following`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        assignFollowingData(data);
      });
  });
}

async function searchData(name){
  
  await fetch("/searchData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify({
      name,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then(async(data) => {
      if(data.message){
        let cardholder = document.querySelector(".cardholder");
        let leftside = document.querySelector(".leftside");
        cardholder.innerHTML = data.message;
        //leftside.innerHTML = "";
      }else{
        let newurl = new URL(window.location.href);
        const repoData = await fetch(data.repos_url).then((res) => res.json());
        newurl.searchParams.set('search',name);
        window.history.pushState({},"",newurl);
        assignData(data);
        assignRepoData(repoData);
      }
    });
}

document.getElementById("logout").addEventListener("click",()=>{
  localStorage.removeItem("accessToken");
  window.location.href="http://localhost:8080/";
})

document.querySelector(".searchbtn").addEventListener("click", async () => {
  let name = document.querySelector(".textsec").value;
  searchData(name);
});

document.querySelector(".searchbtn2").addEventListener("click", async () => {
  let name = document.querySelector(".textsec2").value;
  searchData(name);
});

async function getforkedData() {
    getRepoData().then((data)=>{
      let forkedRepos = Object.entries(data).filter(([key,value])=>value.fork);
      assignforkedData(forkedRepos);
    })
}

let forked = document.querySelector(".forked");
forked.addEventListener("click",()=>{
  getforkedData();
});

let follower = document.querySelector(".follower");
follower.addEventListener("click", () => {
  getFollowerData();
});

let Repo = document.querySelector(".Repo");
Repo.addEventListener("click", () => {
  getRepoData();
});

let following = document.querySelector(".following");
following.addEventListener("click", () => {
  getFollowingData();
});
