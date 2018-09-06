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
  Image,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import { Carousel, WingBlank } from 'antd-mobile-rn';

const PAGE_WIDTH = Dimensions.get('window').width

class Discovery extends PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <ScrollView>
        <Carousel autoplay infinite>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Image source={{uri: 'http://images.lvyii.com/111.jpeg'}} style={{width: PAGE_WIDTH, height: 250}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Image source={{uri: 'http://images.lvyii.com/222.jpeg'}} style={{width: PAGE_WIDTH, height: 250}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Image source={{uri: 'http://images.lvyii.com/333.jpeg'}} style={{width: PAGE_WIDTH, height: 250}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{flex: 1}}>
            <Image source={{uri: 'http://images.lvyii.com/444.jpeg'}} style={{width: PAGE_WIDTH, height: 250}}/>
          </TouchableOpacity>
        </Carousel>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});