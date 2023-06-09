import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppleSvg,
  BackSvg,
  BubbleSvg,
  EmailSvg,
  GoogleSvg,
  PasswordSvg,
} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button, CustomInput, MainHeading, } from '../components';
import { screenHeight } from '../constants/screenResolution';
import WavesAnimated from '../components/WavesAnimated';

const ForgotPassword = ({navigation}) => {
  const [email, setemail] = useState(null);
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/backgroundPlain.png')}
        resizeMode='stretch'
        style={{flex: 1, alignItems: 'center',height:screenHeight}}>
          <WavesAnimated/>
        <TouchableOpacity style={styles.icon}
         onPress={() => {
          navigation.goBack()
        }}>
          <BackSvg width={20} height={20} />
        </TouchableOpacity>
        <MainHeading
          name={'Forget Password'}
          marginTop={moderateScale(60)}
          marginBottom={moderateScale(30)}
        />

        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderColor: colors.white,
              alignItems: 'center',
              marginTop: moderateScale(20),
              
            }}>
              <EmailSvg width={15} height={15} />
            <CustomInput
              paddingLeft={moderateScale(10)}
              placeholder={'Email Address'}
              value={email}
              setValue={e => setemail(e)}
              keyboardType={'email-address'}
            />
          </View>
     
        <Button
          onPress={() => {
            navigation.navigate('ResetPassword')
          }}
          text={'Send'}
          width={moderateScale(95)}
        />
   
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  icon: {
    left: moderateScale(15),
    alignSelf:'flex-start',
    padding:moderateScale(10),
    top: Platform.OS === 'ios' ? moderateScale(40) :  moderateScale(15),
  },
  text: {
    ...fonts.placeHolder2,
    color: colors.black,
  },
  textBottom: {
    ...fonts.sub_head_small,
    color: colors.white,
  },
  socialLogins: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: moderateScale(15),
    // marginTop:moderateScale(15)
  },
});
export default ForgotPassword;
