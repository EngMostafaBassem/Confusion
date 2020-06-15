
import React ,{Component}from 'react'
import {View,Text} from 'react-native'
import {DISHES} from './Shared/dishes'

import MenuItems from './MenuItems'
import Menu from './MenuItems'
import DishDetailsComponent from './DishDetailsComponent'
class MainComponent extends Component{


    constructor(props)
    {

        super(props)
        this.state={
            dishData:DISHES,
            selectedDish:null
        }
    }

    changeSelectedDish(id)
    {
        this.setState({selectedDish:id})
    }

    
    render()
    {

        return(
            <View>
               
               <Menu dishData={this.state.dishData} changeSelectedDish={(id)=>this.changeSelectedDish(id)}/>
               <DishDetailsComponent dish={this.state.dishData.filter(item=>item.id==this.state.selectedDish)[0]}/>

            </View>
        )
    }

}

export default MainComponent

