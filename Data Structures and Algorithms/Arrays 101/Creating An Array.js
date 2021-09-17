function DVD(name, releaseYear, genre) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
}

const dvdBox = new Array(3);
dvdBox[0] = new DVD("movie 1", 1993, "action");
dvdBox[1] = new DVD("movie 2", 2000, "romance");
dvdBox[2] = new DVD("movie 3", 2002, "comedy");
console.log(dvdBox);
