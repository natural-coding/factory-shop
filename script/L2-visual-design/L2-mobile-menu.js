export default function renderMobileMenuState(p_svgElement, p_showMenuFlag)
{
   if (p_svgElement) {
      if (p_showMenuFlag == 0)
         p_svgElement.innerHTML = '<use xlink:href="#hamburger-menu-3lines"></use>'
      else
         p_svgElement.innerHTML = '<use xlink:href="#hamburger-menu-cross"></use>'
   }
}
