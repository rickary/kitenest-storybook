import {Snippet} from "../bits/snippet.stories";

export default {
    title: "Patterns/About",
};

const SnippetInList = (title) => '<li class="p-about-list-item">' + Snippet(title) + "</li>";

export const About = () =>
    '<section class="l-section"><div class="l-container l-container--small"><ul class="p-about-list">' +
    SnippetInList("What makes us different") +
    SnippetInList("Another headline here") +
    "</ul></div></section>";
