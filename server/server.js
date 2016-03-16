/**
 * Created by ocallaga on 16/03/2016.
 */

Meteor.startup(function () {
    // code to run on server at startup
});

Meteor.methods({
    'sendLogMessage': function(mySearchTerm){
        console.log("Hello server!" + mySearchTerm);
        websiteData = Scrape.feed("http://www.rte.ie/news/rss/news-headlines.xml");
        returnThis = new Array();
        for (i=0; i<websiteData.items.length; i++) {
            //console.log(websiteData.items.length);
            articleTitle = websiteData.items[i].title;
            articleLink = websiteData.items[i].link;
            //console.log(articleTitle);
            //console.log(articleLink);
            articleInfo = Scrape.website(articleLink);
            //console.log(articleInfo.text);
            var r1 = sentiment(articleInfo.text);
            //console.log(r1);
            //console.log(r1.score + " SENTIMENT SCORE");
            //console.log(r1.comparative + " COMPARATIVE SCORE");
            var positiveWords = r1.positive;
            var negativeWords = r1.negative;
            //console.log(positiveWords + " POSITIVE WORDS");
            //console.log(negativeWords + " NEGATIVE WORDS");
            if (r1.score > 0){
                polarity = "pos";
            } else {
                polarity = "neg";
            }
            obj = new Object({score: r1.score, title: articleTitle, link: articleLink, comparative: r1.comparative, negWords: negativeWords, posWords: positiveWords, polarity: polarity, canvasId: i});
            returnThis[i] = obj;
        }
        //Ok, figured it out, r1 is outside the loop so is only returning the last result in the array!
        return returnThis;
    },
    'irishTimes': function(mySearchTerm){
        console.log("Hello server!" + mySearchTerm);
        websiteData = Scrape.feed("https://www.irishtimes.com/cmlink/news-1.1319192");
        returnThis = new Array();
        for (i=0; i<websiteData.items.length; i++) {
            //console.log(websiteData.items.length);
            articleTitle = websiteData.items[i].title;
            articleLink = websiteData.items[i].link;
            //console.log(articleTitle);
            //console.log(articleLink);
            articleInfo = Scrape.website(articleLink);
            //console.log(articleInfo.text);
            var r1 = sentiment(articleInfo.text);
            //console.log(r1);
            //console.log(r1.score + " SENTIMENT SCORE");
            //console.log(r1.comparative + " COMPARATIVE SCORE");
            var positiveWords = r1.positive;
            var negativeWords = r1.negative;
            //console.log(positiveWords + " POSITIVE WORDS");
            //console.log(negativeWords + " NEGATIVE WORDS");
            if (r1.score > 0){
                polarity = "pos";
            } else {
                polarity = "neg";
            }
            obj = new Object({score: r1.score, title: articleTitle, link: articleLink, comparative: r1.comparative, negWords: negativeWords, posWords: positiveWords, polarity: polarity, canvasId: i});
            returnThis[i] = obj;
        }
        //Ok, figured it out, r1 is outside the loop so is only returning the last result in the array!
        return returnThis;
    },
    'irishIndependent': function(mySearchTerm){
        console.log("Hello server!" + mySearchTerm);
        websiteData = Scrape.feed("http://www.independent.ie/breaking-news/irish-news/?service=Rss");
        returnThis = new Array();
        for (i=0; i<websiteData.items.length; i++) {
            //console.log(websiteData.items.length);
            articleTitle = websiteData.items[i].title;
            articleLink = websiteData.items[i].link;
            //console.log(articleTitle);
            //console.log(articleLink);
            articleInfo = Scrape.website(articleLink);
            //console.log(articleInfo.text);
            var r1 = sentiment(articleInfo.text);
            //console.log(r1);
            //console.log(r1.score + " SENTIMENT SCORE");
            //console.log(r1.comparative + " COMPARATIVE SCORE");
            var positiveWords = r1.positive;
            var negativeWords = r1.negative;
            //console.log(positiveWords + " POSITIVE WORDS");
            //console.log(negativeWords + " NEGATIVE WORDS");
            if (r1.score > 0){
                polarity = "pos";
            } else {
                polarity = "neg";
            }
            obj = new Object({score: r1.score, title: articleTitle, link: articleLink, comparative: r1.comparative, negWords: negativeWords, posWords: positiveWords, polarity: polarity, canvasId: i});
            returnThis[i] = obj;
        }
        //Ok, figured it out, r1 is outside the loop so is only returning the last result in the array!
        return returnThis;
    },
    'irishExaminer': function(mySearchTerm){
        console.log("Hello server!" + mySearchTerm);
        websiteData = Scrape.feed("http://feeds.examiner.ie/ieireland");
        returnThis = new Array();
        for (i=0; i<websiteData.items.length; i++) {
            //console.log(websiteData.items.length);
            articleTitle = websiteData.items[i].title;
            articleLink = websiteData.items[i].link;
            //console.log(articleTitle);
            //console.log(articleLink);
            articleInfo = Scrape.website(articleLink);
            //console.log(articleInfo.text);
            var r1 = sentiment(articleInfo.text);
            //console.log(r1);
            //console.log(r1.score + " SENTIMENT SCORE");
            //console.log(r1.comparative + " COMPARATIVE SCORE");
            var positiveWords = r1.positive;
            var negativeWords = r1.negative;
            //console.log(positiveWords + " POSITIVE WORDS");
            //console.log(negativeWords + " NEGATIVE WORDS");
            if (r1.score > 0){
                polarity = "pos";
            } else {
                polarity = "neg";
            }
            obj = new Object({score: r1.score, title: articleTitle, link: articleLink, comparative: r1.comparative, negWords: negativeWords, posWords: positiveWords, polarity: polarity, canvasId: i});
            returnThis[i] = obj;
        }
        //Ok, figured it out, r1 is outside the loop so is only returning the last result in the array!
        return returnThis;
    }
});