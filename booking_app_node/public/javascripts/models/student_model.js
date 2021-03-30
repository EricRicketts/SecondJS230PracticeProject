let StudentModel = {
  buildStudentModel: function(schedules, students, staff) {
    let clonedStudents = JSON.parse(JSON.stringify(students));
    let clonedStaff = JSON.parse(JSON.stringify(staff));
    let schedulesWithBookings = schedules.filter(schedule => schedule.student_email !== null);
    clonedStudents.forEach(student => student.bookings = []);
    return clonedStudents.map(student => {
      let studentWithBooking = schedulesWithBookings.find(schedule => schedule.student_email === student.email);
      if (studentWithBooking) {
        let staffMember = clonedStaff.find(staff_member => studentWithBooking.staff_id === staff_member.id);
        let bookingObject = {
          staff: staffMember,
          booking: { date: studentWithBooking.date, time: studentWithBooking.time }
        };
        student.bookings.push(bookingObject);
      }
      return student;
    });
  },
  init: function(schedules, students, staff) {
    this.students = this.buildStudentModel(schedules, students, staff)
    return this;
  }
}

export { StudentModel };