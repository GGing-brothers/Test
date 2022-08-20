import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.main_box}>
      <View style={styles.main_login_box}>
        <Text style={styles.main_logo}>GWH</Text>
        <Text style={styles.login_text}>아이디</Text>
        <TextInput style={styles.input_box} />
        <Text style={styles.signup_text}>비밀번호</Text>
        <TextInput style={styles.input_box} />
        <Button style={styles.login_button} />
      </View>
      <View style={styles.isMember}>
        <p>회원이 아니신가요?</p>
        <span>회원가입하기</span>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    
    main_box: {
      width: '80%',
      height: '60%',
    //   backgroundColor: 'lightblue',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    main_login_box: {
      width: '100%',
      // height: '60%',
      flex: 1,
      alignItems: 'start',
      justifyContent: 'center',
      // backgroundColor: 'red',
    },
    main_logo: {
        position: 'absolute',
        left: '32%',
        top: '20%',
        fontSize: '30px',
        fontWeight: 'bold',
    },
    signup_text: {
        marginLeft: '3%',
    },
    login_text: {
        marginLeft: '3%',
    },
    input_box: {
        width: '100%',
        height: '7%',
        // backgroundColor: 'blue',
        marginTop: '1%',
        marginBottom: '5%',
        borderBottomWidth: '2',
        borderRadius: '10',
        borderBottomColor: 'ABC9FF'
    },
    login_button: {
      width: '100%',
      height: '8%',
      backgroundColor: 'ABC9FF',
      color: 'white',
    },
    isMember: {
      width: '60%',
      height: '7%',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default Login