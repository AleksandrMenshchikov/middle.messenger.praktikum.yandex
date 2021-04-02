export const signinTemplate = `
      <div class="signin">
        <h2 class="signin__title">
          Вход
        </h2>
        <form class="signin__form" name="form-signin" novalidate>
          <label for="signin-login" class="signin__label">
            Логин
          </label>
          <input
            placeholder="Введите логин"
            class="signin__input"
            type="text"
            id="signin-login"
            name="signin-login"
            minlength="3"
            maxlength="100"
            autocomplete="username"
            required
          />
          <span id="signin-login-error" class="signin__input-error">
            Ошибка
          </span>
          <label for="signin-password" class="signin__label">
            Пароль
          </label>
          <input
            placeholder="Введите пароль"
            class="signin__input"
            type="password"
            id="signin-password"
            name="signin-password"
            minlength="3"
            maxlength="100"
            autocomplete="current-password"
            required
          />
          <span id="signin-password-error" class="signin__input-error">
            Ошибка
          </span>
          <button class="signin__button-submit" type="submit">
            Авторизоваться
          </button>
        </form>
        <a href="./signup.html" class="signin__link">
          Нет аккаунта?
        </a>
      </div>
`;
