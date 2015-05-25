/**
 * A trivial example of a React Native application
 */
var React = require('react-native');

var {
  AppRegistry,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var Dimensions = require('Dimensions');
var Link = require('react-native-link');
var StatusBarIOS = require('StatusBarIOS');

var CalendarExample = require('./CalendarExample');

var windowDimensions = Dimensions.get('window');

var newsletterStyles = StyleSheet.create({
  issue: {
    color: '#87828A',
    fontSize: 14,
    paddingLeft: 8,
    textAlign: 'center',
  },
  sectionText: {
    color: '#3D4447',
    fontSize: 20,
    textAlign: 'center',
  },
  section: {
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: 'white',
    /*
    borderColor: '#C0D7E3',
    borderTopWidth: 3,
    */

    /*
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#C0D7E3',
    */
  },
  image: {
    width: 270,
    height: 152,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 4,
  },
  title: {
    color: '#1FB1D0',
    fontSize: 17,
    paddingVertical: 3,
  },
  text: {
    color: '#5e6268',
    fontSize: 17,
  },
  story: {
    paddingHorizontal: 8,
    marginBottom: 12,
    marginTop: 15,
  },
  storyHighlight: {
    underlayColor: '#C0D7E3',
    activeOpacity: 0.2,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#dddddd',
  },
  statusBar: {
    //backgroundColor: 'rgba(2, 60, 105, 0.98)',
    backgroundColor: '#C0D7E3',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },


});

var NewsletterIssue = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    var sectionIds = [];
    for (var i = 0; i < this.props.sections.length; i++) {
      sectionIds.push(this.props.sections[i][0]);
    }
    return {
      dataSource: ds.cloneWithRowsAndSections((this.props.stories || []), sectionIds),
    };
  },

  _sectionTitle(sectionId) {
    for (var i = 0; i < this.props.sections.length; i++) {
      var section = this.props.sections[i];
      if (section[0] === sectionId) {
        return section[1];
      }
    }
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderSectionHeader}
        renderHeader={this._renderHeader}
        style={this.props.style}
      />
    );
  },

  _renderHeader() {
    var issueText = this.props.issueTitle || ('Issue #' + this.props.issueNumber);
    var issueDate = this.props.issueDate;
    var compiledBy = this.props.compiledBy || " by @notbrent (Brent Vatne)";
    if (issueDate) {
      issueText += ", " + issueDate;
    }
    // if (compiledBy) {
    //   issueText += ", " + compiledBy;
    // }
    var width = windowDimensions.width;
    var height = Math.floor((96 / 570) * width);
    return (
      <View>
        <Image source={{
            uri: 'https://goodbits-production.s3.amazonaws.com/uploads/newsletter_settings/logo/981/e0ca1ad4-f9b1-459f-b782-28c4fc63a7e3.png',
        }} style={{
          width,
          height,
        }}/>
        <Text style={newsletterStyles.issue}>
          {issueText}
          <Text>{compiledBy}</Text>
        </Text>
        {this.props.webUrl && (<Link url={this.props.webUrl} underlayColor='#C0D7E3' activeOpacity={0.618}><Text style={[newsletterStyles.issue, {fontSize: 17, color: '#C0D7E3', paddingVertical: 6, textAlign: 'center',}]}>Also available on the web</Text></Link>) || null}
      </View>
    );
  },

  _renderSectionHeader(sectionData, sectionID) {

    var sectionTitle = this._sectionTitle(sectionID) || '';

    return (
      <NewsletterSectionHeader {...sectionData}
        sectionID={sectionID}
        sectionTitle={sectionTitle}
      />
    );

  },

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <NewsletterStory {...rowData} style={newsletterStyles.story} sectionID={sectionID} rowID={rowID} />
        <Separator />
      </View>
        );
  },


});

var Separator = React.createClass({
  render() {
    return (<View style={[newsletterStyles.separator, this.props.style]}></View>);
  }
});

var NewsletterSectionHeader = React.createClass({
  render() {
    var title = this.props.sectionTitle || this.props.children;
    return (
      <View style={[newsletterStyles.section, this.props.style, {
          //backgroundColor: '#C0D7E3',
      }]}>
        <Text style={[newsletterStyles.sectionText, this.props.style,]}>{('' + title).toUpperCase()}</Text>
        <View style={{
            height: 3,
            backgroundColor: '#C0D7E3',
            width: 120,
            alignSelf: 'center',
            //transform: [{translateY: -6,}],
        }} />
      <View style={{height: 2, backgroundColor: 'transparent',}} />
      </View>
    );
  },
});

var NewsletterStory = React.createClass({
  render() {
    return (
      this.props.render && this.props.render(this) || (
        <Link underlayColor='#C0D7E3' activeOpacity={0.618} url={this.props.url}>
        { this.props.renderContent && this.props.renderContent(this) || (
            <View style={this.props.style}>
              { this.props.renderImage && this.props.renderImage(this) || (
                <Image source={{
                    uri: this.props.imageUrl,
                  }}
                  style={newsletterStyles.image}
                  />
                )
              }
              <Text style={newsletterStyles.title}>{this.props.title}</Text>
              { this.props.renderText && this.props.renderText(this) || (
                <Text style={newsletterStyles.text}>{this.props.text}</Text>
                )
              }
            </View>
          )
        }
        </Link>
      )
    );
  },
});

class NewsletterApp extends React.Component {

  _renderStatusBar() {
    return <View style={[styles.statusBar, {height: 20}]} />;
  }

  componentWillMount() {
    StatusBarIOS.setStyle(StatusBarIOS.Style.default);
    // default=0, lightContent=1
  }

  render() {
    return (
      <NewsletterIssue
        issueNumber="5"
        issueDate="May 22, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/22-05-2015.html"
        style={{marginTop: 20, contentOffset: 20,}}
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Issues and Pull Requests",],
          ['community', "From the Community",],
          ['footer', " ",],
        ]}
        stories={{
          'top-news': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2125473/NafWCZbW_400x400.png',
              title: "@jordwalke signals towards what is coming for animations",
              text: '“JavaScriptCore amazes me. Subtract the DOM, and you can animate huge amounts of UI without dropping frames on an old device. #reactnative”',
              url: 'https://twitter.com/jordwalke/status/600613026899726336',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2125477/Screen_Shot_2015-05-22_at_11.21.57_AM.png',
              title: "Slides from @nicklockwood's React Native workshop",
              text: "Well worth a read, @nicklockwood knows React Native as well as anyone and does a fine job of distilling the key information into this slide deck.",
              url: 'https://www.dropbox.com/s/xg53fjyzrogxji9/UIKonf.pdf?dl=0',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2125478/cover326x326.jpeg',
              url: 'https://itunes.apple.com/us/podcast/react-podcast/id995869265',
              title: 'React Podcast by Zach Silveira',
              text: `The first episode of the React Podcast, titled "We're not Flux Experts", has been released. Subscribe in iTunes or whatever podcast app you use (I prefer player.fm for web/Android). Audio channels are a bit off in this episode but should be fixed in any upcoming episodes!`,
            },
            {
              url: 'http://blog.typework.com/react-native-universal/',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2137163/react-native-7c474580d304785e40cea5245227c5b7.jpg',
              title: 'A universal iOS app with React Native',
              text: "An article about creating a universal iPhone and iPad app with different layouts, using React Native of course.",
            },
            {
              url: 'http://brentvatne.ca/react-native-intro-talk/',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2138096/Screen_Shot_2015-05-22_at_11.22.51_AM.png',
              title: "React Native Intro by @notbrent (me)",
              text: "Video and slides from my presentation are available here! I tried to give an overview of why React, why React Native, and a bit of information about how React Native works. Personally I can't stomach listening to my own voice, but if you can then feel free to give it a watch/listen! It was my first time recording a talk, so go easy on me folks.",
            },
          ],
          'highlights': [
            {
              url: 'https://github.com/bsudekum/react-native-mapbox-gl/issues/28#issuecomment-104706381',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2142767/Screen_Shot_2015-05-22_at_11.19.51_AM.png',
              title: "Send functions from JS to ObjC land",
              text: "A discussion between @bsudekum and myself about how to call functions directly on native components from JavaScript.",
            },
            {
              url: 'https://github.com/facebook/react-native/commit/08844e3ddc40d435ac96cf98575e633249235222',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2142914/Screen_Shot_2015-05-22_at_11.17.17_AM.png',
              title: "@tadeuzagallo adds a FPS monitor the Dev Menu",
              text: "Open the Dev Menu with cmd+D, and select Show FPS Monitor\nScreenshot in dev menu\nScreenshot in action",
            },
            {
              url: 'https://github.com/facebook/react-native/commit/a4f92ba3db1b5c7a7c04a5e41493ef129c46cf0c',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2142924/Screen_Shot_2015-05-22_at_11.23.55_AM.png',
              title: "Add magic tap accessibility gesture by @a2",
              text: `"The purpose of the Magic Tap gesture is to quickly perform an often-used or most-intended action. For example, in the Phone app, it picks up or hangs up a phone call. In the Clock app, it starts and stops the stopwatch. If you want an action to fire from a gesture regardless of the view the VoiceOver cursor is on, you should implement the accessibilityPerformMagicTap method in your view controller." iOS Developer Library. You can use this with the onMagicTap prop - but you'll have to install from 0.5-stable as this hasn't yet landed in a release.
              onAccessibilityTap prop was also added, by Georgiy Kassabli. You'll have to use 0.5-stable for this one as well.`,
            },
            {
              url: 'https://rnplay.org/',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143056/Screen_Shot_2015-05-22_at_11.04.27_AM.png',
              title: "React Native Playground Updates",
              text: "iOS app supports two-finger swipe up to exit the currently selected play and return to the main screen\n Live reload now works! When you save your changes, updates will be reflected as soon as the packager reloads, without restarting the app\n Not yet live: Progress made on streaming logs so you will be able to see any console.log output or errors within the browser! video\n Not yet live: Progress made on multiple file editing, video\n",
            },
            {
              url: 'https://github.com/facebook/react-native/tree/0.5-stable',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143185/Screen_Shot_2015-05-22_at_11.25.10_AM.png',
              title: "0.5-stable branch created",
              text: `Not yet released, but you can use it today by changing the react-native dependency in your package.json to: "react-native": "facebook/react-native#0.5-stable". You might need to delete the existing install within node_modules for this to work: rm -rf node_modules/react-native`,
            },
            {
              url: 'https://gist.github.com/chenglou/40b75d820123a9ed53d8',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143357/chenglou.jpg',
              title: "Thoughts on Animation by @chenglou",
              text: `@chenglou, the author of react-tween-state and "React core member. Currently working on animation-related problems" shares his thoughts on animation in this blog-as-a-gist.`,
            },
            {
              url: 'https://github.com/facebook/react-native/issues/1280#issuecomment-104012925',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143358/Screen_Shot_2015-05-22_at_11.53.20_AM.png',
              title: 'Problem with Chrome Debugger when using spread operator',
              text: "@sahrens points out that this will be fixed when React Native switches to Babel for transpiling and @amasad follows up by saying he will be pushing the switch to Babel soon.",
            },
          ],
          community: [
            {
              url: 'http://essence.pearlhq.com/',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2136546/ess-logo.png',
              title: "Essence Native",
              text: `Check out the "Getting Started Native" section and give it a try! I haven't had a chance so if you do, send me a tweet with your experience @notbrent, curious to hear how it goes!`,
            },
            {
              url: 'https://github.com/chirag04/react-native-dashed-border',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2121410/example.png',
              title: "chirag04/react-native-dashed-border",
              text: "A customizable <DashedBorder /> component, worth checking out if you're in the market for such a thing! Also a good simple example of a custom view component."
            },
            {
              url: "https://github.com/hzdg/gsap-react-plugin",
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2137390/Screen_Shot_2015-05-22_at_11.27.58_AM.png',
              title: "hzdg/gsap-react-plugin · GitHub",
              text: "You can use this in conjunction with skevy's fork of GreenSock-JS and have access to the GSAP api within your React Native app!",
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2137894/Screen_Shot_2015-05-22_at_11.27.25_AM.png',
              //url: 'https://github.com/christopherdro/react-native-calendar',
              url: 'exp://exp.host/@cdro/react-native-calendar',
              title: "christopherdro/react-native-calendar",
              text: "A customizable, swipeable calendar component made by @cdro, works well! He is looking for a hand in optimizing the swipe transitions.",
              renderImage: function (self) {
                return (<CalendarExample />);
              },
            },
            {
              url: "http://github.com/chirag04/react-native-tooltip",
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2125805/screenshot.png',
              title: "chirag04/react-native-tooltip",
              text: "react-native-tooltip - A react-native wrapper for showing tooltips",
            },
            {
              url: 'https://github.com/naoufal/react-native-progress-hud',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2138389/Screen_Shot_2015-05-22_at_11.31.08_AM.png',
              title: "naoufal/react-native-progress-hud",
              text: `A wrapper around SVProgressHud - "It is a clean and easy-to-use HUD meant to display the progress of an ongoing task`,
            },
            {
              url: 'https://github.com/dsibiski/react-native-userdefaults-ios',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2132944/2922932.jpg',
              title: 'dsibiski/react-native-userdefaults-ios',
              text: "A Bridge Module that lets you read and update NSUserDefaults.",
            },
            {
              url: 'https://twitter.com/svengiebel/status/599622056267886592',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143235/CFJJFFOW0AE-9H3.png',
              title: '@SG creates his first React Native app',
              text: "Screenshots of his Dribbble app, maybe if we bug him he will upload the source to Github soon ;) If I didn't know any better I would say that Dribbble apps seem to be the TodoMVC of React Native - @mironcatalin also had a crack at one this week.",
            },
            {
              url: "https://www.youtube.com/watch?v=F-5Mc-MXuqQ&feature=youtu.be",
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2143356/hqdefault.jpg',
              title: '@jhabdas builds a streaming audio app for Lumpen Radio',
              text: "Check out the demo video at the link. He will be speaking about it at CHIHTML5 Lightning Talks on Thursday, July 9th. Check it out if you're in the area!",
            },
          ],
          footer: [
            {
              //url: 'https://twitter.com/notbrent',
              url: 'twitter://user?screen_name=notbrent',
              renderContent: function (self) {
                return (
                  <Text style={[newsletterStyles.text, {marginVertical: 20,}, self.props.style,]}>
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
                  <Text style={[newsletterStyles.text, {marginVertical: 20, fontWeight: 'bold'}, self.props.style]}>
                    If you&apos;re reading this on the web, you can subscribe to get this delivered weekly to your email here!
                  </Text>
                );
              },
            }
          ],
        }}
      />

    );
  }
}

AppRegistry.registerComponent('main', () => NewsletterApp);
