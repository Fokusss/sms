const bkMonth = 10; /* Месяц БК*/

const firstMang = 'Звягинцева Светлана'; /* Писать между  '  ковычками   ' */
const secondMang = ''; /* Тоже самое */









/* Все что ниже не трогать!*/

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
const selectM = document.querySelector('.mang');


function restoran () {
  const cheki = vse.value - /*platK.value*/ - yaChe.value - delChe.value - /*kidChe.value*/ - svoyaChe.value;
  const vsego = obj.value - yanV.value - delV.value - /*kidsV.value*/ - svoyaV.value;
  const procent = vsego / obj.value;
  const text = `${cheki} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(vsego)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
  return text;
}

function prozrachnost() {
  const s = document.querySelector('#sss');
  const bk = document.querySelector('#bkM');
  s.innerHTML+= `(${bkMonth})`
  const first = new Option(firstMang, 'first');
  const second = new Option(secondMang, 'second');
  selectM.append(first);
  selectM.append(second);
  
}

function keytering () {
  let text = '';
  if (kidChe.value == 0) {
    text += 0;
  } else {
    const procent = kidsV.value / obj.value;
    text += `${kidChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(kidsV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
  }
  return text;
}

function agregators () {
  let text = '';
  let procent = 0;
    if (yaChe.value > 0) {
      text += '\n';
      text += '**Яндекс:**';
      procent = yanV.value / obj.value;
      text += ` ${yaChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(yanV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
      text += '\n';
    } else {
      text += '\n';
      text += '**Яндекс:** 0';
      text += '\n';
    }

    if (delChe.value > 0) {
      text += '\n';
      text += '**Delivery:**';
      procent = delV.value / obj.value;
      text += ` ${delChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(delV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
      text += '\n';
    } else {
      text += '\n';
      text += '**Delivery:** 0';
      text += '\n';
    }

    if (svoyaChe.value > 0) {
      text += '\n';
      text += '**Своя:**';
      procent = svoyaV.value / obj.value;
      text += ` ${svoyaChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(svoyaV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
      text += '\n';
    } 
  return text;
}

function alkogol () {
  const procent = alcoG.value / obj.value;
  const text = `${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(alcoG.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`
  return text;
}

function manG () {
  if (manGS.value === 'first'){
    return firstMang;
  }
  if (manGS.value === 'second'){
    return secondMang;
  }
}

function sSs () {
  dayS.value = (dayS.value).replace(/,/g, '.');
  weekS.value = (weekS.value).replace(/,/g, '.');
  monthS.value = (monthS.value).replace(/,/g, '.');
  bkS.value = (bkS.value).replace(/,/g, '.');
}

function sms () {
  sSs();
  const date = new Date();
  const inRes = restoran();
  const keyT= keytering();
  const agrE = agregators();
  const alko = alkogol();
  const manager = manG();
  textArea.textContent += '**Добрый вечер!**\n';
  textArea.textContent += `**ОМ Барркадная ${new Intl.DateTimeFormat().format(date)}**\n`;
  textArea.textContent += '\n';

  textArea.textContent += `**Утро:** ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(utro.value)}\n`;
  textArea.textContent += `**День:** ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(den.value)}\n`;
  textArea.textContent += `**Вечер:** ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(vech.value)}\n`;
  textArea.textContent += `**Общая:** ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(obj.value)}\n`;
  textArea.textContent += '\n';

  textArea.textContent += '*из них:*\n';
  textArea.textContent += `**В ресторане:** ${inRes}\n`;
  

  textArea.textContent += `${agrE}`

  textArea.textContent += '\n';
  textArea.textContent += `**Алкоголь:** ${alko}\n`;

  textArea.textContent += '\n';

  textArea.textContent += `**Яндекс СБП:** ${keyT}\n`;
  textArea.textContent += '\n';

  textArea.textContent += `**Отношение к БК (${bkMonth} мес.) на ${new Intl.DateTimeFormat().format(date)}:** ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(bkS.value/100)}\n`;
  textArea.textContent += '\n';
  textArea.textContent += `**SSSD:** ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(dayS.value/100)}\n`;
  textArea.textContent += `**SSSW:** ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(weekS.value/100)}\n`;
  textArea.textContent += `**SSSM:** ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(monthS.value/100)}\n`;

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




prozrachnost();
