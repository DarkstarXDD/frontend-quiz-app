"use client"
import { FormEvent } from "react"
import Question from "./Question"
import AnswerGroup from "./AnswerGroup"
import Button from "@/components/Button"

export default function QuestionForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const answer = form.get("user-answer")
    console.log(answer)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid items-start gap-10 lg:justify-between lg:[grid-template-columns:minmax(0,30rem)_minmax(0,36rem)]"
    >
      <Question />

      <div className="grid gap-4 md:gap-8">
        <AnswerGroup />
        <Button>Submit Answer</Button>
      </div>
    </form>
  )
}
