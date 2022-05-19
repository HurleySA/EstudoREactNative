import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DeliveryImage from "./assets/delivery.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        <Image source={DeliveryImage} style={styles.image}/>
        <View style={styles.texts}>
          <Text style={styles.text}>Order your</Text>
          <Text style={styles.text}>Favorite</Text>
          <Text style={styles.textOrange}>Food</Text>
        </View>
        <Text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod deserunt nulla explicabo quis ex quae asperiores ab corrupti voluptate quasi.</Text>
      </View>
      <View style={styles.skip} >
        <Text>SKIP</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("teste")}
      >
        <Text>P</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 100,
   },
  appContainer:{
    width: 300,
  }
  ,
  texts: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom:10,
  },
  text:{
    fontSize:30
  },
  textOrange:{
    fontSize:30,
    color:'#4088FF',
    fontWeight: '600',
  }
  ,
  image: {
    width: '100%',
    height: 300,
  },
  skip:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#4088FF',
    borderRadius: 100
  }
});
