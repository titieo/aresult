var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&n(e,a,i[a]);if(r)for(var a of r(i))o.call(i,a)&&n(e,a,i[a]);return e};import("data:text/javascript;base64,Cg==");import{m as a,a as s,b as h}from"./vendor.a92413f7.js";const l=function(e,r){for(const t in e)console.log(t),r[t]||(r[t]=e[t])},c=function(e){const r=Number(e);for(let t=0;t<=2;t++){if(r*10**t%10**t==0)return r.toFixed(t);if(2===t)return r}},g={teacher:"Lorem, ipsum.",bgColor:"from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600",first:[],second:[],third:[]},u={math:{fullName:{vi:"Toán học"},teacher:"Nguyễn Tăng Vũ, Tạ Hoàng Thông và Lê Bá Khánh Trình",bgColor:"from-red-500 to-orange-400 dark:from-red-600 dark:to-orange-500",first:[],second:[],third:[]},literature:{fullName:{vi:"Ngữ văn"},teacher:"Vũ Nam Thái",bgColor:"from-warm-gray-300 to-true-gray-300 dark:to-true-gray-400 dark:from-warm-gray-400",first:[],second:[],third:[]},english:{fullName:{vi:"Tiếng Anh"},teacher:"Mai Thị Thùy Vân",bgColor:"from-lime-600 to-lime-400 dark:from-lime-700 dark:to-lime-500",first:[],second:[],third:[]},physics:{fullName:{vi:"Vật lý"},teacher:"Lê Văn Ngọc",bgColor:"from-blue-800 to-cyan-400 dark:from-blue-900 dark:to-cyan-500",first:[],second:[],third:[]},chemistry:{fullName:{vi:"Hóa học"},teacher:"H. Thế Thụy Lệ Chi",bgColor:"from-indigo-800 to-purple-600 dark:from-indigo-900 dark:to-purple-700",first:[],second:[],third:[]},biology:{fullName:{vi:"Sinh học"},teacher:"Huỳnh Thị Đan San",bgColor:"from-green-700 to-lime-400 dark:from-green-800 dark:to-lime-500",first:[],second:[],third:[]},history:{fullName:{vi:"Lịch sử"},teacher:"Đào Minh Hồng",bgColor:"from-amber-800 to-yellow-500 dark:from-amber-900 dark:to-yellow-600",first:[],second:[],third:[]},geography:{fullName:{vi:"Địa lý"},teacher:"Nguyễn Thế Nhất",bgColor:"from-blue-700 to-light-blue-400 dark:from-blue-800 dark:to-light-blue-500",first:[],second:[],third:[]},civics:{fullName:{vi:"GDCD"},teacher:"Nguyễn Sỹ Mạnh",bgColor:"from-rose-300 to-orange-200 dark:from-rose-400 dark:to-orange-300",first:[],second:[],third:[]},it:{fullName:{vi:"Tin học",en:"IT"},teacher:"Nguyễn Thanh Hùng/Trương Phước Hải",bgColor:"from-red-700 to-pink-600 dark:from-red-800 dark:to-pink-700",first:[],second:[],third:[]},economics:{fullName:{vi:"Công nghệ"},teacher:"Phạm Tấn Trường",first:[],second:[],third:[]},defense:{fullName:{vi:"GDQP-AN",en:"National Defense"},teacher:"Nguyễn Hồng Quang",bgColor:"from-light-blue-300 to-blue-700 dark:from-light-blue-400 dark:to-blue-800",first:[],second:[],third:[]}};for(const p in u)"function"!=typeof u[p]&&(u[p].name=p,u[p].calcAverage=function(){let e,r=0,t=0;if(r+=this.first.length+2*this.second.length+3*this.third.length,r>0){const o=[this.first,this.second,this.third];for(const e in o)for(const r of o[e])t+=r*Number(e+1);e=c((t/r).toFixed(2))}else e="-:-";return this.average=e,e}),u[p].calcAverage(),u[p].fullName.en||(u[p].fullName.en=p.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,(function(e){return e.toUpperCase()}))),l(g,u[p]);u.calcAverage=function(){let e=0;const r=Object.keys(this).length-1;for(const o in this){const r=Number(this[o].average);r&&(e+=r)}const t=e>0?c((e/r).toFixed(2)):"-:-";return this.average=t,t},u.calcAverage(),l({first:{vi:"Điểm Kiểm tra Thường xuyên",en:"Điểm Kiểm tra Thường xuyên"},second:{vi:"Điểm Giữa kì",en:"Điểm Giữa kì"},third:{vi:"Điểm Cuối kì",en:"Điểm Cuối kì"}},u);const d={code:"vi-VN",home:"Trang chủ",grade:"Lớp",semester:"Học kì",version:"Phiên bản",setting:"Cài đặt",bug:"Góp ý",schedule:"Thời khoá biểu"},f={code:"en-US",home:"Home",grade:"Class",semester:"Semester",version:"Version",setting:"Setting",bug:"Report bug",schedule:"Schedule"},m={sun:'<i class="uil uil-sun"></i>',moon:'<i class="uil uil-moon"></i>'},b=[[m.sun,"1","Chào cờ","Hoá học","Tin học","Hình học","Đại số",""],["","2","Sinh hoạt lớp","Hoá học","Tin học","Hình học","Đại số","Vật lí"],["","3","Toán","Hoá học","Anh văn","Hình học","","Vật lí"],["","4","Toán","Vật lí","Anh văn","Địa lí","","Lịch sử"],["","5","Đại số","Vật lí","GDCD","Địa lí","","Lịch sử"]],v=[[m.moon,"1","Ngữ văn","","Hoá học","","Anh văn",""],["","2","Ngữ văn","","GDQP-AN","","Thể dục",""],["","3","Ngữ văn","","Ngữ văn","","Thể dục",""],["","4","","","Sinh học","","Công nghệ",""],["","5","","","","","",""]];window.Alpine=a,a.plugin(s),a.plugin(h),a.data("allSubjects",(()=>({items:u,get filteredObj(){return Object.keys(this.items).filter((e=>"object"==typeof this.items[e]&&"first"!==e&&"second"!==e&&"third"!==e))}}))),a.data("schedule",(()=>({cells:{head:["Buổi","Tiết","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],sun:[...b],moon:[...v]}}))),a.data("i18n",(function(){return{isEnglish:this.$persist(!1),langCode(){return this.isEnglish?"en":"vi"},lang(){return this.data=this.isEnglish?i({},f):i({},d),this.data}}})),a.store("avatar",{webp:"avatar.webp",png:"avatar.png"}),a.store("showSideBar",!1),a.start(),document.querySelectorAll("a").forEach((e=>{"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer")})),document.querySelectorAll("img").forEach((e=>{e.setAttribute("loading","lazy"),e.onerror=function(){console.error(`${this.src} not found`),this.src="cat.png",this.srcset="cat.png 640w,cat@2x.png 1920w, cat@3x.png 2400w",this.onerror=null}}));
