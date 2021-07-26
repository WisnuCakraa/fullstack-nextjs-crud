import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getNovels } from './redux/actions/novels';

import Pages from './components/Pages';
import Card from './components/Card';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';

export default function Home(props) {
  const dispatch = useDispatch()
  const [novels, setNovels] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    dispatch(getNovels({
      callback: (response, error) => {
        if (!error) {
          setNovels(response?.data?.data)
        }
      }
    }))
  }, [])

  const _handleOpen = () => {
    setOpenModal(true)
  }

  const _handleClose = () => {
    setOpenModal(false)
  }
  return (
    <>
      <Modal
        open={openModal}
        onClose={_handleClose}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-white w-3/6 h-3/6 rounded-xl border border-gray-200">
            <div className="flex justify-end items-end p-2" onClick={_handleClose} variant="contained" color="primary">
              <CloseIcon className="hover:text-blue-500 cursor-pointer" />
            </div>
            <div className="p-3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6 md:grid-cols-2 md:gap-8">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="standard-basic" label="Standard" />
              </div>
            </div>
            <div className="p-4  flex items-center justify-center">
            </div>
          </div>
        </div>
      </Modal>

      <Pages className="p-8 w-full">
        <div className="bg-white flex justify-end">
          <Button onClick={_handleOpen} variant="contained" color="primary">
            <AddIcon />
          </Button>
        </div>
        <div class="flex-1 max-w-4xl mx-auto p-10">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6 md:grid-cols-3 md:gap-8" >
            {
              novels?.map((item, key) => <Card title={item?.title} content={item?.synopsis} />)
            }
          </div>
        </div>
      </Pages>
    </>
  )
}
