/**
 * Created by Administrator on 2017/11/2.
 */
/**
 * Created by Administrator on 2017/11/2.
 */
import React from 'react';
import { View, Text, StyleSheet, Button,StatusBar,Image,Dimensions,NetInfo } from 'react-native';
import Config from '../utils/Config'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
const {width, height} = Dimensions.get('window');
export default   class Screentwo extends React.Component {
    static navigationOptions = {
        //tabBarLabel: Config.navs_txt[1],
        tabBarIcon: ({focused,tintColor}) => (<Image source={focused ?Config.icons_s[1]:Config.icons[1]}/>)
    };

    componentWillMount(){
        // this.checkUpdate();

    };

    componentDidMount(){

    }




    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>

                <Text>第二个页面</Text>
            </View>


        );
    }
}


{/*<View {...this.props} style={styles.container}>*/}
{/*<Text>Welcome</Text>*/}
{/*<Button title="Go to Login" onPress={() => Actions.login({ data: 'Custom data', title: 'Custom title' })} />*/}
{/*<Button title="Go to Register page" onPress={Actions.register} />*/}
{/*<Button title="Display Error Modal" onPress={Actions.error} />*/}
{/*<Button title="Display Lightbox" onPress={Actions.main} />*/}
{/*<Button*/}
{/*title="MessageBar alert"*/}
{/*onPress={() => MessageBarManager.showAlert({*/}
{/*title: 'Your alert title goes here',*/}
{/*message: 'Your alert message goes here',*/}
{/*alertType: 'success',*/}
{/*// See Properties section for full customization*/}
{/*// Or check `index.ios.js` or `index.android.js` for a complete example*/}
{/*})}*/}
{/*/>*/}
{/*<Button title="Go to TabBar page" onPress={Actions.tabbar} />*/}
{/*</View>*/}/**
 * Created by Administrator on 2017/11/2.
 */
