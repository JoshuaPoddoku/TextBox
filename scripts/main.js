$('.clickMe').click(function() {
  'use strict';
  $(this).hide();
  $('#' + $(this).attr('for'))
    .val($(this).text())
    .toggleClass('form-control')
    .show()
    .focus();
});

$('.blur').blur(function() {
  'use strict';
  $(this)
    .hide()
    .toggleClass('form-control');
  var myid = this.id;
  $('span[for=' + myid + ']')
    .text($(this).val())
    .show();
});

//Logic
let originalString = '';
let modifiedString = '';
let labels = [];

var editor = CKEDITOR.replace('editor1');
editor.on('change', e => {
  console.log(e.editor.getData());
  let inputText = e.editor.getData();
  console.log(inputText);

  originalString = inputText;
  inputText.replace(/\n/gi, '\n');
  modifiedString = inputText;
  labels = findTemplate(modifiedString);
  if (labels.length !== 0) {
    renderLabel(labels);
  }
});

const textfun = e => {};

const findTemplate = stringData => {
  let charArray = stringData.split('');
  let temp = new Array();
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === ':') {
      if (charArray[i - 1] === ':') {
        let charTemp = '';
        while (
          ++i < charArray.length &&
          (charArray[i] !== ' ' &&
            charArray[i] !== '\n' &&
            charArray[i] !== '.')
        ) {
          charTemp += charArray[i];
        }
        temp.push(charTemp);
      }
    }
  }
  return temp;
};

const renderLabel = array => {
  var labelhtml = '';
  for (let i = 0; i < array.length; i++) {
    labelhtml += `
      <div class="form-group row col-sm-10">
            <label for=${array[i]} class="col-sm-4 col-form-label">${
      array[i]
    }</label>
            <div class="col-sm-6">
              <input
                type="text"
                class="form-control"
                id=${array[i]}
              />
            </div>
          </div>
      `;
  }
  labelhtml += ` <button type="button" onClick="outputText()" id="generator" class="my-4 btn btn-primary btn-lg">
    Generate
  </button>`;
  document.querySelector('.renderLabels').innerHTML = labelhtml;
};

const outputText = () => {
  let array = originalString.split(' ');
  for (let i = 0; i < labels.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (`::${labels[i]}` === array[j]) {
        array[j] = document.querySelector(`#${labels[i]}`).value;
      }
    }
  }
  let modString = '<p>' + array.join(' ') + '</p>';
  document.querySelector('#generatedOutput').innerHTML = modString;
};
