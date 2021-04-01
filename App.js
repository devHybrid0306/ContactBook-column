import React from 'react';
import ReactNative from 'react-native';
import 'react-native-gesture-handler';

import RootStack from 'navigation/RootStack';

ReactNative.LogBox.ignoreAllLogs(true);

const App = () => {
  return <RootStack />;
};

export default App;
