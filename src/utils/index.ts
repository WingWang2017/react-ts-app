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
  monthAndDayHours
};
