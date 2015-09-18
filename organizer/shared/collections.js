// Sets up the MongoDB collections
//
// notice the lack of 'var' below - this makes these variables accessible in
// any module.
Courses = new Mongo.Collection('courses');
Assignments = new Mongo.Collection('assignments');

Assignments.attachSchema(new SimpleSchema({
  course_code: {
    type: String,
    label: 'Course'
  },
  title: {
    type: String,
    label: 'Title'
  },
  due_date: {
    type: Date,
    label: 'Due Date',
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  }
}));
