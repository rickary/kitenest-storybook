import {Header} from "../patterns/header.stories";
import {CategoryList} from "../patterns/category-list.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {ProductList} from "../patterns/product-list.stories";
import {FeatureNoButton} from "../patterns/feature.stories";

import {Footer} from "../patterns/footer.stories";
import {Blockquote} from "../patterns/blockquote.stories";

export default {
    title: "Templates/Shop",
};

export const ShopIndex = () =>
    Header() +
    '<div class="l-page">' +
    CategoryList(
        "Shop Natural Cosmetics",
        "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam.",
        ""
    ) +
    Newsletter() +
    ProductList("Our featured products") +
    FeatureNoButton("More Kitenest Info") +
    Blockquote() +
    Footer() +
    "</div>";
