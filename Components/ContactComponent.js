import React from 'react'
import {Text,View} from 'react-native'
import {Card,Button,Icon} from 'react-native-elements'
import * as MailComposer from 'expo-mail-composer';
const Contact=()=>{

   const sendMail=()=> {
        MailComposer.composeAsync({
            recipients: ['confusion@food.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

    return(
        <Card  title="Contact Information">
        
         
       
            <Text>121, Clear Water Bay Road</Text>
            <Text>Clear Water Bay, Kowloon</Text>
            <Text>Clear Water Bay, Kowloon</Text>
            <Text>HONG KONG</Text>
            <Text>Tel: +852 1234 5678</Text>
            <Text>Fax: +852 8765 4321</Text>
            <Text>Email:confusion@food.net</Text>

            <Button
            title="Send Email"
            buttonStyle={{backgroundColor: "#512DA8"}}
            icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
            onPress={sendMail}
            
            />
           
        </Card>
    )
    }
export default Contact