import React from 'react';
import './CitizenTable.css'
import { FcApprove, FcDisapprove } from 'react-icons/fc';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class CitizenTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            citizenList: [],
        };
      }
     
    bindData(citizenList){
        this.setState({citizenList: citizenList})
    }  

    renderRow(citizen) {
        return (
        <TableRow key={citizen.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{citizen.id}</TableCell>
            <TableCell align="right">{citizen.name}</TableCell>
            <TableCell align="right">{citizen.isCitizen ? <FcApprove size="3em"/>: <FcDisapprove size="3em"/>}</TableCell>
            <TableCell align="right">{citizen.hasDrivingLicense ? <FcApprove size="3em"/>: <FcDisapprove size="3em"/>}</TableCell>
            <TableCell align="right">{Object.keys(citizen.children).length}</TableCell>
        </TableRow>);
    }
    
    render() {
      return (
        <div className="citizen-table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Citizen</TableCell>
                            <TableCell align="right">Driving License</TableCell>
                            <TableCell align="right">Children Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.citizenList.map((citizen, i) => this.renderRow(citizen))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      );
    }
  }

  export default CitizenTable;