import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { textLimit } from '../utils/text';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableProduct(props) {
  const { data, handleDelete, handleUpdate } = props;

  const classes = useStyles();
  const columns = [
    { id: 'id', label: 'No', minWidth: 20 },
    { id: 'title', label: 'Judul', minWidth: 150 },
    { id: 'genre', label: 'Genre', minWidth: 70 },
    { id: 'chapter', label: 'Chapter', minWidth: 25 },
    { id: 'synopsis', label: 'Sinopsis', minWidth: 200 },
    { id: 'content', label: 'Konten', minWidth: 200 },
    { id: 'action', label: 'Aksi', minWidth: 70 },
  ];

  const _handleOpenWithData = (dataUpdate, edit) => {
    handleUpdate(true, dataUpdate, edit)
  }

  const _deleteData = (id) => {
    handleDelete(id)
  }

  const _renderHead = () => {
    return (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        {data !== [] ?
          <>
            <Table stickyHeader aria-label="sticky table">
              {_renderHead()}
              <TableBody>
                {data?.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell >
                        {index + 1}
                      </TableCell>
                      <TableCell >
                        {item?.title}
                      </TableCell>
                      <TableCell >
                        {item?.genre}
                      </TableCell>
                      <TableCell >
                        {item?.chapter}
                      </TableCell>
                      <TableCell >
                        {textLimit(item?.synopsis, 40)}
                      </TableCell>
                      <TableCell >
                        {textLimit(item?.content, 50)}
                      </TableCell>
                      <TableCell >
                        <div className="flex">
                          <EditIcon onClick={() => _handleOpenWithData(item, 'edit')} className="text-yellow-500 cursor-pointer mr-2" />
                          <DeleteIcon onClick={() => _deleteData(item.id)} className="text-red-500 cursor-pointer" />
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </>
          :
          <>
            <Table stickyHeader aria-label="sticky table">
              {_renderHead()}
            </Table>
            <div className="flex justify-center items center p-5">Data Kosong</div>
          </>
        }
      </TableContainer>
    </Paper>
  );
}
