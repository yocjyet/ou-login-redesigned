// ==UserScript==
// @name            Osaka University Login Redesigned
// @name:ja         阪大ログイン画面再設計版
// @namespace       https://yocjyet.dev/
// @version         2.1
// @description     Improve login UI of the authentication system of Osaka University to allow password autocompletion and redesigned on the theme of Sci-Fi to fit modern style.
// @description:ja  阪大のログイン画面をSF風に再設計し、パスワード管理ソフトの自動記入不能の問題を修正した。
// @author          Yo Cjyet
// @match           https://ou-idp.auth.osaka-u.ac.jp/idp/*
// @icon            https://www.osaka-u.ac.jp/favicon.ico
// @grant           none
// @license         MIT
// ==/UserScript==

(function () {
  ('use strict');

  // New login page
  const HTML = `{% HTML %}`;
  const CSS = `{% CSS %}`;

  // Remove original styles
  const STYLES = document.querySelectorAll('link[rel="stylesheet"]');
  for (const style of STYLES) {
    style.remove();
  }

  // Add custom styles
  function addStyle(css) {
    console.log('addStyle()', css.length);
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  // Hide original elements
  addStyle(`
      body > *:not(main) {
        display: none;
      }
  `);

  // Add Icon
  const ICON_URL = 'https://www.osaka-u.ac.jp/favicon.ico';
  const ICON_LINK = document.createElement('link');
  ICON_LINK.setAttribute('rel', 'icon');
  ICON_LINK.setAttribute('type', 'image/png');
  ICON_LINK.setAttribute('href', ICON_URL);
  document.head.appendChild(ICON_LINK);

  // Add main
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.outerHTML = HTML;

  // Add main styles
  addStyle(CSS);

  // Select form to display based on h2
  function displayForm(formName) {
    for (let i = 0; i < document.forms.length; i++) {
      const form = document.forms[i];
      form.style.display = form.name === formName ? 'contents' : 'none';
    }
  }
  const h2 = document.querySelector('h2');
  FORMS = {
    ログイン: 'login-form',
    MFA認証コード入力: 'otp-form',
  };

  const errorH1 = document.querySelector('h1.errorh1');
  if (errorH1 !== null) {
    const errorTitle = errorH1.textContent.trim();

    const errorTable = errorH1.nextElementSibling;
    const errorRows = errorTable.querySelectorAll('tr');
    const errorText = errorRows[0].innerHTML.trim();
    document.querySelector('h2#error-title').textContent = errorTitle;
    document.querySelector('p#error-text').innerHTML = errorText;

    const returnButton = document.querySelector('button#error-return');
    const errorReturn = errorRows[1].querySelector('a');
    if (errorReturn === null) {
      console.error('Error return link not found');
      returnButton.style.display = 'none';
      return;
    }

    const returnHref = errorRows[1].querySelector('a').href.trim();
    const match = /sentHref\('(.*)'\)/.exec(errorReturn);
    if (match === null || match.length < 2) {
      console.error('Error return link href is invalid');
      returnButton.style.display = 'none';
      return;
    }
    const link = match[1];

    returnButton.addEventListener('click', (e) => {
      sentHref(link);
    });

    document.body.classList.add('error');
    displayForm('error');
    return;
  }

  if (h2 === null) {
    console.error('h2 not found');
  }
  if (!(h2.textContent.trim() in FORMS)) {
    console.error('unknown form: ' + h2.textContent.trim());
    return;
  }
  displayForm(FORMS[h2.textContent.trim()]);

  // Remove space from authcode
  document.forms['otp-form'].addEventListener('submit', (e) => {
    const authcode = document.getElementById('authcode');
    authcode.value = authcode.value.replace(/ /g, '');
    return true;
  });
})();
