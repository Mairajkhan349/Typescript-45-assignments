//Assignment No:- 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

type typeAlbum = {
    Artist : string ,
    Title : string ,
    numberOfSongs? : number
};
let make_album = (artistName:string , albumTitle:string , numberOfTracks?:number) => {
    
    let album:typeAlbum = {
        Artist : artistName ,
        Title  : albumTitle ,
    
    };
    if (numberOfTracks !== undefined) {
        album.numberOfSongs = numberOfTracks;
    };

    return album;
};
console.log(make_album("Ariji Singh", "Tum hi ho", 5));
console.log(make_album("Pink Floyd", "The Dark Side of the Moon"));
console.log(make_album("Michael Jackson", " Thriller" , 10));
console.log(make_album("Fleetwood Mac","Rumours"));


