import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите название'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email'
      },
    ]
  },
  {
    ruleSelector: '.input-first-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Ваше имя'
      }
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.personal__form', rules);  // afterForm

const rules2 = [
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email'
      },
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.form-confirmation', rules2);  // afterForm

const rules3 = [
  {
    ruleSelector: '.input-link',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите ссылку'
      }
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.form-confirmation-referral', rules3);  // afterForm

const rules4 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите название'
      }
    ]
  },
  {
    ruleSelector: '.input-date',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите дату'
      }
    ]
  },
  {
    ruleSelector: '.input-description',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите описание'
      }
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.portfolio-item__form', rules4);  // afterForm
