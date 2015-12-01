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
        issueNumber="25"
        issueDate="November 22, 2015"
        webUrl="http://brentvatne.ca/react-native-newsletter/22-11-2015.html"
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
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2800678/ken.png',
                 title: 'Community Interview #5 - Ken Wheeler',
                 url: 'https://gist.github.com/brentvatne/d252c167d10ecdaf959c',
                 text: 'Ken Wheeler (twitter) (github) works at Formidable / Walmart Labs who you might know for spectacle, slick, mcfly (thanks a lot for perpetuating the Back to the Future references Ken, really), or as the winner of our Reactive Conference contest.  According to github-awards.com, his worldwide ranking on Github for JavaScript is 61 out of about 600,000 developers, and 22 in the United States -- based off of number of stars on his repositories.  He is also the creator of a young human female.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2752512/productpains.png',
                 title: 'A new home for React Native feature prioritization',
                 url: 'https://productpains.com/product/react-native/?tab=top',
                 text: 'An example of a "product pain": Github Issues - incredibly difficult to prioritize and sort through issues.\n\nAs of writing this, the React Native repo has 807 open issues and I challenge you to find the top 5 most important things for the core team to work on by sorting through those. It\'s tough, really tough.\n\nSo on ProductPains you should post feature requests like "Get Android to feature parity with iOS" or "Offload some animations from JS thread for better perf" and just use the issues for bug reports.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2818136/Screen_Shot_2015-11-21_at_12.35.04_PM.png',
                 title: 'Reactive 2015 is done!',
                 url: 'https://www.youtube.com/channel/UCBHdUnixTWymmXBIw12Y8Qg',
                 text: 'This isn\'t really news -- this was at the beginning of the month! But I\'ve been away traveling since which is incidentally also why this newsletter has been so delayed.\n\nThe following talks focused on React Native:\n\n"Under the hood of React Native" (slides here) by everyone\'s favourite Czech developer @mkonicek \n\n"Work and play in the React Native Playground" by flamenco artist @jsierles\n\n"From React web to native mobile" by annoying guy who talks too much and can\'t figure out how to use a microphone, me\n\nCheck out Alex Perry\'s summary for other highlights or nesch\'s post on Medium for a more complete list of talks.\n\nAlso -- the photo that you see for this story was hand autographed by @vjeux himself and is on its way to our contest winner @kenwheeler in New Jersey. Beautiful! The photo that is, not New Jersey.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797332/1_fevJZ3hjIB4JdvZiDuf13Q.jpeg',
                 title: 'Running by Gyroscope (Blog post)',
                 url: 'https://blog.gyrosco.pe/the-making-of-gyroscope-running-a4ad10acc0d0?x',
                 text: 'If you\'re a regular reader of this newsletter you may remember Anand from a conversation I had with him several months ago, where he spoke about his experience building a then-private app using React Native.\n\nWell the app is public now and I think it\'s one of the best React Native apps out there! If you\'re a runner, check the app out. If you\'re not a runner, consider becoming one because it\'s great fun. If you\'re not a runner and not interested in considering becoming a runner, then at the very least read this blog post or scrolling through and looking at the pretty pictures.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2744219/Chrisbig.JPG',
                 title: 'From Hackathon to React Native (Presentation video)',
                 url: 'http://www.infoq.com/presentations/react-native-facebook',
                 text: '"Christopher Chedeau walks through the challenges involved in bringing the React JavaScript UI library to iOS. Some of these are technical, but there are also interesting people management challenges since, from an iOS developer perspective, React Native is a very bad looking proposition."\n\nIf you\'re tired of seeing amateurs such as myself give presentations, check out @vjeux\'s talk from QCon NYC some months ago.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797334/3000x3000sr.jpg',
                 title: 'React Native Radio by DevChat.tv (Podcast)',
                 url: 'https://itunes.apple.com/us/podcast/react-native-radio/id1058647602?mt=2',
                 text: 'A new podcast! About React Native! And there are 7 episodes already! I\'ve listened to a couple of episodes already and I\'m very impressed. And hey, now that you\'re a runner, you should know that podcasts are a great way to pass time while you\'re out getting fit.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2774208/4OrRx7Y.png',
                 title: 'How to create Twitter exploding hearts (Blog post)',
                 url: 'http://browniefed.com/blog/2015/11/07/react-native-how-to-create-twitter-exploding-hearts/',
                 text: 'Regardless of where you stand on the Twitter star vs. heart debate, you might be curious about how to implement the heart animation. In this blog post, @browniefed teaches you that. It\'s pretty. Click through to see the animation at least.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2739989/Screen_Shot_2015-11-16_at_6.00.13_PM.png',
                 title: 'Crash Analytics and Feedback for React Native Apps (Blog post)',
                 url: 'http://blog.nparashuram.com/2015/10/crash-analytics-and-feedback-for.html',
                 text: 'Parashuram describes in this blog post / screencast how to use the react-native-cordova-plugin to integrate with HockeyApp for feedback and crash reporting.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2817959/1024x1024sr.jpg',
                 title: 'Townske - new React Native app featured on the App Store',
                 url: 'http://townske.com/app',
                 text: '"Stunning City Guides Made By Locals & Travellers" - very pretty UI and it did a fine job of identifying hip cafes and points of interest around me.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2765265/_headerimages_mobile_stories.jpg',
                 title: 'Makerist Mediathek: Launch of our first React Native mobile app and how we got there',
                 url: 'https://www.railslove.com/stories/makerist-mediathek-mobile-app-react-native',
                 text: '"Our successfull, but also rocky, road into the new territory of React Native mobile apps."\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2753258/03637ef1a5121222c8db0ed48c34e124.jpeg',
                 title: 'Easier Concurrent Programming in JavaScript with Async Functions (Blog post)',
                 url: 'http://amasad.me/2015/10/31/javascript-async-functions-for-easier-concurrent-programming/',
                 text: 'If you\'re not drinking the async/await kool aid yet, you have to read this. If you are, you have probably already read this. Great post by @amasad!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820734/1_HxELqJqwqSnlSUxhDIlH3Q.jpeg',
                 title: 'Why React Native might become the first multi-platform framework that actually works (Blog post)',
                 url: 'https://medium.com/@skvarekm/whyreact-native-might-become-the-first-multi-platform-framework-that-actually-works-ae819bf32721#.a6h8v1iva',
                 text: '"Long story short: I think Facebook has a strong motivation, resources and domain expertise to build the first framework that will actually enable us to build apps for all platforms at once."\n' } ],
            highlights:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2743799/david.jpg',
                 title: 'Add support for async bridged methods to Android',
                 url: 'https://github.com/facebook/react-native/commit/b86a6e3b44a63e92cf3a7976d2fa26c4bf412df1#commitcomment-14069903',
                 text: 'Now that you have read @amasad\'s post about async functions, you can understand why I am happy about this commit.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2747845/heder.jpg',
                 title: 'Build nested navigation context based on the hierarchy of navigators',
                 url: 'https://github.com/facebook/react-native/commit/a33fe94dace7863131a3fa8d87a8ad75bfeaff02',
                 text: '"Adds support for propagating events through nested navigators using bubbling/capturing." - a nice addition to Navigator.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797551/nick.png',
                 title: 'Replaced RCTSparseArray with NSDictionary',
                 url: 'https://github.com/facebook/react-native/commit/fa0b45c58b248bad33a339484ac83aaf757c831d',
                 text: 'I asked @nicklockwood about this commit and he said: "we only added RCTSparseArray to make it clear these were mapped by NSNumber instead of string. Generics are better though."\n\nNote that there might be breaking changes in your iOS native modules, if you use _bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, RCTSparseArray *viewRegistry) to act on your native view -- you will want to update that to the new signature with generics.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2765288/dsib.jpg',
                 title: 'Implements `blurOnSubmit`',
                 url: 'https://github.com/facebook/react-native/pull/2149',
                 text: 'By default when you submit a TextInput it will be blurred (focus will be taken away, keyboard hidden), but if you want to do something like validate an error without hiding the keyboard, or automatically focus, you\'ll probably want to set blurOnSubmit to false, otherwise the keyboard will potentially slide in and out and make for an awkward experience. \n\nAlso check out this other PR from @dsibiki where he implements onKeyPress for TextInput\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2756806/matt2.jpg',
                 title: 'Allow developers to load JavaScript bundle from any source',
                 url: 'https://github.com/facebook/react-native/commit/3a743ef228a14e07c77c5488b080413643ec9c4b#commitcomment-14145770',
                 text: 'This commit by @arbesfeld of AppHub fame makes it possible for you to load your JS bundle from any filepath (not just app assets).\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2818018/clown.jpg',
                 title: 'Add setPageWithoutAnimation to ViewPager',
                 url: 'https://github.com/facebook/react-native/commit/50b8b00768af7602c10efd6a8675fbf0b6cb691f',
                 text: 'The most interesting thing here is that this diff is a simple example of how you can call functions directly on your underlying Android Views without going through props. This is the equivalent to React Native iOS\'s _bridge.uiManager addUIBlock pattern.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797552/dmmiller.png',
                 title: 'Initial checkin for Image within Text nodes',
                 url: 'https://github.com/facebook/react-native/commit/a0268a7bfc8000b5297d2b50f81e000d1f479c76',
                 text: '"This adds the basic support for embedding an image in a TextView" - support for this was recently added to iOS and now it\'s available for Android too! Expect to see more from @dmmiller in future newsletters! Please @dmmiller add a profile picture so I don\'t have to use this weird blocky thing 😅\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797553/martin.jpg',
                 title: 'Open source IntentAndroid ',
                 url: 'https://github.com/facebook/react-native/commit/ab7b3b2dea21d57717fad68129fb2d1059f405ab',
                 text: 'One of the friendliest people you\'ll ever meet, @martinkonicek, is in the process of (among many other things, he\'s also a busy guy) open sourcing the missing native modules and views for Android, stay tuned for more.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797555/javache.jpg',
                 title: '\'Update app properties in runtime\' UIExplorer demo',
                 url: 'https://github.com/facebook/react-native/commit/f1712b0cc37d4389039002f0417900189230bc03',
                 text: 'Besides being a really cool example because there is a nested RCTRootView, this also shows how you can update your app properties (the props passed into the top level component) without reloading the entire root view, neat!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797558/pasqualeanatriello.png',
                 title: 'Custom fonts support added to Android',
                 url: 'https://github.com/facebook/react-native/commit/bfeaa6a4f531cfc18c097bc9ffb6a8dbe3ddc702',
                 text: '"It will first try to load typefaces inside the assets/fonts folder and if it doesn\'t find the right Typeface in that folder will fall back on the best matching system Typeface The supported custom fonts extensions are .ttf and .otf. For each font family the bold, italic and bold_italic variants are supported. Given a "family" font family the files in the assets/fonts folder need to be family.ttf(.otf) family_bold.ttf(.otf) family_italic.ttf(.otf) and family_bold_italic.ttf(.otf)" - awesome work @pasqualeanatriello\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797559/igor.png',
                 title: 'Implement android maxLength prop',
                 url: 'https://github.com/facebook/react-native/commit/b6340ee2b0a96a89f9c39dcf6fdda518bf382b70',
                 text: 'In order to implement a maximum length on TextInput and not experience a slight flicker (blog post coming soon on why this is the case), you need to use the maxLength prop so this restriction can be applied on the native side. Thanks @nucleartux!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2768926/546885.png',
                 title: 'Added rich text input support',
                 url: 'https://github.com/facebook/react-native/commit/7779e06a7f2720b1fd4654c7b22b576a06a44a31',
                 text: '"It is now possible to display and edit rich text inside a multiline <TextInput> by nesting a <Text> node inside it." Another commit brought to you by @nicklockwood, so busy coding that he has trained his daughter to feed him.\n\nRelated: fix text input spans, open sourced the onSelectionChange event.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797562/satya.jpg',
                 title: 'Prevent destroying activity on runtime changes',
                 url: 'https://github.com/facebook/react-native/commit/6c11d183604c31647264ecfa52c64143a78e3983',
                 text: 'You probably noticed that when you rotate your Android device it appears to restart the app if orientation lock is not enabled. This commit fixes that and some other changes. I like this @satya164 guy.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2803419/border.png',
                 title: 'Use elevation to implement shadows on Android',
                 url: 'https://github.com/facebook/react-native/pull/4180',
                 text: 'Shadows are essential to material design and an important missing piece from React Native Android right now. This pull request uses the elevation property of Android views implement shadows. This isn\'t cross-platform because there is no elevation property on iOS, so it\'s not ideal in the long-run, but it\'s certainly a welcome addition! Well played @corbt!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2803420/rocman.jpg',
                 title: 'Enable minWidth /maxWidth /minHeight / maxHeight for iOS',
                 url: 'https://github.com/facebook/react-native/pull/4183',
                 text: 'I\'ve heard more than a few requests for this feature so it\'s great to see it land. I imagine it must not have been implemented in css-layout until recently. Let\'s get it on Android now! Brought to you by @rocman, who has taught his infant son to drive so he can keep coding. I must be doing life wrong because this seems to be a trend with developers.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2804099/windows2.png',
                 title: 'Open sourced RCTPasteboard',
                 url: 'https://github.com/facebook/react-native/commit/26cb6bef15adbdee045d658e1088e27aa33550aa',
                 text: '"RCTPasteboard is a very basic API for writing strings to the pasteboard. Useful for implementing \'copy to clipboard\' functionality."\n\nRelated PSA: recently I\'ve seen the occasional rant on Facebook/Twitter about Facebook for iOS looking into your clipboard and asking if you want to share something that you had copied there. This is not FB being creepy, this is a public API and also used by apps like Instapaper. So no need for FUD around this one. As an exercise, dear reader, I encourage you to submit a PR to implement this in RCTPasteboard -- it\'s pretty easy. This message was not brought to you by Facebook\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2812176/matt.png',
                 title: 'Initial implementation of adjustsFontSizeToFit',
                 url: 'https://github.com/facebook/react-native/pull/4026',
                 text: 'I can\'t wait to see this make it in! It\'s one of the things that you can\'t really do on the web that mobile makes possible. Great effort @MattFoley\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2816315/0d9ee97e-8f9d-11e5-8a1c-9529e78d9bb9.png',
                 title: 'Is there a way to keep the keyboard open even when input loses focus/prevent blur',
                 url: 'https://github.com/facebook/react-native/issues/4229',
                 text: 'I am trying to achieve the same effect as in the native \'notes\' app. Basically, I have a text input which covers 95% of the screen and I have a small button at the button. In order to tap that butt...\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2818020/stetho.png',
                 title: 'Adds stetho interceptor to the OSS react native networking module',
                 url: 'https://github.com/facebook/react-native/commit/a7c4ed106b28c609aa10f016e84e4bf22298d65c',
                 text: 'Facebook\'s Stetho is a "debug bridge for Android applications" - this small commit adds it to the networking module so you can easily debug your network requests using Chrome inspector\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2818051/refresh.png',
                 title: 'UIRefreshControl added to ScrollView',
                 url: 'https://github.com/facebook/react-native/commit/2faf8632d350c1ecb85f20d99eabf8d48202fc82',
                 text: 'Adds a onRefreshStart prop - a function that is provided with a endRefreshing function as its only argument, to be called once you are done performing whatever refreshing work you need to do.\n' } ],
            community:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2752513/311445b0-7757-11e5-9ef7-2e76107e4bb7.png',
                 title: 'ptmt/react-native-desktop',
                 url: 'https://github.com/ptmt/react-native-desktop',
                 text: 'This is a huge and impressive effort by @ptmt to port React Native to OSX (one of the most request features on ProductPains). He is currently also writing a Discord client with it, looking forward to trying that out!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2818057/nikki.png',
                 title: 'exponentjs/react-native-image-picker-android',
                 url: 'https://github.com/exponentjs/react-native-image-picker-android',
                 text: '"A camera and gallery image picker native module for Android, giving a subset of the API of https://github.com/marcshilling/react-native-image-picker"\n\nAlso, say hello to @nikki93 - you\'ll be seeing more of him in the future as he is working with us at Exponent!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2765810/mobile-app.png',
                 title: 'benoitvallon/react-native-nw-react-calculator',
                 url: 'https://github.com/benoitvallon/react-native-nw-react-calculator',
                 text: 'This has to be the most starred React Native app on Github so it\'s probably not news to any of you, but I haven\'t mentioned it here before so I feel obliged. It\'s cross-platform natively on iOS/Android through React Native, on the desktop using the DOM "the tool formerly known as node-webkit" (NW.js) and same for the browser minus the NW.js bit.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2775743/elm-native.png',
                 title: 'ohanhi/elm-native',
                 url: 'https://github.com/ohanhi/elm-native',
                 text: '"Experimental support for writing React Native powered mobile applications in the Elm language."\n\nElm has some really neat ideas. @rtfeldman spoke about Elm at Reactive Conf and I\'d recommend checking that out too.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797298/taskrabbit.png',
                 title: 'taskrabbit/react-native-parsed-text',
                 url: 'https://github.com/taskrabbit/react-native-parsed-text',
                 text: 'It\'s very common to need to highlight certain expressions from plaintext, such as @mentions and #hashtags, then make your app take some action when they are pressed. This component brought to you by the @taskrabbit team is one way you might approach the problem.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797335/Screen_Shot_2015-11-21_at_1.23.17_PM.png',
                 title: 'fraserxu/soundredux-native',
                 url: 'https://github.com/fraserxu/soundredux-native',
                 text: 'This is an Android client for SoundCloud build in React Native "in an effort to try react-native along with redux." Great job @fraserxu!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797600/378279.jpg',
                 title: 'oblador/react-native-progress',
                 url: 'https://github.com/oblador/react-native-progress',
                 text: 'Some good looking progress indicators made by a good looking guy. Not yet available on Android because they depend on ReactNativeART.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2797299/68747470733a2f2f63646e2e61757468302e636f6d2f6d6f62696c652d73646b2d6c6f636b2f6c6f636b2d696f732d64656661756c742e706e67.png',
                 title: 'auth0/react-native-lock-ios',
                 url: 'https://github.com/auth0/react-native-lock-ios',
                 text: '"Auth0 is an authentication broker that supports social identity providers as well as enterprise identity providers such as Active Directory, LDAP, Google Apps and Salesforce."\n\nI\'ve tried Auth0 in the past and it seems like the easiest way to quickly drop authentication into your app -- and hey it\'s free up to 7,000 active users. It even supports passwordless login via sms, email, or touch id. Neato\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820617/tiny.jpg',
                 title: 'tinycreative/react-native-dropbox-chooser',
                 url: 'https://github.com/tinycreative/react-native-dropbox-chooser',
                 text: '"The Chooser is the fastest way to get files from Dropbox into your iOS app. It\'s a small framework that enables your app to access files from Dropbox without having to worry about the complexities of implementing a file browser, OAuth, or managing uploads and storage."\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820736/messenger-1.png',
                 title: 'FaridSafi/react-native-gifted-messenger',
                 url: 'https://github.com/FaridSafi/react-native-gifted-messenger',
                 text: 'Nice looking chat interface built in React Native. I\'m not convinced by the API - a bit more imperative than I like: I\'d rather pass in some list of messages and have the component do the right thing than call appendMessages, but that\'s a style preference and it\'s a new project and maybe @FaridSafi has some plans for it :)\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820800/spartan.jpg',
                 title: 'sospartan/react-native-console-panel',
                 url: 'https://github.com/sospartan/react-native-console-panel',
                 text: 'A neat little library that lets you see the console output in a view within your app, check out the repo for a gif.\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820801/ptmt.png',
                 title: 'ptmt/npm-native',
                 url: 'https://github.com/ptmt/npm-native',
                 text: 'A second mention for @ptmt in the newsletter! This tool makes it possible for you to easily install a native iOS dependencies with npm-native --install path_to_lib.xcodeproj and uninstall with npm-native --uninstall path_to_lib.xcodeproj\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820802/snackbar.png',
                 title: 'luggg/react-native-android-snackbar',
                 url: 'https://github.com/luggg/react-native-android-snackbar',
                 text: '"Snackbar provides a lightweight feedback to users about an operation, such as saving a form or deleting a message. They are similar to Toasts, but are a bit more prominent and customizable." - nice one @pedro!\n' } ],
            friends:
             [ { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820804/logo1_colored_transparent.png',
                 title: 'Appetize.io',
                 url: 'http://appetize.io',
                 text: 'I love these folks. They make rnplay.org possible and in doing so support the React Native community in a big way. They are also allowing us to use their simulators within the React Native docs! I am not paid to advertise for them, I\'m happy to advocate for products that I believe in (see: this newsletter about React Native) - so check them out if you have any need for an in-browser simulator for iOS or Android! Go and upload an app, the first 100 minutes of simulator use are free!\n' },
               { imageUrl: 'https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/2820803/goodbits-logo-for-social-scrapers.png',
                 title: 'Goodbits.io',
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
