'use client'

import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const calculadoraItens = [
    { value: '1', off: false },
    { value: '2', off: false },
    { value: '3', off: false },
    { value: '+', expression: true, off: false },
    { value: '4', off: false },
    { value: '5', off: false },
    { value: '6', off: false },
    { value: '-', expression: true, off: false },
    { value: '7', off: false },
    { value: '8', off: false },
    { value: '9', off: false },
    { value: '*', expression: true, off: false },
    { value: '0', off: false },
    { value: '.', off: true },
    { value: '=', expression: true, off: false },
    { value: '/', expression: true, off: false },
    { value: 'C', expression: true, off: false },
    { value: '%', expression: true, off: false },
  ]

  const [operation, setOperation] = useState('')

  function clear() {
    setOperation('')
  }

  function result() {
    try {
      setOperation(eval(operation).toString())
    } catch (error) {
      setOperation('falha ao calcular')
    }
  }

  function handleButtonClick(value: string) {
    setOperation((prevExpression) => prevExpression + value)
  }

  return (
    <main className="flex items-center justify-center h-screen mx-auto flex-col gap-4">
      <div className="max-w-sm bg-gray-800 shadow-lg rounded overflow-hidden ">
        <div className="px-6 pt-12">
          <div className="p-5 bg-gray-900 rounded-lg flex justify-between gap-2">
            <p className="font-bold flex items-center justify-center text-xl">
              C
            </p>
            <input
              className="font-bold text-xl bg-gray-900 flex text-right animate-pulse placeholder:opacity-20 "
              placeholder="00000000000000000000"
              value={operation}
              type="text"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 p-8 bg-gray-">
          {calculadoraItens.map((item) => {
            return (
              <button
                disabled={item.off ?? true}
                onClick={() => {
                  if (item.value === 'C') {
                    clear()
                  } else if (item.value === '=') {
                    result()
                  } else handleButtonClick(item.value)
                }}
                key={item.value}
                className={`h-12 border shadow transition-all border-gray-300 p-4 flex justify-center items-center rounded ${
                  item.expression
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'bg-gray-700 hover:bg-gray-800'
                } ${
                  item.off
                    ? 'cursor-not-allowed hover:bg-red-500'
                    : 'cursor-pointer'
                }`}
              >
                {item.value}
              </button>
            )
          })}
          <div className="col-span-2 items-center flex gap-2 justify-end pr-4">
            <Link href={'https://github.com/matheuskaully'} target="_blank">
              <Github
                size={25}
                className="hover:text-purple-500 transition-colors"
              />
            </Link>

            <Link
              href={'https://www.linkedin.com/in/matheuskaully/'}
              target="_blank"
            >
              <Linkedin
                size={25}
                className="hover:text-purple-500 transition-colors"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-2 text-sm ">
        <p>
          Codado com 💖 por{' '}
          <Link
            className="items-center hover:text-purple-500 transition-colors"
            href={'https://github.com/matheuskaully'}
          >
            Matheus Kaúlly
          </Link>
        </p>
      </div>
    </main>
  )
}
