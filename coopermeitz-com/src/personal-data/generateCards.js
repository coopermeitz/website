import { BaseballCard } from "@/utility-classes/BaseballCard.js";

/**
 * This function generates the baseball cards that are used on the main page.
 * @returns {Array} A list of baseball card objects that can be passed directly
 * into the Gallery component using v-bind.
 */
export function initializeCards() {
    return [
        new BaseballCard("elementary.jpg", "Elementary School", "2006 - 2011", [
            "Starting offensive lineman for the 2006 Lanier Bowl-champion Sawnee Mountain Panthers",
            "Skipped first grade",
            "3rd-grade Spelling Bee champion",
            "4th-grade Spelling Beee champion",
            "Lost the 5th-grade Spelling Bee because the moderator didn't hear my correct word."
        ]),
        new BaseballCard("middle.jpg", "Middle School", "2011 - 2014", [
            "idk, ran track or something",
            "went ironic on my 7th grade oratorical speech",
            "broke my 3ds analog stick playing Mario Kart on the Savannah field trip"
        ]),
        new BaseballCard("high.jpg", "High School", "2014 - 2018", [
            "Ran cross country",
            "16:56 5k PR",
            "4 year member of FRC team 1746",
            "FRC Scouting lead responsible for the most stacked alliance in Georgia offseason history",
            "Leader of the best Clash Royale clan in the school",
            "Got kicked from that Clash Royale clan when a traitor stole my phone at lunch.",
            "Created a new clan and beat the old one in a clan war."
        ]),
        new BaseballCard("college.jpg", "College", "2018 - 2021", [
            "Student at Georgia Tech",
            "Majored in Computer Science (threads: Intelligence & Theory)",
            "TA for CS4510 (1 semester)",
            "Ran a marathon without training",
            "Schoolwide intramural 4v4 flag football runner-up",
            "Maxed out the Disneyworld Buzz Lightyear game",
            "Undefeated (2-0) against the spread in flamingo football"
        ])
    ]
}