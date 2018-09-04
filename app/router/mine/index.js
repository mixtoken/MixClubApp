/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, WingBlank } from 'antd-mobile-rn';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Mine extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        <WingBlank>
          <Button type="primary" onClick={() => Actions.LOGIN()}>我要登陆</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mine);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});