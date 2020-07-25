import React, { memo, FC } from "react";
import { styled } from "linaria/react";
import { View, Text, Navigator } from "@tarojs/components";

const CustomNavigator = styled(Navigator)`
  color: #ff0000;
`;

const Index: FC = () => {
  return (
    <View>
      <Text>this is index page.</Text>
      <CustomNavigator url="/pages/test/test">
        <Text>link to test page.</Text>
      </CustomNavigator>
    </View>
  );
};
export default memo(Index);
