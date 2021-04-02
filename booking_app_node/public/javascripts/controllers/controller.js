let Controller = {
  populateModel: function(event) {
    event.stopPropagation();
    const domain = 'http://localhost:3000';
    const [schedulesPath, studentsPath, staffPath] = ['/api/schedules', '/api/students', '/api/staff_members'];
    let [schedulesXhr, studentsXhr, staffXhr] = [ new XMLHttpRequest(), new XMLHttpRequest(), new XMLHttpRequest()];
    [[schedulesXhr, schedulesPath], [studentsXhr, studentsPath], [staffXhr, staffPath]].forEach(([xhr, path]) => {
      xhr.open('GET', domain + path);
      xhr.responseType = 'json';
      xhr.send();
    });
    schedulesXhr.addEventListener('load', event => {
      this.app.model.schedules = event.target.response;
      staffXhr.addEventListener('load', event => {
        this.app.model.staff = event.target.response;
        studentsPath.addEventListener('load', event => {
          this.app.model.students = event.target.response;
          let formattedStaffData = this.app.model.buildAllStaffOrStudentsForView(this.app.model.schedules,
            this.app.model.staff, this.app.model.schedules);

        });
      });
    });
  },
  init: function(app) {
    this.app = app;
    return this;
  }
}

export { Controller };