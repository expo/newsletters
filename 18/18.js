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
        issueNumber="18"
        issueDate="September 7, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/07-09-2015.html"
        style={{contentOffset: 0, marginTop: 0}}
        compiledBy=" "
        preambleStyle={null}
        preamble={`Happy labour day everybody! Unless you're outside of North America, then happy Monday, suckers! Just kidding, you probably get way more vacation than us North Americans anyways, just let us have this one. React Native 0.11 won't be out until next week, but please keep kicking the tires with 0.11-rc!`}
        sections={[
          ['top-news', 'Top News',],
          ['highlights', "Issues and Pull Requests",],
          ['community', "From the Community",],
          ['friends', "Friends of the Newsletter",],
          ['footer', " ",],
        ]}
        stories={
          { 'top-news':
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583393/clay.png',
       title: 'Community Interview #4 - Clay Allsopp',
       url: 'https://gist.github.com/brentvatne/3527896694df63168544',
       text: 'Clay Allsopp (twitter) (github) (medium) works at Palantir, where he uses React Native in Production.  I loved this blog post, so naturally I had to spend my Sunday morning catching up with him and I\'m so glad that I did! Usually I describe people\'s background here but since that\'s covered in the interview, I\'ll let you click through and read it.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2585682/icon320x320.png',
       title: 'Spero for Cancer on the App Store on iTunes',
       url: 'https://itunes.apple.com/ca/app/spero-for-cancer/id1033923573?mt=8&amp;ign-mpt=uo%3D4',
       text: '"Spero for Cancer is a safe place for cancer fighters, survivors, and supporters to connect and support each other 24/7." Built with React Native! 👌\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2575234/Screen_Shot_2015-09-06_at_11.55.24_PM.png',
       title: 'RubyMotion 4.0: free Starter edition, cross-platform games, watchOS 2.0',
       url: 'http://www.rubymotion.com/news/2015/09/03/announcing-rubymotion-4-0-free-cross-platform-games-watchos-2-0.html',
       text: 'I played around with RubyMotion years ago and had a lot of fun. I even read interviewee-of-the-week @clayallsopp\'s book on it! While I personally prefer to use React Native, I believe it\'s valuable to be familiar with alternative approaches for solving similar problems -- and hey, it\'s free and a long weekend (if you\'re in North America) so why not give it a try?\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2571596/hqdefault.jpg',
       title: 'A work-in-progress Relay prototyping tool',
       url: 'https://www.youtube.com/watch?v=IYYoK0dV4ME',
       text: 'Former Vancouverite @steveluscher, now working at some company called Facebook in California, is building a Relay prototyping tool that will let you easily play with Relay in your browser, "Coming soon to a Relay homepage near you!" Check out a video of it in action by clicking through.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2575235/Adam-Wolff-Facebook-React-Native-OpenAir.jpg',
       title: 'How Facebook Focuses on the Most Important Element of an App - Airbnb Engineering',
       url: 'http://nerds.airbnb.com/facebook-react-native/',
       text: 'Facebook’s React Native iOS framework helps the social network keep its focus on the most important element of a mobile app: the user interface.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583302/cloud-tools-100581914-primary.idge.jpg',
       title: 'React Native gets instrumentation, performance boosts',
       url: 'http://www.infoworld.com/article/2976907/javascript/react-native-gets-instrumentation-performance-boosts.html?phint=newt=infoworld_daily&amp;phint=idg_eid=48f57620ae641e0422695374b7964ee9#tk.IFWNLE_nlt_daily_pm_2015-08-28&amp;siteid=&amp;phint=tpcs=&amp;phint=idg_eid=48f57620ae641e0422695374b7964ee9',
       text: 'I admit I only included this article for the hilarious overly lens-flared wrench splash image. I guess you can read it if you want to, it couldn\'t hurt.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583403/carmack.jpg',
       title: 'Oculus VrScript',
       url: 'http://www.roadtovr.com/oculus-cto-john-carmack-will-demo-his-vrscript-language-at-connect/',
       text: 'Read through this article and tell me it doesn\'t sound a lot like React Native and Exponent!\n\n"Web Like: where the script is downloaded from the net for each execution and run by a single signed app that we provide (NetHMD). Fully specified by an app-scheme URI, this allows VR experiences to be launched directly from web pages or app-links on Facebook"\n\n"Remote development: where the script is actually executed in an IDE on a PC, communicating with NetHMD over a TCP connection. This allows sub-second code-change to VR change iteration cycles, and the use of a debugger."\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2585684/icon320x320.png',
       title: 'Discord - Chat for Gamers on the App Store on iTunes',
       url: 'https://itunes.apple.com/us/app/discord-chat-for-gamers/id985746746?mt=8',
       text: '"Discord is the only cross-platform voice and text chat app designed specifically for gamers. With the iOS companion app you can stay connected to all your Discord voice and text channels even while AFK. It is perfect for chatting with team members, seeing who is playing online, and catching up on text conversations you may have missed."\n\nThe actual chat view drops down to native because the team couldn\'t get the performance that they needed out of ListView, but the rest is React Native! Beautiful work.\n' } ],
  highlights:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2584054/Screen_Shot_2015-09-07_at_11.20.59_AM.png',
       title: 'New README for facebook/react-native!',
       url: 'https://github.com/facebook/react-native',
       text: 'Billionaire playboy and dilettante @ide (pronounced ee-day) spent an hour this afternoon re-writing the README. In his words: "This new README talks more about the react-native project, repository, and contribution process (the old one was more focused on technical details). @brentvatne and I want people to get help and file issues & PRs more effectively. Here\'s a first draft that we believe helps with that."\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583437/Screen_Shot_2015-09-07_at_11.24.45_AM.png',
       title: 'How to handle http request timeout with fetch',
       url: 'https://github.com/facebook/react-native/issues/2556',
       text: 'It looks like there isn\'t any timeout option built into the fetch API yet, but I mention in this issue a few existing discussions about handling timeouts / aborting in general, on both the fetch polyfill and spec reposl. An example of where this might be useful is if you have a large request where it might take a while to parse the JSON, and if the user switches away from the view where that is relevant then you may be better off just aborting that request than letting it potentially drop frames during your navigator transition.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583438/Screen_Shot_2015-09-07_at_11.25.23_AM.png',
       title: 'UIExplorer example won\'t run',
       url: 'https://github.com/facebook/react-native/issues/2562',
       text: 'UIExplorer not working out for you after pulling a newer version of React Native? In this issue I describe a sequence of steps to get it running.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583439/nodejs_logo_green.jpg',
       title: 'Prepare for Node 4',
       url: 'https://github.com/facebook/react-native/issues/2545',
       text: 'Node 4.0 is coming. @ide leads the charge here: "I believe the codebase is in good shape for Node 4.0. It\'s going to be much better when we can tell people just to get the latest version of Node without any of the io.js confusion."\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583499/anand.jpg',
       title: 'Text - font size is changing on 0.11.0-rc',
       url: 'https://github.com/facebook/react-native/issues/2519',
       text: '"Just upgraded to 11-rc and all <Text> font sizes are now being affected by accessibility settings. Accessibility is great, but this ended up breaking many of our screens." - beware of this if you plan to upgrade to 0.11.0-rc! The reason this is happening is that allowFontScaling is default to true when it should be false.\n' } ],
  community:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2584083/oblador.jpg',
       title: 'oblador/react-native-lightbox',
       url: 'https://github.com/oblador/react-native-lightbox',
       text: 'A beautiful lightbox library. Check out this [demo gif]. It\'s worth it. Go on. Fine work, @oblador.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583296/3741055.png',
       title: 'christopherdro/react-native-print',
       url: 'https://github.com/christopherdro/react-native-print',
       text: '"Print documents using React Native"\n\nRNPrint.print(filePath).then((jobName) => {\n  console.log(`Printing ${jobName} complete!`);\n});;\n\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583294/Screen_Shot_2015-09-07_at_11.33.31_AM.png',
       title: 'Youtube Animated Video Slide (Blog Post)',
       url: 'http://browniefed.com/blog/2015/08/31/react-native-youtube-animated-video-slide/',
       text: '"If you haven’t seen it, YouTube allows you to drag the current playing video down to the bottom right corner and have it continue to play while you browse the rest of the app." - this blog post explains one way that you can achieve this effect using Animated.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583295/dave.jpg',
       title: 'dsibiski/react-native-embedded-app-example',
       url: 'https://github.com/dsibiski/react-native-embedded-app-example',
       text: '"A collection of examples for using React Native in an existing iOS application"\n\n@dsibiski has done plenty of iOS work before he got into React Native. At work, he has as much experience as anyone in the community at integrating React Native into existing iOS apps. He kindly put together this repository to share some of his knowledge, what a good guy.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2575233/Screen_Shot_2015-09-07_at_11.35.17_AM.png',
       title: 'Animated with React-Art - Firework Tap To Shoot (Blog Post)',
       url: 'http://browniefed.com/blog/2015/08/29/react-native-animated-with-react-art-firework-show/',
       text: 'Another blog post from @browniefed, in this one he explains how you can make an exploding-fireworks-style effect with ReactART.\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583297/CN0wTtkWcAAapiJ.png',
       title: 'A tip from @gpblv ',
       url: 'https://twitter.com/gpblv/status/638719841260728321',
       text: '“#reactnative tip: use the propType of the native component if you are just passing a prop to it”\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2584084/Screen_Shot_2015-09-07_at_11.45.13_AM.png',
       title: '@rhaker wraps a bunch of small modules',
       url: 'https://github.com/search?q=user%3Arhaker+react-native',
       text: 'Flashlight control & control whether device should sleep are features that I hadn\'t seen wrapped yet for React Native, neato!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2575232/ryan.jpg',
       title: 'ryanmcdermott/react-native-login',
       url: 'https://github.com/ryanmcdermott/react-native-login',
       text: '"react-native-login is an example React Native project showing how to use a WebView and react-native-cookies to login to your existing backend."\n' } ],
  friends:
   [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583392/logo1_colored_transparent.png',
       title: 'Appetize.io',
       url: 'https://appetize.io/',
       text: 'I love these folks. They make rnplay.org possible and in doing so support the React Native community in a big way. I am not paid to advertise for them, I\'m happy to advocate for products that I believe in (see: this newsletter about React Native) - so check them out if you have any need for an in-browser simulator for iOS or Android! Go and upload an app, the first 100 minutes of simulator use are free!\n' },
     { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2583391/goodbits-logo-for-social-scrapers.png',
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
