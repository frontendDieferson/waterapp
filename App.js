import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state= { consumido: 0, status: 'Ruim', pct:0 };

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
    let s = this.state;
    s.pct = Math.floor((s.consumido/2000)*100);

    if(s.pct >= 100) {
      s.status = 'Bom';
    } else {
      s.status = 'Ruim'
    }
    this.setState(s);
  }

  addCopo() {
    let s = this.state;
    s.consumido += 250;
    this.setState(s);

    this.atualizar();
  }


  render() {
    return (
      <View style={styles.container}>
       
        <ImageBackground style={styles.bgimage} source={require('./src/images/waterbg.png')}>
        <View style={styles.content}>
        <Image style={styles.logo} source={require('./src/images/logowater.png')} />
          <Text style={styles.logoTitle}>Seu Consumo Diário</Text>
        </View>
          <View style={styles.infoArea}>
            <View style={styles.area}>
              <Image style={styles.areaImage} source={require('./src/images/meta.png')} />
              <Text style={styles.areaTitle}>Meta</Text>
              <Text style={styles.areaDate}>2000ml</Text>
            </View>

            <View style={styles.area}>
              <Image style={styles.areaImage} source={require('./src/images/consumido.png')} />
              <Text style={styles.areaTitle}>Consumido</Text>
              <Text style={styles.areaDate}>{this.state.consumido}ml</Text> 
            </View>

            <View style={styles.area}>
              <Image style={styles.areaImage} source={require('./src/images/status.png')} />
              <Text style={styles.areaTitle}>Status</Text>
              <Text style={styles.areaDate}>{this.state.status}</Text> 
            </View>
          </View>
          <View style={styles.pctArea}>
            <Text style={styles.pctText}>
                {this.state.pct}%</Text>
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity onPress={this.addCopo}>
              <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Beber 250ml</Text>
             
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
    margin: 10,
  },
  logoTitle: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2b4274',

  },
  bgimage: {
    flex: 1,
    width: null,
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70,
   
    
   
  },
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 100,
    backgroundColor: '#E1F5FE',
    borderRadius: 10,
   
   
  },
  areaImage: {
    width: 40,
    height: 40,
  },
  areaTitle: {
    color: '#45b2fc',
  },
  areaDate: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pctArea: {
    marginTop: 170,
    alignItems: 'center',  
    borderRadius: 100,
  },
  pctText: {
    fontSize: 70,
    color: '#FFFF',

  },
  btnArea: {
    
    marginTop: 130,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: '#4DB6AC'

  },
})