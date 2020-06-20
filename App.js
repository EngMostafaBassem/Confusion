import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NavComponent from './Components/NavComponent'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/rootReducer'
import Main from './Components/MainComponent';
export default function App() {
  return (
    
         <View style={{flex:1}}>
              <Provider store={createStore(rootReducer,applyMiddleware(thunk))}>
   
                   <Main/>
              </Provider>
        
          </View>
      
    
  );
}

