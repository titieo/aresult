export const allSubjects = {
  math: {
    // fullName: 'Toán học',
    fullName: { vi: 'Toán học', en: 'Mathematics' },
    // teacher: 'Lorem ipsum dolor sit amet.',
    bgColor: 'from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500',
    mainImg:
      'https://sachcuatui.net/wp-content/uploads/2019/10/sach-giao-khoa-dai-so-lop-10-nang-cao.jpg',
    first: [],
    second: [],
    third: [],
    calcAverage() {
      let division = 1;
      let average;
      let total = 0;
      division +=
        this.first.length + this.second.length * 2 + this.third.length * 3;
      if (division > 1) {
        for (let i = 0; i < this.first.length; i++) {
          total += this.first.length;
        }
        for (let i = 0; i < this.second.length; i++) {
          total += this.second.length;
        }
        for (let i = 0; i < this.third.length; i++) {
          total += this.third.length;
        }
        average = (total / division).toFixed(2);
      } else {
        average = '__.__';
      }
      this.average = average;
      return average;
    },
  },
};

export const vi = {
  code: 'vi-VN',
  home: 'Trang chủ',
  grade: 'Lớp',
  semester: 'Học kì',
  version: 'Phiên bản',
  setting: 'Cài đặt',
  bug: 'Góp ý',
};

export const en = {
  code: 'en-US',
  home: 'Home',
  grade: 'Class',
  semester: 'Semester',
  version: 'Version',
  setting: 'Setting',
  bug: 'Report bug',
};
