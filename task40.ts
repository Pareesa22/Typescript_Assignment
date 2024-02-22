function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist,
                  title: title,
                  tracks :tracks
                };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
  }
  // Function to print album information
  function print_album(album: { artist: string, title: string, tracks?: number }) {
    console.log(`Artist: ${album.artist}, Title: ${album.title}`);
    if (album.tracks !== undefined) {
        console.log(`Number of Tracks: ${album.tracks}`);
    }
    console.log("\n");
  }
  // Creating albums using the make_album function
  let album1 = make_album("Artist1", "Album1");
  let album2 = make_album("Artist2", "Album2", 12); // Including number of tracks
  let album3 = make_album("Artist3", "Album3");
  //call print function
  print_album(album1);
  print_album(album2);
  print_album(album3);