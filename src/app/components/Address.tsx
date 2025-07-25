import React from 'react'
import { AddressType } from '@cms/types'

type Props = {
  address: AddressType
};

export const Address: React.FC<Props> = ({ address }) => {

  return (
    <address className="not-italic text-sm leading-relaxed text-white">
      {address?.mapLink ? (
        <a
          href={address.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <p>{address.line1}</p>
          <p>{address.line2}</p>
          <p>{address.city}</p>
          <p>{address.county}</p>
          <p>{address.postcode}</p>
        </a>
      ) : (
        <div>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
            <p>{address.city}</p>
            <p>{address.county}</p>
            <p>{address.postcode}</p>
        </div>
      )}
    </address>
  )
}