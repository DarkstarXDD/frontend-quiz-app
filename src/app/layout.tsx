import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Frontend Quiz App",

  description:
    "Check out Darkstar's solution for the Frontend Quiz App challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://frontend-quiz-app-darkstarxdd.vercel.app/",
    title: "Frontend Quiz App",

    description:
      "Check out Darkstar's solution for the Frontend Quiz App challenge on Frontend Mentor",

    images: {
      url: "https://frontend-quiz-app-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} flex min-h-dvh flex-col items-center justify-center bg-blue-100 px-6 py-4 font-rubik font-medium leading-normal tracking-normal text-blue-900 md:px-16 md:py-10`}
      >
        {/* Controls the width of the wrapper for all pages */}
        <div className="w-full max-w-2xl lg:max-w-6xl">{children}</div>{" "}
      </body>
    </html>
  )
}
