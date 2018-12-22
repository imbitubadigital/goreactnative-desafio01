import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'arial',
  },
  tagline: {
    fontSize: 12,
    fontFamily: 'arial',
    color: '#999',
    marginBottom: 10,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  description: {
    fontSize: 12,
    fontFamily: 'arial',
    color: '#999',
    lineHeight: 20,
  },
});

const Post = ({ post }) => (
  <View style={styles.box}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.tagline}>{post.subtitle}</Text>

    <Text style={styles.description}>{post.description}</Text>
  </View>
);

export default Post;
