import {Button, Card} from "semantic-ui-react";
import withStyles from 'react-jss';
import React from "react";

const styles = theme => ({
    buttonContainer: {
        marginTop: 20
    }
});

const Task = ({task, classes}) => (
    <Card>
        <Card.Content>
            <Card.Header>
                {task.name}
            </Card.Header>
            <Card.Meta>
                {task.deadline}
            </Card.Meta>
            <Card.Description>
                {task.description}
            </Card.Description>
            <Card.Content extra>
                <div className={classes.buttonContainer}>
                    <div className='ui two buttons'>
                        <Button basic color='yellow'>Edit</Button>
                        <Button basic color='red'>Remove</Button>
                    </div>
                </div>
            </Card.Content>
        </Card.Content>
    </Card>
);

export default withStyles(styles)(Task);