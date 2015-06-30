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
        issueDate="June 22, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/22-06-2015.html"
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
        preamble={`0.7.0-rc and 0.6.0 have been delayed due to some issues with the Travis build, but we hope to have it pushed out by Tuesday, June 23rd! Aside from that, it's been a bit of a slower week in React Native land, perhaps the calm before the React Europe storm?`}
        stories={{
          'top-news': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315707/reacteurope.png',
              title: 'ReactEurope - The first React.js European conference in Paris, France',
              url: 'https://www.react-europe.org/',
              text: 'React Europe is coming up just next week - July 2nd & 3rd! It looks like there are still some "super late bird" tickets available so if you\'re a bird and you\'ve been nesting for the last few months it\'s time you fly over to react-europe.org and buy your ticket. Offer also applies for humans.\n\nReact Native core team members @vjeux, @sahrens and @spicyj will all be speaking, in addition to a bunch of other people who are way more clever than I am - so go check it out if you\'re in the area!\n'
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315954/Screen_Shot_2015-06-22_at_2.53.05_PM.png',
              title: 'React Rally',
              url: 'http://www.reactrally.com/',
              text: '"A community React conference August 24 - 25 2015 in Salt Lake City, UT" - call for proposals ended last night, so we should expect to see the list of selected speakers over the next few days. If you can\'t make it to React Europe, be sure to check this one out!\n'
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2299616/1_IJjMyAfPyxpI7K4NWL1yEw.png',
              title: 'Oauth 2 with React Native',
              url: 'https://medium.com/@jtremback/oauth-2-with-react-native-c3c7c64cbb6d',
              text: '@jtremback walks you through "using React Native to make an iPhone app that can interact with a third party API secured by Oauth 2.0."\n',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2292790/810438.jpg',
              title: 'gaearon/redux',
              url: 'https://github.com/gaearon/redux',
              text: '"redux - Atomic Flux with hot reloading" from @dan_abramov is the newest Flux framework on the block. Flummox author @acdlite announced in the Flummox README this week that "4.0 will likely be the last major release. Use Redux instead. It\'s really great." Check it out, and if you\'re going to React Europe, don\'t miss @dan_abramov\'s talk!\n',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315830/opengraph.png',
              title: 'Animations guide added to Documentation',
              url: 'https://facebook.github.io/react-native/docs/animations.html#content',
              text: 'Check it out to learn about the APIs available for doing animations in React Native! I also added Direct Manipulation and Navigator Comparison to the guides over the past week. Ping me @notbrent on Twitter with any requests for improving the docs!\n'
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315949/395386.jpg',
              title: 'React Native CLI Helper Tools',
              url: 'https://github.com/bh5-js/rctapp',
              text: 'If you want to support all Babel transforms and build your app without needing to even open Xcode, give this a try. Check out the README for more information.\n',
            },
          ],

          'highlights': [
          {
            imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2290134/1504439.jpg',
            title: 'Allow developer to observe the focus change events from navigator',
            url: 'https://github.com/nicklockwood/react-native/commit/0a875790f58c7de2842b21216c1ceaa5d1185547',
            text: '@hederwang deprecated onWillChange and onDidChange in favor of this.props.navigator.addEventListener(\'willchange\', fn) and this.props.navigator.addEventListener(\'didchange\', fn)`. Check out @ericvicenti\'s comment here for more details about this change. \n'
          },
          {
            imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2292791/ae6dc8d4-12b6-11e5-80f0-2bcaa964a5d8.png',
            title: 'Add support for selecting media from library',
            url: 'https://github.com/facebook/react-native/pull/1620',
            text: '"This PR adds support for UIImagePickerController to allow selecting a photo / video from the users camera roll." by @dvcrn\n'
          },
          {
            imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2292789/Screenshot_2015-06-22_03.12.28.png',
            title: 'Add local notification api schedule and present',
            url: 'https://github.com/facebook/react-native/pull/1616',
            text: '"Add local notifications to the push [notifications] library" - thanks @jacobrosenthal!\n'
          },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2278444/Screenshot_2015-06-22_03.06.57.png',
          title: 'Update curRenderedRowsCount for ListView when data source changes',
          url: 'https://github.com/facebook/react-native/pull/1612/files',
          text: '@ide fixed an issue with ListView that required you to force a re-render when the DataSource changed in this commit, which will land in 0.7.0-rc.\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2285911/8767980c-d600-11e4-976c-202483c8fe9c.jpg',
          title: 'Shadow does not appear if overflow: hidden is set',
          url: 'https://github.com/facebook/react-native/issues/449#event-332332698',
          text: 'The current behavior is inconsistent with the browser, so @nicklockwood has a fix on the way - in the meantime, you can nest your overflow: hidden view inside of another view, and apply the shadow on the outer view.\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2285913/Screenshot_2015-06-22_03.07.51.png',
          title: 'Update Testing.md',
          url: 'https://github.com/facebook/react-native/commit/529803e5c437fe176bffef7ef38f75c912acc3be',
          text: '@sahrens updates Testing.md to "include [an] explanation for updating snapshot tests" - useful to know if you ever submit a PR that requires this.\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2297916/Screenshot_2015-06-22_12.45.16.png',
          title: 'refs do not work in renderRow functions',
          url: 'https://github.com/facebook/react-native/issues/1677',
          text: 'I\'m becoming a big fan of callback refs, this is a good example of the kind of issues that they solve.\n' }
          ],
          community: [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2277898/Screenshot_2015-06-21_22.17.07.png',
          title: 'umhan35/react-native-search-bar',
          url: 'https://github.com/umhan35/react-native-search-bar',
          text: '"The native search bar for react native."\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2289708/Screenshot_2015-06-22_03.11.42.png',
          title: 'lazywei/react-native-device-uuid',
          url: 'https://github.com/lazywei/react-native-device-uuid',
          text: '"Get iOS\'s UUID (identifierForVendor)"\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2275718/AlertSheetImage.jpg',
          title: 'marcshilling/react-native-image-picker',
          url: 'https://github.com/marcshilling/react-native-image-picker',
          text: '"Allows you to use the native UIImagePickerController UI to select a photo from the device library or directly from the camera"\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315743/4033753.jpg',
          title: 'apolkingg8/React-Native-Swipeable-Modal',
          url: 'https://github.com/apolkingg8/React-Native-Swipeable-Modal#readme',
          text: 'A new modal library that allows you to swipe the modal away, similar to floatFromBottom with Navigator.\n' },
          { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2315750/1627824.jpg',
          title: 'naoufal/react-native-speech',
          url: 'https://github.com/naoufal/react-native-speech',
          text: 'Ha! You probably thought @naoufal wasn\'t going to release another library this week - well think again. This time around he exposes the native text-to-speech so you can have your device talk to you. There are no plans to support Scarlett Johansson\'s voice, so don\'t get too excited about building your own AI to fall in love with. (See the film Her  if you have no idea what I just said)\n' } ],
          friends: [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195490/logo1_colored_transparent.png',
              title: 'Appetize.io',
              url: 'http://appetize.io/',
              text: `"Online web based iOS Simulators and Android Emulators. Stream mobile apps in the browser with html5 and javascript." - that's what their \`og:description\` meta tag says; it's true and they do a damned good job at it. They do a great service to the React Native community by hosting the simulators for [rnplay.org](http://rnplay.org/), but we chose to reach out to them and get them involved because, simply put, they were the best solution we could find for the job.

              Check out their [embed page](https://appetize.io/embed) for example, their API gives you so much control and with very little effort. You can upload an app for 100 minutes free of simulator time, so why not give it a try?

              *I do to not receive any money whatsoever for sharing this information, I'm just happy to return their gracious favour to the community of hosting React Native Playground*`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195628/goodbits-logo-for-social-scrapers.png',
              title: 'Goodbits.io',
              url: 'http://www.goodbits.io',
              text: `"Newsletters should take minutes, not hours. Goodbits helps you quickly build email campaigns."

A local company run by some friends and a useful product that I use every week to make this newsletter. I'm hoping that by mentioning them here that they won't make me pay for this service. Guys? Yeah?

Check them out if you have a need for a tool that removes the incidental complexity of sending out a newsletter.`,
            }
          ],
          footer: [
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
          ],
        }}
      />

    );
  }
}

AppRegistry.registerComponent('ExponentApp', () => NewsletterApp);
AppRegistry.registerComponent('main', () => NewsletterApp);
