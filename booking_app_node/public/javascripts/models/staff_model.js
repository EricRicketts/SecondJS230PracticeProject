let StaffModel = {
  buildStaffModel: function(schedules, staff, students) {
    let clonedStudents = JSON.parse(JSON.stringify(students));
    let clonedStaff = JSON.parse(JSON.stringify(staff));
    clonedStaff.forEach(staffMember => staffMember.bookings = []);
    let allStaffWithBookings = schedules.filter(schedule => schedule.student_email !== null);
    return clonedStaff.map(staffMember => {
      let staffWithBooking = allStaffWithBookings.find(bookedStaff => staffMember.id === bookedStaff.staff_id);
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
  init: function(schedules, staff, students) {
    this.staff = this.buildStaffModel(schedules, staff, students);
    return this;
  }
}

export { StaffModel };
/*
  our end goal is an object with all of the current properties of the current staff json file, but with an added
  array for bookings

  1.  filter the schedules get all of the student emails that are non null.
  2.  cycle through all of the staff, then find if the current staff id matches one of the filtered staff id.
  3.  if the id's match then use the student email to find the student from the student array, append the date
  and time of the booking to the object
*/