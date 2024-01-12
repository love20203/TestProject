'use client'

import { Suspense, useState } from 'react';
import { UserChart } from '@/components/ui/dashboard/UserChart';

const Page = () => {
  return(
    <>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <div className='w-full h-full'>
      <UserChart />
    </div>
    {/* </Suspense> */}
    </>
  )
}

export default Page;