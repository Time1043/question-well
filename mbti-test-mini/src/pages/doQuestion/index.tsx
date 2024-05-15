import { View } from "@tarojs/components";

import "./index.scss";
// eslint-disable-next-line import/first
import GlobalFooter from "../../components/GlobalFooter";
// eslint-disable-next-line import/first
import { AtButton, AtRadio } from "taro-ui";
// eslint-disable-next-line import/first
import { useEffect, useState } from "react";
import questions from "../../data/questions.json";
import Taro from "@tarojs/taro";

/**
 * Home Page
 */
export default () => {
  // Current title sequence number (starts from 1)
  const [current, setCurrent] = useState<number>(1);

  // const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0]);
  const currentQuestion = questions[0];
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}. ${option.value}`, value: option.key };
  });

  const [currentAnswer, setCurrentAnswer] = useState<string>();
  const [answerList] = useState<string[]>([]); // history, submit

  // Current title sequence number -> current question
  useEffect(() => {
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
