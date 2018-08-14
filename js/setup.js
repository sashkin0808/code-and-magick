'use strict';
var ESC_CODE = 27;
var ENTER_CODE = 13;
var userDialog = document.querySelector('.setup');
var wizard = userDialog.querySelector('.setup-wizard');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var usernameInput = userDialog.querySelector('input[name="username"]');
var userDialogButton = userDialog.querySelector('.setup-submit');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];

function onPopupEscPress(evt) {
  if (usernameInput !== document.activeElement) {
    if (evt.keyCode === ESC_CODE) {
      closePopup();
    }
  }
}

function openPopup() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function sendPopup() {
  userDialog.submit();
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateProperties() {
  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: getRandom(names) + ' ' + getRandom(surnames),
      coatColor: getRandom(coatColors),
      eyesColor: getRandom(eyesColors),
    };
  }
}

generateProperties(wizards);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

function renderWizard(wisard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wisard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wisard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wisard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closePopup();
  }
});

userDialogButton.addEventListener('click', function () {
  sendPopup();
});

userDialogButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    sendPopup();
  }
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandom(eyesColors);
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandom(coatColors);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandom(fireballColors);
});
