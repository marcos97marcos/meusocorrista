class MobileNavbar {
    constructor (mobileMenu, navList, navlinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(mobileList);
        this.navLinks = document.querySelectorall(mobileLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind ()
    }
    animateLinks () {
        this.navLinks.forEach ((link) => {
            link.style.animation
            ? (link.style.animation = "")
            :(link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }
    handleClick () {
       
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks
    }

    addClickEvent () { 
    this.mobileMenu.addEventListener ("click", this.handleClick);
} 

init () {
if (this.mobileMenu) {
    this.addClickEvent()


}
return this;
}
}

const mobileNavbar = new MobileNavbar (
".mobile-menu",
".nav-list",
".nav-list li",

);
mobileNavbar.init ();

