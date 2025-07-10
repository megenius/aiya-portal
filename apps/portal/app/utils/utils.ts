import { IntentQuestion } from "~/@types/app";
import { randomHexString } from "./random";

export const toMillisecond = (
  value: number,
  unit: "second" | "minute" | "hour" | "day"
) => {
  const conversion = {
    second: 1000,
    minute: 60 * 1000,
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
  };
  return value * (conversion[unit] || conversion["minute"]);
};

export function transformKnowledgeBase({ intents }) {
  return intents.map(({ intent, quick_reply, questions, answer }) => {
    const transformedQuestions = [
      { id: randomHexString(8), question: intent },
      ...questions.map((q) => ({ id: randomHexString(8), question: q })),
    ];

    return {
      id: randomHexString(8),
      name: intent,
      intent,
      quick_reply,
      questions: transformedQuestions,
      responses: [
        {
          id: randomHexString(8),
          type: "Text",
          payload: { type: "text", text: answer },
        },
      ],
      tags: [],
    };
  });
}
