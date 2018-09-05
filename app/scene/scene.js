/**
 * Created by yangyang on 2018/8/27.
 */
import React, {Component} from 'react'
import {StyleSheet, AsyncStorage, Image, BackHandler, ToastAndroid, View} from 'react-native'
import {connect} from 'react-redux'
import {Actions, Scene, Modal, Router, Stack, Lightbox} from 'react-native-router-flux'
import {LocalImages} from '../asset'
import Theme from '../../theme'
import WalletHeaderLeft from '../component/WalletHeaderLeft'
import Mine from '../router/mine'
import Discovery from '../router/discovery'
import Wallets, {ImportEosWallet} from '../router/wallet'
import Login from '../router/login'

const TabbarIcon = ({ title, focused }) => {
  let image;
  
  switch (title) {
    case '钱包':
      image = focused ? LocalImages.navbar.wallet_selected : LocalImages.navbar.wallet_unselected;
      break;
  
    case '发现':
      image = focused ? LocalImages.navbar.discover_selected : LocalImages.navbar.discover_unselected;
      break;
    
    case '我的':
      image = focused ? LocalImages.navbar.mine_selected : LocalImages.navbar.mine_unselected;
      break;
  }
  
  return ( <Image style={styles.iconStyle} source={image} /> );
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
            <Scene key="HOME" tabs tabBarPosition="bottom" hideNavBar activeTintColor={Theme.brand_primary}>
              <Scene key="WALLET" title="钱包" icon={TabbarIcon} component={Wallets} initial={true}
                     headerMode="float" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
                     renderTitle={<View/>} renderLeftButton={<WalletHeaderLeft walletName="WalletName"/>}
              />
              <Scene key="DISCOVERY" title="发现" icon={TabbarIcon} hideNavBar component={Discovery}/>
              <Scene key="MINE" title="我的" icon={TabbarIcon} component={Mine}
                     headerMode="float" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}
              />
            </Scene>
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
    backgroundColor: '#F5F5F9',
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
  }
})

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);