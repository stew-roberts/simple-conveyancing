import React from 'react'
import { AddressType } from '@cms/types'
import ContactForm from './ContactForm'
import TextOnly from './TextOnly'
import { Address } from './Address'
import { PortableTextBlock } from '@portabletext/types'
import { FontAwesomeIcon } from './FontAwesomeIcon'

type Props = {
  title: string;
  text: PortableTextBlock[];
  address: AddressType;
  email: string
}

function Contact(props: Props) {
  return (
    <div className="container mx-auto">
        <TextOnly title={props.title} text={props.text} />
        <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex justify-center items-center">
                <div className=" bg-dark-blue-900 rounded-md p-8 w-96 md:w-[48rem] min-h-[28rem]">
                <ContactForm />
                </div>
            </div>
            <div className="flex">
                <div className=" bg-pink-700 rounded-md p-8 w-[24rem] min-h-[28rem]">
                    <div className="p-4">
                        <FontAwesomeIcon icon='FaBuilding' color='text-white' />
                        <Address address={props.address} />
                    </div>

                    <div className="p-4">
                        <FontAwesomeIcon icon='FaEnvelope' color='text-white' />
                        <a href={`mailto:${props.email}`} rel="noopener noreferrer" className="text-white text-xl hover:underline">
                            {props.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact