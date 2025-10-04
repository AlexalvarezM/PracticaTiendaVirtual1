import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, FlatList } from 'react-native';
import Categoria from './Componentes/Categoria';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Productos from './Componentes/Productos'

export default function App() {
  // Arreglo de objetos para productos 
  const productos = [
    { 
      id: 1,
      image: require('./IMAGENES/Auriculares.jpeg'),
      precio: "10",
      descripcion: "Auriculares inalambricos",
      hora_mes: "5 hours ago",
      fondoColor: "rgb(125, 183, 219)",
      cora: "heart"
    },
    { 
      id: 2,
      image: require('./IMAGENES/Cpu.webp'),
      precio: "80",
      descripcion: "CPU con RGB",
      hora_mes: "8 hours ago",
      fondoColor: "rgb(163, 227, 255)",
      cora: "heart"
    },
    { 
      id: 3,
      image: require('./IMAGENES/laptop.png'),
      precio: "10",
      descripcion: "Lenovo",
      hora_mes: "10 hours ago",
      fondoColor: "rgba(73, 49, 52, 1)",
      cora: "heart"
    },
    { 
      id: 4,
      image: require('./IMAGENES/tenis.webp'),
      precio: "12",
      descripcion: "Zapatos deportivos",
      hora_mes: "14 hours ago",
      fondoColor: "rgb(165, 143, 255)",
      cora: "heart"
    },
    { 
      id: 5,
      image: require('./IMAGENES/Camara.jpg'),
      precio: "12",
      descripcion: "Camera-Video & photo",
      hora_mes: "17 hours ago",
      fondoColor: "rgba(74, 75, 5, 1)",
      cora: "heart"
    },
    { 
      id: 6,
      image: require('./IMAGENES/games.avif'),
      precio: "50",
      descripcion: "Juego de Mario",
      hora_mes: "20 hours ago",
      fondoColor: "rgb(255, 236, 166)",
      cora: "heart"
    },
    { 
      id: 7,
      image: require('./IMAGENES/balon.jpg'),
      precio: "16",
      descripcion: "Balon para futtboll campo",
      hora_mes: "14 hours ago",
      fondoColor: "rgba(44, 187, 115, 1)",
      cora: "heart"
    }
  ];

  // Nuevo: Arreglo de objetos para categorías 
  const categorias = [
    { id: 1, nombre: "book", texto: "Book" },
    { id: 2, nombre: "baby-carriage", texto: "Baby" },
    { id: 3, nombre: "bicycle", texto: "Sport" },
    { id: 4, nombre: "gamepad", texto: "Game" },
    { id: 5, nombre: "camera", texto: "Camera" },
    { id: 6, nombre: "laptop", texto: "Laptop" },
    { id: 7, nombre: "apple", texto: "Apple" },
    { id: 8, nombre: "basketball-ball", texto: "Ball" },
  ];

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
          {/* Recorre el arreglo con map() para renderizar dinámicamente */}
          {categorias.map((cat) => (
            <Categoria key={cat.id} nombre={cat.nombre} texto={cat.texto} />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.titulo}>Views</Text>
        {/* FlatList para productos  */}
        <FlatList
          data={productos}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Productos {...item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 250 }} // Espaciado extra al final
        />
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
  tarjeta: {
    marginLeft: 25,
    margin: 8,
    marginRight: 4
  },
});