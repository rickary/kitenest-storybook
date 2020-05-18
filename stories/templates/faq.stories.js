import {Header} from "../patterns/header.stories";
import {PageTitle} from "../patterns/page-header.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/FAQ",
};

const Placeholder = (title) => '<section class="l-section p-placeholder"><div class="l-container">Need design for ' + title + "</div></section>";

export const FAQ = () =>
    Header() +
    '<div class="l-page">' +
    PageTitle("Frequently Asked Questions", "An introduction saying something like if they can’t find the answer then get in touch", "Contact Us") +
    Placeholder("FAQ") +
    Newsletter() +
    Footer() +
    "</div>";
