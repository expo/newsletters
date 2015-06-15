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
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215645/Screen_Shot_2015-06-05_at_11.47.02_AM.png',
              title: 'brentvatne/react-native-issues',
              text: `You might have noticed that I've started tagging every issue and pull request with a [ComponentName] prefix. Aside from making this easier to visually parse, there are other benefits.

Looking at a list of issues doesn't do much to give you the big picture for what needs work on a repository. So I put together a little app that pulls the issues from Github, parses out the tags and provides a few graphs & data tables to help us better understand the current state of affairs.

The first graphs just sum up the occurrences of tags across issues. The last data table uses number of unique commenters on an issue as a proxy to determine its importance to the community.

If you have any ideas for how we can change this to get more insight, ping me @notbrent on Twitter or create an issue on this repo.

Check it out live, if divshot isn't down for some reason`
            },


            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2201968/Screenshot_2015-06-05_18.34.34.png',
              title: 'Directly wrap UITableView with a TableViewIOS component',
              text: `This is something that the React Native team has tried to do on several occasions but never found a satisfactory solution. Some issues with ListView:

It doesn't have re-ordering functionality
It doesn't de-allocate/re-use views intelligently, so memory usage grows as you scroll through a large list.
If there are problems that you are interested in solving, your efforts would be much appreciated by the community. This is not something that will be solved by the team at Facebook in the near future, they have other priorities, so this will need to be a community driven effort. Jump into this issue to discuss!`,
              url: 'https://github.com/facebook/react-native/issues/332#issuecomment-107716637',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2200064/Screenshot_2015-06-05_18.32.43.png',
              title: 'Stop traversing the whole view hierarchy every frame',
              text: 'This was highlighted in this the 0.6.0-rc release notes and for good reason, @tadeuzagallo commented that "On ~10k views it went from ~20ms to ~0.05ms" - big optimization!',
              url: 'https://github.com/tadeuzagallo/react-native/commit/b03446e27e99e2d6117190c08ffff1bb5f3495a3',

            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2200063/Screenshot_2015-06-07_10.07.28.png',
              title: 'Launch screen white flash',
              text: `More follow up on this thread by @nicklockwood - expect an official solution to this soon, for now he provides a temporary workaround that allows you to customize the transition from Launch Screen > Intermediate Screen while loading React Native > Your React Native App.`,
              url: 'https://github.com/facebook/react-native/issues/1402#issuecomment-107629965',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2225496/2443058.jpg',
              title: `@rxb's take on ScrollView paging`,
              text: `"This is an enhancement for ScrollView that adds the ability to paginate based on a width other than the width of the ScrollView itself. This is a fairly common pattern used on apps like Facebook, App Store, and Twitter to scroll through a horizontal set of cards or icons"

Video of it in action: https://vid.me/aoby

I personally love this PR because I ran into issues with the default pagination and this proposal gives us a lot more control over it!`,
              url: 'https://github.com/facebook/react-native/pull/1532',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2232384/687474703a2f2f692e696d6775722e636f6d2f587776585447592e706e67.png',
              title: 'Maintaining aspect ratio on network images',
              text: `An interesting proposal from @paramaggarwal to take a network images specified dimensions into account and take those into account when calculating width/height based on flex attributes in order to maintain the aspect ratio. Feel free to chime in with your thoughts!`,
              url: 'https://github.com/facebook/react-native/pull/1538',
            },

          ],
          community: [
            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215643/image.png',
              title: 'naoufal/react-native-touch-id',
              text: `It really can't get any easier than this to interface with the native touch id api. @naoufal strikes again with his third module in as many weeks - maybe I should make a "naoufal's module of the week" section for this newsletter :p`,
              url: 'https://github.com/naoufal/react-native-touch-id',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2229194/avatar.jpg',
              title: 'Automating iOS App Icon Creation',
              text: `Death, taxes, and iOS app icon creation - you can't avoid them. "Automate creation of iOS App Icons using SVG multi-rasterization to PNG with Inkscape and shell scripting."`,
              url: 'http://habd.as/automating-ios-app-icon-creation/',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2226535/masked-view-screenshot.png',
              title: 'gilbox/react-native-masked-view',
              text: `View masking can at times be incredibly useful - think for a moment how you might build a semi-transparent overlay with a circle cut out to shine a spotlight on a part of the underlying interface - this type of thing is common in app intro tours. Check this library out for a way to do this type of thing in React Native.`,
              url: 'https://github.com/gilbox/react-native-masked-view',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215650/ae83ca165d42adc2.png',
              title: 'React Native components that you want to see',
              text: `I started a discussion thread on discuss.reactjs.org where people can share their component ideas, join in and share your ideas!`,
              url: 'https://discuss.reactjs.org/t/react-native-components-that-you-want-to-see/523/13',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2232427/CG0nY_QXIAIaMlH.png',

              title: 'chendesheng/ReagentNativeDemo',
              text: '@chendesheng demos integrating the elegant ClojureScript React-based library Reagent with React Native in this repo.',
              url: 'https://github.com/chendesheng/ReagentNativeDemo',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2202980/Screenshot_2015-06-07_10.22.58.png',
              title: 'jeanregisser/react-native-popover',
              text: `Popovers are great, and @jeanregisser has done the hard work so all you need to do is include his lib and you get them for free. Neato.`,
              url: 'https://github.com/jeanregisser/react-native-popover#readme',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215644/google_cloud_messaging-100050099-large.jpg',
              title: 'bh5-pods/react-native-gcm',
              text: `I don't claim to have any idea what Google Cloud Messaging is**, but if you care about it and you're reading this newsletter then there is a good chance you will find this module useful.

              ** Apparently Cyber Criminals (aka criminals) used to use it though, so that's cool.`,
              url: 'https://github.com/bh5-pods/react-native-gcm',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2201969/Screenshot_2015-06-05_18.57.16.png',
              title: 'skevy/react-native-gsap-demo',
              text: `A follow-up to the mention of using GSAP and React Native a few weeks ago, skevy created an example app that uses Timeline to co-ordinate tweens, very neat!`,
              url: 'https://github.com/skevy/react-native-gsap-demo',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215646/Screenshot_2015-06-07_10.08.55.png',
              title: 'adamjmcgrath/react-native-simple-auth',
              text: `Easily add authentication to your app via Facebook, Twitter, Github, etc. The downside: this uses an in-app browser for authentication, so for apps like Facebook and Twitter where you probably have them installed on your phone already, this library will not use those apps and users will have to re-enter their credentials.`,
              url: 'https://github.com/adamjmcgrath/react-native-simple-auth',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215647/Screenshot_2015-06-05_19.00.15.png',
              title: 'facebook/react-native-applinks',
              text: `The first external library for React Native that has been released outside of the main repo - it helps you handle incoming and outgoing deep links between native apps. I'll admit I don't totally grok it, so if you want to put together a blog post explaining it and how to use it, that would be fantastic and I will include it in an upcoming newsletter.`,
              url: 'https://github.com/facebook/react-native-applinks',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2215648/Screenshot_2015-06-07_10.18.59.png',
              title: 'CSS-Layout and React ART',
              text: `In this blog post, @browniefed demos how you might use React ART with css-layout, React Native's layout engine.`,
              url: 'http://browniefed.com/blog/2015/06/01/css-layout-and-react-art/',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2219883/Screenshot_2015-06-07_10.21.05.png',
              title: 'lmorchard/react-multiplatform',
              text: `"An experiment to build a React-based app on multiple platforms" - web and native`,
              url: 'https://github.com/lmorchard/react-multiplatform',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2229193/seURKezN_400x400.jpeg',
              title: '"Weekend project messing with maps and #reactnative "',
              text: `@bsudekum - MapBox employee and the author of react-native-mapbox-gl, put together a neat little weekend project using his library. See the demo here`,
              url: 'https://twitter.com/bobws/status/603043992159158273',
            },

            {
              imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2232628/Screen_Shot_2015-06-07_at_1.40.19_PM.png',
              title: 'TouchableBounce',
              text: `One of the lesser known Touchable* components is TouchableBounce - it transforms its children's scaleXY property to create a bounce effect when you tap on it. Click through this link to see the example on rnplay.org`,
              url: 'https://rnplay.org/apps/q8c-hg?autoplay=true',
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
