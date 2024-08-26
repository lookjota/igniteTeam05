
import { ThemeProvider } from 'styled-components';

import { Groups } from '../screens/Groups';
import theme from '../theme/index';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';

export default function TabOneScreen() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups/> : <ActivityIndicator size={50}/>}
    </ThemeProvider>
  );
}

