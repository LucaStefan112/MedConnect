import { useRouter } from 'next/router';
import React from 'react'

export default function Analysis() {
  // get id and userId from router
  // get analysis from backend
  const router = useRouter();
  const { id, userId } = router.query;

  return (
    <div className='main_page overflow-y-scroll hide_scroll max-h-[40em]'>
      <div className='w-full overflow-y-scroll hide_scroll max-h-[40em]'>
        <iframe className='w-10/12 h-[40em]' src={`http://127.0.0.1:5500/${userId}/${id}`}></iframe>
      </div>
    </div>
  )
}
