export default {
    title: "Patterns/Page Header",
};

export const PageHeader = (title) =>
    '<section class="l-section p-hero"><div class="l-container"><div class="p-hero__inner"><h1 class="p-hero__title">' +
    title +
    '</h1><div class="p-hero__intro">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.<p></div></div></div></section>';

export const PageTitle = (title, description, buttonText) => {
    let button = "";
    if (buttonText) {
        button = '<a href="" class="c-button c-button--large c-button--border">' + buttonText + "</a>";
    } else {
        button = "";
    }
    return (
        '<div class="l-section l-section--no-border"><div class="l-container"><div class="p-section-header"><div class="p-section-header__body"><h1 class="p-section-header__title">' +
        title +
        '</h1><div class="p-section-header__intro"><p>' +
        description +
        '</p></div></div><div class="p-section-header__cta">' +
        button +
        "</div></div></div></div>"
    );
};
