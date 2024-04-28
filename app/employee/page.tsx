import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const EmployeePage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4  w-screen max-w-[3600px] justify-center items-center'>
      <h1 className='text-4xl font-bold justify-center text-center'>CURD OPERATION USING NEXT JS 14, PRISM PostgreySQL</h1>
      <Button asChild variant={'destructive'} className='bg-black text-white rounded' >
        <Link href='/employee/create'>
          Create
        </Link>
      </Button>
    </div>
  )
}

export default EmployeePage