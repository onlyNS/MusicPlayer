class Music {
    constructor(title, singer, img, files){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.files = files;
    }

    getName(){
        return this.title;
    }
}

const musicList = [
    new Music("Another Love", "Tom Odell", '1.jpg', "1.mp3"),
    new Music("Freaks", "Surf Curse", '2.jpg', "2.mp3"),
    new Music("Be Alright", "Dean Lewis", '3.jpg', "3.mp3"),

];

