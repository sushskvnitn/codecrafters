export const metadata = {
  title: 'code crafters',
  description: 'A community of developers, designers and creators.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      <Testimonials />
      <Newsletter />
    </>
  )
}