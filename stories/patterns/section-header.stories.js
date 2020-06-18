export default {
    title: "Patterns/Section Header",
};

export const Title = (title) => '<div class="p-section-header"><h2 class="p-section-header__title">' + title + "</h2></div>";

export const TitleIntroButton = (title, description, buttonText) => {
    let button = "";
    if (buttonText) {
        button = '<a href="" class="c-button c-button--large c-button--border">' + buttonText + "</a>";
    } else {
        button = "";
    }
    return (
        '<div class="p-section-header"><div class="p-section-header__body"><h2 class="p-section-header__title">' +
        title +
        '</h2><div class="p-section-header__intro"><p>' +
        description +
        '</p></div></div><div class="p-section-header__cta">' +
        button +
        "</div></div>"
    );
};

export const TitleIntroSort = (title, description) =>
    '<div class="p-section-header p-section-header--sort"><div class="p-section-header__body"><h2 class="p-section-header__title">' +
    title +
    '</h2><div class="p-section-header__intro"><p>' +
    description +
    '</p></div></div><div class="p-section-header__cta"><select class="c-input c-input--select"><option selected disabled>Sort by</option><option>Price: Low to High</option><option>Price: High to Low</option><option>A-Z</option></select></div></div>';
