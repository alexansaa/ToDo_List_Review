"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["activities"],{

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activities)
/* harmony export */ });
class Activities {
  static activities = [];

  constructor(description, completed, index = null) {
    let newIndex = 0;
    if (index === null) {
      if (Activities.activities.length === 0) {
        newIndex = 1;
      } else {
        newIndex = Activities.activities[Activities.activities.length - 1].index + 1;
      }
    } else {
      newIndex = index;
    }

    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static addNewActivitie(description, completed) {
    const NewActivitie = new Activities(description, completed);
    Activities.activities.push(NewActivitie);
    Activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = Activities.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    Activities.updateData();
  }

  static removeActivite(index) {
    this.activities = this.activities.filter((item) => item.index !== parseInt(index, 10));
    Activities.reorder();
    Activities.updateData();
  }

  static removeDone() {
    Activities.activities = Activities.activities.filter((item) => item.completed === false);
    Activities.reorder();
    Activities.updateData();
  }

  static reorder() {
    const tmpArr = [];
    let count = 0;
    Activities.activities.forEach((item) => {
      count += 1;
      const tmpEl = new Activities(item.description, item.completed, count);
      tmpArr.push(tmpEl);
    });
    this.activities = tmpArr;
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(Activities.activities));
  }

  static loadData() {
    Activities.activities = JSON.parse(localStorage.getItem('activities'));
    if (Activities.activities === null || Activities.activities.length === 0) {
      Activities.activities = [];
    }
    Activities.updateData();
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kb19saXN0Ly4vc3JjL2FjdGl2aXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdGllcyB7XHJcbiAgc3RhdGljIGFjdGl2aXRpZXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggPSBudWxsKSB7XHJcbiAgICBsZXQgbmV3SW5kZXggPSAwO1xyXG4gICAgaWYgKGluZGV4ID09PSBudWxsKSB7XHJcbiAgICAgIGlmIChBY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbmV3SW5kZXggPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0luZGV4ID0gQWN0aXZpdGllcy5hY3Rpdml0aWVzW0FjdGl2aXRpZXMuYWN0aXZpdGllcy5sZW5ndGggLSAxXS5pbmRleCArIDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0luZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkTmV3QWN0aXZpdGllKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IE5ld0FjdGl2aXRpZSA9IG5ldyBBY3Rpdml0aWVzKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpO1xyXG4gICAgQWN0aXZpdGllcy5hY3Rpdml0aWVzLnB1c2goTmV3QWN0aXZpdGllKTtcclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZUFjdGl2aXRpZShkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgY29uc3QgdGFyZ2V0T2JqID0gQWN0aXZpdGllcy5hY3Rpdml0aWVzLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBwYXJzZUludChpbmRleCwgMTApKTtcclxuICAgIHRhcmdldE9iai5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFyZ2V0T2JqLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZUFjdGl2aXRlKGluZGV4KSB7XHJcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBwYXJzZUludChpbmRleCwgMTApKTtcclxuICAgIEFjdGl2aXRpZXMucmVvcmRlcigpO1xyXG4gICAgQWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlRG9uZSgpIHtcclxuICAgIEFjdGl2aXRpZXMuYWN0aXZpdGllcyA9IEFjdGl2aXRpZXMuYWN0aXZpdGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSk7XHJcbiAgICBBY3Rpdml0aWVzLnJlb3JkZXIoKTtcclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlb3JkZXIoKSB7XHJcbiAgICBjb25zdCB0bXBBcnIgPSBbXTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb3VudCArPSAxO1xyXG4gICAgICBjb25zdCB0bXBFbCA9IG5ldyBBY3Rpdml0aWVzKGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uY29tcGxldGVkLCBjb3VudCk7XHJcbiAgICAgIHRtcEFyci5wdXNoKHRtcEVsKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gdG1wQXJyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZURhdGEoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZpdGllcycsIEpTT04uc3RyaW5naWZ5KEFjdGl2aXRpZXMuYWN0aXZpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgQWN0aXZpdGllcy5hY3Rpdml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZpdGllcycpKTtcclxuICAgIGlmIChBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPT09IG51bGwgfHwgQWN0aXZpdGllcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBbXTtcclxuICAgIH1cclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=