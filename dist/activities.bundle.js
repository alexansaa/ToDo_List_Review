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
      if (this.activities.length === 0) {
        newIndex = 1;
      } else {
        newIndex = this.activities[this.activities.length - 1].index + 1;
      }
    } else {
      newIndex = index;
    }

    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static addNewActivitie(description, completed) {
    const NewActivitie = new this(description, completed);
    this.activities.push(NewActivitie);
    this.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = this.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    this.updateData();
  }

  static removeActivite(index) {
    this.activities = this.activities.filter((item) => item.index !== parseInt(index, 10));
    this.reorder();
    this.updateData();
  }

  static removeDone() {
    this.activities = this.activities.filter((item) => item.completed === false);
    this.reorder();
    this.updateData();
  }

  static reorder() {
    let count = 0;
    const tmpArr = this.activities.map((item) => {
      count += 1;
      item.index = count;
      return item;
    });
    this.activities = tmpArr;
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(this.activities));
  }

  static loadData() {
    this.activities = JSON.parse(localStorage.getItem('activities'));
    if (this.activities === null || this.activities.length === 0) {
      this.activities = [];
    }
    this.updateData();
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9fbGlzdC8uL3NyYy9hY3Rpdml0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXRpZXMge1xyXG4gIHN0YXRpYyBhY3Rpdml0aWVzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4ID0gbnVsbCkge1xyXG4gICAgbGV0IG5ld0luZGV4ID0gMDtcclxuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xyXG4gICAgICBpZiAodGhpcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIG5ld0luZGV4ID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdJbmRleCA9IHRoaXMuYWN0aXZpdGllc1t0aGlzLmFjdGl2aXRpZXMubGVuZ3RoIC0gMV0uaW5kZXggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZE5ld0FjdGl2aXRpZShkZXNjcmlwdGlvbiwgY29tcGxldGVkKSB7XHJcbiAgICBjb25zdCBOZXdBY3Rpdml0aWUgPSBuZXcgdGhpcyhkZXNjcmlwdGlvbiwgY29tcGxldGVkKTtcclxuICAgIHRoaXMuYWN0aXZpdGllcy5wdXNoKE5ld0FjdGl2aXRpZSk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVBY3Rpdml0aWUoZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXgpIHtcclxuICAgIGNvbnN0IHRhcmdldE9iaiA9IHRoaXMuYWN0aXZpdGllcy5maW5kKChvYmopID0+IG9iai5pbmRleCA9PT0gcGFyc2VJbnQoaW5kZXgsIDEwKSk7XHJcbiAgICB0YXJnZXRPYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhcmdldE9iai5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVBY3Rpdml0ZShpbmRleCkge1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gdGhpcy5hY3Rpdml0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcGFyc2VJbnQoaW5kZXgsIDEwKSk7XHJcbiAgICB0aGlzLnJlb3JkZXIoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZURvbmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2aXRpZXMgPSB0aGlzLmFjdGl2aXRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xyXG4gICAgdGhpcy5yZW9yZGVyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW9yZGVyKCkge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IHRtcEFyciA9IHRoaXMuYWN0aXZpdGllcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgY291bnQgKz0gMTtcclxuICAgICAgaXRlbS5pbmRleCA9IGNvdW50O1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gdG1wQXJyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZURhdGEoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZpdGllcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWN0aXZpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZpdGllcycpKTtcclxuICAgIGlmICh0aGlzLmFjdGl2aXRpZXMgPT09IG51bGwgfHwgdGhpcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmFjdGl2aXRpZXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=