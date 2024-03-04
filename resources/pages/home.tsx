import { Head } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />
      <h1>It works</h1>
    </>
  )
}
