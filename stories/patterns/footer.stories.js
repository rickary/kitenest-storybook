export default {
    title: "Patterns/Footer",
};

const FooterContact = () =>
    '<div class="p-footer-main__section"><p class="p-footer-main__title">Contact Us</p><div class="p-footer-main__contact"><a href="">hello@kitenest.co.uk</a><a href="" class="u-no-link">01213121312121</a></div><address class="p-footer-main__address"><strong>Kitenest Ltd.</strong><br />11 Middlebrook Rd<br />Lincoln, UK<br />LN6 7JU</address></div>';

const FooterShopNav = () =>
    '<div class="p-footer-main__section"><p class="p-footer-main__title">Shop</p><ul class="p-footer-main__nav"><li><a href="">All products</a></li><li><a href="">Skin care</a></li><li><a href="">Hair care</a></li><li><a href="">Body</a></li><li><a href="">Bath Shower</a></li><li><a href="">Face</a></li><li><a href="">Gift sets</a></li></ul></div>';

const FooterAboutNav = () =>
    '<div class="p-footer-main__section"><p class="p-footer-main__title">About Us</p><ul class="p-footer-main__nav"><li><a href="">About Us</a></li><li><a href="">Postage</a></li><li><a href="">Returns</a></li><li><a href="">FAQs</a></li><li><a href="">Press</a></li><li><a href="">Wholesale</a></li></ul></div>';

export const FooterCredits = () =>
    '<div class="p-footer-credits"><div class="l-container"><div class="p-footer-credits__inner"><p class="p-footer-credits__copy">Copyright &copy;2020. More things if needed.</p><div class="p-footer-credits__benefit"><span>Made in the UK</span><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M33 5.5H0V27.5002H33V5.5Z" fill="#F0F0F0"/><path d="M18.5625 5.49951H14.4375V14.437H0V18.562H14.4375V27.4994H18.5625V18.562H33V14.437H18.5625V5.49951Z" fill="#D80027"/><path d="M25.3806 20.3257L32.9999 24.5587V20.3257H25.3806Z" fill="#0052B4"/><path d="M20.0869 20.3257L33 27.4996V25.471L23.7385 20.3257H20.0869Z" fill="#0052B4"/><path d="M29.5604 27.4998L20.0869 22.2363V27.4998H29.5604Z" fill="#0052B4"/><path d="M20.0869 20.3257L33 27.4996V25.471L23.7385 20.3257H20.0869Z" fill="#F0F0F0"/><path d="M20.0869 20.3257L33 27.4996V25.471L23.7385 20.3257H20.0869Z" fill="#D80027"/><path d="M5.82276 20.3257L0 23.5606V20.3257H5.82276Z" fill="#0052B4"/><path d="M12.9131 21.2378V27.4995H1.64307L12.9131 21.2378Z" fill="#0052B4"/><path d="M9.26146 20.3257L0 25.471V27.4996L12.9131 20.3257H9.26146Z" fill="#D80027"/><path d="M7.61933 12.6735L0 8.44043V12.6735H7.61933Z" fill="#0052B4"/><path d="M12.9131 12.6734L0 5.49951V7.52811L9.26146 12.6734H12.9131Z" fill="#0052B4"/><path d="M3.4397 5.49951L12.9131 10.763V5.49951H3.4397Z" fill="#0052B4"/><path d="M12.9131 12.6734L0 5.49951V7.52811L9.26146 12.6734H12.9131Z" fill="#F0F0F0"/><path d="M12.9131 12.6734L0 5.49951V7.52811L9.26146 12.6734H12.9131Z" fill="#D80027"/><path d="M27.1772 12.6739L33 9.43896V12.6739H27.1772Z" fill="#0052B4"/><path d="M20.0869 11.7617V5.5H31.357L20.0869 11.7617Z" fill="#0052B4"/><path d="M23.7385 12.6734L33 7.52811V5.49951L20.0869 12.6734H23.7385Z" fill="#D80027"/></g><defs><clipPath id="clip0"><rect width="33" height="33" fill="white"/></clipPath></defs></svg></div></div></div></div>';

export const FooterMain = () =>
    '<div class="l-section p-footer-main"><div class="l-container"><div class="p-footer-main__inner"><div class="p-footer-main__body">' +
    FooterContact() +
    FooterShopNav() +
    FooterAboutNav() +
    '</div><div class="p-footer-main__logos">Logos</div></div></div></div>';

export const Footer = () => '<footer class="p-footer">' + FooterMain() + FooterCredits() + "</footer>";
