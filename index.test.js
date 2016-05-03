const React = require('react');
const { AppRegistry, SnapshotViewIOS, NativeModules } = require('react-native');

/**
 * Require here every single component you would like
 * to test
 *
 * Note: We cannot test the main component our AppDelegate refers to,
 * that's why we specify App container here separately. Refering to `SampleApp`
 * in tests will result in an error as there will be two bridge instances
 * refering to the same component.
 */
const TO_TEST = [
  require('./app/components/List'),
  require('./app/containers/App'),
];

/**
 * Register every test component
 */
TO_TEST.forEach(Component => {

  /**
   * We have to wrap every component in a `SnapshotViewIOS`
   * so that our test suite knows when the screen has been captured
   * and suite is finished.
   *
   * We also pass `initialProps` down so we can manipulate the
   * component apperance from the test suite
   */
  const Snapshotter = (props) => (
    <SnapshotViewIOS>
      <Component {...props} />
    </SnapshotViewIOS>
  );

  /**
   * Register every component by its displayName we will refer from the test
   * suite
   */
  AppRegistry.registerComponent(Component.displayName, () => Snapshotter);
});
