import { View, Text, StyleSheet, Pressable } from 'react-native';

function pressHandler() {
  //Execute onPress
  onPress;
}

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: 'yellow' }}
        //style={styles.btnInnerContainer} //style take object OR the call back function whicch will be called by React Native automatically
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  btnOuterContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pressed: {
    opacity: 0.75, //0 is 0% 1 is 100%
  },
});
