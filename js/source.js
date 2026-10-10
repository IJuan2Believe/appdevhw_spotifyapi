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

    // artist info
    document.querySelector("#artist-name").textContent = artist.name;
    document.querySelector(".artist-image img").src = artist.images[0].url;

    //popular songs
    //song1
    const response1 = await fetch( `https://api.spotify.com/v1/tracks/${trackID1}`,{ headers: { Authorization: `Bearer ${accessToken}` } } ); 
    const track1 = await response1.json();

    document.querySelector(".track-list .track:nth-child(1) img").src = track1.album.images[0].url;
    document.querySelector(".track-list .track:nth-child(1) .track-title").textContent = track1.name;
    document.querySelector(".track-list .track:nth-child(1) .track-album").textContent = track1.album.name;
    document.querySelector(".track-list .track:nth-child(1) .track-duration").textContent = convertMsToMinSec(track1.duration_ms);

    //song2
    const response2 = await fetch( `https://api.spotify.com/v1/tracks/${trackID2}`,{ headers: { Authorization: `Bearer ${accessToken}` } } ); 
    const track2 = await response2.json();

    document.querySelector(".track-list .track:nth-child(2) img").src = track2.album.images[0].url;
    document.querySelector(".track-list .track:nth-child(2) .track-title").textContent = track2.name;
    document.querySelector(".track-list .track:nth-child(2) .track-album").textContent = track2.album.name;
    document.querySelector(".track-list .track:nth-child(2) .track-duration").textContent = convertMsToMinSec(track2.duration_ms);
 
    //song3
    
    const response3 = await fetch( `https://api.spotify.com/v1/tracks/${trackID3}`,{ headers: { Authorization: `Bearer ${accessToken}` } } ); 
    const track3 = await response3.json();

    document.querySelector(".track-list .track:nth-child(3) img").src = track3.album.images[0].url;
    document.querySelector(".track-list .track:nth-child(3) .track-title").textContent = track3.name;
    document.querySelector(".track-list .track:nth-child(3) .track-album").textContent = track3.album.name;
    document.querySelector(".track-list .track:nth-child(3) .track-duration").textContent = convertMsToMinSec(track3.duration_ms);


}
load();

 