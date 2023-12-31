import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <Link href="/week2">week 2</Link>
      <Link href="/week3">week 3</Link>
      <Link href="/week4">week 4</Link>
      <Link href="/week5">week 5</Link>
      <Link href="/week6">week 6</Link>
      <Link href="/week7">week 7</Link>
      <Link href="/week8">week 8</Link>
      </div>
    </main>
  )
}
