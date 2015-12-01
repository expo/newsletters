/**
 * A trivial example of a React Native application
 *
 * @providesModule Newsletter
 *
 */
let React = require('react-native');

let {
  AppRegistry,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

let Dimensions = require('Dimensions');
let Link = require('react-native-link');
let StatusBarIOS = require('StatusBarIOS');

global.URLHandler = require('react-native-url-handler');

let windowDimensions = Dimensions.get('window');

let newsletterStyles = StyleSheet.create({
  issue: {
    color: '#87828A',
    fontSize: 14,
    paddingLeft: 8,
    textAlign: 'center',
  },
  sectionText: {
    color: '#3D4447',
    fontSize: 20,
    textAlign: 'center',
  },
  section: {
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: 'white',
  },
  image: {
    width: 270,
    height: 152,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 4,
  },
  title: {
    color: '#1FB1D0',
    fontSize: 17,
    paddingVertical: 3,
  },
  text: {
    color: '#5e6268',
    fontSize: 17,
  },
  story: {
    paddingHorizontal: 8,
    marginBottom: 12,
    marginTop: 15,
  },
  storyHighlight: {
    //underlayColor: '#C0D7E3',
    //activeOpacity: 0.2,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#dddddd',
  },
  statusBar: {
    //backgroundColor: 'rgba(2, 60, 105, 0.98)',
    backgroundColor: '#C0D7E3',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  preamble: {
    fontSize: 14,
    color: '#666666',
    paddingHorizontal: 8,
  },

});

let NewsletterIssue = React.createClass({
  getInitialState() {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    let sectionIds = [];
    for (let i = 0; i < this.props.sections.length; i++) {
      sectionIds.push(this.props.sections[i][0]);
    }
    return {
      dataSource: ds.cloneWithRowsAndSections((this.props.stories || []), sectionIds),
    };
  },

  _sectionTitle(sectionId) {
    for (let i = 0; i < this.props.sections.length; i++) {
      let section = this.props.sections[i];
      if (section[0] === sectionId) {
        return section[1];
      }
    }
  },

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderSectionHeader}
        renderHeader={this._renderHeader}
        style={[/*this.props.style, */{
          contentOffset: 15,
        }]}
        automaticallyAdjustContentInsets={false}
      />
    );
  },

  _renderHeader() {
    let issueText = this.props.issueTitle || ('Issue #' + this.props.issueNumber);
    let issueDate = this.props.issueDate;
    let compiledBy = this.props.compiledBy || " by @notbrent (Brent Vatne)";
    let headerImageUrl = this.props.headerImageUrl || 'https://goodbits-production.s3.amazonaws.com/uploads/newsletter_settings/logo/981/e0ca1ad4-f9b1-459f-b782-28c4fc63a7e3.png';
    if (issueDate) {
      issueText += ", " + issueDate;
    }
    // if (compiledBy) {
    //   issueText += ", " + compiledBy;
    // }
    let width = windowDimensions.width;
    let height = Math.floor((96 / 570) * width);
    return (
      <View style={{
          paddingTop: 20,
      }}>
        <Image source={{
            uri: headerImageUrl,
        }} style={{
          width,
          height,
        }}/>
        <Text style={newsletterStyles.issue}>
          {issueText}
          <Text>{compiledBy}</Text>
        </Text>
        {this.props.webUrl && (<Link source={{uri: this.props.webUrl}} underlayColor='#C0D7E3' activeOpacity={0.618}><Text style={[newsletterStyles.issue, {fontSize: 17, color: '#C0D7E3', paddingVertical: 6, textAlign: 'center',}]}>Also available on the web</Text></Link>) || null}
        {this.props.preamble && (
          <Text style={[newsletterStyles.preamble, this.props.preambleStyle]}>{this.props.preamble}</Text>
        ) || null}
      </View>
    );
  },

  _renderSectionHeader(sectionData, sectionID) {

    let sectionTitle = this._sectionTitle(sectionID) || '';

    return (
      <NewsletterSectionHeader {...sectionData}

        sectionID={sectionID}
        sectionTitle={sectionTitle}
      />
    );

  },

  _renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <NewsletterStory {...rowData} style={newsletterStyles.story} sectionID={sectionID} rowID={rowID} />
        <Separator />
      </View>
        );
  },


});

let Separator = React.createClass({
  render() {
    return (<View style={[newsletterStyles.separator, this.props.style]}></View>);
  }
});

let NewsletterSectionHeader = React.createClass({
  render() {
    let title = this.props.sectionTitle || this.props.children;
    return (
      <View style={[newsletterStyles.section, this.props.style, {
          paddingTop: 22,
          //backgroundColor: '#C0D7E3',
      }]}>
        <Text style={[newsletterStyles.sectionText, this.props.style,]}>{('' + title).toUpperCase()}</Text>
        <View style={{
            height: 3,
            backgroundColor: '#C0D7E3',
            width: 120,
            alignSelf: 'center',
            //transform: [{translateY: -6,}],
        }} />
      <View style={{height: 2, backgroundColor: 'transparent',}} />
      </View>
    );
  },
});

let NewsletterStory = React.createClass({
  render() {
    return (
      this.props.render && this.props.render(this) || (
        <Link underlayColor='#C0D7E3' activeOpacity={0.618} source={{uri: this.props.url}}>
        { this.props.renderContent && this.props.renderContent(this) || (
            <View style={this.props.style}>
              { this.props.renderImage && this.props.renderImage(this) || (
                <Image source={{
                    uri: this.props.imageUrl,
                  }}
                  style={newsletterStyles.image}
                  />
                )
              }
              <Text style={newsletterStyles.title}>{this.props.title}</Text>
              { this.props.renderText && this.props.renderText(this) || (
                <Text style={newsletterStyles.text}>{this.props.text}</Text>
                )
              }
            </View>
          )
        }
        </Link>
      )
    );
  },
});

module.exports = {
  styles: newsletterStyles,
  NewsletterIssue,
  NewsletterStory,
  NewsletterSectionHeader,
};
