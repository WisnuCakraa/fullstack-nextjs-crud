import React from 'react'
import Images from 'next/image';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import RegisterVector from '../public/undraw_Forms.svg';
import TextField from '@material-ui/core/TextField';

export default function login() {
  return (
    <div className="grid sm:grid-cols-1 xl:grid-cols-2 md:grid-cols-2">
      <div className="bg-blue-300">
        <div className="p-10">
          <h1 className="text-5xl font-bold text-center">LOGIN</h1>
          <div className="bg-white rounded-xl mt-10">
            <div className="p-8">
              <div className="grid sm:-cols-1 xl:grid-cols-1 md:grid-cols-1">
                <TextField name="username" label="Username" variant="standard" />
              </div>
              <div className="grid mt-4 sm:-cols-1 xl:grid-cols-1 md:grid-cols-1">
                <TextField name="password" label="Password" variant="standard" />
              </div>
              <div className="grid mt-8 sm:-cols-1 xl:grid-cols-1 md:grid-cols-1">
                <Button type="submit" variant="contained" color="secondary">
                  Register
                </Button>
              </div>
              <h1 className="mt-8 mb-8">sudah punya akun ? <Link href="/login"><a className="font-bold text-blue-500">silahkan login</a></Link></h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Images src={RegisterVector} width={600} height={500} />
      </div>

    </div>
  )
}
