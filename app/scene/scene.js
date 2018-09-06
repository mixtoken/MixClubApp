/**
 * Created by yangyang on 2018/8/27.
 */
import React, {Component} from 'react'
import {StyleSheet, AsyncStorage, Image, BackHandler, ToastAndroid, View} from 'react-native'
import {connect} from 'react-redux'
import {Actions, Scene, Modal, Router, Stack, Drawer} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Theme from '../../theme'
import WalletHeaderLeft from '../component/WalletHeaderLeft'
import WalletHeaderRight from '../component/WalletHeaderRight'
import Mine from '../router/mine'
import Discovery from '../router/discovery'
import Wallets, {ImportEosWallet} from '../router/wallet'
import Login from '../router/login'
import WalletChangeDrawer from '../component/WalletChangeDrawer'

const TabbarIcon = ({ title, focused }) => {
  let tabbarIcon;
  
  switch (title) {
    case '钱包':
      tabbarIcon = focused ? <Icon name="wallet" color={Theme.brand_primary} size={28}/> : <Icon name="wallet" color='#888' size={28}/>
      break;
  
    case '发现':
      tabbarIcon = focused ? <Icon name="view-dashboard" color={Theme.brand_primary} size={28}/> : <Icon name="view-dashboard" color='#888' size={28}/>
      break;
    
    case '我的':
      tabbarIcon = focused ? <Icon name="account-box" color={Theme.brand_primary} size={28}/> : <Icon name="account-box" color='#888' size={28}/>
      break;
  }
  
  return tabbarIcon;
}

class Scenes extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.onBackAndroid);
  }
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid);
  }
  
  onBackAndroid = () => {
    if (Actions.state.index == 0) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        BackHandler.exitApp()
        return false
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
    Actions.pop()
    return true
  }
  
  render() {
    return (
      <Router backAndroidHandler={this.onBackAndroid} sceneStyle={styles.sceneStyle}>
        <Stack key="root" hideNavBar>
          <Modal>
            <Drawer key="WALLET_CHANGE_DRAWER" drawerPosition="right" hideNavBar contentComponent={WalletChangeDrawer}>
              <Scene key="HOME" tabs tabBarPosition="bottom" hideNavBar activeTintColor={Theme.brand_primary}
                     tabBarStyle={styles.tabbarStyle} lazy={true}
              >
                <Scene key="WALLET" title="钱包" icon={TabbarIcon} component={Wallets} initial={true}
                       headerMode="float" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
                       renderTitle={<View/>}
                       renderLeftButton={WalletHeaderLeft({walletName:"WalletName"})}
                       renderRightButton={WalletHeaderRight}
                />
                <Scene key="DISCOVERY" title="发现" icon={TabbarIcon} hideNavBar component={Discovery}/>
                <Scene key="MINE" title="我的" icon={TabbarIcon} component={Mine}
                       headerMode="float" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
                       renderRightButton={<View/>}
                />
              </Scene>
            </Drawer>
            <Scene key="LOGIN" title="登陆" component={Login} />
          </Modal>
          <Scene key="IMPORT_EOS_WALLET" title="导入EOS钱包" hideNavBar={false} component={ImportEosWallet}/>
        </Stack>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 24,
    height: 24,
  },
  sceneStyle: {
    flex: 1,
    backgroundColor: Theme.fill_body,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  },
  navigationBarStyle: {
    backgroundColor: Theme.brand_primary,
    borderBottomWidth: 0,
  },
  titleStyle: {
    color: '#fff',
  },
  tabbarStyle: {
    backgroundColor: Theme.tab_bar_fill,
    borderTopColor: Theme.border_color_base,
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);