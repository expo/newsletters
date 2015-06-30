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

var newsletter = require('newsletter');

var {
  styles,
  NewsletterIssue,
  NewsletterStory,
  NewsletterSectionHeader,
} = newsletter;

class NewsletterApp extends React.Component {

  render() {
    return (
      <NewsletterIssue
        issueNumber="9"
        issueDate="May 31, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/31-05-2015.html"
        style={{marginTop: 20, contentOffset: 20,}}
        compiledBy=" "
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Issues and Pull Requests",],
          ['community', "From the Community",],
          ['friends', "Friends of the Newsletter",],
          ['footer', " ",],
        ]}
        preambleStyle={null}
        preamble={null}
        stories={{
          'top-news': [],
          'highlights': [],
          'community': [],
          'friends': [],
          'footer': [],
        }}
      />

    );
  }
}

AppRegistry.registerComponent('ExponentApp', () => NewsletterApp);
AppRegistry.registerComponent('main', () => NewsletterApp);
