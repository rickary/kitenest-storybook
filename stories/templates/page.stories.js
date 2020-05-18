import {Header} from "../patterns/header.stories";
import {PageTitle} from "../patterns/page-header.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/Generic Page",
};

const Placeholder = (title) => '<section class="l-section p-placeholder"><div class="l-container">Need design for ' + title + "</div></section>";

export const Page = () =>
    Header() +
    '<div class="l-page">' +
    PageTitle("Generic Page Title", "This template would be used for generic pages like delivery, terms etc.") +
    Placeholder("Page Content") +
    Newsletter() +
    Footer() +
    "</div>";
