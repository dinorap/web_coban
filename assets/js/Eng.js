const trendingBtn = document.getElementById("trending-btn");
const latestBtn = document.getElementById("latest-btn");
const videoBtn = document.getElementById("video-btn");
const freeBtn = document.getElementById("free-btn");

const linkBtn = document.querySelectorAll(".btn-link");

const trending = document.querySelector(".trending");
const latest = document.querySelector(".latest");
const video = document.querySelector(".video");
const free = document.querySelector(".free");

linkBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = e.target.innerHTML.toLowerCase();
    resetClassNames();
    document.querySelector(".selected").classList.remove("selected");
    btn.classList.add("selected");
    if (name === "trending") {
      trending.classList.add("show");
    } else if (name === "latest") {
      latest.classList.add("show");
    } else if (name === "video") {
      video.classList.add("show");
    } else if (name === "free") {
      free.classList.add("show");
    }
  });
});

function resetClassNames() {
  trending.classList.remove("show");
  latest.classList.remove("show");
  video.classList.remove("show");
  free.classList.remove("show");
}
