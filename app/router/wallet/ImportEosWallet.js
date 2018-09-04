/**
 * Created by yangyang on 2018/8/28.
 */
import React, {PureComponent} from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'

class ImportEosWallet extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View>
        <Text>ImportEosWallet</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ImportEosWallet);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});