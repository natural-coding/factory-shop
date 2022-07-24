import renderMobileMenuState from '../L2-visual-design/L2-mobile-menu.js';

export default function setEventListenersForMobileMenu()
{
   window.addEventListener('DOMContentLoaded',
      function(p_event) {
         // Just to be clear! Probably it is not an optimal approach. ;-)
         // ( They all closures by the way ;-) )
         let menuNarrowScreenButton = document.querySelector('header > nav > .menu-narrow-screen-button');
         let menuNarrowScreen = document.querySelector('header > nav > .menu-narrow-screen-button > .menu-narrow-screen');
         let svg = document.querySelector('header > nav > .menu-narrow-screen-button svg');

         if (!(menuNarrowScreenButton && menuNarrowScreen && svg))
            return;

         menuNarrowScreenButton.addEventListener('click',(p_event)=> {
               menuNarrowScreen.classList.toggle('dontshow');
               // 0 -> 1; 1 -> 0 ;-)
               svg.dataset.showMenuFlag = 1 - svg.dataset.showMenuFlag;
               renderMobileMenuState(svg,svg.dataset.showMenuFlag);

               p_event.stopPropagation();
            }
         );

         document.addEventListener('click',(p_event)=> {
               if (!menuNarrowScreen.classList.contains('dontshow')) {
                  menuNarrowScreen.classList.add('dontshow');
                  svg.dataset.showMenuFlag = 0;
                  renderMobileMenuState(svg,svg.dataset.showMenuFlag);
               }
               
            }
         );



      }
      );
}