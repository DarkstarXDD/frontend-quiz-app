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
        className={`${rubik.variable} font-rubik bg-black font-medium leading-normal tracking-normal text-white`}
      >
        {children}
      </body>
    </html>
  )
}
