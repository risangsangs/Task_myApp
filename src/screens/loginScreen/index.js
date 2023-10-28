import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { Component, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from './styles';

const IconShowPassword = (props) => (
  <TouchableOpacity onPress={props.onPressShowPassword}>
    {props.showPassword ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}
  </TouchableOpacity>
);

const LoginScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleHomeScreen = () => {
    navigation.navigate("Home");
  };

  const [showPassword, setShowPassword] = useState(true);

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* header */}
        <View>
          <Image source={require("../../assets/images/ts.png")} style={styles.logoTs} />
          <View style={styles.headerTitle}>
            <Text style={styles.headerFont}>
              Welcome back! We've missed your presence here
            </Text>
          </View>
        </View>

        {/* body-form */}
        <View style={{ gap: 15 }}>
          <TextInput placeholder='Enter your email' style={[styles.formStyle, styles.extraStyle]} />
          <View style={styles.inputPasswordContainer}>
            <TextInput placeholder='Enter your password' secureTextEntry={showPassword} style={styles.extraStyle} />
            <IconShowPassword showPassword={showPassword} onPressShowPassword={onPressShowPassword} />
          </View>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Text style={styles.subHeaderFont}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.btnLogin} onPress={handleHomeScreen}>
            <Text style={styles.txtBtnLogin}>
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.separatorStyle}>
            <Image source={require('../../assets/images/stroke.png')} style={{ width: 109 }}/>
            <Text style={styles.separatorFont}>Or Login with</Text>
            <Image source={require('../../assets/images/stroke.png')} style={{ width: 109 }}/>
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
            <Text style={styles.subHeaderFont}>Don’t have an account?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.confirmStyle}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;