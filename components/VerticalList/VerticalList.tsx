import React from 'react'

export interface IVerticalListProps {
  className?: string;
  list: {
    title: string;
    onClick?: () => void;
    icons?: JSX.Element[];
  }[];
}

export default function VerticalList({ list, className }: IVerticalListProps) {  
  return (
    <div className={`
      w-full bg-blue-400 rounded-xl 
      border-[1em] border-blue-400
      overflow-y-scroll
      ${className}`}
    >
      {
        list.map((item, index) => (
            <div key={ index } 
              className='
                flex flex-row justify-between 
                mt-2 mb-2 p-4
                bg-blue-100
                rounded-xl'
              >
              <p className='text-lg text-blue-900 hover:cursor-pointer'
                onClick={ () => item.onClick && item.onClick() }  
              >
                { item.title }
              </p>
              {
                item.icons
              }
            </div>
        ))
      }
    </div>
  )
}
