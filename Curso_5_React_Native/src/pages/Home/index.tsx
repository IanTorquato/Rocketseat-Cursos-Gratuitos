import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api'

export default class Home extends Component {
  state = { docs: [], productInfo: {}, page: 1 }

  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`)
    const { docs, ...productInfo } = response.data

    this.setState({ docs: [...this.state.docs, ...docs], productInfo, page })
  }

  loadMore = () => {
    const { page, productInfo } = this.state
    if (page === productInfo.pages) return

    const pageNumber = page + 1

    this.loadProducts(pageNumber)
  }

  renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <RectButton style={styles.productButton} onPress={() => {
        this.props.navigation.navigate('Product', { product: item })
      }}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </RectButton>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.docs} keyExtractor={item => item._id} renderItem={this.renderItem}
          contentContainerStyle={styles.list} onEndReached={this.loadMore} onEndReachedThreshold={0.1} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: '#da552f',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  productTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  productDescription: {
    color: '#666',
    fontSize: 16,
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#da552f'
  },
  productButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
