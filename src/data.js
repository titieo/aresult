const allSubjects = {
  math: {
    // fullName: 'Toán học',
    fullName: { vi: 'Toán học', en: 'Mathematics' },
    // teacher: 'Lorem ipsum dolor sit amet.',
    bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
    first: [10],
    second: [],
    third: [],
  },
  physics: {
    // fullName: 'Toán học',
    fullName: { vi: 'T', en: 'Physics' },
    // teacher: 'Lorem ipsum dolor sit amet.',
    bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
    first: [],
    second: [],
    third: [],
  },
};

for (const i in allSubjects) {
  console.log(allSubjects[i]);
  allSubjects[i].calcAverage = function () {
    let division = 0;
    let average;
    let total = 0;
    division +=
      this.first.length + this.second.length * 2 + this.third.length * 3;
    if (division > 0) {
      for (const i of this.first) {
        total += i;
      }
      for (const i of this.second) {
        total += i * 2;
      }
      for (const i of this.third) {
        total += i * 3;
      }
      average = (total / division).toFixed(2);
    } else {
      average = '__.__';
    }
    this.average = average;
    return average;
  };
  allSubjects[i].calcAverage();
}

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
