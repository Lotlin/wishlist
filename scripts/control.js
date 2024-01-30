import {navBtnSignUp, navBtnLogin} from './createELements.js';
import {renderNavigation, renderApp} from './render.js';

const navBtnSignUpControl = () => {
  navBtnSignUp.addEventListener('click', () => {
    console.log('зарегистрироваться');
  });
};

const navBtnLoginControl = () => {
  navBtnLogin.addEventListener('click', () => {
    console.log('войти');
  });
};

export const controlHomePage = () => {
  renderApp();
  renderNavigation();
  navBtnSignUpControl();
  navBtnLoginControl();
};
