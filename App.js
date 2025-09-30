import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Categoria from './Componentes/Categoria';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Productos from './Componentes/Productos'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor_buscador}>
        <View style={styles.buscador}>
          <FontAwesome name="search" size={20} color="black" />
          <TextInput
            style={styles.textoBuscador}
            placeholder="Buscar"
            placeholderTextColor="#753c3cff"
          />
        </View>
      </View>
      <View style={styles.contenedorCategoria}>
        <ScrollView style={styles.iconos} horizontal showsHorizontalScrollIndicator={false}>
          <Categoria nombre="book" texto="Book" />
          <Categoria nombre="baby-carriage" texto="Baby" />
          <Categoria nombre="bicycle" texto="Sport" />
          <Categoria nombre="gamepad" texto="Game" />
          <Categoria nombre="camera" texto="Camera" />
          <Categoria nombre="laptop" texto="laptop" />
          <Categoria nombre="accusoft" texto="accusoft" />
          <Categoria nombre="apple" texto="aple" />
          <Categoria nombre="basketball-ball" texto="ball" />
        </ScrollView>
      </View>
      <View>
        <Text style={styles.titulo}>Views</Text>
        <ScrollView>
          <View style={styles.container_tarjetas}>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/Auriculares.jpeg')}
                precio="10"
                descripcion="Auriculares inalambricos"
                hora_mes="5 hours ago"
                fondoColor="rgb(125, 183, 219)"
                cora="heart"
              />
            </View>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/Cpu.webp')}
                precio="80"
                descripcion="CPU con RGB"
                hora_mes="8 hours ago"
                fondoColor="rgb(163, 227, 255)"
                cora="heart"
              />
            </View>
          </View>

          <View style={styles.container_tarjetas}>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/laptop.png')}
                precio="10"
                descripcion="Lenovo"
                hora_mes="10 hours ago"
                fondoColor="rgba(73, 49, 52, 1)"
                cora="heart"
              />
            </View>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/tenis.webp')}
                precio="12"
                descripcion="Zapatos deportivos"
                hora_mes="14 hours ago"
                fondoColor="rgb(165, 143, 255)"
                cora="heart"
              />
            </View>
          </View>

          <View style={styles.container_tarjetas}>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/Camara.jpg')}
                precio="12"
                descripcion="Camera-Video & photo"
                hora_mes="17 hours ago"
                fondoColor="rgba(74, 75, 5, 1)"
                cora="heart"
              />
            </View>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/games.avif')}
                precio="50"
                descripcion="Juego de Mario"
                hora_mes="20 hours ago"
                fondoColor="rgb(255, 236, 166)"
                cora="heart"
              />
            </View>
          </View>

          <View style={styles.container_tarjetas}>
            <View style={styles.tarjeta}>
              <Productos
                image={require('./IMAGENES/balon.jpg')}
                precio="16"
                descripcion="Balon para futtboll campo"
                hora_mes="14 hours ago"
                fondoColor="rgba(44, 187, 115, 1)"
                cora="heart"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f5ff',
    alignItems: 'column',
    justifyContent: 'flex-start',
  },
  contenedor_buscador: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buscador: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(245, 245, 255)',
    marginTop: 60,
    padding: 15,
    borderRadius: 10,
  },
  textoBuscador: {
    flex: 1,
    height: 45,
    color: '#529c6bff',
    fontSize: 15,
    paddingLeft: 15,
  },
  contenedorCategoria: {
    height: 85,
    backgroundColor: "#ffffffff",
  },
  iconos: {
    margin: 10,
  },
  titulo: {
    marginLeft: 19,
    fontSize: 28
  },
  container_tarjetas: {
    marginTop: 14,
    flexDirection: 'row',
  },
  // ...
  tarjeta: {
    marginLeft: 16,
    marginRight: 4
  },
});