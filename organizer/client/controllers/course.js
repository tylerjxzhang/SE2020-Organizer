Template.course.helpers({
  assignments: function () {
    return Assignments.find({course_code: this.course.code});
  },

  isCompleted: function () {
  	return this.completed == null ? false : (this.completed.indexOf(Meteor.userId()) !== -1);
  },

  isReading: function(){
    return this.label == 0;
  },

  isNotGraded: function(){
    return this.label == 1;
  },

  isGraded: function(){
    return this.label == 2;
  }
});

Template.course.events({
	"click .toggle-completed" : function(event){ //Adds the user to the list of users who have completed
    if (this.completed == null) { this.completed = [];}
    if (event.target.checked){ //Checked completed
      this.completed.push(Meteor.userId());
    } else { //Unchecked
      delete this.completed[this.completed.indexOf(Meteor.userId())];
    }
    Assignments.update(this._id, {$set: {completed: this.completed}})
	}
})