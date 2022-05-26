import React from 'react';
import './CitizenFilter.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

class CitizenFilter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filterList: [],
            isCitizen: 'All',
            name: '',
            hasDrivingLicense: 'All',
            childrenCount: ''
        };
      }
     
    handleIsCitizenChange(e){
        this.setState({isCitizen:e.target.value});
    }  

    handleIsCitizenChange(e){
        this.setState({isCitizen:e.target.value});
    }  

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleHasDrivingLicenseChange(e){
        this.setState({hasDrivingLicense:e.target.value});
    }  

    handleChildrenCountChange(e){
        this.setState({childrenCount:e.target.value});
    } 

    prepareFilterList(){
        const filterList = [];
        if(this.state.isCitizen !== 'All') {
            filterList.push({
                "field": "isCitizen",
                "operator": "EQUALS",
                "value": this.state.isCitizen
            });
        }

        if(this.state.name !== "") {
            filterList.push({
                "field": "name",
                "operator": "LIKE",
                "value": this.state.name
            });
        }

        if(this.state.hasDrivingLicense !== 'All') {
            filterList.push({
                "field": "hasDrivingLicense",
                "operator": "EQUALS",
                "value": this.state.hasDrivingLicense
            });
        }

        if(this.state.childrenCount !== '') {
            filterList.push({
                "field": "childrenCount",
                "operator": "EQUALS",
                "value": this.state.childrenCount
            });
        }

        this.props.search(filterList);
        
    }

    render() {
      return (
        <div className="citizen-filter">
            <div class="flex-container">
                <Box sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}>
                    <FormControl fullWidth>
                        <InputLabel id="citizen-select-label">Citizen</InputLabel>
                        <Select
                        labelId="citizen-select-label"
                        id="citizen-select"
                        value={this.state.isCitizen}
                        label="Citizen"
                        onChange={this.handleIsCitizenChange}
                        >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={true}>Citizen</MenuItem>
                        <MenuItem value={false}>Not Citizen</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}>
                    <FormControl fullWidth>
                        <InputLabel id="driving-select-label">Driving License</InputLabel>
                        <Select
                        labelId="driving-select-label"
                        id="driving-select"
                        value={this.state.hasDrivingLicense}
                        label="Driving License"
                        onChange={this.handleHasDrivingLicenseChange}
                        >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={true}>Have</MenuItem>
                        <MenuItem value={false}>Have not</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" value={this.state.name} onChange={(e) => this.handleNameChange(e)} label="Name" variant="outlined" />
                    <TextField
                        id="outlined-number"
                        label="Children Count"
                        type="number"
                        value={this.state.childrenCount} onChange={(e) => this.handleChildrenCountChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    >
                    <Button onClick={() => this.prepareFilterList()} variant="contained">Search</Button>
                 </Box>
                
            </div>
        </div>
      );
    }
  }

  export default CitizenFilter;