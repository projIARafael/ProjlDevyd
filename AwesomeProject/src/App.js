import React from 'react';
import { View, Text, TextInput} from "react-native";
import { Formik} from "formik"
import Container from './styles';

export default () =>{
  return (
    <Container>
      <Text>Ola Mundo</Text>
      <Formik
        initialValues={{ title: '', body: '', rating: ''}}
        onSubmit={(values) => {

        }}
      
      >
        {(props) => (
          <View>
            <TextInput />
          </View>
        )}
      </Formik>
    </Container>
  )
}
