import {Title, TitleIntroSort} from "./section-header.stories";

export default {
    title: "Patterns/Product List",
};

export const ProductCard = () =>
    '<li class="c-card p-product-card"><div class="c-card__body"><h3 class="c-card__title">Name of Product</h3><div class="c-card__meta p-product-card__meta"><span class="p-product-card__price">£12.75</span><span class="p-product-card__qty">125ml</span></div><div class="p-product-card__cta"><a href="" class="c-button c-card__button">Buy now</a><p class="p-product-card__cta__options">Options Available</p></div></div><img src="https://source.unsplash.com/500x500?products" class="c-card__image" /></li>';

export const ProductList = (title) =>
    '<section class="l-section"><div class="l-container">' +
    Title(title) +
    '<ul class="l-grid--quarters l-grid--quarters--single-row p-product-list">' +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    "</ul></div></section>";

export const BigProductList = (title, intro, buttonText) =>
    '<section class="l-section"><div class="l-container">' +
    TitleIntroSort(title, intro) +
    '<ul class="l-grid--quarters p-product-list">' +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    ProductCard() +
    "</ul></div></section>";
