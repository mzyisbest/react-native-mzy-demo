/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import {NavigationComponent} from 'react-native-material-bottom-navigation'
import MainScreen from './src/screen/MainScreen'
import ScreenTwo from './src/screen/ScreenTwo'
import ScreenThree from './src/screen/ScreenThree'
import ScreenFour from './src/screen/ScreenFour'
import Lanuch from './src/component/Lanuch'
const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});
export default class App extends Component<{}> {
  render() {
    return (
        <Router
            createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
        >
          <Scene key="root">
            <Scene key="launch" hideNavBar component={Lanuch}  initial />
              {/*下部导航开始*/}
            <Scene
                key="tabbar"
                duration={0}
                tabBarPosition={"bottom"}
                tabBarComponent={NavigationComponent}
                hideNavBar   //是否显示导航栏
                title="tabbar"
                wrap={false}
                tabs={true}
                hideTabBar={false}
                swipeEnabled={false}
                lazy={true}
            >
              <Scene
                  key="screenone"
                  component={MainScreen}
                  icon_id={0}
                  hideNavBar
                />
              <Scene
                  key="screentwo"
                  hideNavBar
                  icon_id={1}
                  component={ScreenTwo}
              />
              <Scene  key="screenthree"
                      hideNavBar
                      icon_id={2}
                      component={ScreenThree}
              />
              <Scene  key="screenfour"
                      hideNavBar
                      icon_id={3}
                      component={ScreenFour}
              />
            </Scene>
              {/*下部导航结束*/}
          </Scene>


        </Router>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});
