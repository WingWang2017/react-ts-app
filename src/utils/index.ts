// import 'framework7';

const fmtDate = (ls: any) => {
  const date: Date = new Date(ls * 1000);
  const y: number = date.getFullYear(); // + date.getYear();
  const m: string = '0' + (date.getMonth() + 1);
  const d: string = '0' + date.getDate();
  return y + '-' + m.substring(m.length - 2, m.length) + '-' + d.substring(d.length - 2, d.length);
};

// 时间戳转换时间格式
const dateC = (ns: any) => {
  let date;
  ns === undefined ? date = new Date() : date = new Date(ns * 1000);
  const month = foreAddZero(date.getMonth() + 1);
  const strDate = foreAddZero(date.getDate());
  const hours = foreAddZero(date.getHours());
  const minutes = foreAddZero(date.getMinutes());
  const timeDate: any = new Date();
  if (fmtDate(ns) === fmtDate(timeDate / 1000) || ns === undefined) { // 判断是否是当天
    return hours + ':' + minutes;  // 格式 15:00
  }
  if (date.getFullYear() === (new Date()).getFullYear()) { // 判断是否是当年
    return month + '/' + strDate;  // 格式 08/08
  } else {
    return date.getFullYear() + '/' + month + '/' + strDate;  // 格式 2015/08/08
  }
};

// 小于10的数字前面加上0
const foreAddZero = (num: number) => {
  return num < 10 && num >= 0 ? '0' + num : num;
};

// 时间转换 2018/2/24 11:00
const yearAndMonthAndDayHours = (time: any) => {
  const date: Date = new Date(time * 1000);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

const monthAndDayHours = (ns: any) => {
  const date: Date = new Date(ns * 1000);
  return ` ${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

// 表情转码
function utf16toEntities(str: string) {
  const patt = /[\ud800-\udbff][\udc00-\udfff]/g;
  // 检测utf16字符正则
  str = str.replace(patt, (char: any) => {
    let H;
    let L;
    let code;
    if (char.length === 2) {
      H = char.charCodeAt(0);
      // 取出高位
      L = char.charCodeAt(1);
      // 取出低位
      code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
      // 转换算法
      return "&#" + code + ";";
    } else {
      return char;
    }
  });
  return str;
}

// 表情解码
function entitiestoUtf16(str: string) {
  // 检测出形如&#12345;形式的字符串
  let strObj: string = utf16toEntities(str);
  const patt: any = /&#\d+;/g;
  let H;
  let L;
  let code;
  const arr = strObj.match(patt) || [];
  for (const i of arr) {
    code = arr[i];
    code = code.replace('&#', '').replace(';', '');
    // 高位
    H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
    // 低位
    L = (code - 0x10000) % 0x400 + 0xDC00;
    code = "&#" + code + ";";
    const s: string = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }
  return strObj;
}

// deviceready  设备加载完成后的回调
const deviceready = (fun: any): void => {
  document.addEventListener('deviceready', () => {
    fun();
  }, false);
};


const enToCh = (value: string) => {
  switch (value) {
    case 'present':
      return '出席';
      break;
    case 'absent':
      return '旷课';
      break;
    case 'late':
      return '迟到';
      break;
    case 'leave':
      return '请假';
      break;
    case 'earlyout':
      return '早退';
      break;
    default:
      return value;
  }
};

export {
  fmtDate,
  dateC,
  foreAddZero,
  enToCh,
  yearAndMonthAndDayHours,
  monthAndDayHours,
  utf16toEntities,
  entitiestoUtf16,
  deviceready
};
