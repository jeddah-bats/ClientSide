import React, { Component } from 'react';
import { Button, FormGroup, FormControl, MenuItem, InputGroup, DropdownButton } from 'react-bootstrap';
import './css/Search.css';


class Search extends Component {
    render() {
        return (
            <div id="search">
                <form>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Button>
                                <Button>ابحث</Button>
                            </InputGroup.Button>
                            <FormControl type="text" />
                        </InputGroup>
                    </FormGroup>
                </form>
            </div>
        );
    }

}

export default Search;