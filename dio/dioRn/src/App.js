import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/99810723?v=4';
const urlToMyGithub = 'https://github.com/Rafacribeiro';

const App = () => {

  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
     await Linking.openURL(urlToMyGithub);
    }
  }

  return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={'colorGitHub'} barStyle={'ligth-content'} />
      <View style={style.content} >
        <Image 
        accessibilityLabel='Imagem pessoal Rafaela'
        style={style.avatar} 
        source={{ uri: imageProfileGithub }} />
        <Text 
        accessibilityLabel='Nome: Rafaela Ribeiro'
        style={[style.defaultText, style.name]}>
          Rafaela Ribeiro
          </Text>
        <Text 
        accessibilityLabel='NickName: Rafacribeiro'
        style={[style.defaultText, style.nickName]}>
          Rafacribeiro
          </Text>
        <Text 
        accessibilityLabel='Descrição: Desenvolvedor(a) Web e Mobile'
        style={[style.defaultText, style.description]}>
          Desenvolvedor(a) Web e Mobile
          </Text>
          <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
          </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'colorGitHub',
    flex: 1, //expandir para a tela inteira.
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'White',
    borderWidth: 2,
  },
  defaultText: {
    color: '#C9D1D9',
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickName: {
    fontSize: 18,
    color: '#4F565E',
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4F565E',
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
