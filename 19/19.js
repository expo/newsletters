/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');
let {
  Animated,
  AppRegistry,
  Easing,
  Image,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
} = React;

let Dimensions = require('Dimensions');

let Newsletter = require('Newsletter');
let {
  styles,
  NewsletterIssue,
  NewsletterStory,
  NewsletterSectionHeader,
} = Newsletter = require('Newsletter');;
global.Newsletter = Newsletter;

let HORIZ_SPACE = 12;

class NewsletterApp extends React.Component {

  render() {
    return this._renderNewsletter();
    let windowDimensions = Dimensions.get('window');
    let width = windowDimensions.width;
    return (
      <View>
        {this._renderNewsletter()}
        <View style={{
            width: width,
            height: 20,
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'yellow',
        }} />
      </View>
    );
  }

  _renderNewsletter() {
    return (
      <NewsletterIssue
        issueNumber="19"
        issueDate="September 18, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/18-09-2015.html"
        style={{contentOffset: 0, marginTop: 0}}
        compiledBy=" "
        preambleStyle={null}
        preamble={``}
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Issues and Pull Requests",],
          ['community', "From the Community",],
          ['friends', "Friends of the Newsletter",],
          ['footer', " ",],
        ]}
        stories={
          { 'top-news':
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611643/android.png',
                 title: 'React Native for Android',
                 url: 'https://facebook.github.io/react-native/docs/android-setup.html#content',
                 text: 'I\'m sure by now you\'ve all heard that this is available, but I\'m saying it again because I\'m so excited about it. Click through for instructions on how to get set up. Keep in mind while using it that it will still be some time before React Native for Android catches up to its iOS counter part in terms of feature parity.\n\nCheck out the Known issues section of the documentation for the upcoming component roadmap and some information about platform differences that won\'t be going away in the near future, if at all. For example, overflow: hidden is the default behaviour for all Views on Android, and this cannot be changed -- this is a result of how rendering works on Android. There aren\'t many of these issues but knowledge is power, my friends.\n\nTry it out, post issues that you run into and contribute back fixes, show the team how much you appreciate the hard work they put into open sourcing this over the last few months. These folks did an amazing job now let\'s give them a hand!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2622312/Screen_Shot_2015-09-18_at_9.31.59_PM.png',
                 title: 'React Native Playground gets Android support!',
                 url: 'https://rnplay.org/apps/__63LQ',
                 text: 'Click through to give Android a try on the React Native Playground - amazing work by @jsierles, @dsibiski and @jruokangas to create the Android version in a matter of days! Also shoutout to appetize.io who hosts the simulator :)\n\nIf you haven\'t been there in a while you\'ll also be pleasantly surprised by the beautiful new design. Go, click.\n\nThese guys put in a lot of work on React Native Playground and receive nothing but good old feels in return at the moment. If you or your company are interested in sponsoring the site in any way, be sure to reach out!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611666/11891333_1687215191512787_241369871_n.jpg',
                 title: 'Relay out of technical preview!',
                 url: 'https://code.facebook.com/posts/622382554568759/',
                 text: 'Read more about it in this great post by Timothy "yungsters" Yung. Also worth checking out is this Relay Community Roundup by Steven "steveluscher" Luscher.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611667/11891365_421981521342297_896465269_n.jpg',
                 title: 'GraphQL out of technical preview!',
                 url: 'https://code.facebook.com/posts/1691455094417024',
                 text: 'Yet another release from Facebook this week. :clap: :clap: for Lee "leeb" Byron and team!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2622313/reactRally_twitterLogo_noText.png',
                 title: 'Most React Rally talks up on Youtube!',
                 url: 'https://www.youtube.com/channel/UCXBhQ05nu3L1abBUGeQ0ahw',
                 text: 'I had a lovely time in Salt Lake City, now I can relive the feeling of being overtired and under-caffeinated in the comfort and convenience of my own home -- and so can you! You can\'t attend the karaoke and listen to @vjeux and I sing "Chop Suey" though. That, thankfully, was not filmed.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611670/11891341_962266837164015_1058399329_n.jpg',
                 title: 'React Native for Android: How we built the first cross-platform React Native app',
                 url: 'https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/',
                 text: '"We were able to ship Facebook\'s first fully React Native app on two platforms, with native look and feel, built by the same team." - a worthwhile read, written by the Ads Manager team.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611664/photo.jpg',
                 title: '@Scale presentation videos up on YouTube',
                 url: 'https://www.youtube.com/channel/UCd9I8ZkgoR1d7GeSj_wi_LQ',
                 text: 'Couldn\'t make it out to San Jose for the conference? Didn\'t know about it? Well just watch the videos because it\'s too late now. Next year though!\n' } ],
            highlights:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2588594/546885.png',
                 title: 'Added mechanism for directly mapping JS event handlers to blocks',
                 url: 'https://github.com/facebook/react-native/commit/848839858b4f4e03b83e625304af21aa8dd8ff05',
                 text: 'Probably not of much interest to people who care little about the internals of React Native, but this is another lovely commit by @nicklockwood: \n\n"Currently, the system for mapping JS event handlers to blocks is quite clean on the JS side, but is clunky on the native side. The event property is passed as a boolean, which can then be checked by the native side, and if true, the native side is supposed to send an event via the event dispatcher."\n\n"This diff adds the facility to declare the property as a block instead. This means that the event side can simply call the block, and it will automatically send the event.."\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2604556/50120.jpeg',
                 title: 'How to preload / prefetch images for later use in ImageView?',
                 url: 'https://github.com/facebook/react-native/issues/2314',
                 text: 'This one\'s a bit old but good, @hayeah points out a nice solution for preloading images.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2588596/Promise.png',
                 title: 'Why do unhandled promises disappear?',
                 url: 'https://github.com/facebook/react-native/issues/2585',
                 text: 'Read this then I promise you, you will learn something by the time you are done. Go on, I\'ll await.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2595381/49d80792-5706-11e5-88d0-57c877faca98.png',
                 title: 'Binding the navigation bar with the underlying scene',
                 url: 'https://github.com/facebook/react-native/issues/2615',
                 text: 'A useful discussion outlining various approaches for handling button presses from your navigation bar inside of the current scene.\n' } ],
            community:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611669/1_vRfb-8tgqdwiI0dYopJRfw.jpeg',
                 title: 'An iOS Developer on React Native — iOS App Development — Medium',
                 url: 'https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0',
                 text: 'This article was written by Marc Shilling, one of the developers behind the very cool Discovery VR app. It is a "super thoughtful/honest/thorough review of ReactNative from an iOS developer\'s perspective" says Jordan Walke. When challenged by a Twitter troll on the usage of the word super, he elaborated: "It\'s super because author made themselves vulnerable, introspected on emotions that drive technology." Indeed, indeed.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2610263/Screen_Shot_2015-09-18_at_10.21.58_PM.png',
                 title: 'AppHubPlatform/AppHubStarterProject',
                 url: 'https://github.com/AppHubPlatform/AppHubStarterProject',
                 text: 'I had the pleasure of using AppHub while working on Iodine\'s Start app recently. Overall the experience is very smooth! Check out this starter project that they\'ve provided for a demo of how you might integrate AppHub into your app for super easy OTA deploys.\n\nIf you would prefer an open source solution that isn\'t quite as far along but worked on by some very clever people, check out react-native-versions. Both are amazing tools.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611644/walmart-react.png',
                 title: 'Walmart React',
                 url: 'https://github.com/walmartreact',
                 text: '"Home of the React projects of Walmart Labs" - I noticed a few React Native components pop up on here this week, welcome to React Native, Walmart Labs!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611665/screenshot.jpg',
                 title: 'chirag04/react-native-mail',
                 url: 'https://github.com/chirag04/react-native-mail#readme',
                 text: 'This is the first React Native library that I saw with native Android support -- I think @chirag04 might have had early access though ;) Check it out for some insight into how to build native modules, the perfect complement to the Native Modules and Native UI Components guides on a relaxing weekend of React Native hacking.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2611668/Screen_Shot_2015-09-18_at_10.06.49_PM.png',
                 title: 'Fixing React-Native App Following Upgrade',
                 url: 'http://www.yoniweisbrod.com/fixing-react-native-app-following-upgrade/',
                 text: '"I have an iOS app that I\'ve been working on with React-Native and I was so excited when they announced support for Android yesterday. Unfortunately it took me a long time to get things working, and adding Android support...." - protip for those of you updating to 0.11 to safe yourself 5-10 minutes.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2613485/2922932.jpeg',
                 title: 'Wrap platform specific components and let the packager do the work',
                 url: 'https://gist.github.com/dsibiski/d46cf47043d354132dc7',
                 text: '@dsibiski demonstrates a pattern for wrapping platform-specific components that may be useful to avoid forking your code. Cool thing, guy!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2619170/Screen_Shot_2015-09-18_at_10.14.22_PM.png',
                 title: 'iodine/react-native-drawer-layout',
                 url: 'https://github.com/iodine/react-native-drawer-layout',
                 text: 'The young and talented @mfmendiola and I wrote a pure-JS implementation of DrawerLayoutAndroid for use on iOS, and then wrapped them in another component (similar to the link from @dsibiski above) to make this component cross-platform with an identical API! Maybe I\'m biased but it\'s my favourite side menu around ;) Check out this demo video on YouTube showing how we use it in our app -- we even added a little parallax for good measure.\n' } ],
            friends:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2622356/logo1_colored_transparent.png',
                 title: 'Appetize.io',
                 url: 'http://appetize.io',
                 text: 'I love these folks. They make rnplay.org possible and in doing so support the React Native community in a big way. I am not paid to advertise for them, I\'m happy to advocate for products that I believe in (see: this newsletter about React Native) - so check them out if you have any need for an in-browser simulator for iOS or Android! Go and upload an app, the first 100 minutes of simulator use are free!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2622357/goodbits-logo-for-social-scrapers.png',
                 title: 'Goodbits',
                 url: 'http://www.goodbits.io',
                 text: '"Newsletters should take minutes, not hours. Goodbits helps you quickly build email campaigns." That\'s their thing. True story, I once wore a Goodbits tshirt while cycling across the Golden Gate bridge. If you\'ve read this far, you should probably at least try out Goodbits, because clearly you have time on your hands.\n' } ],
           footer: [{
             title: '',
             text: `That's it for now! Ping me on Twitter @notbrent if you have anything that you would like me to share next week.`,
             url: 'http://twitter.com/notbrent',
           }] }
        }
      />
    );
  }
}

AppRegistry.registerComponent('main', () => NewsletterApp);
module.exports = NewsletterApp;
