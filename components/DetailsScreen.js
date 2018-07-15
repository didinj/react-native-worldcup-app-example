import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List, ListItem, Text, Card } from 'react-native-elements';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    const matches = JSON.parse(navigation.getParam('matches', 'No matches found'));
    console.log(matches);

    return (
      <ScrollView>
        <Card style={styles.container}>
          {
            matches.map((item, key) => (
              <View key={key} style={styles.subContainer}>
                if(item.group) {
                  <View>
                    <Text h3>{item.group}</Text>
                  </View>
                }
                <View>
                  <Text h3>{item.team1.name} vs {item.team2.name}</Text>
                </View>
                <View>
                  <Text h5>{item.date}</Text>
                </View>
                <View>
                  <Text h4>{item.score1} - {item.score2}</Text>
                </View>
                if(item.goals1.length > 0) {
                  item.goals1.map((item2, key2) => (
                    <View key={key2}>
                      <Text h4>{item2.name} ({item2.minute})</Text>
                    </View>
                  ))
                }
                if(item.goals2.length > 0) {
                  item.goals2.map((item3, key3) => (
                    <View key={key3}>
                      <Text h5>{item3.name} ({item3.minute})</Text>
                    </View>
                  ))
                }
              </View>
            ))
          }
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  }
})

export default DetailsScreen;
