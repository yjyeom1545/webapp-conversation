import React from 'react'
import s from './card.module.css'

interface PropType {
  children: React.ReactNode
}
function Card({ children }: PropType) {
  return (
    <div className={`${s.card} box-border w-full flex flex-col items-start px-4 py-3 rounded-lg border-solid border border-gray-200  cursor-pointer hover:border-primary-300`}>
      {children}
    </div>
  )
}

export default Card
