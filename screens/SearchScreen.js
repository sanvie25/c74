import React from 'react';
import { Text, View } from 'react-native';
import db from '../config';
export default class Searchscreen extends React.Component {
  constructor(prop){
    super(prop)
this.state={
  allTransaction:[]
}
  }
  componentDidMount= async ()=>{
    const query = await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransaction:[...this.state.allTransaction,doc.data()]
      })
    })
  }
    render() {
      return (
        <FlatList
        data={this.state.allTransaction}
        renderItem = {({item})=>{
          <View style = {{borderBottomWidth:2}}>
<Text> {"Book Id"+item.bookId} </Text>
<Text> {"Student Id"+item.studentId} </Text>
<Text> {"transaction Type"+item.transactiontype} </Text>
<Text> {"Date"+item.date.toDate()} </Text>
          </View>
        }}
        keyExtractor = {(item,index)=>index.toString()}
        >

        </FlatList>
      );
    }
  }