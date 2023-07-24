export default class Activities {
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
