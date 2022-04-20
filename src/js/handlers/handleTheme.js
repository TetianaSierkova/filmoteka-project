import { store } from "../store";

const { body, themeLightBtn, themeDarkBtn } = store.refs;

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

let curentTheme = localStorage.getItem('curentTheme');

if (!curentTheme) {
  curentTheme = LIGHT;
  localStorage.setItem('curentTheme', LIGHT);
} else {
  body.classList.add(curentTheme);
}

themeLightBtn.click = curentTheme === LIGHT ? false : true;

const changeTheme = () => {
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);

  localStorage.setItem(
    'curentTheme',
    body.classList.contains(DARK) ? DARK : LIGHT
  );
};

themeLightBtn.addEventListener('click', changeTheme);
themeDarkBtn.addEventListener('click', changeTheme);