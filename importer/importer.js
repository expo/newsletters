var _ = require('lodash-node');
var cheerio = require('cheerio');
var fs = require('fs');

var sectionMap = {
  "Top News": 'top-news',
  "Highlights from Issues and Pull Requests": 'highlights',
  "Highlights from the community": 'community',
  "Friends of the newsletter": 'friends',
};

var builtInSections = {
  footer: [/*
    {
      //url: 'https://twitter.com/notbrent',
      url: 'twitter://user?screen_name=notbrent',
      renderContent: function (self) {
        return (
          <Text style={[newsletter.styles.text, {marginVertical: 20,}, self.props.style,]}>
          That&apos;s it for now! Ping me on Twitter @notbrent if you have anything that you would like me to share next week.
          </Text>
        );
      },
      imageUrl: 'https://pbs.twimg.com/profile_images/552276339709837313/eeDvc1SP.jpeg',
      title: '',
    },
    {
      url: 'http://brentvatne.us10.list-manage1.com/subscribe?u=db0dd948e2b729ee62625b1a8&id=47cd41008f',
      renderContent: function (self) {
        return (
          <Text style={[newsletter.styles.text, {marginVertical: 20, fontWeight: 'bold'}, self.props.style]}>
          If you&apos;re not already a subcriber, you can subscribe to get this delivered weekly to your email here!
          </Text>
        );
      },
    }
  */]
}

function storiesFromHtml(html) {
  var lines = html.split("\n");
  var i = 0;
  var entryLines = [];
  var state = null;
  var section = null;
  var stories = {};
  var sectionList = null;
  var sectionKey = null;
  for (var line of lines) {
    // if (line.match(/width="270" height="152"/)) {
    //   console.log("IMG:", line);
    // }
    if (line === `  <td style="font-family:'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif' !important">`) {
      state = 'in_td';
    }

    var sectionMatch = line.match(/<h2 class="section-title" style="font-weight:400;margin:0 0 15px;padding:0;font-size:20px;border-bottom:3px solid #ccc;color:#3D4447;font-size:20px;font-weight:400;line-height:26px;margin-top:25px;margin-bottom:30px;text-align:center;text-transform:uppercase;font-family:'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif' !important;border-color:#C0D7E3 !important;color:#45394D !important">([^<]*)<\/h2>/);
    if (sectionMatch) {
      section = sectionMatch[1];
      if (section) {
        sectionKey = sectionMap[section];
      } else {
        sectionKey = 'footer';
      }
      var sectionList = [];
      stories[sectionKey] = sectionList;
      console.log('SECTION', JSON.stringify(section));
    }


    if ((line.match(/<\/td>/)) && (section)) {

      var entry = {};
      var sectionHtml = entryLines.join("\n");
      //var imageMatch= sectionHtml.match(/<img src="([^"]*)"/);

      var imageMatch = sectionHtml.match(/<a href="[^"]*" style="border:0;outline:none"><img src="([^"]+)" alt="[^"]*" width="270" height="152" class="thumbnail" style="-ms-interpolation-mode:bicubic;float:none;outline:none;text-decoration:none;border:none;margin-bottom:6px;max-width:100%"><\/a>/);
      if (imageMatch) {
        entry.imageUrl = imageMatch[1];
      }

      var titleLinkMatch = sectionHtml.match(/<a href="([^"]*)" class="link-title seriously-break-word" style="border:0;outline:none;word-wrap:break-word;word-break:break-word;white-space:normal;color:#4E95E6;font-size:17px;line-height:24px;text-decoration:none;font-family:'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif' !important;color:#1FB1D0 !important">([^"]*)<\/a>/);
      if (titleLinkMatch) {
        entry.title = titleLinkMatch[2];
        entry.url = titleLinkMatch[1];
      }

      if (Object.keys(entry).length > 0) {
        //entry.section = section;
        sectionList.push(entry);

        //console.log(entry);
        //console.log(section, "TD", entry);
      }

      var $ = cheerio.load(sectionHtml);
      var s = $('span');
      entry.text = s.text();

      entryLines = [];
      state = null;
    }

    if (state === 'in_td') {
      entryLines.push(line);
    }

      //<a href="https://medium.com/@jtremback/oauth-2-with-react-native-c3c7c64cbb6d" style="border:0;outline:none"><img src="https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2299616/1_IJjMyAfPyxpI7K4NWL1yEw.png" alt="Oauth 2 with React Native — Medium" width="270" height="152" class="thumbnail" style="-ms-interpolation-mode:bicubic;float:none;outline:none;text-decoration:none;border:none;margin-bottom:6px;max-width:100%"></a>

      // image
      // title
      // text
      // link

  }
  return _.assign(stories, builtInSections);
}

module.exports = function (file) {
  var html = fs.readFileSync(file, 'utf8');
  return storiesFromHtml(html);
}

if (require.main === module) {
  console.log(module.exports(process.argv[2]));
}
