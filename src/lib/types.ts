import { z } from "zod"

export const QuestionDataInLocalStorageSchema = z.object({
  userAnswerId: z.string(),
  correctAnswerId: z.string(),
  isUserAnswerCorrect: z.boolean(),
  nextQuestionSlug: z.string(),
})
