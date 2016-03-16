/**
 * Created by ocallaga on 16/03/2016.
 */

    // counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
    myHelper: function () {
        return Session.get('myMethodResult');
    }
});

Template.irishTimes.helpers({
    myHelper: function () {
        return Session.get('irishTimesResults');
    }
});

Template.irishIndependent.helpers({
    myHelper: function () {
        return Session.get('irishIndependentResults');
    }
});

Template.irishExaminer.helpers({
    myHelper: function () {
        return Session.get('irishExaminerResults');
    }
});

Template.jumbotron.events({
    'submit form': function (event) {
        event.preventDefault();
        var mySearchTerm = event.target.searchterm.value;
        console.log("Hello client!" + mySearchTerm);
        Meteor.call('sendLogMessage', mySearchTerm, function(error, result) {
            Session.set('myMethodResult', result);
            console.log(result);
        });
        Meteor.call('irishTimes', mySearchTerm, function(error, result) {
            Session.set('irishTimesResults', result);
            console.log(result);
        });
        Meteor.call('irishIndependent', mySearchTerm, function(error, result) {
            Session.set('irishIndependentResults', result);
            console.log(result);
        });
        Meteor.call('irishExaminer', mySearchTerm, function(error, result) {
            Session.set('irishExaminerResults', result);
            console.log(result);
        });
    }
});