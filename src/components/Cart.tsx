"use client"
import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import {  ShoppingCart } from 'lucide-react'
import { buttonVariants } from "./ui/button";
import { Separator } from '@radix-ui/react-separator'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

const Cart = () => {
    const itemCount = 1
    const fee = 100

  return <Sheet>
    <SheetTrigger className='group -m-2 flex items-center p-2'>
         <ShoppingCart
         aria-hidden='true'
         className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
         />
         <span className='ml-2 text-sm font-medium text-gray-700 group-hover: text-grey-800'>
            0
         </span>
    </SheetTrigger>
    <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2 pr-6'>
            <SheetTitle>cart(0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
            <>
              <div className= 'flex w-full flex-col pr-6'>
                 {/* TODO: cart logic */}
                cart items 
              </div>
              <div className='space-y-4 pr-6'>
                <Separator />
                <div className='space-y-1.5 text-sm'>
                    <div className='flex'>
                        <span className='flex-1 text-sm text-gray-800'>Shipping</span>
                        <span className='text-sm font-medium text-gray-800'>free</span>
                    </div>
                    <div className='flex'>
                        <span className='flex-1 text-sm text-gray-800'>Transaction Fee</span>
                        <span className='text-sm font-medium text-gray-800'>{formatPrice(fee)}</span>
                    </div>
                    <div className='flex'>
                        <span className='flex-1 text-sm text-gray-900'>Total </span>
                        <span className='text-sm font-medium text-gray-800'>{formatPrice(fee)}</span>
                    </div>
                </div>
                <SheetFooter>
                    <SheetTitle asChild>
                        <Link
                          href='/cart'
                          className={buttonVariants({
                            className: 'w-full',
                        })}
                        > Continue to Checkout</Link>
                    </SheetTitle>
                </SheetFooter>
              </div>
            </>
        ) : (<></>)}
    </SheetContent>
  </Sheet>
}

export default Cart