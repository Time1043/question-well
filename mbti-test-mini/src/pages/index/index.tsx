import { Image, View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";
import headerBg from "../../assets/headerBg.png";
import GlobalFooter from "../../components/GlobalFooter";

/**
 * Home Page
 */
export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">MBTI Personality Test</View>
      <View className="at-article__h2 subTitle">
        In just 2 minutes, you can describe who you are and your personality
        traits very accurately
      </View>

      <AtButton
        type="primary"
        className="enterBtn"
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/doQuestion/index",
          });
        }}
      >
        Start Test
      </AtButton>

      <Image src={headerBg} mode="widthFix" className="headerBg" />

      <GlobalFooter />
    </View>
  );
};
