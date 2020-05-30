import React, { Component } from 'react'
import { Input } from 'reactstrap'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';






class Brands extends Component {

    state = {

        checked: []
    }

    // handleClick = (event) => {
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }

    handleToggle = (value) => {

        const { checked } = this.state
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]


        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)


        }

        this.setState({
            checked: newChecked

        }, () => {
            console.log(newChecked)
            this.props.handleFilters(newChecked)
        })

    }

    renderList = () => (

        this.props.list ?
            this.props.list.map((value) => (
                // <li>
                //     <Input type="checkbox" className="checked" onClick={this.handleClick} onChange={this.handleToggle(value.id)} checked={this.state.checked.indexOf(value.id) !== -1} />
                //     <span className="span">{value.name}</span>
                // </li>

                <ListItem key={value.id} style={{ padding: '5px 0' }} ContainerComponent='li'>
                    <ListItemText primary={value.name} />
                    <ListItemSecondaryAction>
                        <Checkbox


                            color="primary"
                            onChange={() => this.handleToggle(value.id)}
                            checked={this.state.checked.indexOf(value.id) !== -1}
                        />
                    </ListItemSecondaryAction>

                </ListItem>




            )) : null


    )
    render() {

        return (
            <div>
                <List component='ul'>
                    {this.renderList()}
                </List>
            </div>
        )
    }
}

export default Brands
