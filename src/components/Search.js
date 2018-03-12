import React, { Component } from 'react';
import { FormGroup,FormControl,MenuItem, InputGroup, DropdownButton } from 'react-bootstrap';
import './Search.css';


class Search extends Component {
    render() {
        return (
            <div id="search">
            <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" />
                        <DropdownButton
                            componentClass={InputGroup.Button}
                            id="input-dropdown-addon"
                            title="Action"
                        >
                            <MenuItem key="1">Item</MenuItem>
                        </DropdownButton>
                    </InputGroup>
                </FormGroup>
            </form>
            </div>
        );
    }

}

export default Search;