import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getNovels, deleteNovels, addNovels, updateNovels } from './redux/actions/novels';

import Pages from './components/Pages';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import ModalForm from './components/ModalForm';
import TableProduct from './components/TableProduct';

export default function Product() {
  const [openModal, setOpenModal] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [isAdd, setIsAdd] = useState('')
  const [updateTable, setUpdateTable] = useState([]);
  const [novels, setNovels] = useState([])
  const [textField, setTextField] = useState({
    title: '',
    genre: '',
    chapter: '',
    synopsis: '',
    content: '',
  });

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNovels({
      callback: (response, error) => {
        if (!error) {
          setNovels(response?.data?.data)
        }
      }
    }))
  }, [])

  const _handleOpen = (add) => {
    setIsAdd(add)
    setOpenModal(true)
  }

  const _handleClose = () => {
    setUpdateTable([])
    setTextField([])
    setOpenModal(false)
  }

  const handleFields = (e) => {
    e.preventDefault()
    const name = e.target.getAttribute('name');

    setTextField({
      ...textField,
      [name]: e.target.value
    });

    setUpdateTable({
      ...updateTable,
      [name]: e.target.value
    });
  }

  const _handleCreateNovels = (e) => {
    e.preventDefault()
    const updateMyNovelsData = () => {
      return dispatch(getNovels({
        callback: (response, error) => {
          if (!error) {
            setNovels(response?.data?.data)
          }
        }
      }))
    }
    if (isAdd === 'add') {
      let param = textField;
      dispatch(addNovels({
        params: param,
        callback: (res, err) => {
          if (!err) {
            setOpenSnackbar(true)
            updateMyNovelsData()
            setOpenModal(false)
          }
        }
      }))
    } else if (isAdd === 'edit') {
      let param = updateTable;
      dispatch(updateNovels({
        params: param,
        callback: (res, err) => {
          if (!err) {
            setOpenSnackbar(true)
            updateMyNovelsData()
            setOpenModal(false)
          }
        }
      }))
    }
  }

  const _handleDelete = (e) => {
    let param = e;

    const updateMyNovelsData = () => {
      return dispatch(getNovels({
        callback: (response, error) => {
          if (!error) {
            setNovels(response?.data?.data)
          }
        }
      }))
    }
    dispatch(deleteNovels({
      params: param,
      callback: (item, err) => {
        if (!err) {
          setOpenSnackbar(true)
          updateMyNovelsData()
        }
      }
    }))
  }
  const _handleUpdate = (e, data, edit) => {
    setIsAdd(edit)
    setUpdateTable(data)
    setOpenModal(e)
  }
  return (
    <>
      <ModalForm openModal={openModal} handleSubmitForm={_handleCreateNovels} onChangeForm={handleFields} openWithData={updateTable} handleClose={_handleClose} />
      <Pages className="p-8 w-full">
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert severity="success">
            Data Updated!
          </Alert>
        </Snackbar>
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
          Dev Komik / Novel
        </h3>
        <div className="bg-white flex justify-end mt-3">
          <Button onClick={() => _handleOpen('add')} variant="contained" color="primary">
            <AddIcon />
          </Button>
        </div>
        <div className="py-4">
          <TableProduct handleUpdate={_handleUpdate} handleDelete={_handleDelete} data={novels} />
        </div>
      </Pages>
    </>
  )
}
