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
  enToCh
};
