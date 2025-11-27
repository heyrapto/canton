"use client"

import PageLayout from '../components/layout/page-layout'
import { blogPosts, blogCategories } from '@/constants/insights'
import { useState, useMemo, useEffect, startTransition } from 'react'
import Image from 'next/image'
import { BiSearch, BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import Link from 'next/link'

const POSTS_PER_PAGE = 9

const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const categoryMatch = selectedCategory === "All" || 
        post.category.toLowerCase() === selectedCategory.toLowerCase()
      
      const searchMatch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  // Reset to page 1 when filters change
  useEffect(() => {
    startTransition(() => {
      setCurrentPage(1)
    })
  }, [selectedCategory, searchQuery])

  return (
    <PageLayout 
      title="Insights and resources" 
      description="Stay up-to-date with the Canton Network as we collaboratively shape the future of finance" 
      hasBgImage
    >
      <section className='max-w-[1440px] mx-auto py-16 px-6'>
        {/* Filter and Search Section */}
        <div className="flex justify-between items-center mb-12 gap-8">
          {/* Category Filters */}
          <div className="flex gap-4 flex-wrap">
            {blogCategories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-3xl font-medium transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[300px]">
            <input
              type="text"
              placeholder="Search the blog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <BiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {paginatedPosts.map((post) => (
              <Link href={post.slug} key={post.id}>
                <div className='h-[300px] flex flex-col justify-between p-10 rounded-3xl bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer'>
                  <div>
                    <p className='text-purple-600 text-sm font-medium mb-3 capitalize'>
                      {post.category}
                    </p>
                    <p className='text-sm text-gray-600 mb-3'>{post.date}</p>
                    <h2 className='text-2xl font-semibold leading-tight'>
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <strong className="text-base">{post.author}</strong>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No blog posts found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <BiChevronLeft className="text-2xl" />
            </button>

            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full font-medium transition-colors ${
                    currentPage === pageNum
                      ? 'bg-purple-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <BiChevronRight className="text-2xl" />
            </button>
          </div>
        )}
      </section>
    </PageLayout>
  )
}

export default InsightsPage