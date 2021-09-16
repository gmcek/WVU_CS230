export class Card {
    title:string;
    imagePath: string;

    constructor({title, imagePath} : 
        {title:string, imagePath:string}) {
            this.title = title;
            this.imagePath = imagePath;
    }
}
