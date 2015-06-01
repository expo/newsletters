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

var Sudoku = require('Sudoku');

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
        issueNumber="5"
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
        preamble={`I know, I know, this was supposed to be sent out on Friday. Well you'll be happy to know that I wasn't procrastinating by sipping a beer on the beach; I spent most of my day on Friday, half of my Saturday and a good portion of the morning on Sunday triaging issues on the React Native repo - we're now down from almost 400 to about 180 open issues. Shoutouts to @ide, @jsierles, @cdro_, @ccheever for helping out, and to everyone on the React Native team for being so responsive to my mentions!`}
        stories={{
          'top-news': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2144371/logo_og.png',
              title: "React Native Release Process",
              text: `I pulled the trigger on last week's newsletter a bit earlier than I should have, and almost immediately afterwards @vjeux posted an update to the React blog about the new React Native release process.

In short, last Friday a release candidate for 0.5.0 was cut, and two weeks from that day (this coming Friday), the 0.5.0 release will be shipped along with any bugfixes that came in during those two weeks. At the same time 0.5.0 is shipped, a release candidate for the next version, including new features that were added during the previous two weeks, will be cut and made available on npm.`,
              url: 'http://facebook.github.io/react/blog/2015/05/22/react-native-release-process.html',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2149225/Screenshot_2015-05-30_16.41.25.png',
              title: "I'm a contributor to React, Immutable.js, and GraphQL at Facebook. AMA!",
              text: `@leebyron is the uncomfortably smart man behind Immutable.js and member of the TC39 JavaScript committee. Check out this AMA on CodeMentor, and if you haven't seen it already [his talk "Immutable Data and React" from React Conf](https://www.youtube.com/watch?v=I7IdS-PbEgI).`,
              url: 'https://www.codementor.io/ama/1237952640/facebook-react-contributer-lee-byron',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2163949/Screenshot_2015-05-30_16.48.01.png',
              title: "require('react-native') and jest test fails",
              text: "Jest is a popular tool for unit testing with React, but it doesn't quite work as you'd expect out of the box with React Native. Check out this thread for a discussion about how you can make it work better, and please chime in with your techniques for testing in React Native to help us put together some documentation and perhaps even standards that ship with `react-native init`.",
              url: 'https://github.com/facebook/react-native/issues/700',
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2187555/Screen_Shot_2015-05-31_at_2.42.34_PM.png',
              title: 'Expose global as `self` too',
              url: "https://github.com/facebook/react-native/issues/1419",
              text: `"In JavascriptCore self is not defined. Libraries like bluebird for example rely on self being the global object instead of window, as it works in web workers too." If you run into this issue, check out the solution that @johanneslumpe's [react-native-browser-polyfill](https://github.com/johanneslumpe/react-native-browser-polyfill) that came out of the discussion.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2189083/blog.png',
              title: 'Firebase now works with React Native!',
              url: 'https://www.firebase.com/blog/2015-05-29-react-native.html',
              text: `Announced at Google IO, "if you’re like me, you’re really excited about React Native, a new way to build (native!) mobile applications with JavaScript. Today, I’m happy to announce that thanks to the efforts of our developer community, Firebase and React Native now work together."`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195423/ok.png',
              title: 'Create a map with React Art by @browniefed',
              url: 'http://browniefed.com/blog/2015/05/30/create-a-map-with-react-art/',
              text: "A fun article that walks you through creating a simple, customizable map using React Art and OpenStreetMap tiles",
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195557/Screen_Shot_2015-05-31_at_3.24.49_PM.png',
              title: 'Updates on React Native Playground',
              url: 'https://rnplay.org',
              text: `- Added support for VIM Keybindings in the editor
- Added an alternate "dark" theme for the editor
- Made a bunch of progress on the mobile app, led by @jsierles, @dsibiski, @cdro_ and @jlumpe
- Made progress towards getting the accompanying app into an app-store ready state: [screenshot of updates to the app](http://url.brentvatne.ca/198IP)
- If you're interested in helping out, get in touch with me @notbrent on Twitter!`
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195558/1_-EWCLp3L61waWLPTOH9Rkg.png',
              title: 'The Evolution of Flux Frameworks',
              url: 'https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31#',
              text: `@dan_abramov's musing on the past present and future of Flux frameworks, worth a read if you're into that kind of architecture.`,
            },

          ],
          'highlights': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2144370/Screenshot_2015-05-30_16.39.06.png',
              title: '"Inspect Element" lands in the Developer Menu',
              url: 'https://github.com/tadeuzagallo/react-native/commit/cfa4b1347291a099ccbd759e8351eab64e6fb01b',
              text: `A sign of things to come, the first iteration of "Inspect Element" has landed on master.. Excuse the bro-terminology but I'm pretty stoked. @tadeuzagallo is winning my heart with his FPS monitor last week and "Inspect Element" this week.

[See it in action in beautiful gif form here](http://url.brentvatne.ca/1jkd4)`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2144370/Screenshot_2015-05-30_16.39.06.png',
              title: "UIBlocks don't flush at the correct time",
              url: 'https://github.com/facebook/react-native/issues/1365#issuecomment-104759334',
              text: `If you need to invoke native code to act on one of your views, for example to animate it as is done with AnimationExperimental, be sure to check this comment out. This can be very useful also when you're wrapping a native library such as a map and want to be able to make direct function calls on it via JavaScript.

Bonus: @nicklockwood shares the internal POP integration code - you probably don't want to use it because the new animation API is coming soon and react-tween-state is a reasonable stop-gap until then, but worth the read.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2191818/5598961.png',
              title: "Small delay displaying RCTRootView after a push - @marcshilling",
              url: 'https://github.com/facebook/react-native/issues/1277',
              text: "Discussion around how to avoid rendering delays when using multiple RCTRootViews inside of a hybrid vanilla iOS / React Native app.\n@nicklockwood also points out a new feature that we can look forward to seeing in a release very soon: `RCTContentDidAppearNotification`",
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2152468/Screenshot_2015-05-30_16.44.55.png',
              title: "Automatic cookies",
              url: 'https://github.com/facebook/react-native/issues/1274',
              text: `"Please feel free to correct me.I've tried to use the fetch api to login against a service which sets a cookie in case of success.The session cookie gets correctly set and subsequent requests to the same service pass authentication.."

Little known fact: cookies are actually set with \`fetch\` in React Native. There is no built in support for managing these cookies, but @joeferraro wrote [react-native-cookies](https://github.com/joeferraro/react-native-cookies) to fill that gap.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2194598/Screen_Shot_2015-05-31_at_3.11.19_PM.png',
              title: "Can't pass in initial arguments to instantiate native view in RCTViewManager",
              url: 'https://github.com/facebook/react-native/issues/498',
              text: "This is a common problem when creating custom components: you need certain props for initialization, but you can't have access to those in the `init` function, and you need more than one of them to be set before you can perform the initialization. Check out this thread for a solution.",
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195427/lol.png',
              title: '"Unknown" component names in Chrome devtools got you down?',
              url: 'https://github.com/facebook/react-native/pull/1471',
              text: `Well @spicyj has the cure for your blues, this PR fixes the issue so that now all of your components will be appropriately named in the 'React' tab of Chrome devtools.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2182920/Qt9cL.png',
              title: 'Fixed crash in RCTText due to NSTextContainer/NSLayoutManager',
              url: 'https://github.com/facebook/react-native/commit/0689c0790edcc9cb8494e3f15300e2743556f442',
              text: `I know this one has bit more than a handful of people in the issues, so you'll be relieved to hear that this should make it into a release very soon.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2178610/Screen_Shot_2015-05-22_at_11.53.20_AM.png',
              title: 'Replace jstransform with Babel',
              url: 'https://github.com/tadeuzagallo/react-native/commit/56d6ee3f0fadeb66aeb6cf9156c723759f48f617',
              text: `Last week we mentioned that it was coming soon, this week I share with you the commit that makes it happen.`,
            },
          ],
          community: [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2188308/Screen_Shot_2015-05-31_at_2.44.08_PM.png',
              title: 'ericvicenti/react-native-community',
              url: 'https://github.com/ericvicenti/react-native-community',
              text: `react-native-community has been overhauled - it is no longer a place for component listings, but rather for articles, talks, apps, and other things that do not fit on [react.parts](http://react.parts/). Please submit anything you come across there in the form of a PR!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195422/scsh2.png',
              title: 'alexissan/ReactNativeWorkshop',
              url: 'https://github.com/alexissan/ReactNativeWorkshop',
              text: `The example project code and slides from a React Native workshop given by alexissan in Madrid.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2189650/Screen_Shot_2015-05-31_at_2.46.40_PM.png',
              title: 'naoufal/react-native-accordion',
              url: 'https://github.com/naoufal/react-native-accordion',
              text: `Another useful component from @naoufal, check it out if you have a need for hiding/revealing information in a list based on touches.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2182845/12-hour-clock.jpeg',
              title: 'brentvatne/react-native-device-clock-format',
              url: 'https://github.com/brentvatne/react-native-device-clock-format',
              text: `Cultural sensitivity in the form of a React Native plugin`,
            },
            {
              //imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2187145/Screen_Shot_2015-05-31_at_2.39.30_PM.png',
              renderImage: function (self) {
                return (<Sudoku />);
              },
              title: 'christopherdro/react-native-sudoku',
              url: 'https://github.com/christopherdro/react-native-sudoku',
              text: `Seemingly as a sort of meta-puzzle game, @christopherdro's puzzle was to create a Sudoku puzzle game in React Native. Spoiler: he solved it.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2182844/378279.jpg',
              title: 'oblador/react-native-keychain',
              url: 'https://github.com/oblador/react-native-keychain',
              text: `"Keychain Access for React Native

Currently functionality is limited to just storing internet and generic passwords. Wider exposure of the underlying API coming."`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2171861/Screen_Shot_2015-05-31_at_3.02.00_PM.png',
              title: 'Shuangzuan/RCTRefreshControl',
              url: 'https://github.com/Shuangzuan/RCTRefreshControl#readme',
              text: `Wraps the iOS [ODRefreshControl](https://github.com/Sephiroth87/ODRefreshControl) library to give you pleasant pull-to-refresh to your ListViews and ScrollViews.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195561/Screen_Shot_2015-05-31_at_3.34.03_PM.png',
              title: 'dancormier/react-native-swipeout',
              url: 'https://github.com/dancormier/react-native-swipeout',
              text: `"iOS-style swipeout buttons that appear from behind a component"

Well done @dancormier!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2195562/Screen_Shot_2015-05-31_at_3.38.12_PM.png',
              title: 'turley/react-native-asciimage',
              url: 'https://github.com/turley/react-native-asciimage',
              text: `Drawing is hard, why can't we just use ASCII art and have a computer make it look nice for us? If you didn't figure it out by now, that was a rhetorical question and this is exactly what this library does by leveraging the [ASCIIMage](http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring/) library, which also has a [desktop app](https://rink.hockeyapp.net/apps/8ac351501c5c3db78ececb2f7e26062f/) that gives you an instant preview of your beautiful art ([screenshot](http://url.brentvatne.ca/1e30O))`,
            },
          ],
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
