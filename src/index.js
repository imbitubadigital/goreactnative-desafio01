import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Post from './components/Post';

export default class App extends Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Aprendendo Node',
        subtitle: 'Diego Schel Fernandes',
        description:
          'Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.',
      },
      {
        id: 2,
        title: 'Curso de Reactjs',
        subtitle: 'Tony Fernandes',
        description:
          'Where does it come from Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
      },
      {
        id: 3,
        title: 'Estudando React Ntive',
        subtitle: 'Antonio Joaquim Fernandes',
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {data.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EE7777',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
