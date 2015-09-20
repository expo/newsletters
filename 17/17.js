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
    return (
      <NewsletterIssue
        issueNumber="17"
        issueDate="August 30, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/30-08-2015.html"
        style={{contentOffset: -20, marginTop: 0}}
        compiledBy=" "
        preambleStyle={null}
        preamble={`I was away last week at React Rally, where I hung out with a bunch of smart people and learned that 3.2% is the legally enforced maximum ABV for draught beer in Utah.. But here we are again with news from around the React Native world.`}
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Issues and Pull Requests",],
          ['community', "From the Community",],
          ['friends', "Friends of the Newsletter",],
          ['footer', " ",],
        ]}
        stories={
          { 'top-news':
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563095/Screen_Shot_2015-08-30_at_21.47.41.png',
       title: 'React Native v0.11.0-rc and v0.10.0',
       url: 'https://github.com/facebook/react-native/releases/tag/v0.11.0-rc',
       text: 'No single huge feature in this release but a lot of bugfixes and small additions that I\'m sure you will all appreciate, click through for the release notes!\n\nPSA: v0.11.0-rc will be the last release to contain "rc" in the version name. After speaking with @linclark at React Rally, we\'ve decided that the best approach going forward in order to avoid peerDependencies-related npm warnings (see this issue for more information) is to publish our release candidates without the -rc suffix. The most recent stable version will be marked as the latest on npm, so that will be downloaded automatically and you will have to manually specify the "release candidate" version in order to use it - so this does not change. If you take issue with this approach, ping me @notbrent on Twitter and we can discuss!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563666/graphiql.png',
       title: 'GraphiQL - An interactive in-browser GraphQL IDE released',
       url: 'https://github.com/graphql/graphiql',
       text: 'Announced on stage at React Rally, this is a zero effort way to jump in and play with GraphQL to get a feel for how it works, while also reading up more about Star Wars in preparation for the upcoming new film.\n\nThe items and edges thing still feels super weird to me but it was explained to me as being an important construct for 1) security: you might be friends with Brent and Todd, but maybe Brent doesn\'t want you to see that he is friends with Todd because he is embarrassed by that, so you can see the nodes but not the edges. 2) pagination: https://facebook.github.io/relay/docs/graphql-connections.html#content (thanks @leeb and @schrockn for explaining this).\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2529168/icon320x320.jpeg',
       title: 'Exponent on the App Store & xde released',
       url: 'https://itunes.apple.com/us/app/exponent/id982107779?mt=8',
       text: 'xde is the "Exponent Development Environment" - a GUI tool that makes it even easier to use Exponent. If you haven\'t heard of it before, Exponent is a way to build and share apps / "experiences" without even going into Xcode. All you need is your text editor and an iPhone. @ccheever spoke about it at React Rally so keep an eye out for the videos to be posted online! Join us on the Exponent Slack to chat more about it!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563054/hellogl.jpg',
       title: 'ProjectSeptemberInc/gl-react-native',
       url: 'https://github.com/ProjectSeptemberInc/gl-react-native',
       text: '"OpenGL bindings for React Native to implement complex effects over images and components, in the descriptive VDOM paradigm" - wow, this is super exciting! Clone it, try out the examples and check out the gitbook docs to be blown away. I can\'t wait to see people begin to integrate this into their projects!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563635/Screen_Shot_2015-08-30_at_21.43.38.png',
       title: 'React Native Showcase is live',
       url: 'https://facebook.github.io/react-native/showcase.html',
       text: 'Thanks @chirag04 for putting this together! This is a showcase of React Native apps, feel free to submit a pull request to add yours to the list!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563667/facebook-move-fast.jpg',
       title: 'Guy with impressive mustache talks about React Native',
       url: 'http://techcrunch.com/2015/08/26/facebook-react-native/?utm_content=buffer23a1c&amp;utm_medium=social&amp;utm_source=twitter.com&amp;utm_campaign=buffer',
       text: 'This article is great, you should definitely read it, but my god, that mustache, it\'s a work of art. Adam Wolff, I salute you.\n' } ],
  highlights:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563629/tres.png',
       title: '[RFC] Declarative navigator routeStack API',
       url: 'https://github.com/facebook/react-native/issues/2436',
       text: '"The Navigator component stores quite a bit of information internally in this.state, which makes sense given the complexity of scene transitions. However, the imperative APIs needed to work with the Navigator component (pop, push, replaceAtIndex, etc.) are unfamiliar when coming from other traditionally declarative React core components.\n\nI\'d like to propose adding a new (optional) declarative API:\n\n<Navigator routeStack={routes} />"\n\nInteresting discussion started by @tgriesser - I\'d love to see this kind of behaviour integrated so that you can easily plug your navigation state into Redux!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563672/378279.jpg',
       title: '[NavigatorIOS] push flicker 0.10.0',
       url: 'https://github.com/facebook/react-native/issues/2490#issuecomment-136236433',
       text: '@oblador makes a great point here - currently it\'s hard to performantly animate Navigator transitions when pushing any semi-complex view because you end up dropping frames pretty quickly. This is a known issue that is being looked at by the team and there are some efforts being made to improve it as I mention in my response. But if you have any other ideas for how we can make this better, feel free to jump in the thread! Or, if you\'re interested in taking ownership of NavigatorIOS and forming a small group around it, I would encourage you to do so! This is the beauty of open source :)\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563671/Screen_Shot_2015-08-30_at_22.27.47.png',
       title: '[NavigatorIOS] Adding the ability to change the title bar font. by lloydho',
       url: 'https://github.com/facebook/react-native/pull/2242',
       text: 'An exemplary pull request from lloydho - we need more of these for NavigatorIOS! Apparently he\'s moved to BitBucket though. See ya lloydho!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563633/a2f0961e-490f-11e5-89b6-65bd3f0aa342.png',
       title: 'Add Drop Shadow Style to Text Component by greghe',
       url: 'https://github.com/facebook/react-native/pull/2410',
       text: '"Adds four new styles to the Text component: textShadowOpacity,textShadowColor, textShadowOffset and textShadowRadius. They are nearly identical to the correspondingly named view shadow properties."\n' } ],
  community:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563669/icon320x320.png',
       title: 'Discovery VR on the App Store on iTunes',
       url: 'https://itunes.apple.com/us/app/discovery-vr/id1030815031?mt=8',
       text: 'Beautiful app built with React Native was released last week, I highly recommend you download it, open a video, go in a room without windows and turn the lights off*. Move your phone around. Super cool. Of course not all of that could be done with JavaScript but the slick UI that gets you to the action certainly is.\n\n*please don\'t trip and fall and hurt yourself, if you are a clumsy person then just sit on your couch and surround yourself with pillows.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2548073/demo.png',
       title: 'yelled3/react-native-google-static-map',
       url: 'https://github.com/yelled3/react-native-google-static-map',
       text: 'If an interactive map is overkill for you and you just want to show one specific area of a map, this might be the library for you - it\'s a wrapper around Google\'s static map API.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2527719/placeholder.png',
       title: 'aksonov/react-native-svg-elements',
       url: 'https://github.com/aksonov/react-native-svg-elements',
       text: '"Use React Native to draw SVG. No XML parsing, use speed of React Native directly. Alpha version, not all elements/attributes are supported now." - cool project that seems like a better version of the simple react-native-svg project I put together a while ago. Hope to see it continue to develop!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2527718/placeholder.png',
       title: 'aksonov/react-native-tableview',
       url: 'https://github.com/aksonov/react-native-tableview#readme',
       text: 'Yeah that\'s right, another weird purple Github placeholder avatar - that must mean that this is aksonov again. In this project, aksonov wraps the native UITableView. This might be useful for you if you feel you\'re not quite getting the performance you need out of ListView and don\'t need much in the way of customization for your list.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2527722/Screen_Shot_2015-08-30_at_21.56.30.png',
       title: 'voximplant/react-native-voximplant',
       url: 'https://github.com/voximplant/react-native-voximplant#readme',
       text: '"VoxImplant Mobile SDK module for React Native. It lets developers embed realtime voice and video communication into React Native apps and works together with VoxImplant cloud platform. The SDK uses WebRTC for media processing."\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2527720/yamill.jpg',
       title: 'yamill/react-native-pasteboard · GitHub',
       url: 'https://github.com/yamill/react-native-pasteboard#readme',
       text: 'Sometimes it\'s just better to let the code speak:\n\nPasteBoard.copyText(\'Hello world!\', (callback) => {\n  AlertIOS.alert(\'Alert\', \'Link copied to clipboard!\');\n});\n\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2527721/spongebob.jpg',
       title: 'michaelcontento/redux-middleware-react-native-appstate',
       url: 'https://github.com/michaelcontento/redux-middleware-react-native-appstate',
       text: 'It\'s neat to see some more work being done to provide tooling around Redux specific to React Native! If you haven\'t tried Redux yet, please do, you will enjoy it!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563665/Screenshot.png',
       title: 'paramaggarwal/react-native-device-motion',
       url: 'https://github.com/paramaggarwal/react-native-device-motion#readme',
       text: 'Pretty sure the image says it all here.\n' } ],
  friends:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2563692/logo1_colored_transparent.png',
       title: 'Appetize.io',
       url: 'https://appetize.io/',
       text: 'I love these folks. They make rnplay.org possible and in doing so support the React Native community in a big way. I am not paid to advertise for them, I\'m happy to advocate for products that I believe in (see: this newsletter about React Native) - so check them out if you have any need for an in-browser simulator for iOS or Android! Go and upload an app, the first 100 minutes of simulator use are free!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2524900/goodbits-logo-for-social-scrapers.png',
       title: 'Goodbits',
       url: 'http://goodbits.io',
       text: '"Newsletters should take minutes, not hours. Goodbits helps you quickly build email campaigns." That\'s their thing. True story, I once wore a Goodbits tshirt while cycling across the Golden Gate bridge. If you\'ve read this far, you should probably at least try out Goodbits, because clearly you have time on your hands.\n' } ],
  footer: [] }
        }
      />
    );
  }
}

AppRegistry.registerComponent('main', () => NewsletterApp);
module.exports = NewsletterApp;
