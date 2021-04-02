export const peopleListTemplate = `
      {{#each people}}
        <li class="people__item">
          <div class="people__item-inner">
            <img
              class="people__item-avatar"
              src="./background-avatar.ba70d725.png"
              alt="фото"
            />
            <div class="people__item-content">
              <div class="people__item-content-top">
                <h3 class="people__item-content-title">
                  {{this.name}}
                </h3>
                <span class="people__item-content-time">
                  23.03.2021
                </span>
              </div>
              <div class="people__item-content-bottom">
                <span class="people__item-content-subtitle">
                  <span class="people__item-content-you">
                    Вы:
                  </span>
                  {{this.company.catchPhrase}}
                </span>
                <div class="people__item-content-digit">
                  <span class="people__item-content-digit-inner">
                    99+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      {{/each}}
`;
