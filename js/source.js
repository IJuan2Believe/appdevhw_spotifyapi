// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  ****************


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "3Rq3YOF9YG9YfCWD4D56RZ");
localStorage.setItem("access_token", "BQD9GE_4d8rlFkGyB-0YZXWVbsWZhACy7wWQxtrRMqkICFLTVy4-eChJHgrx6PRsrpO_Ukk74MMvk5Lr2lcMy2Znm5PC4ttmxlIDLd8vqXvbdzJvyd8wc1XMQp_gMVKO4c_pa8dKxGwh");
localStorage.setItem("track_id_1", "4aK4LNijbD7kkCg54UoIij?si=f083e455cb32425b");
localStorage.setItem("track_id_2", "3q1qGC38DEGXtYtm6LFecd?si=d74f6372eb194dac");
localStorage.setItem("track_id_3", "11nuN9xWUoKJNohMtyCoJg?si=fee885e9d9b94ada");

async function load() {


    let artistId = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");


    const response = await fetch( 
        `https://api.spotify.com/v1/artists/${artistId}`, 
        { 
            headers: { 
                Authorization: `Bearer ${accessToken}` 
            } 
        } 
    ); 
    
    const artist = await response.json();


    document.querySelector("#artist-name").textContent = artist.name;
    document.querySelector(".artist-image img").src = artist.images[0].url;
}
load();
