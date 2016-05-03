import React from 'react';
import { View, Text } from 'react-native';

/**
 * Simple list view component rendering an array of items
 * given
 */
const List = ({ data }) => (
  <View>
    {data.map((item, key) => (
      <Text key={key}>{item}</Text>
    ))}
  </View>
);

List.displayName = 'ListComponent';

List.propTypes = {
  data: React.PropTypes.array.isRequired,
};

module.exports = List;
