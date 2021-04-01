let Model = {
  buildAllStaffOrStudentsForView: function(schedules, staff, students, returnStaff=true) {
    let clonedStaff = JSON.parse(JSON.stringify(staff));
    let clonedStudents = JSON.parse(JSON.stringify(students));
    let schedulesWithBookings = schedules.filter(schedule => schedule.student_email !== null);
    return returnStaff ? this.buildStaffForView(clonedStaff, clonedStudents, schedulesWithBookings) :
      this.buildStudentsForView(clonedStudents, clonedStaff, schedulesWithBookings);
  },
  buildStaffForView: function(clonedStaff, clonedStudents, schedulesWithBookings) {
    clonedStaff.forEach(staffMember => staffMember.bookings = []);
    return clonedStaff.map(staffMember => {
      let staffWithBooking = schedulesWithBookings.find(bookedStaff => staffMember.id === bookedStaff.staff_id);
      if (staffWithBooking) {
        let studentWithBooking = clonedStudents.find(student => staffWithBooking.student_email === student.email);
        let bookingObject = {
          student: studentWithBooking,
          booking: { date: staffWithBooking.date, time: staffWithBooking.time }
        }
        staffMember.bookings.push(bookingObject);
      }
      return staffMember;
    });
  },
  buildStudentsForView: function(clonedStudents, clonedStaff, schedulesWithBookings) {
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
  init: function() {
    this.staff = [];
    this.students = [];
    this.schedules = [];
    return this;
  }
}

export { Model };