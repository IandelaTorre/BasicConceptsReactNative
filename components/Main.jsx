import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, FlatList, ActivityIndicator,  Image, Button, TouchableHighlight, TouchableOpacity, Pressable } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard, GameCard } from './GameCard';
import { Logo } from './Logo';
import { CircleInfoIcon } from './Icons';
import { Screen } from './Screen';

const icon = require('../assets/icon.png')
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator color={'red'} size={'large'} />
      ) : (
            <FlatList
                data={games}
                keyExtractor={game => game.slug}
                renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
            />
        )}
      {/* <Image fadeDuration={2} blurRadius={5} style={{width: 100, height: 100, resizeMode: 'center'}} source={icon} /> */}
      {/* <Image style={{width: 215, height: 294, resizeMode: 'contain'}} source={{uri: "https://superawesomevectors.com/wp-content/uploads/2024/02/morty-face-vector.jpg"}} />
      <Text style={{color: 'white'}}>Open up App.js to start working on your app!</Text> */}
      {/* en este componente no se pueden agregar estilos ya que esta pensado para ser el boton nativo de cada plataforma */}
      {/* <Button style={{color: 'red'}} title='Pulsa aquí' onPress={() => alert('Hola')}/>
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("hola")}
        style={{width: 200, height: 200, backgroundColor: 'red', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}
        >
          <Text style={{color: 'white'}}>Pulsa aquí</Text>
        </TouchableHighlight> */}
        {/* checar el componente Pressable que es el boton mas completo que van a meter a react native. */}
    </Screen>
    
  );
}


