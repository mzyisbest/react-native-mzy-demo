/**
 * Created by Administrator on 2017/11/2.
 */
/**
 * Created by Administrator on 2017/11/2.
 */
import React from 'react';
import { View, Text, StyleSheet, Button,StatusBar,Image,Dimensions,NetInfo } from 'react-native';
import Config from '../utils/Config'
import {Label,Wheel} from 'teaset';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

const dataone=["中国", "美国", "日本", "韩国", "英国", "意大利", "泰国", "印度", "德国", "法国"];
const datatwo1=["河北1", "河南1", "北京1", "上海1", "南京1", "黑龙江1", "山东1", "山西1", "陕西1", "四川1"]
const datatwo2=["河北2", "河南2", "北京2", "上海2", "南京2", "黑龙江2", "山东2", "山西2", "陕西2", "四川2"]
const datatwo3=["河北3", "河南3", "北京3", "上海3", "南京3", "黑龙江3", "山东3", "山西3", "陕西3", "四川3"]
const datatwo4=["河北4", "河南4", "北京4", "上海4", "南京4", "黑龙江4", "山东4", "山西", "陕西", "四川"]
const datatwo5=["河北5", "河南5", "北京5", "上海5", "南京5", "黑龙江5", "山东5", "山西", "陕西", "四川"]
const datatwo6=["河北6", "河南6", "北京6", "上海6", "南京6", "黑龙江6", "山东6", "山西", "陕西", "四川"]
const datatwo7=["河北6", "河南6", "北京6", "上海6", "南京6", "黑龙江6", "山东6", "山西", "陕西", "四川"]
const datatwo8=["河北6", "河南6", "北京6", "上海6", "南京6", "黑龙江6", "山东6", "山西", "陕西", "四川"]
const datatwo9=["河北6", "河南6", "北京6", "上海6", "南京6", "黑龙江6", "山东6", "山西", "陕西", "四川"]
const datatwo10=["河北6", "河南6", "北京6", "上海6", "南京6", "黑龙江6", "山东6", "山西", "陕西", "四川"]
const data=[datatwo1,datatwo2,datatwo3,datatwo4,datatwo5,datatwo6,datatwo7,datatwo8,datatwo9,datatwo10]

const datap1=["石家庄1", "邢台1", "邯郸1", "廊坊1", "保定1", "衡水", "秦皇岛", "唐山", "我家", "你家"]
const datap2=["石家庄2", "邢台2", "邯郸2", "廊坊2", "保定2", "衡水", "秦皇岛", "唐山", "我家", "你家"]
const datap3=["石家庄3", "邢台3", "邯郸3", "廊坊3", "保定3", "衡水3", "秦皇岛", "唐山", "我家", "你家"]
const datap4=["石家庄4", "邢台4", "邯郸4", "廊坊4", "保定4", "衡水4", "秦皇岛", "唐山", "我家", "你家"]
const datap5=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const datap6=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const datap7=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const datap8=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const datap9=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const datap10=["石家庄5", "邢台5", "邯郸5", "廊坊5", "保定5", "衡水5", "秦皇岛", "唐山", "我家", "你家"]
const dataa=[datap1,datap2,datap3,datap4,datap5,datap6,datap7,datap8,datap9,datap10]
const {width, height} = Dimensions.get('window');
export default   class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:datatwo1,
            datap:datap1,

        }
    }


    static navigationOptions = {
     //   tabBarLabel: Config.navs_txt[0],
        tabBarIcon: ({focused,tintColor}) => (<Image source={focused ?Config.icons_s[0]:Config.icons[0]}/>)
    };

    componentWillMount(){
        // this.checkUpdate();

    };

    componentDidMount(){

    }

    _select=(index)=>{
        this.setState({
            data:data[index]
        })
    }
    _selecttwo=(index)=>{
        this.setState({
            datap:dataa[index]
        })
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Wheel
                        //可以拿到索引回调 然后根据索引去数组中拿值  然后再根据拿到的值 去刷新二级
                        onChange={(index)=>this._select(index)}
                        style={{height: 200, width: 80}}
                        holeStyle={{height:20}}
                        itemStyle={{textAlign: 'center'}}
                        items={dataone}

                    />
                    <Wheel
                        onChange={(index)=>this._selecttwo(index)}
                        style={{height: 200, width: 80}}
                        holeStyle={{height:20}}
                        itemStyle={{textAlign: 'center'}}
                        items={this.state.data}

                    />
                    <Wheel
                        style={{height: 200, width: 80}}
                        holeStyle={{height:20}}
                        itemStyle={{textAlign: 'center'}}
                        items={this.state.datap}

                    />
                </View>

               <Text>第一个页面</Text>
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
{/*</View>*/}