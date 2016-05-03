const React = require('react');
const { View, Text, StyleSheet } = require('react-native');

const List = require('../components/List');

class App extends React.Component {
  static displayName = 'AppContainer';
  static propTypes = {
    data: React.PropTypes.array,
  };
  static defaultProps = {
    data: ['Item #1', 'Item #2', 'Item #3', 'Item #4'],
  };

  render() {
    const heading = this.props.data.length > 0
      ? 'Welcome to React Native!'
      : 'No items to render';

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {heading}
        </Text>
        <List data={this.props.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = App;
