import {View} from "@tarojs/components";
import {AtButton, AtRadio} from "taro-ui";
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";

import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";
import "./index.scss";

/**
 * Home Page
 */
export default () => {
  // Current title sequence number (starts from 1)
  const [current, setCurrent] = useState<number>(1);

  // Current question and options
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}. ${option.value}`, value: option.key };
  });

  // Current answer and answer list
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  const [answerList] = useState<string[]>([]); // history, submit

  // Current title sequence number -> current question
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      {/*{JSON.stringify(answerList)}*/}
      <View className="at-article__h2 subTitle">
        {current}. {currentQuestion.title}
      </View>

      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            answerList[current - 1] = value; // record
          }}
        />
      </View>

      {current < questions.length && (
        <AtButton
          type="primary"
          className="controlBtn"
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}
        >
          Next Question
        </AtButton>
      )}

      {current === questions.length && (
        <AtButton
          type="primary"
          className="controlBtn"
          disabled={!currentAnswer}
          onClick={() => {
            // send data
            Taro.setStorageSync("answerList", answerList);
            // route to result page
            Taro.navigateTo({
              url: "/pages/result/index",
            });
          }}
        >
          View Final Results
        </AtButton>
      )}

      {current > 1 && (
        <AtButton
          type="primary"
          className="controlBtn"
          onClick={() => setCurrent(current - 1)}
        >
          Previous Question
        </AtButton>
      )}

      <GlobalFooter />
    </View>
  );
};
