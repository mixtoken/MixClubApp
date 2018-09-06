/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  WingBlank,
  Flex,
} from 'antd-mobile-rn';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import Theme from '../../../theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class Wallets extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      see: true,
    }
  }
  
  renderToolbar() {
    return (
      <Flex justify="between" style={styles.toolBtnView}>
        <TouchableOpacity onPress={() => {}} style={{paddingLeft: Theme.h_spacing_lg}}>
          <Flex direction="column">
            <Icon name="qrcode-scan" color="white" size={48}/>
            <Text style={styles.toolBtnText}>扫一扫</Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Flex direction="column">
            <Icon name="account-switch" color="white" size={48}/>
            <Text style={styles.toolBtnText}>转账</Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Flex direction="column">
            <Icon name="receipt" color="white" size={48}/>
            <Text style={styles.toolBtnText}>收款</Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingRight: Theme.h_spacing_lg}}>
          <Flex direction="column">
            <Icon name="settings" color="white" size={48}/>
            <Text style={styles.toolBtnText}>管理</Text>
          </Flex>
        </TouchableOpacity>
      </Flex>
    )
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Flex direction="column" align="stretch" style={styles.topViewArea}>
          <Flex justify="center">
            <Text style={styles.topViewTitle}>¥ 总资产</Text>
            <TouchableOpacity onPress={() => {this.setState({see: !this.state.see})}}>
              {
                this.state.see ? <Icon name="eye" color="white" size={18}/> : <Icon name="eye-off" color="white" size={18}/>
              }
            </TouchableOpacity>
          </Flex>
          <WingBlank>
            <Flex justify="center" style={styles.amountView}>
              <Text style={styles.amountText}>23983.32</Text>
            </Flex>
          </WingBlank>
          <View>
            {this.renderToolbar()}
          </View>
        </Flex>
        
        <WingBlank style={{marginTop: 50}}>
          <Button type="primary" onClick={() => Actions.IMPORT_EOS_WALLET()}>导入EOS钱包</Button>
        </WingBlank>
        <View style={{height: 1223}}>
          <Text>end</Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallets);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topViewArea: {
    backgroundColor: Theme.brand_primary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  topViewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5,
  },
  amountView: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  amountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  toolBtnText: {
    fontSize: Theme.font_size_caption,
    color: 'white',
    paddingTop: Theme.v_spacing_xs,
  },
  toolBtnView: {
    paddingTop: Theme.v_spacing_md,
    marginLeft: Theme.h_spacing_md,
    marginRight: Theme.h_spacing_md,
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
});