const emptyPoint = `-:-`;
const decimalNum = 2;

const firstLetterUpper = function (theString) {
  return theString.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
};

const allSubjects = {
  math: {
    fullName: { vi: 'Toán học' },
    teacher: 'Nguyễn Tăng Vũ, Tạ Hoàng Thông và Lê Bá Khánh Trình',
    bgColor: 'from-red-500 to-orange-400 dark:from-red-600 dark:to-orange-500',
    first: [],
    second: [],
    third: [],
  },

  literature: {
    fullName: { vi: 'Ngữ văn' },
    teacher: 'Vũ Nam Thái',
    bgColor:
      'from-warm-gray-300 to-true-gray-300 dark:to-true-gray-400 dark:from-warm-gray-400',
    first: [],
    second: [],
    third: [],
  },

  english: {
    fullName: { vi: 'Tiếng Anh' },
    teacher: 'Mai Thị Thùy Vân',
    bgColor: 'from-lime-600 to-lime-400 dark:from-lime-700 dark:to-lime-500',
    first: [],
    second: [],
    third: [],
  },

  physics: {
    fullName: { vi: 'Vật lý' },
    teacher: 'Lê Văn Ngọc',
    bgColor: 'from-blue-800 to-cyan-400 dark:from-blue-900 dark:to-cyan-500',
    first: [],
    second: [],
    third: [],
  },

  chemistry: {
    fullName: { vi: 'Hóa học' },
    teacher: 'H. Thế Thụy Lệ Chi',
    bgColor:
      'from-indigo-800 to-purple-600 dark:from-indigo-900 dark:to-purple-700',
    first: [],
    second: [],
    third: [],
  },

  biology: {
    fullName: { vi: 'Sinh học' },
    teacher: 'Huỳnh Thị Đan San',
    bgColor: 'from-green-700 to-lime-400 dark:from-green-800 dark:to-lime-500',
    first: [],
    second: [],
    third: [],
  },

  history: {
    fullName: { vi: 'Lịch sử' },
    teacher: 'Đào Minh Hồng',
    bgColor:
      'from-amber-800 to-yellow-500 dark:from-amber-900 dark:to-yellow-600',
    first: [],
    second: [],
    third: [],
  },

  geography: {
    fullName: { vi: 'Địa lý' },
    teacher: 'Nguyễn Thế Nhất',
    bgColor:
      'from-blue-700 to-light-blue-400 dark:from-blue-800 dark:to-light-blue-500',
    first: [],
    second: [],
    third: [],
  },

  civics: {
    fullName: { vi: 'GDCD' },
    teacher: 'Nguyễn Sỹ Mạnh',
    bgColor:
      'from-rose-300 to-orange-200 dark:from-rose-400 dark:to-orange-300',
    first: [],
    second: [],
    third: [],
  },

  it: {
    fullName: { vi: 'Tin học', en: 'IT' },
    teacher: 'Nguyễn Thanh Hùng/Trương Phước Hải',

    bgColor: 'from-red-700 to-pink-600 dark:from-red-800 dark:to-pink-700',
    first: [],
    second: [],
    third: [],
  },

  economics: {
    fullName: { vi: 'Công nghệ' },
    teacher: 'Phạm Tấn Trường',
    // bgColor: '',
    first: [],
    second: [],
    third: [],
  },

  //   pe: {
  //     fullName: { vi: 'Thể dục', en: 'PE' },
  //     teacher: 'Cù Văn Hoàng',
  //     bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
  //     first: [],
  //     second: [],
  //     third: [],
  //   },

  defense: {
    fullName: { vi: 'GDQP-AN', en: 'National Defense' },
    teacher: 'Nguyễn Hồng Quang',
    bgColor:
      'from-light-blue-300 to-blue-700 dark:from-light-blue-400 dark:to-blue-800',
    first: [],
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
  if (!allSubjects[i].fullName.en)
    allSubjects[i].fullName.en = firstLetterUpper(i);
  //   Calc average
}

allSubjects.calcAverage = function () {
  let total = 0;
  const division = Object.keys(this).length - 1;
  for (const i in this) {
    const num = Number(this[i].average);
    console.log(i, num);
    if (num) {
      total += num;
    }
  }
  const average =
    total > 0 ? (total / division).toFixed(decimalNum) : emptyPoint;
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
