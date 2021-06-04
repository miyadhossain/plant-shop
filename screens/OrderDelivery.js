import React from "react";
import { Text, View } from "react-native";

const OrderDelivery = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          alignItems: "center",
          textAlignVertical: "center",
          fontSize: 30,
          color: "#2BC48A",
        }}
      >
        Orders Successfully confirmed!
      </Text>
    </View>
  );
};

export default OrderDelivery;
