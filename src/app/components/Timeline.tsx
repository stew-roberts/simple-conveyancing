import React from 'react'
import type { TimelineType, TimelineItemType } from '@sanity/types'

type TimelineProps = TimelineType & {
  className?: string
}

const Timeline: React.FC<TimelineProps> = ({ _type, title, strapline, items, className = '' }) => {
  return (
    <section
      id={_type}
      className={`container mx-auto px-4 py-12 ${className}`}
      aria-label={title || 'Timeline'}
    >
      {title && (
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
      )}

      {strapline && (
        <p className="text-lg mb-10 max-w-3xl">{strapline}</p>
      )}

      <ol className="relative border-l-2 border-gray-600 pl-6">
        {items.map((item: TimelineItemType, index: number) => (
          <li
            key={`${item.title}-${index}`}
            className="mb-12"
          >
            <div className="flex flex-start items-center">
              <div className="bg-pink-700 w-4 h-4 flex items-center justify-center rounded-full -ml-8 mr-5 -mt-2"></div>
              <h4 className="text-xl -mt-2">{item.title}</h4>
            </div>
            
            <div className="ml-4">

              {(item.dateRange || item.location) && (
                <div className="text-sm mt-1">
                  {item.dateRange}
                  {item.dateRange && item.location ? ' · ' : ''}
                  {item.location}
                </div>
              )}

              <p className="mt-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Timeline