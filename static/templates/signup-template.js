export const signupTemplate = `
      <div class="signup">
        <h2 class="signup__title">
          Регистрация
        </h2>
        <form class="signup__form" name="form-signup" novalidate>
          <label for="signup-email" class="signup__label">
            Почта
          </label>
          <input
            placeholder="Введите почту"
            class="signup__input"
            type="email"
            id="signup-email"
            name="signup-email"
            maxlength="100"
            autocomplete="email"
            required
          />
          <span id="signup-email-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-login" class="signup__label">
            Логин
          </label>
          <input
            placeholder="Введите логин"
            class="signup__input"
            type="text"
            id="signup-login"
            name="signup-login"
            minlength="3"
            maxlength="100"
            autocomplete="username"
            required
          />
          <span id="signup-login-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-name" class="signup__label">
            Имя
          </label>
          <input
            placeholder="Введите имя"
            class="signup__input"
            type="text"
            id="signup-name"
            name="signup-name"
            minlength="1"
            maxlength="100"
            autocomplete="given-name"
            required
          />
          <span id="signup-name-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-surname" class="signup__label">
            Фамилия
          </label>
          <input
            placeholder="Введите фамилию"
            class="signup__input"
            type="text"
            id="signup-surname"
            name="signup-surname"
            minlength="1"
            maxlength="100"
            autocomplete="family-name"
            required
          />
          <span id="signup-surname-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-tel" class="signup__label">
            Телефон
          </label>
          <input
            placeholder="Введите телефон"
            class="signup__input"
            type="tel"
            id="signup-tel"
            name="signup-tel"
            autocomplete="tel"
            maxlength="100"
            required
          />
          <span id="signup-tel-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-password" class="signup__label">
            Пароль
          </label>
          <input
            placeholder="Введите пароль"
            class="signup__input"
            type="password"
            id="signup-password"
            name="signup-password"
            autocomplete="new-password"
            minlength="3"
            maxlength="100"
            required
          />
          <span id="signup-password-error" class="signup__input-error">
            Ошибка
          </span>
          <label for="signup-new-password" class="signup__label">
            Пароль (ещё раз)
          </label>
          <input
            placeholder="Повторите пароль"
            class="signup__input"
            type="password"
            id="signup-repeat-password"
            name="signup-repeat-password"
            autocomplete="new-password"
            minlength="3"
            maxlength="100"
            required
          />
          <span id="signup-repeat-password-error" class="signup__input-error">
            Ошибка
          </span>
          <button class="signup__button-submit" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <a href="./signin.html" class="signup__link">
          Войти
        </a>
      </div>
`;
