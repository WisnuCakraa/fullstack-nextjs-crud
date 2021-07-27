import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import Modal from "@material-ui/core/Modal";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function ModalForm(props) {
  const { openModal, handleClose, openWithData, onChangeForm, handleSubmitForm } = props;

  const handleOnChange = (e) => {
    onChangeForm(e)
  }

  const handleSubmit = (e) => {
    handleSubmitForm(e)
  }
  return (
    <Modal open={openModal} >
      <div className="flex justify-center items-center h-full">
        <div className="bg-white min-w-3/6 min-h-3/6 rounded-xl border border-gray-200">
          <div className="flex justify-end items-end p-2" variant="contained" color="primary">
            <CloseIcon onClick={handleClose} className="hover:text-blue-500 cursor-pointer" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 md:grid-cols-1 md:gap-8">
                <TextField name="title" onChange={handleOnChange} value={openWithData?.title} label="Judul Buku" variant="outlined" />
              </div>
              <div className="pt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 md:gap-8">
                <TextField name="genre" onChange={handleOnChange} value={openWithData?.genre} label="Genre" variant="outlined" />
                <TextField
                  name="chapter"
                  onChange={handleOnChange}
                  value={openWithData?.chapter}
                  variant="outlined"
                  type="number"
                  label="Chapter"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
                  }}
                />
              </div>
              <div className="pt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 md:grid-cols-1 md:gap-8">
                <TextField name="synopsis" onChange={handleOnChange} value={openWithData?.synopsis} label="Synopsis" variant="outlined" multiline minRows={3} maxRows={5} />
              </div>
              <div className="pt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1 md:grid-cols-1 md:gap-8">
                <TextField name="content" onChange={handleOnChange} value={openWithData?.content} label="Content" variant="outlined" multiline minRows={3} maxRows={5} />
              </div>
            </div>
            <div className="mb-3 mr-3 flex items-end justify-end">
              <Button type="submit" variant="contained" color="secondary">
                {openWithData ? 'Save' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
