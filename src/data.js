// @ts-nocheck
import allSubjects from './data/subjects.json';
const emptyPoint = `-:-`;
const decimalNum = 2;

const firstLetterUpper = function (theString) {
  return theString.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
};

const mergeData = function (template, custom) {
  for (const i in template) {
    // console.log(i);
    if (!custom[i]) custom[i] = template[i];
  }
};

const removeDecimal = function (number) {
  const num = Number(number);
  for (let i = 0; i <= decimalNum; i++) {
    if ((num * 10 ** i) % 10 ** i === 0) {
      return num.toFixed(i);
    } else if (i === decimalNum) {
      return num;
    }
  }
};

const template = {
  allSubjects: {
    teacher: 'Lorem, ipsum.',
    bgColor: 'from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600',
    first: [],
    second: [],
    third: [],
  },
};

for (const i in allSubjects) {
  if (typeof allSubjects[i] === 'object') {
    allSubjects[i].name = i;
    Object.defineProperty(allSubjects[i], 'average', {
      get: function () {
        const division =
          this.first.length + this.second.length * 2 + this.third.length * 3;
        let average;
        let total = 0;
        if (division > 0) {
          const arr = [this.first, this.second, this.third];
          for (const data in arr) {
            for (const i of arr[data]) {
              total += i * Number(data + 1);
            }
          }
          average = removeDecimal((total / division).toFixed(decimalNum));
        } else {
          average = emptyPoint;
        }
        return average;
      },
    });
  }

  if (!allSubjects[i].fullName.en)
    allSubjects[i].fullName.en = firstLetterUpper(i);
  mergeData(template.allSubjects, allSubjects[i]);
}

// Object.defineProperty(allSubjects, 'average', {
//   get: function () {
//     let total = 0;
//     const division = Object.keys(this).length - 1;
//     for (const i in this) {
//       const num = Number(this[i].average);
//       if (num) {
//         total += num;
//       }
//     }
//     const average =
//       total > 0
//         ? removeDecimal((total / division).toFixed(decimalNum))
//         : emptyPoint;
//     this.average = average;
//     return average;
//   },
// });

allSubjects.calcAverage = function () {
  let total = 0;
  const division = Object.keys(this).length - 1;
  for (const i in this) {
    const num = Number(this[i].average);
    if (num) {
      total += num;
    }
  }
  const average =
    total > 0
      ? removeDecimal((total / division).toFixed(decimalNum))
      : emptyPoint;
  this.average = average;
  //   console.log(average);
  return average;
};
allSubjects.calcAverage();

mergeData(
  {
    first: {
      vi: 'Điểm Kiểm tra Thường xuyên',
      en: 'Điểm Kiểm tra Thường xuyên',
    },
    second: { vi: 'Điểm Giữa kì', en: 'Điểm Giữa kì' },
    third: { vi: 'Điểm Cuối kì', en: 'Điểm Cuối kì' },
  },
  allSubjects
);

const icon = {
  sun: `<i class="uil uil-sun"></i>`,
  moon: `<i class="uil uil-moon"></i>`,
};

const sunData = [
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

const moonData = [
  [icon.moon, '1', 'Ngữ văn', '', 'Hoá học', '', 'Anh văn', ''],
  ['', '2', 'Ngữ văn', '', 'GDQP-AN', '', 'Thể dục', ''],
  ['', '3', 'Ngữ văn', '', 'Ngữ văn', '', 'Thể dục', ''],
  ['', '4', '', '', 'Sinh học', '', 'Công nghệ', ''],
  ['', '5', '', '', '', '', '', ''],
];

const cells = {
  head: ['Buổi', 'Tiết', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  //   head: [
  //     'Session',
  //     'Period',
  //     'Monday',
  //     'Tuesday',
  //     'Wednesday',
  //     'Thursday',
  //     'Friday',
  //     'Saturday',
  //   ],
  sun: sunData,
  moon: moonData,
};

export { allSubjects, cells };
