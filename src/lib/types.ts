import { z } from "zod"

export const QuestionDataInLocalStorageSchema = z.object({
  userAnswerId: z.string(),
  correctAnswerId: z.string(),
  isUserAnswerCorrect: z.boolean(),
  nextQuestionSlug: z.string(),
})

export const CategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .trim()
    .max(18, { message: "Category name must be 18 characters or below" }),
})

export type CategoryFormState =
  | {
      errors?: {
        name?: string[]
      }
      message?: string
    }
  | undefined
