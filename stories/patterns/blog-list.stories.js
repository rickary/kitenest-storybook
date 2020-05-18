import {Title, TitleIntroSort} from "./section-header.stories";

export default {
    title: "Patterns/Blog List",
};

export const BlogCard = () =>
    '<li class="c-card p-blog-card"><div class="c-card__body"><h3 class="c-card__title">Blog Post Title</h3><div class="c-card__meta p-product-card__meta"><p>Integer iaculis tempor urna a iaculis. Nulla vitae nulla sit amet magna suscipit mollis non in sapien.</p></div><a href="" class="c-link c-card__button">Read More</a></div><img src="https://source.unsplash.com/600x400?natural" class="c-card__image" /></li>';

export const BlogList = () =>
    '<section class="l-section"><div class="l-container">' +
    TitleIntroSort(
        "Blog Posts",
        "An intro for the blog. Integer iaculis tempor urna a iaculis. Nulla vitae nulla sit amet magna suscipit mollis non in sapien."
    ) +
    '<ul class="p-blog-list">' +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    "</ul></div></section>";

export const BlogRelated = () =>
    '<section class="l-section"><div class="l-container">' +
    Title("Related Posts") +
    '<ul class="p-blog-list">' +
    BlogCard() +
    BlogCard() +
    BlogCard() +
    "</ul></div></section>";
