// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract upload {
    // Define a struct to represent a song
    struct Song {
        string title;
        string artist;
        string ipfsHash;
        address owner;
    }

    // Define a mapping from song ID to Song struct
    mapping(uint256 => Song) public songs;

    // Define a variable to keep track of the number of songs uploaded
    uint256 public songCount;

    // Define an event that will be emitted when a new song is uploaded
    event NewSongUploaded(
        string title,
        string artist,
        string ipfsHash,
        address owner
    );

    // Define a function to upload a new song
    function uploadSong(
        string memory _title,
        string memory _artist,
        string memory _ipfsHash
    ) public {
        // Increment the song count
        songCount++;

        // Create a new Song struct with the provided information
        Song memory newSong = Song(_title, _artist, _ipfsHash, msg.sender);

        // Add the new song to the mapping
        songs[songCount] = newSong;

        // Emit the NewSongUploaded event
        emit NewSongUploaded(_title, _artist, _ipfsHash, msg.sender);
    }
}
