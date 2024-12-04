import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');
  //Update enteredNumber State whenever user type.
  //Value is automatically passed by React
  function numberInputHandler(vl) {
    setEnteredNumber(vl);
  }
  /*validation
  1. Whether number is smaller than 1
  2. Whether number greater than 99
  3. whether the input text is number */
  function confirmInputHandler() {
    //parseInt() convert string to a number
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
      );
      //return to make sure that this function, does not continue its execution,if we make it into if statement.
      return; //cancel this function execution
    }
    onPickedNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />

      <View style={styles.btnsContainer}>
        <View style={styles.btn}>
          <PrimaryButton onPress={resetInputHandler}>
            <Text>Reset</Text>
          </PrimaryButton>
        </View>
        <View style={styles.btn}>
          <PrimaryButton onPress={confirmInputHandler}>
            <Text>Confirm</Text>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  numberInput: {
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    fontSize: 32,
    marginVertical: 8,
    color: '#ddb52f',
    width: 45,
    //textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24, //left and right
    borderRadius: 8,
    backgroundColor: '#4e0329',
    //Shadow behind , need to set both for ios and android separately
    elevation: 4, // only android
    shadowColor: 'black', //ios
    shadowOffset: { width: 0, height: 2 }, //ios
    shadowRadius: 6, //ios
    shadowOpacity: 0.25, //ios
  },
  btnsContainer: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
  },
});
