import {Header} from "../patterns/header.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {BigProductList} from "../patterns/product-list.stories";
import {FeatureNoButton} from "../patterns/feature.stories";
import {Statements} from "../patterns/statements.stories";
import {About} from "../patterns/about.stories";
import {Footer} from "../patterns/footer.stories";
import {PageHeader} from "../patterns/page-header.stories";

export default {
    title: "Templates/Category Page",
};

export const CategoryPage = () =>
    Header() +
    '<div class="l-page">' +
    PageHeader() +
    BigProductList("Shop 100% Natural Products", "optional intro about amazing products & offers", "sort") +
    Statements() +
    FeatureNoButton("More Category Detail") +
    About() +
    Newsletter() +
    Footer() +
    "</div>";
