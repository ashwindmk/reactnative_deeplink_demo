/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Linking,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const TAG = "deeplink-demo";

  useEffect(() => {
    Linking.getInitialURL()
      .then((url) => {
        if (url) {
          console.log(TAG + ': Initial URL: ' + url);

          // You can also use any third-party library to parse URLs
          var regex = /[?&]([^=#]+)=([^&#]*)/g;
          var params = {};
          var match;
          while (match = regex.exec(url)) {
            params[match[1]] = match[2];
          }
          console.log(TAG + ': URL params: ' + JSON.stringify(params))

          const screen = params['screen'];
          if (screen) {
            // Navigate to the screen
            console.log(TAG + ': URL params screen: ' + screen);
          }
        }
      })
      .catch((err) => {
        console.error(TAG + ': An error occurred while getting initial URL' + err);
      });
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Deeplink Demo</Text>
          <Text style={styles.sectionDescription} selectable={true}>
            Handled Link: <Text style={styles.highlight} selectable={true}>https://www.yourapp.test</Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  }
});

export default App;
