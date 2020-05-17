import {Header} from "../patterns/header.stories";
import {Hero} from "../patterns/hero.stories";
import {Statements} from "../patterns/statements.stories";
import {ProductList} from "../patterns/product-list.stories";
import {Feature} from "../patterns/feature.stories";
import {About} from "../patterns/about.stories";
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
    ProductList() +
    Feature() +
    About() +
    CategoryList() +
    Instagram() +
    Footer() +
    "</div>";
