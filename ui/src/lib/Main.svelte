<main>
  <h1>
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.131 114.063">
      <path
        fill="currentColor"
        d="M115.627 48.364C112.563 25.037 95.65 6.081 73.418 0L58.065 15.351c19.595 0 35.952 13.871 39.79 32.33C81.611 49.536 67.4 58.079 58.064 70.514c-9.336-12.43-23.547-20.978-39.791-22.834 3.84-18.459 20.195-32.33 39.792-32.33L42.713 0C20.479 6.081 3.572 25.037.501 48.364A58.564 58.564 0 0 0 0 55.997c0 3.463.318 6.849.901 10.145A40.585 40.585 0 0 1 18.5 65.3c13.604 2.325 24.9 11.405 30.311 23.673a40.08 40.08 0 0 1 2.366 7.076c.698 2.99 1.081 6.1 1.081 9.302 0 2.849-.295 5.631-.853 8.319-.032.134-.065.262-.098.393h13.511c-.025-.131-.065-.259-.094-.393a40.822 40.822 0 0 1-.854-8.319c0-3.202.385-6.31 1.082-9.302a40.355 40.355 0 0 1 2.366-7.076c5.409-12.268 16.706-21.35 30.308-23.673a40.632 40.632 0 0 1 17.604.842c.58-3.296.9-6.682.9-10.145a58.043 58.043 0 0 0-.503-7.633z"
      />
    </svg>
    大阪大学
  </h1>

  <form name="login-form" method="post" action="/idp/authnPwd">
    <div class="input" title="大阪大学個人ID">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
        ><path
          d="M231.937 211.986a120.486 120.486 0 0 0-67.12-54.142a72 72 0 1 0-73.633 0a120.488 120.488 0 0 0-67.12 54.14a8 8 0 1 0 13.85 8.013a104.037 104.037 0 0 1 180.174.002a8 8 0 1 0 13.849-8.013zM72 96a56 56 0 1 1 56 56a56.064 56.064 0 0 1-56-56z"
          fill="currentColor"
        /></svg
      >
      <input type="text" id="username" name="USER_ID" autocomplete="username" />
    </div>
    <div class="input" title="パスワード">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
        ><path
          d="M127.994 112a27.998 27.998 0 0 0-8 54.83V184a8 8 0 1 0 16 0v-17.17a27.998 27.998 0 0 0-8-54.83zm0 40a12 12 0 1 1 12-12a12.014 12.014 0 0 1-12 12zm80-72h-108V52a28 28 0 1 1 56 0a8 8 0 0 0 16 0a44 44 0 1 0-88 0v28h-36a16.018 16.018 0 0 0-16 16v112a16.018 16.018 0 0 0 16 16h160a16.018 16.018 0 0 0 16-16V96a16.018 16.018 0 0 0-16-16zm0 128h-160V96h160l.01 112z"
          fill="currentColor"
        /></svg
      >
      <input type="password" id="password" name="USER_PASSWORD" autocomplete="current-password" />
    </div>
    <button id="login" title="ログイン" type="submit">LOGIN</button>
    <input type="hidden" name="IDButton" value="ログイン" />
    <input type="hidden" name="CHECK_BOX" value="" />
  </form>
  <form name="otp-form" method="post" action="/idp/otpAuth">
    <div class="input" title="MFA認証コード">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
        ><path
          fill="currentColor"
          d="m11 23.18l-2-2.001l-1.411 1.41L11 26l6-6l-1.41-1.41L11 23.18zM28 30h-4v-2h4V16h-4V8a4.005 4.005 0 0 0-4-4V2a6.007 6.007 0 0 1 6 6v6h2a2.002 2.002 0 0 1 2 2v12a2.002 2.002 0 0 1-2 2z"
        /><path
          fill="currentColor"
          d="M20 14h-2V8A6 6 0 0 0 6 8v6H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM8 8a4 4 0 0 1 8 0v6H8Zm12 20H4V16h16Z"
        /></svg
      >
      <input
        type="text"
        id="authcode"
        name="OTP_CODE"
        autocomplete="off"
        maxlength="7"
        pattern="[0-9][0-9][0-9] ?[0-9][0-9][0-9]"
        required
        placeholder="000 000"
      />
    </div>
    <div>
      <input type="checkbox" id="remember" name="STORE_OTP_AUTH_RESULT" checked />
      <label for="remember" title="このデバイスで30日間認証不要">
        <span class="custom-checkbox">
          <svg class="unchecked" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7.483 5.26A2.486 2.486 0 0 0 5.29 7.422a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.034 0a2.486 2.486 0 0 0 2.192-2.163c.256-2.185.328-4.386.216-6.58a.2.2 0 0 1 .059-.152l1.038-1.04a.198.198 0 0 1 .339.125a40.903 40.903 0 0 1-.162 7.822c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a40.903 40.903 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48a42.502 42.502 0 0 1 9.366 0a3.989 3.989 0 0 1 1.76.64a.19.19 0 0 1 .025.295l-.803.803a.211.211 0 0 1-.25.033a2.488 2.488 0 0 0-.898-.28a41.001 41.001 0 0 0-9.034 0Z"
            /><path
              fill="currentColor"
              d="M21.03 6.03a.75.75 0 1 0-1.06-1.06l-8.47 8.47l-2.47-2.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
            /></svg
          >

          <svg class="checked" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0a4 4 0 0 1 2.82 1.667L11.5 13.439l-2.47-2.47a.75.75 0 1 0-1.06 1.061l3 3a.75.75 0 0 0 1.06 0l8.116-8.115c.022.11.04.22.053.333c.37 3.157.37 6.346 0 9.504c-.215 1.836-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.644-3.516-3.48a40.903 40.903 0 0 1 0-9.504c.214-1.837 1.69-3.275 3.516-3.48Z"
            /></svg
          >
        </span>
        Remember for 30 days
      </label>
    </div>
    <button id="auth" title="認証" type="submit">AUTHENTICATE</button>
    <button class="outline" id="kaijo" title="MFA一時解除">DISABLE MFA</button>
  </form>
  <form name="error" onsubmit="return false;">
    <h2 id="error-title">認証エラー</h2>
    <p id="error-text">
      ログインできません。「大阪大学個人ID」または「パスワード」が誤っている可能性があります。<br /><br
      />＊「大阪大学個人ID」 のアルファベットは必ず小文字を入力してください (大文字を使用するとエラーになります)。
    </p>
    <button title="戻る" id="error-return">RETURN</button>
  </form>

  <div class="actions">
    <a href="https://web.auth.osaka-u.ac.jp/portal/" target="_blank" title="ポータルサイト">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
        ><path
          d="M151.965 215.992v-64h-48v64L39.97 216V115.539a8 8 0 0 1 2.618-5.92l79.994-72.734a8 8 0 0 1 10.764 0l80.005 72.734a8 8 0 0 1 2.619 5.92V216z"
          opacity=".2"
          fill="currentColor"
        /><path
          d="M239.97 208h-16v-92.461a16.037 16.037 0 0 0-5.236-11.839l-80.006-72.735a15.936 15.936 0 0 0-21.527 0L37.207 103.7a16.034 16.034 0 0 0-5.236 11.839V208h-16a8 8 0 1 0 0 16h224a8 8 0 0 0 0-16zm-192-92.462l79.995-72.734l80.006 72.735V208h-48.006v-48.008a16.018 16.018 0 0 0-16-16h-32a16.018 16.018 0 0 0-16 16V208H47.97zM143.966 208h-32v-48.008h32z"
          fill="currentColor"
        /></svg
      ></a
    >
    <a
      href="https://web.auth.osaka-u.ac.jp/portal/ja/security_contact.html"
      target="_blank"
      title="情報セキュリティに関する連絡先"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
        ><path
          d="M32 128v56a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16z"
          opacity=".2"
          fill="currentColor"
        /><path
          d="M225.456 128h-32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16z"
          opacity=".2"
          fill="currentColor"
        /><path
          d="M202.72 54.188A103.282 103.282 0 0 0 129.464 24l-.735.002l-.736-.002A104 104 0 0 0 24 128v56a24.027 24.027 0 0 0 24 24h16a24.027 24.027 0 0 0 24-24v-40a24.027 24.027 0 0 0-24-24H40.355a88.02 88.02 0 0 1 88.313-79.998h.12A88.017 88.017 0 0 1 217.1 120h-23.645a24.027 24.027 0 0 0-24 24v40a24.027 24.027 0 0 0 24 24h16a23.894 23.894 0 0 0 8-1.376V208a24.027 24.027 0 0 1-24 24H136a8 8 0 0 0 0 16h57.456a40.046 40.046 0 0 0 40-40v-80a103.283 103.283 0 0 0-30.735-73.813zM64 136a8.01 8.01 0 0 1 8 8v40a8.01 8.01 0 0 1-8 8H48a8.01 8.01 0 0 1-8-8v-48zm145.456 56h-16a8.01 8.01 0 0 1-8-8v-40a8.01 8.01 0 0 1 8-8h24v48a8.01 8.01 0 0 1-8 8z"
          fill="currentColor"
        /></svg
      >
    </a>
    <a
      href="https://web.auth.osaka-u.ac.jp/portal/ja/okomariguide.html"
      target="_blank"
      title="ログインにお困りの場合はこちら"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
        ><circle cx="128.002" cy="128" r="96" opacity=".2" fill="currentColor" /><path
          d="M128.002 24a104 104 0 1 0 104 104a104.118 104.118 0 0 0-104-104zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88zm12-36a12 12 0 1 1-12-12a12 12 0 0 1 12 12zm24-71.995a36.065 36.065 0 0 1-28 35.104v.896a8 8 0 0 1-16 0v-8a8 8 0 0 1 8-8a20 20 0 1 0-20-20a8 8 0 0 1-16 0a36 36 0 1 1 72 0z"
          fill="currentColor"
        /></svg
      >
    </a>
  </div>
</main>
