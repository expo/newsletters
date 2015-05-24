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

var windowDimensions = Dimensions.get('window');

var newsletterStyles = StyleSheet.create({
  issue: {
    color: '#87828A',
    fontSize: 14,
    paddingLeft: 8,
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
      dataSource: ds.cloneWithRowsAndSections(this.props.stories || [], sectionIds),
    };
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
      </View>
    );
  },

  _renderSectionHeader(sectionData, sectionID) {
    return <NewsletterSectionHeader {...sectionData} sectionID={sectionID} />;
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
    var title = this.props.sectionTitle || this.props.children || 'Top News';
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
      <Link underlayColor='#C0D7E3' activeOpacity={0.618} url={this.props.url}>
        <View style={this.props.style}>
          <Image source={{
              uri: this.props.imageUrl,
            }}
            style={newsletterStyles.image}
            />
          <Text style={newsletterStyles.title}>{this.props.title}</Text>
          <Text style={newsletterStyles.text}>{this.props.text}</Text>
        </View>
      </Link>
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
        style={{marginTop: 20, contentOffset: 20,}}
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Highlights from Issues and Pull Requests",],
          ['community', "Highlights from the Community",],
          ['footer', "",],
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
              url: 'http://brentvatne.ca/react-native-intro-talk/',
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2138096/Screen_Shot_2015-05-22_at_11.22.51_AM.png',
              title: "React Native Intro by @notbrent (me)",
              text: "Video and slides from my presentation are available here! I tried to give an overview of why React, why React Native, and a bit of information about how React Native works. Personally I can't stomach listening to my own voice, but if you can then feel free to give it a watch/listen! It was my first time recording a talk, so go easy on me folks.",
            },
          ],
        }}
      />

    );
  }
}

AppRegistry.registerComponent('main', () => NewsletterApp);
