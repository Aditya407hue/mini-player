var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var arr = [
  {
    songName: "Jale 2",
    url: "./songs/Jale 2.mp3",
    img: "./images/jale.jpg",
  },
  {
    songName: "Pehle bhi main",
    url: "./songs/Pehle Bhi Main.mp3",
    img: "./images/animal2.jpg",
  },
  {
    songName: "Arjan Vailly Ne",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Ram Siya Ram",
    url: "./songs/Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
  {
    songName: "Jale 2",
    url: "./songs/Jale 2.mp3",
    img: "./images/jale.jpg",
  },
  {
    songName: "Pehle bhi main",
    url: "./songs/Pehle Bhi Main.mp3",
    img: "./images/animal2.jpg",
  },
  {
    songName: "Arjan Vailly Ne",
    url: "./songs/Arjan Vailly Ne.mp3",
    img: "./images/animal.jpg",
  },
  {
    songName: "Ram Siya Ram",
    url: "./songs/Ram Siya Ram.mp3",
    img: "./images/ram.jpg",
  },
];

var audio = new Audio();
var selectedSong = 0;

function mainFun() {
  var clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
    <div class="part-1">
      <img
        src=${elem.img}
        alt=""
      />
      <h2>${elem.songName}</h2>
    </div>
    <h6>3:58</h6>
    </div>`;
  });
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
  allSongs.innerHTML = clutter;
}

mainFun();
var flag = 0;
allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  mainFun();
  audio.play();
});

play.addEventListener("click", function (dets) {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFun();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    flag = 0;
    mainFun();
    audio.pause();
  }
});

forward.addEventListener("click", function (dets) {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    mainFun();
    audio.play();
  } else {
    forward.style.opacity = 0.4;
  }
});
backward.addEventListener("click", function (dets) {
  if (selectedSong > 0) {
    selectedSong--;
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    mainFun();
    audio.play();
  } else {
    backward.style.opacity = 0.4;
  }
});
