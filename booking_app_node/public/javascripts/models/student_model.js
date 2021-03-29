let StudentModel = {
  buildStudentModel: function(schedules, students, staff) {
    let schedulesWithBookings = schedules.filter(schedule => schedule.student_email !== null);
    students.forEach(student => student.bookings = []);
    return students.map(student => {
      let foundBooking = schedulesWithBookings.find(schedule => schedule.student_email === student.email);
      if (foundBooking) {
        let staffMember = staff.find(staff_member => foundBooking.staff_id === staff_member.id);
        let booking = {
          staff_id: foundBooking.staff_id, staff_name: staffMember.name, staff_email: staffMember.email,
          date: foundBooking.date, time: foundBooking.time
        };
        student.bookings.push(booking);
      }
      return studentiii;
    });
  },
  init: function(schedules, students, staff) {
    this.students = this.buildStudentModel(schedules, students, staff)
    return this;
  }
}

export { StudentModel };