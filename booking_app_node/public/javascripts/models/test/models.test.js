import { StudentModel } from "../student_model";
import { StaffModel } from "../staff_model";
import schedules from './schedules.json';
import students from './students.json';
import staff from './staff.json';
import { initializedStudents, initializedStaff } from "./initialized_students_and_staff";

describe('Models', function () {
  let studentModel, staffModel, results, expected;
  beforeEach(() => {
    studentModel = StudentModel.init(schedules, students, staff);
    staffModel = StaffModel.init(schedules, staff, students);
  });

  describe('Student Model', function () {

    it('should initialize the student model', function () {
      expect(studentModel.students).toEqual(initializedStudents);
    });
  });

  describe('Staff Model', function () {
    it('should initialize the staff model', function () {
      expect(staffModel.staff).toEqual(initializedStaff);
    });
  });
});