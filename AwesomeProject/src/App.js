import React from 'react';
import { View, Text, TextInput} from "react-native";
import { Formik } from "formik";
import { Container } from './styles';

export default () =>{
  return (
    <Container>
      <Text>Ola Mundo</Text>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {

        }}
      >
        {(props) =>(
          <View>
            <TextInput
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
           />
           <TextInput
             multiline
             placeholder='Reviw body'
             onChangeText={props.handleChange('body')}
             value={props.values.body}
           />
          </View>
        )}
      </Formik>
    </Container>
  )
}
