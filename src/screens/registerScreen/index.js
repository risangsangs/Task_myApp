import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from './styles';

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onPressShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const IconShowPassword = () => (
    <TouchableOpacity onPress={onPressShowPassword}>
      {showPassword ? <FontAwesome name="eye-slash" size={16} />
        : <FontAwesome name="eye" size={16} />}
    </TouchableOpacity>
  );

  const IconShowConfirmPassword = () => (
    <TouchableOpacity onPress={onPressShowConfirmPassword}>
      {showConfirmPassword ? <FontAwesome name="eye-slash" size={16} />
        : <FontAwesome name="eye" size={16} />}
    </TouchableOpacity>
  );

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleHomeScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* header */}
        <View>
          <Image source={require('../../assets/images/ts.png')} style={styles.headerLogoTs} />
          <Text style={styles.HeaderFont}>Register to start exploring</Text>
        </View>

        {/* body-form */}
        <View>
          <View style={{ gap: 15 }}>
            <TextInput placeholder='Username' style={[styles.formStyle, styles.extraStyle]} />
            <TextInput placeholder='Email' style={[styles.formStyle, styles.extraStyle]} />
            <View style={styles.inputPasswordContainer}>
              <TextInput placeholder='Password' secureTextEntry={showPassword} style={styles.extraStyle} />
              <IconShowPassword showPassword={showPassword} onPressShowPassword={onPressShowPassword} />
            </View>
            <View style={styles.inputPasswordContainer}>
              <TextInput placeholder='Confirm password' secureTextEntry={showPassword} style={styles.extraStyle} />
              <IconShowConfirmPassword showConfirmPassword={showConfirmPassword} onPressShowConfirmPassword={onPressShowConfirmPassword} />
            </View>
          </View>
        </View>

        {/* body-form */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.btnLogin} onPress={handleHomeScreen}>
            <Text style={styles.txtBtnLogin}>
            Register
            </Text>
          </TouchableOpacity>
          <View style={styles.separatorStyle}>
            <Image source={require('../../assets/images/stroke.png')} style={{ width: 100 }}/>
            <Text style={styles.separatorFont}>Or Register with</Text>
            <Image source={require('../../assets/images/stroke.png')} style={{ width: 100 }}/>
          </View>
          <View style={styles.btnSecondaryContainer}>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/images/facebook.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/images/google.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/images/cib_apple.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.confirmContainer}>
            <Text style={styles.subHeaderFont}>Already have an account?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.confirmStyle}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen;