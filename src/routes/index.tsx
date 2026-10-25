import { createFileRoute } from '@tanstack/react-router'
import { Nav } from '~/components/Nav'
import { Hero } from '~/components/Hero'
import { About } from '~/components/About'
import { Experience } from '~/components/Experience'
import { Education } from '~/components/Education'
import { Contact } from '~/components/Contact'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#1a1a1a] overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
