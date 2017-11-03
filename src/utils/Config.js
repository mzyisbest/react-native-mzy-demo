/**
 * Created by Administrator on 2017/11/2.
 */
/**
 * Created by aj on 2016/12/18.
 */
import {View, StyleSheet, ListView, Image,TouchableOpacity,BackAndroid,PixelRatio} from "react-native";

const styles = StyleSheet.create({
    horizontal_layout:{
        flex:1,
        flexDirection:"row",
    },container: {
        flex: 1,backgroundColor: '#efeff4',
    },
});
export default class Config{

    static icons=[require('./../img/nav_home_n.png'),require('./../img/nav_seach_n.png'),require('./../img/nav_fav_n.png'),require('./../img/nav_account_n.png')];
    static icons_s=[require('./../img/nav_home_s.png'),require('./../img/nav_seach_s.png'),require('./../img/nav_fav_s.png'),require('./../img/nav_account_s.png')];
    static navs_txt=["首页","搜索","收藏","我的"]




}


