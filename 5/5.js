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

var windowDimensions = Dimensions.get('window');

var newsletterStyles = StyleSheet.create({
  issue: {
    color: '#87828A',
    fontSize: 14,
    paddingLeft: 8,
  },
  section: {
    color: '#3D4447',
    fontSize: 20,
    textAlign: 'center',
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

});

var NewsletterIssue = React.createClass({
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this.props.stories || []),
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
        <Text style={newsletterStyles.issue}>{issueText}</Text>
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
      <Text style={[newsletterStyles.section, this.props.style,]}>{('' + title).toUpperCase()}</Text>
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

  render() {
    return (
      <NewsletterIssue
        issueNumber="5"
        style={{marginTop: 20,}}
        stories={[
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
          }
          ]}
      />
    );
  }
}

AppRegistry.registerComponent('main', () => NewsletterApp);
