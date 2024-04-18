function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 5);
let album3 = make_album("Artist3", "Album3", 12);

console.log(album1);
console.log(album2);
console.log(album3);
