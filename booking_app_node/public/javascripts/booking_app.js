import { Model } from "./models/model.js";
import { View } from "./views/view.js";

let BookingApp = {
  /*
  getModelData: function() {
    const domain = 'http://localhost:3000';
    const [schedulesPath, studentsPath, staffPath] = ['/api/schedules', '/api/students', '/api/staff_members'];
    let [schedulesXhr, studentsXhr, staffXhr] = [ new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest()];
    [[schedulesXhr, schedulesPath], [studentsXhr, studentsPath], [staffXhr, staffPath]].forEach(([xhr, path]) => {
      xhr.open('GET', domain + path);
      xhr.responseType = 'json';
      xhr.send();
    });
    schedulesXhr.onreadystatechange = function() {
      if (schedulesXhr.readyState === schedulesXhr.DONE) {
        let schedules = schedulesXhr.response;
        this.schedulesHandler(studentsXhr, staffXhr, schedules);
      } else {
        console.log('waiting');
      }
    }.bind(this);
  },
  schedulesHandler: function(studentsXhr, staffXhr, schedules) {
    studentsXhr.onreadystatechange = function() {
      if (studentsXhr.readyState === studentsXhr.DONE) {
        let students = studentsXhr.response;
        this.studentsHandler(staffXhr, schedules, students);
      } else {
        console.log('waiting');
      }
    }.bind(this);
  },
  staffHandler: function(schedules, students, staff) {
    this.model = {
      students: StudentModel.init(schedules, students, staff),
      staff: StaffModel.init(schedules, staff, students)
    }
  },
  studentsHandler: function(staffXhr, schedules, students) {
    staffXhr.onreadystatechange = function() {
      if (staffXhr.readyState === staffXhr.DONE) {
        let staff = staffXhr.response;
        this.staffHandler(schedules, students, staff);
      } else {
        console.log('waiting');
      }
    }.bind(this);
  },

   */
  init: function(document) {
    this.document = document;
    this.view = View.init(document);
    this.model = Model.init();
  }
}

document.addEventListener('DOMContentLoaded', event => {
  let bookingApp = BookingApp.init(document);
});
