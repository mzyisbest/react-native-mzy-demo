/**
 * Created by Administrator on 2017/11/2.
 */
import React from 'react';
import { View, Text, StyleSheet, Button,StatusBar,Image,Dimensions,NetInfo } from 'react-native';
import { Actions,ActionConst } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
const {width, height} = Dimensions.get('window');
class Launch extends React.Component {


    componentWillMount(){
        // this.checkUpdate();

    };

    componentDidMount(){

        setTimeout(()=>{

            Actions.tabbar({type: ActionConst.RESET});
        },2000);
    }




    render() {
        return (
            <View >
                <StatusBar backgroundColor="transparent"
                           barStyle="dark-content"
                           translucent={true}
                           hidden={true}/>
                <Image source={require('./../img/splash.png')} style={{width:width, height:height}}
                       resizeMode="stretch"/>
            </View>


        );
    }
}

export default Launch;
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
{/*</View>*/}