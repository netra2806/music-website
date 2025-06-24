const playlists = {
  Happy: [
    { title: "humko pyar hua", file: "songs/humko_pyar_hua.mp3" },
    { title: "mitwa", file: "songs/mitwa.mp3" },
    { title: "uff teri ada", file: "songs/uff _teri_ada.mp3" },
    { title: "kudi nu nachne de", file: "songs/kudi_nu_nachne_de.mp3" },
    { title: "Sooraj Ki Baahon Mein", file: "songs/Sooraj_Ki_Baahon_Mein.mp3" },
    { title: "Ik Junoon", file: "songs/Ik_Junoon.mp3" },
    { title: "Senorita", file: "songs/Senorita.mp3" },
    { title: "Phir Se Ud Chala", file: "songs/Phir_Se_Ud_Chala.mp3" },
    { title: "Ilahi", file: "songs/Ilahi.mp3" },
    { title: "Sooraj Dooba Hain ", file: "songs/Sooraj_Dooba_Hain.mp3" }
],
  Chill: [
    { title: "Ghungroo ", file: "songs/Ghungroo.mp3" },
    { title: "Akh Lad Jaave ", file: "songs/Akh_Lad_Jaave.mp3" },
    { title: "O Saki Saki", file: "songs/O_Saki_Saki.mp3" },
    { title: "Nashe Si Chadh Gayi", file: "songs/Nashe_Si_Chadh_Gayi.mp3" },
    { title: "dilbar", file: "songs/dilbar.mp3" },
    { title: "muqabla", file: "songs/muqabla.mp3" },
    { title: "Character Dheela", file: "songs/Character_Dheela.mp3" },
    { title: "raat bhar", file: "songs/raat_bhar.mp3" },
    { title: "garmi", file: "songs/garmi.mp3" },
    { title: "Abhi Toh Party Shuru Hui Hai", file: "songs/Abhi_Toh_Party.mp3" }
  ],
  Energetic: [
    { title: "Saturday Saturday", file: "songs/Saturday_Saturday.mp3" },
    { title: "befikre", file: "songs/befikre.mp3" },
    { title: "tum hi ho bandhu", file: "songs/tum_hi_ho_bandhu.mp3" },
    { title: "Aankh Marey ", file: "songs/Aankh_Marey.mp3" },
    { title: "Balam Pichkari", file: "songs/Balam_Pichkari.mp3" },
    { title: "Bom Diggy", file: "songs/Bom_Diggy.mp3" },
    { title: "Kar Gayi chull", file: "songs/Kar_Gayi_chull.mp3" },
    { title: "Let's Nacho", file: "songs/Let_Nacho.mp3" },
    { title: "One Two Three Four ", file: "songs/One_Two_Three_Four.mp3" },
    { title: "Tukur Tukur", file: "songs/Tukur_Tukur.mp3" }  ],
  Romantic: [
    { title: "Tumhe Dillagi ", file: "songs/Tumhe_Dillagi.mp3" },
    { title: "Main Heer Teri", file: "songs/Main_Heer_Teri.mp3" },
    { title: "Sahiba", file: "songs/Sahiba.mp3" },
    { title: "Koi Naa", file: "songs/Koi_Naa.mp3" },
    { title: "Dil E Nadaan ", file: "songs/Dil_E_Nadaan.mp3" },
    { title: "Raanjhan ", file: "songs/Raanjhan.mp3" },
    { title: "Sajni", file: "songs/Sajni.mp3" },
    { title: "Koyal", file: "songs/Koyal.mp3" },
    { title: "Qatal", file: "songs/Qatal.mp3" }
  ]
};

const songList = document.getElementById("song-list");
const player = document.getElementById("player");
const playlistTitle = document.getElementById("playlist-title");

let currentPlaylist = [];
let currentIndex = 0;

function loadPlaylist(mood) {
  playlistTitle.textContent = "MOOD PLAYLIST";
  songList.innerHTML = "";
  currentPlaylist = playlists[mood];

  currentPlaylist.forEach((song, index) => {
    const div = document.createElement("div");
    div.className = "song";
    div.textContent = song.title;
    div.onclick = () => playSong(index);
    songList.appendChild(div);
  });
}

function playSong(index) {
  currentIndex = index;
  const song = currentPlaylist[index];
  player.src = song.file;
  player.play();
}

function playAll(index = 0) {
  if (index >= currentPlaylist.length) return;
  playSong(index);
  player.onended = () => playAll(index + 1);
}

// Rain drops
function createRain() {
  const rainContainer = document.getElementById("rain");
  for (let i = 0; i < 150; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 0.5 + Math.random() * 0.8 + "s";
    drop.style.opacity = Math.random();
    drop.style.height = Math.random() * 20 + 10 + "px";
    rainContainer.appendChild(drop);
  }
}

createRain();
