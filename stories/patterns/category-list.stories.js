import {TitleIntroButton} from "./section-header.stories";

export default {
    title: "Patterns/Category List",
};

const CategoryCard = (title) =>
    '<li class="c-card p-category-list-item"><div class="c-card__body"><h3 class="c-card__title">' +
    title +
    '</h3><a href="" class="c-button c-card__button">Shop all</a></div><img src="https://source.unsplash.com/600x400?products" class="c-card__image" /></li>';

export const CategoryList = (title, intro, button) =>
    '<section class="l-section"><div class="l-container">' +
    TitleIntroButton(title, intro, button) +
    '<ul class="p-category-list">' +
    CategoryCard("Bath and shower") +
    CategoryCard("Face") +
    CategoryCard("Body") +
    CategoryCard("Hair care") +
    CategoryCard("Gifts") +
    CategoryCard("Bathroom accessories") +
    "</ul></div></section>";
