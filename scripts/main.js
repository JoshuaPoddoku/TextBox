
$('.clickMe').click(function () {
    "use strict";
    $(this).hide();
    $('#' + $(this).attr('for'))
                    .val($(this).text())
                    .toggleClass("form-control")
                    .show()
                    .focus();
});

<<<<<<< HEAD
$('.blur').blur(function () {
    "use strict";
    $(this)
        .hide()
        .toggleClass("form-control");
    var myid = (this).id;
    $('span[for=' + myid + ']')
        .text($(this).val())
        .show();
});
=======
let tabCount = 1;
let activeTab = 1;
let idg = 1;

const inputText = id => {
  return `<div class="form-group mt-4">
  <label for="inputText"
    ><h1 class="display-5">Tab ${id} : Input Text(__example__ for labels)</h1></label
  >

  <textarea
    class="form-control"
    id="input${id}"
    rows="10"
    column="1"
    name="editor${id}"
  ></textarea>
</div>
<div>
  <label for="temps"><h1 class="display-5">labels</h1></label>
  <div class="d-flex flex-column align-items-center" id="label${id}"></div>
</div>
<div>
  <label for="generatedOutput"
    ><h1 class="display-5">Output Text</h1></label
  >
  <div id="output${id}"></div>
</div>`;
};

const renderLabel = (array, id) => {
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
  labelhtml += ` <button type="button" onclick="genButton()" id="gener${id}" class="my-4 btn btn-primary btn-lg">
    Generate
  </button>`;
  document.querySelector(`#label${id}`).innerHTML = labelhtml;
};

window.onload = () => {
  document.querySelector('.tab-content').innerHTML = inputText('1');
  var editor = CKEDITOR.replace('editor1');
  new renderer(editor, '1');
};

//Tabs
document.querySelector('#addNewTab').addEventListener('click', e => {
  tabCount = tabCount + 1;
  let newTabElement = document.createElement('li');
  newTabElement.setAttribute('class', 'nav-item');

  let a = document.createElement('a');
  a.setAttribute('class', 'nav-link');
  a.setAttribute('href', '#');
  let name = document.createTextNode(`Tab ${tabCount}`);
  a.appendChild(name);
  a.setAttribute('id', `${tabCount}`);

  newTabElement.appendChild(a);
  let tabs = document.querySelector('#tabs');

  tabs.insertBefore(newTabElement, tabs.lastElementChild);
});

document.querySelector('#tabs').addEventListener('click', e => {
  if (
    e.target.parentElement.id === 'addNewTab' ||
    e.target.parentElement.id === 'skip'
  ) {
    return;
  }

  e.target.classList.add('active');
  document.getElementById(activeTab).classList.remove('active');
  document.querySelector('.tab-content').innerHTML = inputText(e.target.id);
  activeTab = e.target.id;
  var editor = CKEDITOR.replace(`editor${e.target.id}`);
  new renderer(editor, e.target.id);
});

class renderer {
  constructor(editor, id) {
    this.editor = editor;
    this.id = id;
    let data = {
      string: '',
      labels: []
    };

    this.editor.on('change', e => {
      let inputText = e.editor.getData();
      data.string = inputText;
      data.labels = this.extractLabels(data.string);
      localStorage.setItem(this.id, JSON.stringify(data));
      if (data.labels !== []) {
        renderLabel(data.labels, this.id);
      }
    });

    let string = ' ';
    let labels = [];

    let datafromstorage = JSON.parse(localStorage.getItem(this.id));
    if (datafromstorage !== null) {
      string = datafromstorage.string;
      labels = datafromstorage.labels;
    }
    let textareadata = document.createTextNode(string);
    document.getElementById(`input${this.id}`).appendChild(textareadata);
    if (!(labels === [])) {
      renderLabel(labels, this.id);
    }
  }

  extractLabels(string) {
    let labelsarray = new Array();

    for (let i = 0; i < string.length; i++) {
      let tmp = '';
      if (string.charAt(i) === '_') {
        if (string.charAt(i - 1) === '_') {
          if (string.charAt(i - 2) === ' ') {
            continue;
          } else {
            let j = i - 1;
            while (string.charAt(--j) !== '_' && j >= 0) {
              tmp += string.charAt(j);
            }

            if (string.charAt(j - 1) === '_') {
              tmp = tmp
                .split('')
                .reverse()
                .join('');

              if (!labelsarray.includes(tmp)) {
                labelsarray.push(tmp);
              }
            } else {
              continue;
            }
          }
        } else {
          continue;
        }
      }
    }
    return labelsarray;
  }
}

const genButton = () => {
  let d = JSON.parse(localStorage.getItem(activeTab));
  let str = d.string;
  let labels = d.labels;

  if (str === undefined || labels === undefined) {
    str = ' ';
    labels = [];
  }

  outputText(str, labels, activeTab);
};

const outputText = (str, labels, id) => {
  let array = str.split('__');
  for (let i = 0; i < labels.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (`${labels[i]}` === array[j]) {
        array[j] = document.querySelector(`#${labels[i]}`).value;
      }
    }
  }
  let modString = array.join(' ');
  document.querySelector(`#output${id}`).innerHTML = modString;
};
>>>>>>> AvinashDhillor-master
