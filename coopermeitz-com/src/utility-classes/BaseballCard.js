/** A class that represents all the necessary info to correctly 
 * fill a single BaseballCard.vue component.
 * @author coopermeitz
 */
export class BaseballCard {
    imageUrl;
    position;
    yearsPlayed;
    bulletPoints;

    /**
     * The simple constructor for a baseball card.
     * @param {String} imageUrl The filename of the picture that will be
     * displayed on the front of the card.
     * @param {String} position The 'position' that will be displayed on the
     * card's front.
     * @param {String} yearsPlayed A string representing the length of time
     * I 'played' for that specific team. (ie. "2001 - 2002") 
     * @param {String[]} bulletPoints The bullet points that will be 
     * displayed on the back of the card.
     */
    constructor(imageUrl, position, yearsPlayed, bulletPoints) {
        this.imageUrl = imageUrl;
        this.position = position;
        this.yearsPlayed = yearsPlayed;
        this.bulletPoints = bulletPoints;
    }
}