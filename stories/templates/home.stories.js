import {Header} from "../patterns/header.stories";
import {Hero} from "../patterns/hero.stories";
import {Statements} from "../patterns/statements.stories";
import {ProductList} from "../patterns/product-list.stories";
import {Feature} from "../patterns/feature.stories";
import {About} from "../patterns/about.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {CategoryList} from "../patterns/category-list.stories";
import {Instagram} from "../patterns/instagram.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/Home",
};

export const Home = () =>
    Header() +
    '<div class="l-page">' +
    Hero() +
    Statements() +
    ProductList("Our top selling products") +
    Feature("Everything about Kitenest") +
    About() +
    Newsletter() +
    CategoryList(
        "Browse by top categories",
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam.",
        "All Categories"
    ) +
    Instagram() +
    Footer() +
    "</div>";
