export default {
    title: "Bits/Form Fields",
};

export const Label = () => '<label class="c-label">Some text goes here</label>';
export const Text = () => '<input type="text" placeholder="Some text here" class="c-input c-input--text" />';
export const TextArea = () => '<textarea class="c-input c-input--textarea"></textarea>';
export const Select = () =>
    '<select class="c-input c-input--select"><option disabled selected>Please Select</option><option>Option One</option></select>';
export const Checkbox = () => '<p class="c-input c-input--checkbox"><input type="checkbox" id="test" /><label for="test">Checkbox label</label></p>';
