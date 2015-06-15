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
        preamble={`Okay here's the deal: the new delivery day for this newsletter is anywhere between Friday morning and Sunday evening Pacific Time. Anyhow, here it is, enjoy!`}
        stories={{
          'top-news': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2266541/logo_og.png',
              title: 'Deprecating JSTransform and react-tools',
              url: 'http://facebook.github.io/react/blog/2015/06/12/deprecating-jstransform-and-react-tools.html',
              text: `News from the React blog - with the switch over to Babel for React and React Native complete, JSTransform and react-tools have been deprecated.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2257033/qwikly_logo.png',
              title: 'Qwikly - A plugin to build React Native apps from Sketch',
              url: 'http://getqwikly.com/',
              text: `"Qwikly is a desktop application that helps you build mobile applications directly from your design documents."

Check out their promotional video that demonstrates building, unsurprisingly, a Dribbble clone! Very cool stuff, well done!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2257345/480x270_22611.jpg',
              title: 'JSJ Podcast: Facebook Flow',
              text: `Jeff Morrison and Avik Chaudhuri, members of the Flow team at Facebook, give a good introduction to Flow and the role of static typing in software for those of you who aren't so familiar with it yet, compare it with TypeScript and several other topics. There isn't a lot of information about Flow out there so I recommend checking this out.

Also check out Avik's talk from @scale 2014 for more.

Flow is optional with React Native, but it is used throughout the core so you will probably run into it if you dig into the internals at all. If you haven't given it a chance yet, I'd highly recommend trying it out.`,


            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2264653/521077409_1280x720.jpg',
              title: 'Async - Native Apps in JS with React Native presentation video',
              url: 'https://vimeo.com/129544293',
              text: `Thomas Parslow (@almostobsolete) gave an introduction to React Native at "Async: A JavaScript meetup for Brighton & Hove" at the beginning of May, and the video was just posted a week ago. It's a big one, coming in at 1 hour and 40 minutes. If we are to trust random strangers commenting on the internet, Uberact assures us in the Vimeo comments that it's "Nicely done." So what are you waiting for? Uberact has never led you astray, go watch this now! Slides here`,
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2243730/headerpaths.png',
              title: 'Listening to application urls in React Native',
              url: 'http://blog.lum.pe/listening-to-application-urls-in-react-native/',
              text: `Ever wonder how clicking some links from your browser can trigger the Twitter or Facebook apps to open up? @johanneslumpe describes how you can do this in React Native with this blogpost!`,
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2264550/gofore_white.png',
              title: 'React Native – Share Your Application Logic on Web and Mobile',
              url: 'http://gofore.com/ohjelmistokehitys/react-native-share-application-logic-web-mobile/',
              text: `React Native allows native iOS development using existing JavaScript skills and libraries. It also allows you to share code between web and mobile.`,
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2250842/slide_0.jpg',
              title: 'React Native: Under the Hood',
              url: 'https://speakerdeck.com/frantic/react-native-under-the-hood',
              text: `Great set of slides that go more in depth about the internals of React Native than any other deck so far. If only we had the video that went with it!

Also check out @frantic's React Native Tutorial slides from the end of March.`,
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2268937/Screen_Shot_2015-06-13_at_1.43.52_PM.png',
              title: 'iOS Bytes - Episode #73',
              url: 'https://iosbytes.codeschool.com/episodes/75-episode-73-june-11th-2015',
              text: `A quick five-minute podcast that mentions Exponent and this newsletter, as well as @christopherdro's Sudoku app.`
            },

          ],

          'highlights': [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2266542/YJYPm.png',
              title: 'XHR FormData upload example by @philikon',
              url: 'https://github.com/facebook/react-native/commit/628609a0691335a3542e6ee069fc16b17c57b3f9',
              text: `Pull down master and give this a try - it demonstrates how you can use FormData to upload files, eg: photos, via HTTP post. Made possible by @nicklockwood in this commit.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2259284/0_Igmp3eJSGfJ4zn2d.jpg',
              title: 'React Native Meets Async Functions — And it’s wonderful.',
              url: 'https://medium.com/the-exponent-log/react-native-meets-async-functions-3e6f81111173',
              text: `Related to this commit, a fantastic article by @ide about async/await and React Native. Go read it, I'll await!

** You will notice in this post that the async/await support mentioned in the JSJ Flow podcast has landed in Flow`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2266543/112170.jpg',
              title: 'Element inspector interop with React Devtools',
              url: 'https://github.com/facebook/react-native/commit/d68776d5deebfc54a22f87eab36d95ca2abccade',
              text: `@jaredly continues to make an impact, this little commit is a fine addition to the debugging support - now selecting an element with the element inspector will cause it to also be selected by React Devtools, nifty stuff.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2268938/764414.png',
              title: 'Remove module info from the data section + allow external modules',
              url: 'https://github.com/facebook/react-native/commit/e9095b2f4277918c7b62d2e3dab3f77e79ca4776',
              text: `This commit by @tadeuzagallo "lets external libraries define RN modules instead of previously requiring everything to be compiled together as one library" - thanks @ide for pointing it out!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2268940/1483597.jpg',
              title: 'Remove contextual navigation from Navigator',
              url: 'https://github.com/facebook/react-native/commit/4690983c10a60d84a98a2a6f8bdf9a1c39d2ef74',
              text: `This commit is a big red diff and "is a breaking change to Navigator - removes 'contextual navigation' for the time being. So now events and routes don’t automatically propagate from a child navigator to its parent." Thanks again @ide for pointing this out.

Be sure to read it through if you're using nested navigators in your app - this will likely be included in 0.7.0rc which will be coming next week.`,
            },
          ],
          community: [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2251291/40662.jpg',
              title: 'jordanbyron/react-native-event-source',
              url: 'https://github.com/jordanbyron/react-native-event-source',
              text: `"A react-native interface for EventSource: Server-Sent Events for iOS", Great for integrating with Rails 4 apps using ActionController::Live`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2247313/Screen_Shot_2015-06-11_at_2.29.30_PM.png',
              title: 'naoufal/react-native-activity-view',
              url: 'https://github.com/naoufal/react-native-activity-view',
              text: `That's four now, four weeks in a row of React Native libraries for @naoufal! This library is similar to ActionSheetIOS that comes in React Native core but with a slightly different API and it gives you the ability to add images to your shared content as well.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2250640/239676.jpg',
              title: 'necolas/react-web-sdk',
              url: 'https://github.com/necolas/react-web-sdk',
              text: `@necolas, a developer at Twitter, takes the first serious stab at coming up with a tool to make your components run on both React for the browser and React Native. Browse through the README then pull the project and give it a try. If you have any feedback, be sure to leave it!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2259786/tTcT7xJ.png',
              title: 'React Native Tinder-like cards',
              url: 'http://browniefed.com/blog/2015/06/06/react-native-tinder-like-cards/',
              text: `React-Native Tinder like cards from the JavaScript Without Grammar by @browniefed. Check out the example on rnplay.org`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2259787/db61b072-1076-11e5-8aa2-52417f019ea0.jp',
              title: 'catalinmiron/react-native-dribbble-app',
              url: 'https://github.com/catalinmiron/react-native-dribbble-app',
              text: `We mentioned this one a few weeks ago, it's now open source - looks pretty slick! That's the second Dribbble clone in this week's newsletter.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2264576/186674.jpg',
              title: 'lwansbrough/react-native-multipeer',
              url: 'https://github.com/lwansbrough/react-native-multipeer',
              text: `"Communicate over ad hoc wifi using Multipeer Connectivity" - FireChat anyone?`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2247314/screenshot-2.png',
              title: 'mrblueblue/react-native-alt-demo',
              url: 'https://github.com/mrblueblue/react-native-alt-demo',
              text: `A demo app of that uses the popular new Flux library called "Alt" with React Native.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2264641/378279.jpg',
              title: 'oblador/react-native-collapsible',
              url: 'https://github.com/oblador/react-native-collapsible',
              text: `Similar to the accordion component from a couple of weeks ago, collapsible is a higher order component that you could use as a base to build an accordion, or just on its own.`
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2265021/954063.jpg',
              title: 'chirag04/react-native-in-app-utils',
              url: 'https://github.com/chirag04/react-native-in-app-utils',
              text: `@chirag04 wants to help you handle in-app purchases. Will you let him? Stay tuned.`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2265025/dunce-cap.jpg',
              title: 'adamjmcgrath/react-native-simple-auth',
              url: 'https://github.com/adamjmcgrath/react-native-simple-auth',
              text: `I'm a silly man - so I know, I linked to this last week, but @adamjmcgrath gracefully pointed out an error in my description. For Facebook and Twitter it does not use an in-app browser, it uses native iOS apis - a bit different from integrating with the Facebook or Twitter SDK but still works great!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2266458/messages_imessages.jpg',
              title: 'exponentjs/react-native-invertible-scroll-view',
              url: 'https://github.com/exponentjs/react-native-invertible-scroll-view',
              text: `"InvertibleScrollView is a React Native scroll view that can be inverted so that content is rendered starting from the bottom, and the user must scroll down to reveal more. This is a common design in chat applications and the command-line terminals. InvertibleScrollView also supports horizontal scroll views to present content from right to left." - from @ide and @ccheever of exponent

This was a released a while ago but I mention it now because this commit landed into master which means that if you install from master you will no longer need a patched version of React Native for this library to work. Worth checking it out if only for an example of how to build your own higher-order ScrollView components!`,
            },
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2266459/Screen_Shot_2015-06-12_at_6.49.19_PM.png',
              title: 'brentvatne/react-native-scrollable-tab-view',
              url: 'https://github.com/brentvatne/react-native-scrollable-tab-view',
              text: `Tabbed navigation that you can swipe between, each tab can have its own ScrollView and maintain its own scroll position between swipes. Pleasantly animated. Customizable tab bar. It's my favorite navigation pattern from Android, underused currently on iOS in my opinion.

Check out this example gif that uses a custom tab bar to implement the same behavior as the Facebook Android app.

This second example gif shows another common pattern - a sliding line to indicate tab selection.

Check out the README for details on how to implement your own custom tab bar, and let me know if you have any feedback!`,
            }


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
