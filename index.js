const bkMonth = localStorage.getItem('bkMonth');
const bkYear = localStorage.getItem('bkYI');
const sssYear = localStorage.getItem('yearSss');


const form = document.querySelector('.form');
let textArea = document.querySelector('#f1');
const utro = document.querySelector('#utro');
const den = document.querySelector('#den');
const vech = document.querySelector('#vech');
const obj = document.querySelector('#obj');
const vse = document.querySelector('#vse');
const platK = document.querySelector('#platK');
const yaChe = document.querySelector('#yaChe');
const delChe = document.querySelector('#delChe');
const kidChe = document.querySelector('#kidChe');
const svoyaChe = document.querySelector('#svoyaChe');
const yanV = document.querySelector('#yanV');
const delV = document.querySelector('#delV');
const kidsV = document.querySelector('#kidsV');
const svoyaV = document.querySelector('#svoyaV');
const alcoG = document.querySelector('#alco');
let dayS = document.querySelector('#dayS');
let weekS = document.querySelector('#weekS');
let monthS = document.querySelector('#monthS');
let bkS = document.querySelector('#bkS');
const manGS = document.querySelector('#manGS');
const copy = document.querySelector('#copy');
const popUp = document.querySelector('.pop-up');
const buttonOpenPop = document.querySelector('.nast');
const buttonClosePop = document.querySelector('.close');
const buttonSave = document.querySelector('#saveOpt');

function restoran() {
  const cheki = vse.value - platK.value - yaChe.value - delChe.value - kidChe.value - svoyaChe.value;
  const vsego = obj.value - yanV.value - delV.value - kidsV.value - svoyaV.value;
  const procent = vsego / obj.value;
  const text = `${cheki} / ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(vsego)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`;
  return text;
}

function prozrachnost() {
  const s = document.querySelector('#sss');
  const bk = document.querySelector('#bkM');
  s.innerHTML = `SSS (${sssYear})`;
  bk.innerHTML = `БК (${bkMonth})`;
  manGS.add(new Option(localStorage.getItem('mang1'), 'mng1'));
  manGS.add(new Option(localStorage.getItem('mang2'), 'mng2'));
  manGS.add(new Option(localStorage.getItem('mang3'), 'mng3'));
  document.querySelector('#mng1').value = localStorage.getItem('mang1');
  document.querySelector('#mng2').value = localStorage.getItem('mang2');
  document.querySelector('#mng3').value = localStorage.getItem('mang3');
  document.querySelector('#bkkMonth').value = localStorage.getItem('bkMonth')
  document.querySelector('#yuer').value = localStorage.getItem('yearSss')
  document.querySelector('#bkYI').value = localStorage.getItem('bkYI')
  document.querySelector('#trueKeyt').value = localStorage.getItem('trueKeyt')
  if (localStorage.getItem('trueKeyt') === '0') {
    sleepKeyt()
  }
}


function keytering() {
  let text = '';
  if (kidChe.value == 0) {
    text += 0;
  } else {
    text += '\n';
    text += '*Кидбург:* ';
    const procent = kidsV.value / obj.value;
    text += `${kidChe.value} / ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(kidsV.value)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`;
  }
  return text;
}

function agregators() {
  let text = '';
  let procent = 0;
  if (yaChe.value == 0 && delChe.value == 0 && svoyaChe.value == 0) {
    text += 0;
  } else {
    if (yaChe.value > 0) {
      text += '\n';
      text += '*Яндекс:*';
      procent = yanV.value / obj.value;
      text += ` ${yaChe.value} / ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(yanV.value)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`;
    }

    if (delChe.value > 0) {
      text += '\n';
      text += '*Delivery:*';
      procent = delV.value / obj.value;
      text += ` ${delChe.value} / ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(delV.value)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`;
    }

    if (svoyaChe.value > 0) {
      text += '\n';
      text += '*Своя:*';
      procent = svoyaV.value / obj.value;
      text += ` ${svoyaChe.value} / ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(svoyaV.value)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`;
    }
  }
  return text;
}

function alkogol() {
  const procent = alcoG.value / obj.value;
  const text = `${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(alcoG.value)} / ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(procent)}`
  return text;
}

function manG() {
  if (manGS.value === 'mng1') {
    return localStorage.getItem('mang1');
  }
  if (manGS.value === 'mng2') {
    return localStorage.getItem('mang2');
  }
  if (manGS.value === 'mng3') {
    return localStorage.getItem('mang3');
  }
}

function sSs() {
  dayS.value = (dayS.value).replace(/,/g, '.');
  weekS.value = (weekS.value).replace(/,/g, '.');
  monthS.value = (monthS.value).replace(/,/g, '.');
  bkS.value = (bkS.value).replace(/,/g, '.');
}

function KeytSmm(keyT) {
  textArea.textContent += `*Кейтеринг:* ${keyT}\n`;
}

function sms() {
  sSs();
  const bkDat = new Date('September 11, 2018');
  const date = new Date();
  const inRes = restoran();
  const keyT = keytering();
  const agrE = agregators();
  const alko = alkogol();
  const manager = manG();
  textArea.textContent += '*Добрый вечер!*\n';
  textArea.textContent += '\n';
  textArea.textContent += `*Отчёт по выручке ОМ ЦДМ за ${new Intl.DateTimeFormat().format(date)}*\n`;
  textArea.textContent += '\n';

  textArea.textContent += `*Утро:* ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(utro.value)}\n`;
  textArea.textContent += `*День:* ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(den.value)}\n`;
  textArea.textContent += `*Вечер:* ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(vech.value)}\n`;
  textArea.textContent += `*Общая:* ${new Intl.NumberFormat("ru", { style: "currency", currency: "RUB", minimumFractionDigits: 0 }).format(obj.value)}\n`;
  textArea.textContent += '\n';

  textArea.textContent += '*Из них:*\n';
  textArea.textContent += `*В ресторане:* ${inRes}\n`;
  if (localStorage.getItem('trueKeyt') != '0') {
    KeytSmm(keyT)
  }
  textArea.textContent += `*Агрегаторы:* ${agrE}\n`;
  textArea.textContent += `*Алкоголь:* ${alko}\n`;

  textArea.textContent += '\n';

  textArea.textContent += `*Дельта к БК ${bkYear} год (${bkMonth}):* ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(bkS.value / 100)}\n`;
  textArea.textContent += `*SSS(${sssYear}) Day:* ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(dayS.value / 100)}\n`;
  textArea.textContent += `*SSS(${sssYear}) Week:* ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(weekS.value / 100)}\n`;
  textArea.textContent += `*SSS(${sssYear}) Month:* ${new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 1 }).format(monthS.value / 100)}\n`;

  textArea.textContent += '\n';
  textArea.textContent += `С уважением, ${manager}`
}

form.addEventListener('submit', (evt) => {
  textArea.textContent = '';
  evt.preventDefault();
  sms();
})

copy.addEventListener('click', () => {
  textArea.select()
  document.execCommand('copy');
})

function openPopup() {
  popUp.classList.add('pop-up_active');
}

function hidePopUp() {
  popUp.classList.remove('pop-up_active');
}

function saveLocal(e) {
  localStorage.setItem('mang1', document.querySelector('#mng1').value)
  localStorage.setItem('mang2', document.querySelector('#mng2').value)
  localStorage.setItem('mang3', document.querySelector('#mng3').value)
  localStorage.setItem('bkMonth', document.querySelector('#bkkMonth').value);
  localStorage.setItem('yearSss', document.querySelector('#yuer').value);
  localStorage.setItem('bkYI', document.querySelector('#bkYI').value)
  localStorage.setItem('trueKeyt', document.querySelector('#trueKeyt').value)
  hidePopUp();
}


function sleepKeyt() {
  document.querySelector('#aa').classList.add('none')
  document.querySelector('#bb').classList.add('none')
  document.querySelector('#kidChe').classList.add('none')
  document.querySelector('#kidsV').classList.add('none')
}


buttonOpenPop.addEventListener('click', openPopup);
buttonClosePop.addEventListener('click', hidePopUp);
buttonSave.addEventListener('click', saveLocal);


prozrachnost();
