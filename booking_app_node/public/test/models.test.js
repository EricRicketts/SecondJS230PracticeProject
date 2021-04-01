import { Model } from '../javascripts/models/model';
import schedules from './model_test_data/schedules.json';
import students from './model_test_data/students.json';
import staff from './model_test_data/staff.json';
import { initializedStudents, initializedStaff } from './model_test_data/initialized_students_and_staff';

describe('Model Behavior', function () {
  let model, results, expected;
  beforeEach(() => {
    model = Model.init();
  });

  it('should initialize the model', function () {
    results = [model.schedules, model.staff, model.students];
    expected = [[], [], []];

    expect(results).toEqual(expected);
  });

  it('should return student model for view', function () {
    expect(model.buildAllStaffOrStudentsForView(schedules, staff, students, false)).toEqual(initializedStudents);
  });

  it('should return the staff model for view', function () {
    expect(model.buildAllStaffOrStudentsForView(schedules, staff, students)).toEqual(initializedStaff);
  });
});