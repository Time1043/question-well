import {Image, View} from "@tarojs/components";
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";

import {getBestQuestionResult} from "../../utils/bizUtils";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import questionResults from "../../data/question_results.json";
import headerBg from "../../assets/headerBg.png";
import "./index.scss";

/**
 * Result Page
 */
export default () => {
  // from doQuestion page
  const answerList = Taro.getStorageSync("answerList");
  // error
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "answerList is empty",
      icon: "error",
      duration: 3000,
    });
  }

  // get best question result
  const result = getBestQuestionResult(answerList, questions, questionResults);

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
