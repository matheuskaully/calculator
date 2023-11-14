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
    <main className="mx-auto flex h-screen flex-col items-center justify-center gap-4">
      <div className="max-w-sm overflow-hidden rounded bg-gray-800 shadow-lg ">
        <div className="px-6 pt-12">
          <div className="flex justify-between gap-2 rounded-lg bg-gray-900 p-5">
            <p className="flex items-center justify-center text-xl font-bold">
              C
            </p>
            <input
              className="flex animate-pulse bg-gray-900 text-right text-xl font-bold placeholder:opacity-20 "
              placeholder="00000000000000000000"
              value={operation}
              type="text"
              readOnly
            />
          </div>
        </div>
        <div className="bg-gray- grid grid-cols-4 gap-4 p-8">
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
                className={`flex h-12 items-center justify-center rounded border border-gray-300 p-4 shadow transition-all ${
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
          <div className="col-span-2 flex items-center justify-end gap-2 pr-4">
            <Link href={'https://github.com/matheuskaully'} target="_blank">
              <Github
                size={25}
                className="transition-colors hover:text-purple-500"
              />
            </Link>

            <Link
              href={'https://www.linkedin.com/in/matheuskaully/'}
              target="_blank"
            >
              <Linkedin
                size={25}
                className="transition-colors hover:text-purple-500"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-2 text-sm ">
        <p>
          Codado com 💖 por{' '}
          <Link
            className="items-center transition-colors hover:text-purple-500"
            href={'https://github.com/matheuskaully'}
          >
            Matheus Kaúlly
          </Link>
        </p>
      </div>
    </main>
  )
}
