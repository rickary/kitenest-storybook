import {Header} from "../patterns/header.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {ProductList} from "../patterns/product-list.stories";
import {Statements} from "../patterns/statements.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/Product Page",
};

const ProductTLDR = () =>
    '<div class="p-product__tl-dr"><h1 class="p-product__title">Shampoo Bar</h1><div class="c-wysiwyg p-product__intro"><p>Our shampoo bars will protect your hair from root to tip with its unique bekdn</p></div>' +
    '<div class="p-product__meta"><p class="p-product__price">£7.00</p><p class="p-product__size">Size: 100g</p><p class="p-product__delivery">Free Delivery</p></div><div class="p-product__options">' +
    '<p class="p-product__variant"><label class="c-label">Choose something</label><select class="c-input c-input--select"><option selected disabled>Please Select</option><option>Lemon</option></select></p>' +
    '<p class="p-product__qty"><label class="c-label">Qty</label><select class="c-input c-input--select"><option>1</option><option>2</option></select></p>' +
    '</div><a href="" class="c-button c-button--large p-product__buy">Add to Basket</a></div>';

const ProductImage = () => '<div class="p-product__images"><img src="http://placehold.it/1000x1000" /></div>';

const ProductDetailIngredients = () =>
    '<div class="p-product-detail__ingredients"><h2 class="p-product-detail__aside__title">Ingredients</h2><div class="c-wysiwyg"><p><strong>name</strong> an ingredients; antoehr ingredient; antoher ingredient</p></div></div>';

const ProductDetailMain = () => '<div class="c-wysiwyg p-product-detail__main"><h2>Description</h2><p>some chat about the product</p></div>';
const ProductDetailAside = () => '<aside class="p-product-detail__aside">' + ProductDetailIngredients() + "</aside>";

const ProductDetail = () =>
    '<section class="l-section p-product-detail-section"><div class="l-container l-container--medium"><div class="p-product-detail">' +
    ProductDetailMain() +
    ProductDetailAside() +
    "</div></div></section>";

const ProductPowers = () =>
    '<section class="l-section p-product-power p-product-power--left"><div class="l-container l-container--small"><div class="p-product-power__content">Super powers</div></div></section>';

export const ProductPage = () =>
    Header() +
    '<div class="l-page">' +
    '<section class="l-section">' +
    '<div class="l-container l-container--medium"><div class="p-product__header">' +
    ProductTLDR() +
    ProductImage() +
    "</div></div></section>" +
    ProductDetail() +
    Statements() +
    ProductList("Related Products") +
    Newsletter() +
    Footer() +
    "</div>";
