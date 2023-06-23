import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <img
                    className="h-8 w-auto"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    src="https://i.postimg.cc/2ynL0yxz/Modern-Coding-Technology-Logo.png"
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      padding: '5px',
                    }}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="text-gray-400">
                Welcome to CodeCrafters - a vibrant community of passionate coders, where creativity and innovation converge. Embark on a transformative journey, harnessing the power of code to shape the world around you. From beginner-friendly tutorials to advanced coding challenges, we empower you to unlock your full potential and embrace the art of crafting elegant, efficient, and impactful solutions
              </div>
            </div>
            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div>
                <h6 className="text-sm font-semibold text-gray-600 uppercase mb-2 ">Links</h6>
                <ul className="space-y-2 ">
                  <Link href="/">Home</Link> <br/>
                  <Link href="/blog">Blog</Link><br/>
                  <Link href="/services">Services</Link><br/>
                  <Link href="/contact">Contact</Link>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-semibold text-gray-600 uppercase mb-2 flex-col">Resources</h6>
                <ul className="space-y-2">
                  <Link href="/blog">Blog</Link><br/>
                  <Link href="https://www.sushantkogurwar.website">Portfolio</Link><br/>
                  <Link href="/">Privacy Policy</Link>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom area */}
          <div className="text-sm text-gray-500 text-center">
            <span>&copy; 2023 CodeCrafters. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}