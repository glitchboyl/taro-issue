import React, { memo, FC } from "react";
import { View, Text } from "@tarojs/components";

const Test: FC = () => {
  return (
    <View>
      <Text>this is test page.</Text>
    </View>
  );
};

export default memo(Test);
