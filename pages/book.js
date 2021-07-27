import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNovels } from './redux/actions/novels';
import Link from 'next/link'
import Pages from './components/Pages';
import Card from './components/Card';


export default function Book(props) {
  const dispatch = useDispatch()
  const [novels, setNovels] = useState([])

  useEffect(() => {
    dispatch(getNovels({
      callback: (response, error) => {
        if (!error) {
          setNovels(response?.data?.data)
        }
      }
    }))
  }, [])

  return (
    <Pages className="p-8 w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
        {
          novels?.map((item, index) => <Card key={index} data={{ ...item }} />)
        }
      </div>
    </Pages>
  )
}
