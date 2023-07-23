
import { StyleSheet, Text, View,Button ,TextInput,ScrollView,FlatList} from 'react-native';
import { useState } from 'react';

export default function App() {
  const[enteredGoalText,setenteredGoalText]=useState(' ');
  const[courseGoals,setGourseGoals]=useState([]);
  function goaInlputHandler(enteredText){
    setenteredGoalText(enteredText)
    
   
  }
  
  function addGoalHandler(){
    setGourseGoals((currentCourseGoals)=>[...currentCourseGoals,
      { text:enteredGoalText,key:Math.random().toString()}]);
    
  }

  return (
   
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}placeholder='your course goal'onChangeText={goaInlputHandler}/>
        <Button title="add goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      < FlatList 
      data={courseGoals}
      renderItem={(itemData)=>{
        return(
          <Text style={styles.goalitem}>
            {itemData.item.text}
          </Text>
         
        )
      }}

     
      />
        
      
      </View>
    </View>

   
    
  );
};

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:10,
    padding:10,

  },
  goalsContainer:{
    flex:6
  },
  goalitem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'white',
  }
  
});
