document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('js-hamburger-trigger');
    const menuContainer = document.getElementById('mobile-nav__links');
    const menuImage = document.getElementById('js-menu-icon');
    const srcMenu = "./images/mobile-menu.svg";
    const srcClose = "./images/close-menu.svg";
    var isDefault = true;

    menuTrigger.addEventListener('click', () => {
        menuContainer.classList.toggle('active');

        if(isDefault){
            menuImage.src = srcClose;
        }else{
            menuImage.src = srcMenu;
        }

        //Toggle the state
        isDefault = !isDefault;
    })

});