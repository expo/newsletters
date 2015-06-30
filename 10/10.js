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
        style={{contentOffset: -20, marginTop: 0}}
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
        stories={
          { 'top-news':
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349514/cad125a6-1915-11e5-892d-f49329381ea6.png',
       title: 'React Native 0.7.0-rc, 0.7.0-rc.2 and 0.6.0 released!',
       url: 'https://github.com/facebook/react-native/releases/tag/v0.7.0-rc',
       text: 'Click through for a full list of changes. I would recommend skipping 0.7.0-rc entirely and jump straight to 0.7.0-rc.2, as rc.2 includes an important bugfix with ListView (thanks @ide!). Aside from a bunch of small improvements and fixes, the main feature in the 0.7.0-rc release is the improved Profiler, which allows you to profile your JS and ObjC in one place! I highly recommend checking it out.\n\nBecause this was behind schedule, you can expect another smaller release this coming Friday to get the two-week release schedule back on track.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349490/screen322x572.jpeg',
       title: 'React Native Playground is live on the App Store',
       url: 'https://itunes.apple.com/us/app/react-native-playground/id1002032944',
       text: 'Now you can run examples from rnplay.org with your iPhone, without having to build to your device!\n\n"Run, test and share React Native applications directly on an iOS device Build an app in the browser on http://rnplay.org and share it with anyone! Explore the site via popular apps, staff packs or search. Sign in to test your own apps."\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2344813/3470207.jpg',
       title: 'Gesture detection in React Native',
       url: 'http://blog.lum.pe/gesture-detection-in-react-native/',
       text: '@johanneslumpe explains how to build a higher order component for adding a panning gesture to another component, using the proposed ES7 decorator syntax. Also check out his followed up post, Gesture detection in React Native – fixing unexpected panning!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349679/1_sR0iVe2X8wiNaTsw7VVJGQ.png',
       title: 'Responding to the keyboard with React Native by @grabbou',
       url: 'https://medium.com/man-moon/writing-modern-react-native-ui-e317ff956f02',
       text: '"Creating dynamic layouts that adapt to the on-screen keyboard." This blog post explains how to use LayoutAnimation and react-native-keyboardevents to animate a change in layout to accommodate for the keyboard, useful stuff. This can be updated soon to include the LayoutAnimation Keyboard type that was just merged into master on Friday.\n' } ],
  highlights:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2344812/TB1A1t5IpXXXXcTXpXXXXXXXXXX.png',
       title: 'React Web: let React Native code run on the Web by @baofen14787',
       url: 'http://www.ghugo.com/react-native-to-web/',
       text: 'This article is written in "Chinese (Simplified)" according to Chrome, but it translates quite well using the built in Google Translate.\n\nSee the original comment in the issues here - scroll down a bit further to see some follow up.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2342745/241156.jpg',
       title: 'Remove layout-only nodes by @a2',
       url: 'https://github.com/facebook/react-native/commit/3c5b4b0a9f6bcc659ee4eb88dc7fc8765bea203e',
       text: 'This commit was later reverted, but I believe this is something that we can hope to see land in a future release soon. It will be a nice, free optimization when it lands!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349709/379606.jpg',
       title: 'Enable async/await and update UIExplorer and tests',
       url: 'https://github.com/facebook/react-native/pull/1765',
       text: '"Enables async/await in .babelrc and transformer.jsAdds regenerator to package.json." - check out the diff here for some examples of async/await in action with React Native! Great work @ide\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349724/688326.png',
       title: 'Add support for annotation callouts, annotation press, callout presses and pin animation to MapView by @dvcrn',
       url: 'https://github.com/frantic/react-native/commit/99bc08cf615341853c46a439210c2c0d2a492702',
       text: 'Great work by @dvcrn to push this through, check out a screenshot of it in action!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349723/1509831.jpg',
       title: 'LayoutAnimation brevity by @sahrens',
       url: 'https://github.com/frantic/react-native/commit/29e49bdb9151b02d91f106dd893e561ae96c77b1',
       text: 'Simplifies the API for LayoutAnimatioon so you can use LayoutAnimation.easeInOut rather than having to remember LayoutAnimation.Presets.easeInEaseOut\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349725/90494.jpg',
       title: 'Simplify ListView.DataSource API by @brentvatne',
       url: 'https://github.com/facebook/react-native/pull/1763',
       text: 'Provide initial data via a rows property in the constructor and also a default rowHasChanged function. This is a WIP and feedback is welcome!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349726/1483597.jpg',
       title: '@ericvicenti plugs away on Navigator',
       url: 'https://github.com/frantic/react-native/commit/7963add0d558a16c8440601c24ce4e632f23ac89',
       text: 'The click-through for this goes to a diff for "Revamp Navigator scene cache strategy", also check out Navigator improved willFocus logic.\n' } ],
  community:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349558/528972.jpg',
       title: 'TylerLH/react-native-timeago',
       url: 'https://github.com/TylerLH/react-native-timeago#readme',
       text: 'Last week I saw on a friend\'s Facebook profile that they had accidentally put their new relationship status as having began in July - the result was that \'John and Jane have been in a relationship in one month\' - beautiful.\n\nThis library helps you to do that kind of thing - turn a timestamp into a "how long ago" stamp, with the help of moment.js.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2345454/1627824.jpg',
       title: 'naoufal/react-native-safari-view',
       url: 'https://github.com/naoufal/react-native-safari-view',
       text: '@naoufal strikes yet again, this time wrapping an extremely common bit of functionality: opening a Safari view on top of your app.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349473/90494.jpg',
       title: 'brentvatne/github-pulse-ios',
       url: 'https://github.com/brentvatne/github-pulse-ios',
       text: 'To practice with ES6 syntax, bridging with Swift modules, async/await and also try my hand at creating a chart with ReactNativeART I started to port @tadeuzagallo\'s awesome GithubPulse desktop app to iOS. It\'s functional now and I\'ll move on to adding the polish next. Watch the project to follow along with my progress!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349535/4033753.jpg',
       title: 'apolkingg8/React-Native-Touchable-Ripple',
       url: 'https://github.com/apolkingg8/React-Native-Touchable-Ripple#readme',
       text: 'Did you happen to drop your Nexus 5 this week and crack the screen in a desperate hunt for caffeine after running a half marathon? Missing the Android L material ripple effect? Well I did and am, so this library couldn\'t have been more timely.\n' } ],
  friends:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349754/logo1_colored_transparent.png',
       title: 'Appetize.io',
       url: 'http://appetize.io',
       text: '"Online web based iOS Simulators and Android Emulators. Stream mobile apps in the browser with html5 and javascript." - that\'s what their og:description meta tag says; it\'s true and they do a damned good job at it. They do a great service to the React Native community by hosting the simulators for rnplay.org, but we chose to reach out to them and get them involved because, simply put, they were the best solution we could find for the job.\n\nCheck out their embed page for example, their API gives you so much control and with very little effort. You can upload an app for 100 minutes free of simulator time, so why not give it a try?\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2349753/goodbits-logo-for-social-scrapers.png',
       title: 'Goodbits',
       url: 'https://goodbits.io',
       text: '"Newsletters should take minutes, not hours. Goodbits helps you quickly build email campaigns." The company is based in Vancouver, Canada and is run by some friends. But more importantly, it\'s a useful product that I use every week to make this newsletter. Check them out if you have a need for a tool that removes the incidental complexity of sending out a newsletter.\n' } ],
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


  }
        }
      />

    );
  }
}

AppRegistry.registerComponent('ExponentApp', () => NewsletterApp);
AppRegistry.registerComponent('main', () => NewsletterApp);
