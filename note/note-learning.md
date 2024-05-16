# question-well

- Review
  1. 用户中心项目: 适合新手入门，系统学习完整的项目开发流程和上线方法。
  2. 伙伴匹配系统: 巩固开发流程，学习 Redis、事务、并发编程、大数据推荐思想等后端知识。
  3. API 开放平台: 学习实践前后端模板开发 + 架构设计 + SDK 开发 + API 签名认证 + Dubbo RPc+ Gateway微服务网关。
  4. 手写 RPC 框架: 从 0到1开发轮子，实践网络协议设计 + 序列化 + Etcd 注册中心 + Vert.x 服务器 + 动态代理 + SPI 机制 + 负载均衡 + 服务重试容镨机制 + 注解驱动启动器，大幅提升架构设计能力。
  5. 聚合搜索平台: 学习实践爬虫 + Elastic Stack + 设计模式 + 数据同步 + JMeter 压力测试
  6. 智能 BI 项目: 学习实践异步化 + 线程池 + RabbitMQ 消息队列 + AI 应用开发 + AIGC Prompt 优化。
  7. 判题系统: 学习实践前后端模板开发 + 多种设计模式 + 单体项目微服务改造 + Linux 虛拟机远程开发 + Docker 代码沙箱 + Java 安全控制。
  8. 代码生成器共享平台: 深入业务场景，学习实践命令行开发、模板引擎、Vert.x、设计模式、对象存储、性能优化、存储优化、系统设计、分布式任务调度系统等。



- Reference

  [yupi github](https://github.com/liyupi/yudada), [yupi note](https://bcdh.yuque.com/staff-wpxfif/resource/tllk10dnzp6g3q3y), [yupi note code-nav](https://www.code-nav.cn/course/1782335162700775426/section/1788149836286005250?type=),
  
  [zhipuAI](https://open.bigmodel.cn/), [xunfei spark](https://xinghuo.xfyun.cn/sparkapi), [Yu Smart](https://www.yucongming.com/), 
  
  [Taro](https://taro-docs.jd.com/docs/)、[Taro UI](https://taro-ui.jd.com/#/)





## 背景介绍

- 项目三大阶段 (选题新颖、业务真实完整)

  第一阶段，开发本地的 `MBTI性格测试小程序`。熟悉答题应用的开发流程，实战跨端小程序开发。

  第二阶段，上升一个层次，开发 `答题应用平台`。用户可以通过上传题目和自定义打分规则，创建答题应用，供其他用户使用。(前后端全栈项目从0到1的开发)

  第三阶段，让AI为平台赋能，做一个 `AI智能答题应用平台` 。用户只需设定主题，就能通过 AI 生成题目、用 AI分析用户答案，极大降低创建答题应用的成本。

- 项目优势

  业务真实新颖 (答题应用 AI平台)、技术主流新颖 (前后端 AI)、

  能学到东西 (CRUD 实际业务场景 系统设计优化 企业级解决方案)、

  教程资料少 (调研)、增加竞争力 (响应式编程 分库分表 设计模式 性能及稳定性优化)

- 项目收获 (通用的项目开发方法和架构设计套路)

  如何拆解复杂业务，从0开始设计实现系统？

  如何快速开发小程序、响应式网站和后端项目？

  如何巧用 JSON 实现复杂评分策略？

  如何巧妙利用设计模式来优化代码？

  如何利用 Al工具 CodeGeex 智能编程助手 提高开发效率？

  如何利用 SSE 技术实时推送通知？

  如何利用 Redis + Caffeine + 分布式锁实现稳定高效的缓存？

  如何使用 RxJava 多线程提升服务性能？

  如何实现业务的幂等性保证？

  如何运用分库分表优化系统？

  



### 业务梳理

- 核心业务流程

  ![Snipaste_2024-05-07_08-08-14](res/Snipaste_2024-05-07_08-08-14.png)

  ![Snipaste_2024-05-07_08-12-47](res/Snipaste_2024-05-07_08-12-47.png)

- 时序图

  ![Snipaste_2024-05-07_08-13-41](res/Snipaste_2024-05-07_08-13-41.png)

  



- 项目功能梳理

- 小程序

  在线答题

- 平台

  用户模块：注册、登录、管理用户-增删改查 (仅管理员可用)

  应用模块：

  - 创建应用(名称、描述、上传图片、应用类型)、修改应用(用户)、
  - 审核发布和下架应用(管理员)、管理应用-增删改查(管理员)、应用分享(扫码查看)

  题目模块：创建题目(名称、选项)、修改题目、删除题目、AI生成题目

  评分模块：多种评分策略、创建评分结果、题目得分设置

  回答模块：提交选择、回答记录、AI分析总结回答

  统计分析模块

  



- 技术选型

- 开发工具

  WebStorm、IDEA、CodeGeeX、

- 前端web网页开发

  Vue 3、Vue-CLl 脚手架、Pinia 状态管理、Axios 请求库、Arco Design 组件库、

  前端工程化：ESLint + Prettier +TypeScript、

  富文本编辑器、QRCode.js 二维码生成、OpenAPl前端代码生成

- 前端小程序开发

  React、Taro 跨端开发框架、Taro UI 组件库

- 后端

  Java Spring Boot 开发框架(万用后端模板)、

  存储层：MySQL数据库 + Redis 缓存 + 腾讯云COS对象存储

  MyBatis-Plus及MyBatis X自动生成

  Redission 分布式锁

  Caffeine 本地缓存

  ✔基于 ChatGLM 大模型实现 AI 能力

  ✔RxJava 响应式框架+多线程/线程池实战

  ✔Shardingsphere 分库分表+分布式ID 雪花算法

  ✔SSE 服务端推送

  ✔多种设计模式

  ✔多角度项目优化：性能、稳定性、幂等性优化等





- 架构设计

  ![Snipaste_2024-05-07_09-10-40](res/Snipaste_2024-05-07_09-10-40.png)

  



### 产品概念

- 参考产品

- MBTI

  界面设计、业务流程

  [16personalities](https://www.16personalities.com/ch)

  ![Snipaste_2024-05-08_22-01-04](res/Snipaste_2024-05-08_22-01-04.png)

  

- MBTI实现方案 (总结)

  核心组成：题目、用户答案、评分规则
  
  



- 题目结构 (JSON) 

  优点：相比与 拿选项作为key，结构更清晰、更易于理解和扩展、前后端都可以声明类型 (更灵活 排序)

  缺点：占用空间，可以进行数据预处理

  ```json
  [
      {
          "title": "你通常更喜欢",
          "options": [
              {
                  "result": "I",
                  "value": "独自工作",
                  "key": "A"
              },
              {
                  "result": "E",
                  "value": "与他人合作",
                  "key": "B"
              }
          ]
      }
  ]
  ```

- 用户答案(JSON) 

  优点：按顺序匹配题目 不用完整传输题目 节省体积

  ```json
  ["A", "A", "B"]
  ```

- 评分规则!!!

  [Myers-Briggs Type Indicator](https://zh.wikipedia.org/wiki/%E9%82%81%E7%88%BE%E6%96%AF-%E5%B8%83%E9%87%8C%E6%A0%BC%E6%96%AF%E6%80%A7%E6%A0%BC%E5%88%86%E9%A1%9E%E6%B3%95): binary classification * 4

  每个结果都有一个 resultProp，是一个元素不重复的数组 (属性集合)，里面的内容和题目选项的result字段匹配

  ```
  例如说
  
  用户第一题选A，对应属性是I；那么遍历16中结果人格，若人格包含I，则该人格就+1分，不包含则不得分
  
  遍历完所有题目，就得出16种人格的得分，得分最高的人格为最终结果
  
  ```

- 评分结果 (16种人格)

  ```json
  [
    {
      "resultProp": [
        "I",
        "S",
        "T",
        "J"
      ],
      "resultDesc": "忠诚可靠，被公认为务实，注重细节。",
      "resultPicture": "icon_url_istj",
      "resultName": "ISTJ（物流师）"
    },
    {
      "resultProp": [
        "I",
        "S",
        "F",
        "J"
      ],
      "resultDesc": "善良贴心，以同情心和责任为特点。",
      "resultPicture": "icon_url_isfj",
      "resultName": "ISFJ（守护者）"
    },
  ]
  ```

  



- 小程序开发

  小程序和网页开发 (一致性)

  - 在线热更新、调试、版本兼容、打包上线
  - 部署简单

  小程序开发优点：

  - 基于微信生态，易于传播分享
  - 不让用户下载APP，快速打开

  小程序开发痛点：

  - 一些权限和功能必须要求企业号

- 小程序开发的技术选型

  [Taro 跨端开发框架](https://taro-docs.jd.com/docs/)、[Taro UI 组件库 (推荐 兼容)](https://taro-ui.jd.com/#/)、nut UI

  React、TypeScript

  [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

  



## 环境搭建

- 环境说明

  JDK(8, 11, 17), MySQL 8.x, [Redis 5.x](https://github.com/zkteco-home/redis-windows/releases)

  [nodejs18.x,](https://nodejs.org/en) npm 9.x

  [CodeGeeX](https://codegeex.cn/)



### 项目初始化 (小程序)

- 参考

  [用这个方法开发小程序 video](https://www.bilibili.com/video/BV1vM4m1R7K3/)、[小程序开发指南 240327 note](https://www.code-nav.cn/course/1782335162700775426/section/1782342928001646593?type=#heading-0)

  [Taro guide](https://taro-docs.jd.com/docs/GETTING-STARTED)



- Taro guide

  ```bash
  cd /d/code2/java-code/yudada/
  npm install -g @tarojs/cli
  taro -V  # 3!!!
  
  taro init mbti-test-mini
  ? 请输入项目介绍
  ? 请选择框架 React
  ? 是否需要使用 TypeScript ？ Yes
  ? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
  ? 请选择编译工具 Webpack5
  ? 请选择包管理工具 npm
  ? 请选择模板源 Gitee（最快）
  ✔ 拉取远程模板仓库成功！
  ? 请选择模板 taro-ui（使用 taro-ui 的模板）
  
  
  npm install --force
  npm run dev:weapp  # 开发
  npm run build:weapp  # 构建发布 (打包优化压缩)
  
  ```
  
- Configure the development specifications for the project

  `eslint`, `typescript`: 校验js代码、提供语法提示的工具 (纠正编码习惯)

  `prettier`: 代码美化、快速格式化代码工具

  `settings` -> `eslint` -> `automatic ESLint configuration`

  `settings` -> `prettier` -> `automatic prettier configuration`

  .eslintrc 

  ```
  {
    "extends": [
      "taro/react"
    ],
    "rules": {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-quotes": "off"
    }
  }
  
  ```

- To import Taro UI components globally ([reference](https://taro-ui.jd.com/#/docs/quickstart))

  



## 小程序开发

- 小程序的配置信息

  `project.config.json`：给小程序开发工具的

  `app.config.ts`：项目对小程序的信息



- 开发页面

  路由注册 (`app.config.ts`)、复制已有页面；

  定制开发 (页面 + 样式 + js逻辑交互)

- 页面规划

  主页、答题页面、结果页面

  [图片生成 AI绘画](https://www.yucongming.com/draw)

  ![Snipaste_2024-05-09_18-06-06](res/Snipaste_2024-05-09_18-06-06.png)

- dir

  ```bash
  touch types/custom.d.ts
  
  cd src/ && mkdir -p assets/ components/GlobalFooter/ data/ utils/
  
  ```
  
  



- React 函数式组件 (推荐)

  ```react
  export default () => {
    return (
      <View className="index">
        <Text>User Center!</Text>
  
        <AtButton
          type="primary"
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/index/index",
            });
          }}
        >
          跳转页面
        </AtButton>
      </View>
    );
  };
  
  ```
  
  React 类组件 (像java 继承...)

  ```react
  export default class Index extends Component<PropsWithChildren> {
    componentDidMount() {}
  
    componentWillUnmount() {}
  
    componentDidShow() {}
  
    componentDidHide() {}
  
    render() {
      return (
        <View className="index">
          <Text>User Center!</Text>
  
          <AtButton
            type="primary"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/index/index",
              });
            }}
          >
            跳转页面
          </AtButton>
        </View>
      );
    }
  }
  
  ```
  
  



### 三个简单页面

- index

  页面：[背景图片(媒体)](https://taro-docs.jd.com/docs/components/media/image)、[文字标题](https://taro-ui.jd.com/#/docs/article)、[按钮](https://taro-ui.jd.com/#/docs/button)；(找组件 多丑都行)

- doQuestion

  页面：[单选框](https://taro-ui.jd.com/#/docs/radio)、...

  ```
  上一题下一题 -> 改变题号 -> 题目内容的变化 (一个变量驱动另一个变量的变化 `useEffect`)
  
  查看结果 -> 携带答案到结果页面
  
  ```

- result

  页面 (像index)

- 三个页面之间的跳转

  [路由跳转](https://taro-docs.jd.com/docs/router#%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC)  `Taro.navigateTo` (页面的叠加), `Taro.reLaunch` (关闭历史页面 打开新页面)

  



- 三个简单页面

- index

  ```tsx
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
  
  ```

- doQuestion

  ```tsx
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
  
  ```

- result

  ```tsx
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
  
  ```
  
  



- 类型约束

  types/custom.d.ts

  ```typescript
  interface QuestionOption<T extends string = string> {
    result: T;
    value: string;
    key: T;
  }
  
  interface Question<T extends string = string> {
    title: string;
    options: QuestionOption<T>[];
  }
  
  ```

  



### 评分逻辑

- 实现判题逻辑 (AI Prompt)

  请根据我下面的题目评分算法原理，帮我用js获取到得分最高的题目评分结果，要求算法清晰易懂，性能要求高，多补充一些注释。

  用户提交的答案 answerList:["A"]

  题目列表 questions: 

  ```json
  [
      {
          "title": "你通常更喜欢",
          "options": [
              {
                  "result": "I",
                  "value": "独自工作",
                  "key": "A"
              },
              {
                  "result": "E",
                  "value": "与他人合作",
                  "key": "B"
              }
          ]
      }
  ]
  ```

  题目评分结果 question_results: 

  ```json
  [
    {
      "resultProp": [
        "I",
        "S",
        "T",
        "J"
      ],
      "resultDesc": "忠诚可靠，被公认为务实，注重细节。",
      "resultPicture": "icon_url_istj",
      "resultName": "ISTJ（物流师）"
    },
  ]
  ```

  评分原理：答案数组的每个元素和题目数组中每个元素的某个选项的key对应，从而获取对应result属性；题目评分结果的resultProp集合中如果包含该属性，就+1分，最后计算哪个评分结果(question_result)分数最高

  



- 评分逻辑的实现

  src/utils/bizUtils.ts

  ```typescript
  /**
   * 获取最佳题目评分结果
   * @param answerList
   * @param questions
   * @param question_results
   */
  
  export function getBestQuestionResult(answerList, questions, question_results) {
    // 初始化一个对象，用于存储每个选项的计数
    const optionCount = {};
  
    // 用户选择 A, B, C
    // 对应 result：I, I, J
    // optionCount[I] = 2; optionCount[J] = 1
  
    // 遍历题目列表
    for (const question of questions) {
      // 遍历答案列表
      for (const answer of answerList) {
        // 遍历题目中的选项
        for (const option of question.options) {
          // 如果答案和选项的key匹配
          if (option.key === answer) {
            // 获取选项的result属性
            const result = option.result;
  
            // 如果result属性不在optionCount中，初始化为0
            if (!optionCount[result]) {
              optionCount[result] = 0;
            }
  
            // 在optionCount中增加计数
            optionCount[result]++;
          }
        }
      }
    }
  
    // 初始化最高分数和最高分数对应的评分结果
    let maxScore = 0;
    let maxScoreResult = question_results[0];
  
    // 遍历评分结果列表
    for (const result of question_results) {
      // 计算当前评分结果的分数
      const score = result.resultProp.reduce((count, prop) => {
        return count + (optionCount[prop] || 0);
      }, 0);
  
      // 如果分数高于当前最高分数，更新最高分数和最高分数对应的评分结果
      if (score > maxScore) {
        maxScore = score;
        maxScoreResult = result;
      }
    }
  
    // 返回最高分数和最高分数对应的评分结果
    return maxScoreResult;
  }
  
  // Test (example)
  const answerList = ["B","B","B","A"];
  const questions = [
    {
      title: "你通常更喜欢",
      options: [
        {
          result: "I",
          value: "独自工作",
          key: "A",
        },
        {
          result: "E",
          value: "与他人合作",
          key: "B",
        },
      ],
    },
    {
      options: [
        {
          result: "S",
          value: "喜欢有结构和常规",
          key: "A",
        },
        {
          result: "N",
          value: "喜欢自由和灵活性",
          key: "B",
        },
      ],
      title: "对于日常安排",
    },
    {
      options: [
        {
          result: "P",
          value: "首先考虑可能性",
          key: "A",
        },
        {
          result: "J",
          value: "首先考虑后果",
          key: "B",
        },
      ],
      title: "当遇到问题时",
    },
    {
      options: [
        {
          result: "T",
          value: "时间是一种宝贵的资源",
          key: "A",
        },
        {
          result: "F",
          value: "时间是相对灵活的概念",
          key: "B",
        },
      ],
      title: "你如何看待时间",
    },
  ];
  const question_results = [
    {
      resultProp: ["I", "S", "T", "J"],
      resultDesc: "忠诚可靠，被公认为务实，注重细节。",
      resultPicture: "icon_url_istj",
      resultName: "ISTJ（物流师）",
    },
    {
      resultProp: ["I", "S", "F", "J"],
      resultDesc: "善良贴心，以同情心和责任为特点。",
      resultPicture: "icon_url_isfj",
      resultName: "ISFJ（守护者）",
    },
  ];
  
  console.log(getBestQuestionResult(answerList, questions, question_results));
  
  ```

  测试

  ```bash
  cd src/utils/
  node bizUtils.ts 
  
  ```

  







### 页面间的数据传递

- 需求：题目结果页面 需要得到 做题页面用户选择的答案列表，才能进行评分。

  方法1：[url params](https://taro-docs.jd.com/docs/apis/route/navigateTo) 比如：`result?answerList=[A,B,C]`

  方法 2：[全局状态](https://taro-docs.jd.com/docs/context#contextprovider) (比较复杂的前端)

  方法 3：[本地数据存储](https://taro-docs.jd.com/docs/apis/storage/setStorageSync) (推荐 较为简单)

  



- doQuestion -> result

  doQuestion `setStorageSync` 
  
  ```tsx
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
  ```
  
  result `getStorageSync` [Toast](https://taro-docs.jd.com/docs/apis/ui/interaction/showToast)
  
  ```tsx
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
  ```
  
  



### 小程序开发的限制

- 微信开发者工具 本身bug

  清理工具缓存、重启项目、重启开发者工具

  



- 常用解决方案

  [Reference](https://www.code-nav.cn/course/1782335162700775426/section/1788149836286005250?type=#heading-34)

  小程序的调试和发布

  网络请求：请求库 (不能用Axios)、请求代码生成、全局请求处理器

  状态管理：全局js变量 (不熟悉前端的推荐)

  用户登录：

  开发规范：

  



### 扩展思路

- 定位

  题目都是固定的，不需要后端

- 扩展

  [Reference](http://sssch.net/ArticleDetail.aspx?ArticleID=13188130318) 





## 直播计划

- 第一阶段

- 1 期：介绍项目的规划、梳理核心业务流程、功能介绍、整体方案设计、预期的效果

- 2 期：MBTI性格测试小程序开发(离线应用)

  - MBTI 题目和评分原理讲解、前端 Taro + React 小程序开发

  



- 第二阶段

- 3 期：开发平台后端(线上化)

  - 需求分析
  - 库表设计
  - 后端项目初始化、运行项目、模板能力讲解(图片上传服务)
  - 后端增删改查
  - 后端核心业务流程开发:评分模块实现(策略模式)

- 4 期：开发平台 Web 前端

  - 前端项目初始化
  - 前端核心业务流程开发
  - 前后端联调，跑通核心业务流程

  



- 第三阶段

- 5 期：平台智能化

  - AI生成题目：方案设计+后端开发+前端开发·AI智能总结:方案设计 +后端开发+前端开发

- 6 期：系统优化

  - 功能完善：统计分析模块、应用分享模块
  - 性能优化：SSE、Rxava 多线程、缓存(Redisson 分布式锁防止缓存击穿)、分库分表

- 7 期：系统优化
  - 业界主流幂等性设计
  - 线程池资源隔离

































