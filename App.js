import React, { Component } from 'react';
import { View,Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open1 :true,
      open2 :false,
      open3 :false

     };
  }

  // componentDidMount(){
  //   open : true
  // }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Tooltip
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          isVisible={this.state.open1}
          content={
            <Text>
              Ini dalah fitur untuk pengunaan yang diperuntukan untuk user baru
            </Text>
          }
          placement="top"
          onClose={() => this.setState({open1: false, open2: true})}>
          <TouchableOpacity
            style={{padding: 20, backgroundColor: 'blue', borderRadius: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              
              Ini Tombol Login
            </Text>
          </TouchableOpacity>
        </Tooltip>

        <Tooltip
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          isVisible={this.state.open2}
          content={
            <Text>
              Ini dalah fitur untuk pengunaan yang diperuntukan untuk user baru
            </Text>
          }
          placement="top"
          onClose={() => this.setState({open2: false, open3: true})}>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: 'blue',
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
            
              Ini Tombol Registrasi
            </Text>
          </TouchableOpacity>
        </Tooltip>

        <Tooltip
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          isVisible={this.state.open3}
          content={
            <Text>
              Ini dalah fitur untuk pengunaan yang diperuntukan untuk user baru
            </Text>
          }
          placement="top"
          onClose={() => this.setState({open3: false})}>
          <TouchableOpacity
            style={{
              padding: 20,
              backgroundColor: 'blue',
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              
              Ini Tombol Exit
            </Text>
          </TouchableOpacity>
        </Tooltip>
      </View>
    );
  }
}

export default App;
