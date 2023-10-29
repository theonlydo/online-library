import React from 'react';
import NAVIGATIONS from '~constants/navigation';
import {NavigationContainer, createNativeStackNavigator} from '~libraries';
import {BookListScreen, DashboardScreen} from '~screens';

const Stack = createNativeStackNavigator();

/**
 * ===================================================================================================
 * ROOT NAVIGATION
 * ===================================================================================================
 */

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          animation: 'slide_from_right',
          animationDuration: 200,
        })}>
        <Stack.Screen
          name={NAVIGATIONS.DASHBOARD}
          component={DashboardScreen}
        />
        <Stack.Screen name={NAVIGATIONS.BOOK_LIST} component={BookListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
