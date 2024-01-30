import {btnTextContent, btnclassList} from './data/btnData.js';
import {heroTextContent, heroClassList} from './data/heroData.js';
import {createElement} from './service.js';

export const navBtnSignUp = createElement('button', {
  className: btnclassList.navBtn,
  textContent: btnTextContent.signUp,
});

export const navBtnLogin = createElement('button', {
  className: btnclassList.navBtn,
  textContent: btnTextContent.login,
});

export const createHeroElements = () => {
  const section = createElement('section', {
    className: heroClassList.section,
  });

  const container = createElement('div', {
    className: heroClassList.container,
  });

  const title = createElement('h1', {
    className: heroClassList.title,
    textContent: heroTextContent.title,
  });

  const slogan = createElement('p', {
    className: heroClassList.slogan,
    innerHTML: heroTextContent.slogan,
  });

  const stepsList = createElement('ol', {
    className: heroClassList.stepsList,
  });

  const step1 = createElement('li', {
    className: heroClassList.step,
    innerHTML: heroTextContent.step1,
  });

  const step2 = createElement('li', {
    className: heroClassList.step,
    innerHTML: heroTextContent.step2,
  });

  const step3 = createElement('li', {
    className: heroClassList.step,
    innerHTML: heroTextContent.step3,
  });


  return {
    section,
    container,
    title,
    slogan,
    stepsList,
    step1,
    step2,
    step3,
  };
};
