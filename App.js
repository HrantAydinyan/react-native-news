import React, {useState, useEffect, useCallback} from 'react';
import { View } from 'react-native';
import { gStyle } from './styles/style';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import MainStack from './navigate';

const fonts = async () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
})

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={gStyle.container} onLayout={onLayoutRootView}>
        <MainStack />
    </View>
  );
}
