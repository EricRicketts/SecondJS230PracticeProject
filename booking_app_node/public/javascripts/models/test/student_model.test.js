import { StudentModel } from "../student_model";
import schedules from './schedules.json';
import students from './students.json';
import staffMembers from './staff_members.json';

describe('Student Model', function () {
  let studentModel, results, expected;
  beforeEach(() => {
    studentModel = StudentModel.init(schedules, students, staffMembers);
  });

  it('should initialize the student model', function () {
    expected = [
      { id: 1, email: "esmeralda.weber@huel.biz", name: "Dashawn Bergstrom", bookings: [] },
      { id: 2, email: "marquise@jacobi.info", name: "Bettie Swaniawski",
        bookings: [
          {
            staff_id: 1, staff_name: "Fae Kassulke V", staff_email: "ewald@mills.com",
            date: "07-03-18", time: "06:30"
          }
        ]
      },
      { id: 3, email: "keaton@morar.io", name: "Madaline Armstrong",
        bookings: [
          {
            staff_id: 2, staff_name: "Aaron Nitzsche", staff_email: "kali@rosenbaumtremblay.biz",
            date: "08-02-18", time: "07:20"
          }
        ]
      },
      { id: 4, email: "aniya@dachkuphal.biz", name: "Julius Balistreri",
        bookings: [
          {
            staff_id: 3, staff_name: "Gia Rice", staff_email: "steve_marvin@bergnaum.co",
            date: "09-02-18", time: "08:20"
          }
        ]
      },
      { id: 5, email: "enrico_prosacco@ortiz.com", name: "Mrs. Randy Roob", bookings: [] }
    ]

    expect(studentModel.students).toEqual(expected);
  });
});