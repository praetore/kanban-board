import React from "react";
import Lane from "../Lane";
import injectSheet from 'react-jss';
import {Button} from "semantic-ui-react";

const styles = theme => ({
    container: {
        display: 'flex',
    },
    button: {
        minWidth: 130,
        maxHeight: 40,
        marginRight: '15px !important'
    }
});

const Board = ({lanes, classes}) => (
    <div className={classes.container}>
        {lanes.map((lane, i) => <Lane lane={lane} key={i}/>)}
        <Button primary className={classes.button}>Add a lane</Button>
    </div>
);

export default injectSheet(styles)(Board);