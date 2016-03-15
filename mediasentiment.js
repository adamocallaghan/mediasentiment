if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'submit form': function (event) {
		event.preventDefault();
		var mySearchTerm = event.target.searchterm.value;
		console.log("Hello client!" + mySearchTerm);
		Meteor.call('sendLogMessage', mySearchTerm);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  
  Meteor.methods({
    'sendLogMessage': function(mySearchTerm){
        console.log("Hello server!" + mySearchTerm);
		//websiteData = Scrape.feed("http://www.rte.ie/search/?fq=pillar:%22News%22&query=sinn%20fein&fq=nolc_keywords:%22sinn%20f%C3%A9in%22");
		websiteData = Scrape.feed("http://www.rte.ie/news/rss/news-headlines.xml");
		//articleInfo = websiteData.items[1];
		for (i=0; i<4; i++) {
			articleTitle = websiteData.items[i].title;
			articleLink = websiteData.items[i].link;
			console.log(articleTitle);
			console.log(articleLink);
		}
    }
  });

}