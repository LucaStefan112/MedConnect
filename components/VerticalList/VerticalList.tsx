import { useRouter } from 'next/router';
import React from 'react'

export default function VerticalList({ list, className, onClick }: { list: any[], className?: string, onClick?: (item?: any) => void }) {  
  return (
    <div className={`w-full bg-blue-400 rounded-xl overflow-y-scroll p-4 ${className}`}>
      {
        list.map((item, index) => (
            <div key={index} 
              onClick={ () => onClick && onClick() }  
              className='
                flex flex-row justify-between 
                mt-2 mb-2 p-4
                rounded-xl 
                bg-blue-100'
              >
              <p className='text-lg text-blue-900'>{item.title}</p>
            </div>
        ))
      }
    </div>
  )
}
