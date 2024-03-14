/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Luwam Goitom-Worre>
 *      Student ID: <156652224>
 *      Date:       <December 13, 2023>
 */ // All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;
// For debugging, display all of our data in the console. You can remove this later.
document.addEventListener("DOMContentLoaded", ()=>{
    const displayArtists = ()=>{
        //menu variable is assigned to any object with the menu tag
        const menu = document.querySelector("#menu");
        //iterates through each artist in array and creates a button for each obe
        artists.forEach((artist, index)=>{
            const button = createButton(artist, index);
            menu.appendChild(button);
        });
    };
    const artistDetails = (index)=>{
        //artists array is assigned to variable artist
        const artist = artists[index];
        //sent to other functions to locate the artist and display their song list
        displaySelectedArtist(artist);
        displaySongs(artist);
    };
    const createButton = (artist, index)=>{
        //button variable is created to hold button element
        const button = document.createElement("button");
        //text on the button is artist name
        button.textContent = artist.name;
        button.classList.add("blue-card");
        //when the button is clicked it dusplays the artists links
        button.addEventListener("click", ()=>artistDetails(index));
        return button;
    };
    const displaySelectedArtist = (artist)=>{
        //selects element with selected-artist id and assigns it to variable
        const selected = document.querySelector("#selected-artist");
        selected.classList.add("name");
        //artist url links are formatted as such and assigned to variable
        const links = artist.urls.map((link)=>`<a href="${link.url}" target="_blank">${link.name}</a>`).join(", ");
        //inner html is the string created with the artist name and urls on same line
        selected.innerHTML = `${artist.name} (${links})`;
    };
    const formatDuration = (duration)=>{
        //calculates the time of the song from seconds to minutes
        return `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")}`;
    };
    const displaySongCards = (songs)=>{
        const cardContainer = document.getElementById("song-cards");
        cardContainer.innerHTML = ""; // Clear previous cards
        //iterates through the song array and creates a card for each element
        songs.forEach((song)=>{
            const card = createSongCard(song);
            //appends newly created card to card array
            cardContainer.appendChild(card);
        });
    };
    //creates the card for the song
    const createSongCard = (song)=>{
        //card container for the song
        const card = document.createElement("div");
        card.classList.add("song-card");
        //card container for song image
        const image = document.createElement("img");
        image.src = song.image;
        //card container for the song ttitle
        const title = document.createElement("h3");
        title.textContent = song.title;
        //card container for the year
        const year = document.createElement("p");
        year.textContent = `Year: ${song.year}`;
        //card container for the duration
        const duration = document.createElement("p");
        duration.textContent = `Duration: ${formatDuration(song.duration)}`;
        //element 'a' links to the song
        const url = document.createElement("a");
        url.href = song.url;
        url.target = "_blank";
        url.textContent = "Listen";
        //appends all elements to the card
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(duration);
        card.appendChild(url);
        return card;
    };
    const displaySongs = (artist)=>{
        //filters through song array to find where the aritstID of a song matches an artistID in the artist array
        const filtered = songs.filter((song)=>song.artistID === artist.artistID);
        displaySongCards(filtered);
    };
    displayArtists();
});

//# sourceMappingURL=index.8f0c9192.js.map
