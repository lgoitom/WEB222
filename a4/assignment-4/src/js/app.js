/**
 * WEB222 – Assignment 04
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
 *      Date:       <November 21, 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;
// For debugging, display all of our data in the console. You can remove this later.

document.addEventListener("DOMContentLoaded", () => {
  const displayArtists = () => {
    //menu variable is assigned to any object with the menu tag
    const menu = document.querySelector("#menu");
    //iterates through each artist in array and creates a button for each obe
    artists.forEach((artist, index) => {
      const button = createButton(artist, index);
      menu.appendChild(button);
    });
  };

  const artistDetails = (index) => {
    //artists array is assigned to variable artist
    const artist = artists[index];
    //sent to other functions to locate the artist and display their song list
    displaySelectedArtist(artist);
    displaySongs(artist);
  };

  const createButton = (artist, index) => {
    //button variable is created to hold button element
    const button = document.createElement("button");
    //text on the button is artist name
    button.textContent = artist.name;
    //when the button is clicked it dusplays the artists links
    button.addEventListener("click", () => artistDetails(index));
    return button;
  };

  const displaySelectedArtist = (artist) => {
    //selects element with selected-artist id and assigns it to variable
    const selected = document.querySelector("#selected-artist");
    //artist url links are formatted as such and assigned to variable
    const links = artist.urls
      .map((link) => `<a href="${link.url}" target="_blank">${link.name}</a>`)
      .join(", ");
    //inner html is the string created with the artist name and urls on same line
    selected.innerHTML = `${artist.name} (${links})`;
  };

  const displaySongs = (artist) => {
    //selects element with songs id and assigns it to variable
    const tbody = document.querySelector("#songs");
    //inner html is brank
    tbody.innerHTML = "";
    //looks through the artist array to see if the artistID matches that of the song
    const filtered = songs.filter((song) => song.artistID === artist.artistID);
    filtered.forEach((song) => {
      //for each song a row is creatwd
      const cellsRow = row(song);
      //embeds the tr to the tbody and add rows for each filtered song
      tbody.appendChild(cellsRow);
    });
  };

  const row = (song) => {
    //element tr is created
    const cellsRow = document.createElement("tr");
    //title, year, and duration lists are put together under "tr"
    cellsRow.appendChild(songCell("a", song.url, song.title));
    cellsRow.appendChild(songCell("td", null, song.year));
    cellsRow.appendChild(songCell("td", null, formatDuration(song.duration)));
    return cellsRow;
  };

  const songCell = (element, href, text) => {
    //cell element is created
    const cell = document.createElement(element);
    //if element is an anchor element
    if (element === "a") {
      //anchor element is set to current href
      cell.href = href;
      //target element is set to blank and opens a new blank page
      cell.target = "_blank";
      //visible text is set to current element
      cell.textContent = text;
    } else {
      cell.textContent = text;
    }
    return cell;
  };

  const formatDuration = (duration) => {
    //calculates the time of the song from seconds to minutes
    return `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")}`;
  };

  displayArtists();
});
