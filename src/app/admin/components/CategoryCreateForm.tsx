"use client"

import { useActionState } from "react"

import Form from "next/form"
import AdminButton from "../components/AdminButton"
import Toast from "./Toast"

import { createNewCategory } from "@/actions/actions"

export default function CategoryCreateForm() {
  const [state, serverAction, isPending] = useActionState(
    createNewCategory,
    undefined
  )

  return (
    <>
      <Form action={serverAction} className="grid gap-6">
        <div className="grid gap-1">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="w-full rounded border border-blue-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-850"
          />
          {state?.errors?.name && (
            <p className="text-xs text-red">{state.errors.name}</p>
          )}
        </div>

        <AdminButton disabled={isPending}>
          {isPending ? "Creating..." : "Create"}
        </AdminButton>
      </Form>

      {state?.message && <Toast toastMessage={state.message} />}
    </>
  )
}
