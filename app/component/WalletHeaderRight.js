/**
 * Created by yangyang on 2018/9/5.
 */
import React from 'react'
import {TouchableOpacity} from 'react-native'
import { Flex, WingBlank } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'

const WalletHeaderRight = ({}) => {
  return (
    <WingBlank>
      <Flex>
        <TouchableOpacity onPress={() => Actions.drawerOpen()}>
          <Icon name="md-menu" color="white" size={24}/>
        </TouchableOpacity>
      </Flex>
    </WingBlank>
  )
}

export default WalletHeaderRight