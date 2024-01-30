import {navBtnSignUp, navBtnLogin} from './createELements.js';
import {nav, app} from './getElements.js';
import {createHeroElements} from './createELements.js';

// toDO
// const burger = createBurgerMenu(nav);

export const renderNavigation = () => {
  nav.textContent = '';
  nav.append(navBtnSignUp, navBtnLogin);
};

const renderHero = () => {
  const heroElements = createHeroElements();
  const heroSection = heroElements.section;
  const heroContainer = heroElements.container;
  const title = heroElements.title;
  const slogan = heroElements.slogan;
  const stepsList = heroElements.stepsList;
  const step1 = heroElements.step1;
  const step2 = heroElements.step2;
  const step3 = heroElements.step3;

  stepsList.append(step1, step2, step3);

  heroContainer.append(title, slogan, stepsList);

  heroSection.append(heroContainer);

  return heroSection;
};

export const renderApp = () => {
  app.textContent = '';
  app.append(renderHero());
};


