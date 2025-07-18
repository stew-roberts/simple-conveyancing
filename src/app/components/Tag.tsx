import React from 'react'
import { FontAwesomeIcon } from './FontAwesomeIcon'

type TagProps = {
  title: string
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <span className="bg-gray-400 text-white rounded-md mr-3 px-2 py-1 text-sm flex items-center">
        <FontAwesomeIcon icon="FaTag" className="mr-1 text-white" widthClass="w-4" heightClass='h-4' />
        {title}
    </span>
  )
}

export default Tag