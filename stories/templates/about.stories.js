import {Header} from "../patterns/header.stories";
import {PageHeader} from "../patterns/page-header.stories";
import {About} from "../patterns/about.stories";
import {Statements} from "../patterns/statements.stories";
import {Feature} from "../patterns/feature.stories";
import {Instagram} from "../patterns/instagram.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/About",
};

const Placeholder = (title) => '<section class="l-section p-placeholder"><div class="l-container">Need design for ' + title + "</div></section>";

export const AboutPage = () =>
    Header() +
    '<div class="l-page">' +
    PageHeader("About Kitenest") +
    Statements() +
    Feature("100% Natural Cosmetics") +
    Placeholder("Contact Details - email, phone, social") +
    About() +
    Newsletter() +
    Instagram() +
    Footer() +
    "</div>";
