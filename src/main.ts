// @ts-ignore isolatedModules
console.log('hello world');



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
  const h2 = document.querySelector('table h2');
  FORMS = {
    ログイン: 'login-form',
    MFA認証コード入力: 'otp-form',
    Login: 'login-form',
    'Enter MFA code': 'otp-form',
  };

  console.log(h2);

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
    console.log('No h2 found');

    // Role selection page
    const form = document.querySelector('form[name="cmdForm"]');

    console.log('form', form);

    if (form !== null) {
      console.log('Role selection page');

      // Move form under main
      const main = document.querySelector('main');
      main.appendChild(form);

      form.display = 'block';

      console.log('added form to main');
      return;
    }

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

    const remember = document.getElementById('remember');
    if (remember.checked) {
      remember.value = '1';
    } else {
      remember.value = '0';
    }

    return true;
  });
})();
