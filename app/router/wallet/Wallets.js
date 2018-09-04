/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, WingBlank } from 'antd-mobile-rn';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Wallets extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        <View>
          <Text>Wallets</Text>
        </View>
        <WingBlank>
          <Button type="primary" onClick={() => Actions.IMPORT_EOS_WALLET()}>导入EOS钱包</Button>
        </WingBlank>
      </View>
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
});