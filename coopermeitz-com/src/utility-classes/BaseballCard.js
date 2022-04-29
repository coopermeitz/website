/** A class that represents all the necessary info to correctly 
 * fill a single BaseballCard.vue component.
 * @author coopermeitz
 */
export class BaseballCard {
    imageUrl;
    position;
    bulletPoints;

    /**
     * The simple constructor for a baseball card.
     * @param {String} imageUrl The filename of the picture that will be
     * displayed on the front of the card.
     * @param {String} position The 'position' that will be displayed on the
     * card's front.
     * @param {String[]} bulletPoints The bullet points that will be 
     * displayed on the back of the card.
     */
    constructor(imageUrl, position, bulletPoints) {
        this.imageUrl = imageUrl;
        this.position = position;
        this.bulletPoints = bulletPoints;
    }
}

export function initializeCards() {
    return [
        new BaseballCard("elementary.jpg", "Elementary School", [
            "2-time spelling beee champion",
            "won the tech fair once",
        ]),
        new BaseballCard("middle.jpg", "Middle School", [
            "took that one oratorical prompt literally and gave an ironic speech",
        ]),
        new BaseballCard("high.jpg", "High School", [
            "Leader of the best Clash Royale clan in the school",
            "Leader of the other Clash Royale clan that became better than the previously-mentioned Clash Royale clan after someone stole my phone and my title."
        ])
    ]
}