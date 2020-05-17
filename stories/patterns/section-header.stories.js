export default {
    title: "Patterns/Section Header",
};

export const Title = (title) => '<div class="p-section-header"><h2 class="p-section-header__title">' + title + "</h2></div>";

export const TitleIntroButton = (title, description, buttonText) =>
    '<div class="p-section-header"><div class="p-section-header__body"><h2 class="p-section-header__title">' +
    title +
    '</h2><div class="p-section-header__intro"><p>' +
    description +
    '</p></div></div><div class="p-section-header__cta"><a href="" class="c-button c-button--large c-button--border">' +
    buttonText +
    "</a></div></div>";
