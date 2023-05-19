import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {BackSvg, ManWithFishSvg} from '../assets/svg';
import {colors, fonts} from '../constants';
import {moderateScale} from 'react-native-size-matters';
import {Button} from '../components';

const Trial = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/Rectangle.png')}
      resizeMode="stretch"
      style={{flex: 1, justifyContent: 'center'}}>
     
      
      <TouchableOpacity style={styles.fishIcon}
      >
        <ManWithFishSvg width={200} height={290} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={{...styles.text}}>14 Days{'\n'}Free Trial</Text>
        <Text
          style={{
            ...styles.text,
            ...fonts.trial_head_sub,
            marginLeft: moderateScale(5),
            marginVertical: moderateScale(10),
          }}>
          Our Subscriptions
        </Text>
        <Text style={{...styles.text,...fonts.subHead}}>$499.00 / Year</Text>
        <Button
        marginTop={moderateScale(20)}
          onPress={() => {
            navigation.navigate('Subscription');
          }}
          text={'Buy Now'}
        />
        <Text style={{...styles.text,...fonts.trial_head_sub}}>Start Your Free Trial</Text>
        
        <Text style={{...styles.text,...fonts.text,marginVertical:moderateScale(20)}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt.Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Text>
        <Button
        marginBottom={moderateScale(5)}
        marginTop={moderateScale(5)}
          onPress={() => {
            navigation.navigate('Home');
          }}
          text={'Start'}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: moderateScale(20),
    width: moderateScale(323),
    marginTop:moderateScale(30)
  },
  icon: {
    position: 'absolute',
    left: moderateScale(15),
    top: moderateScale(15),
  },
  fishIcon:{
    position: 'absolute',
    right: moderateScale(0),
    top: moderateScale(45),
  },
  text: {
    ...fonts.trial_head,
    color: colors.white,
    width: moderateScale(290),
  },
 
});
export default Trial;
