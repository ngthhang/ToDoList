import React, { useState } from 'react';
import { ScrollView, ImageBackground, Alert, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { TODOS } from '../utils/data';
import { TextInput } from 'react-native-gesture-handler';

export default function AllScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState(' ');

  const onToggleTodoList = id => {
    const itemToDo = todoList.find(itemToDo => itemToDo.id === id);
    itemToDo.status = itemToDo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(itemToDo => itemToDo.id === id);
    todoList[foundIndex] = itemToDo;
    const newToDoList = [...todoList];
    setTodoList(newToDoList);

    setTimeout(() => {
      props.navigation.navigate('Single', {
        updateTodo: itemToDo
      });
    }, 1000);
  }

  const onDeleteToDoList = id => {
    const newToDoList = todoList.filter(itemtoDel => itemtoDel.id !== id);
    setTodoList(newToDoList);
  }

  const onSubmitToDo = () => {
    const newtoDo = {
      id: todoList.length + 1,
      status: 'Active',
      body: todoBody,
    }
    setTodoList([...todoList, newtoDo]);
    setTodoBody(' ');
  }
  const toDoListCount = todoList.length;

  return (
    <ImageBackground style={styles.imageBackground} source={require('../assets/images/wallpaper.jpg')}>
      <KeyboardAvoidingView
        enabled
        behavior='padding'
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.toDoListTitle}>
            <Text style={styles.toDoListTextTitle}>To Do List ({toDoListCount})</Text>
          </View>
          {todoList.map((toDo, index) => {
            return (
              <ToDoItem
                key={toDo.body}
                toDo={toDo}
                index={index}
                onToggleTodoList={onToggleTodoList}
                onDeleteToDoList={onDeleteToDoList}
              />
            );
          })}
          <View>
            <TextInput
              value={todoBody}
              style={styles.TextInput}
              onChangeText={text => { setTodoBody(text) }}
            />
            <TouchableOpacity
              style={styles.SubmitButton}
              onPress={onSubmitToDo}
            >
              <Text style={styles.SubmitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

AllScreen.navigationOptions = {
  header: null,
};

/*To Do Item */
function ToDoItem(props) {
  const { toDo, index, onToggleTodoList, onDeleteToDoList } = props;
  const backgroundItemColor = { backgroundColor: toDo.status === 'Done' ? 'green' : 'blue' };
  const onLongPress = toDo => {
    const prompt = `"${toDo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => onDeleteToDoList(toDo.id) }
      ],
      { cancelable: true }
    );
  };
  return (
    <TouchableOpacity
      key={toDo.body}
      style={[styles.todoItem, backgroundItemColor]}
      onPress={() => {
        onToggleTodoList(toDo.id)
      }}
      onLongPress={() => {
        onLongPress(toDo)
      }}
    >
      <Text style={styles.todoText}>{index + 1}: {toDo.body} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems:'center',
    width: null,
    height: null
  },
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
    borderRadius: 10,
  },
  toDoListTextTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
    color:'white'
  },
  toDoListTitle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    borderRadius: 5,
    flexWrap: 'wrap',
  },
  todoText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  TextInput: {
    marginTop: 20,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 20,
    borderColor: '#f06d90',
    borderWidth: 1,
    color: 'white'
  },
  SubmitButton: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
    borderColor:'#f06d90',
    borderWidth: 1,
    marginBottom: 100,
  },
  SubmitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  }
});
