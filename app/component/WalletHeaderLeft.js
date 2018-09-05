/**
 * Created by yangyang on 2018/9/5.
 */
import React from 'react'
import {View, Text, Image} from 'react-native'
import { Flex, WingBlank } from 'antd-mobile-rn';
import {LocalImages} from '../asset'

const WalletHeaderLeft = ({walletName}) => {
  return (
    <WingBlank>
      <Flex>
        <Image source={LocalImages.common.logo} style={{width: 24, height: 24, borderWidth: 0, marginRight: 5, borderRadius: 12}}/>
        <Text style={{fontSize: 16, color: 'white'}}>{walletName}</Text>
      </Flex>
    </WingBlank>
  )
}

export default WalletHeaderLeft