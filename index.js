const form = document.querySelector('.form');
const textArea = document.querySelector('.text-area');
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

function restoran () {
  const cheki = vse.value - platK.value - yaChe.value - delChe.value - kidChe.value - svoyaChe.value;
  const vsego = obj.value - yanV.value - delV.value - kidsV.value - svoyaV.value;
  const procent = vsego / obj.value;
  const text = `${cheki} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(vsego)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
  return text;
}

function keytering () {
  let text = '';
  if (kidChe.value == 0) {
    text += 0;
  } else {
    text += '\n';
    text += '*Кидбург:*';
    const procent = kidsV.value / obj.value;
    text += `${kidChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(kidsV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
  }
  return text;
}

function agregators () {
  let text = '';
  let procent = 0;
  if (yaChe.value == 0 && delChe.value == 0 && svoyaChe.value == 0) {
    text += 0;
  } else {
    if (yaChe.value > 0) {
      text += '\n';
      text += '*Яндекс:*';
      procent = yanV.value / obj.value;
      text += ` ${yaChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(yanV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
    }

    if (delChe.value > 0) {
      text += '\n';
      text += '*Delivery:*';
      procent = delV.value / obj.value;
      text += ` ${delChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(delV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
    }

    if (svoyaChe.value > 0) {
      text += '\n';
      text += '*Своя:*';
      procent = svoyaV.value / obj.value;
      text += ` ${svoyaChe.value} / ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(svoyaV.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`;
    }
  }
  return text;
}

function alkogol () {
  const procent = alcoG.value / obj.value;
  const text = `${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(alcoG.value)} / ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(procent)}`
  return text;
}

function manG () {
  if (manGS.value === 'lena'){
    return 'Стоянова Елена';
  }
  if (manGS.value === 'vlad'){
    return 'Бабкин Владислав';
  }
  if (manGS.value === 'arseniy'){
    return 'Сазонов Арсений';
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
  const bkDat = new Date('September 11, 2018');
  const date = new Date();
  const bkYear = parseInt((date - bkDat) / 1000 / 60 / 60 / 24 / 365);
  const bkMonth = parseInt((date - bkDat) / 1000 / 60 / 60 / 24 / 31 - 3);
  console.log(bkYear, bkMonth)
  const inRes = restoran();
  const keyT= keytering();
  const agrE = agregators();
  const alko = alkogol();
  const manager = manG();
  textArea.textContent += '*Добрый вечер!*\n';
  textArea.textContent += '\n';
  textArea.textContent += `*Отчёт по выручке ОМ ЦДМ за ${new Intl.DateTimeFormat().format(date)}*\n`;
  textArea.textContent += '\n';

  textArea.textContent += `*Утро:* ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(utro.value)}\n`;
  textArea.textContent += `*День:* ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(den.value)}\n`;
  textArea.textContent += `*Вечер:* ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(vech.value)}\n`;
  textArea.textContent += `*Общая:* ${new Intl.NumberFormat("ru", {style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(obj.value)}\n`;
  textArea.textContent += '\n';

  textArea.textContent += '*Из них:*\n';
  textArea.textContent += `*В ресторане:* ${inRes}\n`;
  textArea.textContent += `*Кейтеринг:* ${keyT}\n`;
  textArea.textContent += `*Агрегаторы:* ${agrE}\n`;
  textArea.textContent += `*Алкоголь:* ${alko}\n`;

  textArea.textContent += '\n';

  textArea.textContent += `*Дельта к БК ${bkYear} год (${bkMonth}):* ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(bkS.value/100)}\n`;
  textArea.textContent += `*SSS(21) Day:* ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(dayS.value/100)}\n`;
  textArea.textContent += `*SSS(21) Week:* ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(weekS.value/100)}\n`;
  textArea.textContent += `*SSS(21) Month:* ${new Intl.NumberFormat("ru", {style: "percent", minimumFractionDigits: 1}).format(monthS.value/100)}\n`;

  textArea.textContent += '\n';
  textArea.textContent += `С уважением, ${manager}`
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sms();
})

copy.addEventListener('click', () => {
  textArea.select()
  document.execCommand('copy');
})
