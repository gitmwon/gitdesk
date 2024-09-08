function assignData(data) {
    document.querySelector(".img").src = "";
    document.querySelector(".img-desk").src = "";
    document.querySelector(".txt-holder").innerHTML = "";
    document.querySelector(".desk-holder").innerHTML = "";
  
    document.querySelector(".img").src = data.avatar_url;
    document.querySelector(".img-desk").src = data.avatar_url;
  
    let holder = document.querySelector(".txt-holder");
    let holder2 = document.querySelector(".desk-holder");
  
    let {
      login,
      bio,
      followers,
      following,
      public_repos,
      public_gists,
      location,
      name,
    } = data;
  
    let userObj = {
      name,
      bio,
      followers,
      following,
      public_repos,
      public_gists,
    }
  
    let divname = document.createElement('div');
    divname.innerHTML = `<span class="txt-name2 mt-2 text-white font-varela">${data.login}</span>`
    holder2.append(divname);
  
    let divname2 = document.createElement('div');
    divname2.innerHTML = `<span class="txt-name pt-[20px] text-xl font-bold font-varela">${data.login}</span>`
    holder.append(divname2);
  
    let divbtn = document.createElement('button');
    divbtn.innerText = "see on Github";
    divbtn.className = "btn2 bg-slate-400 mt-5 p-2 rounded-full order-last";
    holder2.append(divbtn);
  
    let divbtn2 = document.createElement('button');
    divbtn2.innerText = "see on Github";
    divbtn2.className = "btn bg-slate-400 mt-10 p-2 rounded-full order-last";
    holder.append(divbtn2);
  
    for (let key in userObj) {
      if (userObj.hasOwnProperty(key)) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        div.innerHTML = `<div class="font-varela pt-[20px] mb-auto">${key} : ${
          userObj[key] ? userObj[key] : "no data"
        }</div>`;
        div2.innerHTML = `<div class="font-varela pt-[20px] mb-auto">${key} : ${
          userObj[key] ? userObj[key] : "no data"
        }</div>`;
        holder.append(div);
        holder2.append(div2);
      }
    }
  
    document.querySelector(".btn").addEventListener("click", () => {
      window.location.href = data.html_url;
    });
  
    document.querySelector(".btn2").addEventListener("click", () => {
      window.location.href = data.html_url;
    });
  }
  
  function assignRepoData(data) {
    let cardholder = document.querySelector(".cardholder");
    cardholder.innerHTML = "";
    data.forEach((e) => {
      let {
        name,
        visibility,
        forks,
        watchers_count,
        stargazers_count,
        description,
      } = e;
      let cardholder = document.querySelector(".cardholder");
      cardholder.innerHTML += `
              <div
              class="rounded-lg mt-5 w-9/12 word-break sm:relative card bg-slate-800 sm:w-[350px] font-varela"
            >
              <div class="relative flex justify-between holder w-full">
                <span class="name-1 relative pl-5 top-2 w-[240px] font-bold break-words">
                  ${name}
                </span>
                <span
                  class="status absolute pl-5 pr-5 top-2 bg-slate-500 rounded-full mr-3 right-0"
                  >${visibility}</span
                >
              </div>
              <div
                class="content relative flex justify-center items-center pt-9 pl-5 pb-2 text-gray-400"
              >
                <p>
                  ${description == null ? ":) Nothing to display" : description}
                </p>
              </div>
              <div class="foot bg-slate-700 w-auto h-10 rounded-br-lg rounded-bl-lg flex items-center justify-around">
                <span class="fork flex"><img src="./image/fork.svg" alt="" srcset="" class="pr-1"><p>${forks}</p></span>
                <span class="watch flex"><img src="./image/watch.svg" alt="" srcset="" class="w-6 h-6 pr-1"><p>${watchers_count}</p></span>
                <span class="star flex"><img src="./image/star.svg" alt="" srcset="" class="w-5 h-5 pr-1"><p>${stargazers_count}</p></span>
              </div>
            </div>
          `;
    });
  }

  function assignforkedData(data){
    let cardholder = document.querySelector(".cardholder");
    cardholder.innerHTML = "";
    if(data==""){
      cardholder.innerHTML=":) No matching user Data" 
      return;
    }
    
    data.forEach((e) => {

      let cardholder = document.querySelector(".cardholder");
      cardholder.innerHTML += `
              <div
              class="rounded-lg mt-5 w-9/12 word-break sm:relative card bg-slate-800 sm:w-[350px] font-varela"
            >
              <div class="relative flex justify-between holder w-full">
                <span class="name-1 relative pl-5 top-2 w-[240px] font-bold break-words">
                  ${e[1].name}
                </span>
                <span
                  class="status absolute pl-5 pr-5 top-2 bg-slate-500 rounded-full mr-3 right-0"
                  >${e[1].visibility}</span
                >
              </div>
              <div
                class="content relative flex justify-center items-center pt-9 pl-5 pb-2 text-gray-400"
              >
                <p>
                  ${e[1].description == null ? ":) Nothing to display" : e[1].description}
                </p>
              </div>
              <div class="foot bg-slate-700 w-auto h-10 rounded-br-lg rounded-bl-lg flex items-center justify-around">
                <span class="fork flex"><img src="./image/fork.svg" alt="" srcset="" class="pr-1"><p>${e[1].forks}</p></span>
                <span class="watch flex"><img src="./image/watch.svg" alt="" srcset="" class="w-6 h-6 pr-1"><p>${e[1].watchers_count}</p></span>
                <span class="star flex"><img src="./image/star.svg" alt="" srcset="" class="w-5 h-5 pr-1"><p>${e[1].stargazers_count}</p></span>
              </div>
            </div>
          `;
    });
  } 
  
  function assignFollowerData(data) {
    let cardholder = document.querySelector(".cardholder");
    cardholder.innerHTML = "";
    data.forEach((e) => {
      let { login } = e;
      cardholder.innerHTML += `
              <div
              class="rounded-lg mt-5 w-9/12 word-break sm:relative card bg-slate-800 sm:w-[350px] pb-6 font-varela"
            >
              <div class="relative flex justify-between holder w-full">
                <span
                  class="name-1 relative pl-5 top-2 flex justify-center flex-col"
                >
                  <span class="head font-bold font-mono text-lg">${login}</span>
                  
                </span>
                <span
                  class="profile relative top-2 bg-slate-500 mr-3 h-full w-fit bg-transparent pr-4 pt-2"
                  ><img
                    src="${e.avatar_url}"
                    alt=""
                    srcset=""
                    class="w-[80px] h-[80px] rounded-full"
                /></span>
              </div>
              <div class="foot"></div>
            </div>
          `;
    });
  }
  
  function assignFollowingData(data) {
    let cardholder = document.querySelector(".cardholder");
    cardholder.innerHTML = "";
    data.forEach((e) => {
      let { login } = e;
      cardholder.innerHTML += `
               <div
              class="rounded-lg mt-5 w-9/12 word-break sm:relative card bg-slate-800 sm:w-[350px] pb-6 font-varela"
            >
              <div class="relative flex justify-between holder w-full">
                <span
                  class="name-1 relative pl-5 top-2 flex justify-center flex-col"
                >
                  <span class="head font-bold font-mono text-lg">${login}</span>
                  
                </span>
                <span
                  class="profile relative top-2 bg-slate-500 mr-3 h-full w-fit bg-transparent pr-4 pt-2"
                  ><img
                    src="${e.avatar_url}"
                    alt=""
                    srcset=""
                    class="w-[80px] h-[80px] rounded-full"
                /></span>
              </div>
              <div class="foot"></div>
            </div>
          `;
    });
  }

export {assignData,assignRepoData,assignFollowerData,assignFollowingData,assignforkedData};