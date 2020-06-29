import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NavComponent from './Components/NavComponent'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/rootReducer'
import Main from './Components/MainComponent';
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist';
import Loading from './Components/Loading'
export default function App() {
     const store=createStore(rootReducer,applyMiddleware(thunk))
    
     const persistor=persistStore(store)
    
     return(
         <View style={{flex:1}}>
              <Provider store={store}>
                <PersistGate
                
                loading={<Loading/>}
                persistor={persistor}
                >

            
                   <Main/>
                   </PersistGate>
              </Provider>
        
          </View>
      
    
  );
}

