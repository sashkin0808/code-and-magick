'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

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

var renderWizard = function (wisard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wisard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wisard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wisard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
