import { Image, View } from "@tarojs/components";

import "./index.scss";
// eslint-disable-next-line import/first
import headerBg from "../../assets/headerBg.png";
import GlobalFooter from "../../components/GlobalFooter";
// eslint-disable-next-line import/first
import { AtButton } from "taro-ui";
// eslint-disable-next-line import/first
import Taro from "@tarojs/taro";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
// import {getBestQuestionResult} from "../../utils/bizUtils";

/**
 * Result Page
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  // const result = getBestQuestionResult(answerList);
  const result = questionResults[0];

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h2 subTitle">{result.resultDesc}</View>

      <AtButton
        type="primary"
        className="enterBtn"
        onClick={() =>
          Taro.reLaunch({
            url: "/pages/index/index",
          })
        }
      >
        Back to Home Page
      </AtButton>

      <Image src={headerBg} mode="widthFix" className="headerBg" />

      <GlobalFooter />
    </View>
  );
};
