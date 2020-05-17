export default {
    title: "Patterns/Statements",
};

export const Statement = () =>
    '<li class="p-statement"><span class="p-statement__icon"></span><p class="p-statement__title">Statement Title</p><p class="p-statement__description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia</p></li>';

export const Statements = () =>
    '<section class="l-section p-statements"><div class="l-container"><ul class="p-statements-list">' +
    Statement() +
    Statement() +
    Statement() +
    Statement() +
    "</ul></div></section>";
