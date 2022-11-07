import React, { useRef } from "react";
import { StyleSheet, Text, View, Animated, Button, TouchableOpacity, Dimensions } from "react-native";

type ToastProps = {
  children: React.ReactNode;
};

interface IUseToastProps {
  toast: React.FC<ToastProps>;
  popIn(): void;
  popOut(): void;
}

export const useToast = (): IUseToastProps => {
  const windowHeight = Dimensions.get("window").height;
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.375 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const toast: React.FC<ToastProps> = ({ children }) => {
    return (
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY: popAnim }],
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  };

  return { toast, popIn, popOut };
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowColor: "#000",
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    elevation: 5,
  },
  //   toastRow: {
  //     width: "90%",
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-evenly",
  //   },
  //   toastText: {
  //     width: "70%",
  //     padding: 2,
  //   },
});
