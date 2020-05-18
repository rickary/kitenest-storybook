import {Header} from "../patterns/header.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {ProductList} from "../patterns/product-list.stories";
import {Statements} from "../patterns/statements.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/Product Page",
};

const Placeholder = (title) => '<section class="l-section p-placeholder"><div class="l-container">Need design for ' + title + "</div></section>";

export const ProductPage = () =>
    Header() +
    '<div class="l-page">' +
    Placeholder("Product info, images & buy button") +
    Statements() +
    Placeholder("Product detail (description, ingredients, delivery, reviews, faqs)") +
    ProductList("Related Products") +
    Newsletter() +
    Footer() +
    "</div>";
