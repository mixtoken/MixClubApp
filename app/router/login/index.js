/**
 * Created by yangyang on 2018/8/27.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class Login extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});