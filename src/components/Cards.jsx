import React from 'react'
import Data from '../../data.json'

const Cards = () => {
  return (
    <div className="w-screen h-screen mx-auto">
      <div id="cards">
        <ul>
          {Data.map((post) => (
            <li
              key={post.id}
              className="card flex my-2 mx-36 justify-between border p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src={post.logo}
                    alt={`${post.company} logo`}
                    className="w-12 h-12"
                  />
                </div>
              </div>

              <div className="ml-4 flex-1">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-1 font-bold">
                    {post.company}
                  </span>
                  {post.new && (
                    <span className="bg-blue-500 mr-1 text-white text-xs px-2 py-1 rounded-full">
                      NEW!
                    </span>
                  )}
                  {post.featured && (
                    <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-semibold">{post.position}</h2>
                <div className="text-gray-500">
                  <span>{post.postedAt}</span> • <span>{post.contract}</span> •{' '}
                  <span>{post.location}</span>
                </div>
              </div>
              <div className="flex items-center">
                {post.languages.map((language, index) => (
                  <span
                    key={index}
                    className="ml-1 bg-[hsl(180,31%,95%)] font-bold text-xs px-3 py-1 rounded text-[hsl(180,29%,50%)] "
                  >
                    {language}{' '}
                  </span>
                ))}

                {post.tools.map((tool, index) => (
                  <span
                    className="ml-1 bg-[hsl(180,31%,95%)] font-bold text-xs px-3 py-1 rounded text-[hsl(180,29%,50%)]"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}

                {post.role && (
                  <span className="ml-1 bg-[hsl(180,31%,95%)] font-bold text-xs px-3 py-1 rounded text-[hsl(180,29%,50%)]">
                    {post.role}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Cards
