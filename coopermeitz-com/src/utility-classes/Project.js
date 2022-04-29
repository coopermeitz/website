/** A class that represents a single project that I worked on.
 * @author coopermeitz
 */
export default class Project {
    title;
    description;

    /**
     * The (simple) constructor for the Project class. 
     * @param {String} title - The title of the project I worked on.
     * @param {String} description - A short paragraph denoting what the project is/was about.
     */
    constructor(title, description) {
        this.title = title;
        this.description = description;

    }
}