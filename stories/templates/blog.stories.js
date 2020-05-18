import {Header} from "../patterns/header.stories";
import {PageHeader} from "../patterns/page-header.stories";
import {BlogList, BlogRelated} from "../patterns/blog-list.stories";
import {Newsletter} from "../patterns/newsletter.stories";
import {Instagram} from "../patterns/instagram.stories";
import {Footer} from "../patterns/footer.stories";

export default {
    title: "Templates/Blog",
};

const Placeholder = (title) => '<section class="l-section p-placeholder"><div class="l-container">Need design for ' + title + "</div></section>";

export const BlogIndex = () =>
    Header() + '<div class="l-page">' + PageHeader("Featured Post") + BlogList() + Newsletter() + Instagram() + Footer() + "</div>";

export const BlogPost = () => Header() + '<div class="l-page">' + Placeholder("Blog Post") + BlogRelated() + Newsletter() + Footer() + "</div>";
