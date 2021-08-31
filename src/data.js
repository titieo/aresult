const emptyPoint = `-:-`;
const decimalNum = 2;
const allSubjects = {
  math: {
    fullName: { vi: 'Toán học', en: 'Mathematics' },
    // teacher: 'Lorem ipsum dolor sit amet.',
    bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
    first: [10],
    second: [],
    third: [],
  },
};

for (const i in allSubjects) {
  if (typeof allSubjects[i] !== 'function')
    allSubjects[i].calcAverage = function () {
      let division = 0;
      let average;
      let total = 0;
      division +=
        this.first.length + this.second.length * 2 + this.third.length * 3;
      if (division > 0) {
        const arr = [this.first, this.second, this.third];
        for (const data in arr) {
          for (const i of arr[data]) {
            total += i * Number(data + 1);
          }
        }
        average = (total / division).toFixed(decimalNum);
      } else {
        average = emptyPoint;
      }
      this.average = average;
      return average;
    };
  allSubjects[i].calcAverage();
  //   Calc average
}

allSubjects.calcAverage = function () {
  const division = Object.keys(this).length - 1;
  let average;
  let total = 0;
  for (const i in this) {
    const num = Number(this[i].average);
    console.log(i, num);
    if (num) {
      total += num;
    }
  }
  // eslint-disable-next-line prefer-const
  average = total > 0 ? (total / division).toFixed(decimalNum) : emptyPoint;
  this.average = average;
  return average;
};
allSubjects.calcAverage();

export const vi = {
  code: 'vi-VN',
  home: 'Trang chủ',
  grade: 'Lớp',
  semester: 'Học kì',
  version: 'Phiên bản',
  setting: 'Cài đặt',
  bug: 'Góp ý',
  schedule: 'Thời khoá biểu',
};

export const en = {
  code: 'en-US',
  home: 'Home',
  grade: 'Class',
  semester: 'Semester',
  version: 'Version',
  setting: 'Setting',
  bug: 'Report bug',
  schedule: 'Schedule',
};

export const icon = {
  sun: `<i class="uil uil-sun"></i>`,
  moon: `<i class="uil uil-moon"></i>`,
};

export const sunData = [
  [icon.sun, '1', 'Chào cờ', 'Hoá học', 'Tin học', 'Hình học', 'Đại số', ''],
  [
    '',
    '2',
    'Sinh hoạt lớp',
    'Hoá học',
    'Tin học',
    'Hình học',
    'Đại số',
    'Vật lí',
  ],
  ['', '3', 'Toán', 'Hoá học', 'Anh văn', 'Hình học', '', 'Vật lí'],
  ['', '4', 'Toán', 'Vật lí', 'Anh văn', 'Địa lí', '', 'Lịch sử'],
  ['', '5', 'Đại số', 'Vật lí', 'GDCD', 'Địa lí', '', 'Lịch sử'],
];

export const moonData = [
  [icon.moon, '1', 'Ngữ văn', '', 'Hoá học', '', 'Anh văn', ''],
  ['', '2', 'Ngữ văn', '', 'GDQP-AN', '', 'Thể dục', ''],
  ['', '3', 'Ngữ văn', '', 'Ngữ văn', '', 'Thể dục', ''],
  ['', '4', '', '', 'Sinh học', '', 'Công nghệ', ''],
  ['', '5', '', '', '', '', '', ''],
];

export { allSubjects };
