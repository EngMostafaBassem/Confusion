
import React ,{Component}from 'react'
import {View,Text} from 'react-native'
import {DISHES} from './Shared/dishes'

import MenuItems from './MenuItems'
import MenuItem from './MenuItems'
class MainComponent extends Component{


    constructor(props)
    {

        super(props)
        this.state={
            dishData:DISHES
        }
    }


    
    render()
    {

        return(
            <View>
               
               <MenuItem dishData={this.state.dishData}/>

            </View>
        )
    }

}

export default MainComponent
