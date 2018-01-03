import React from "react";
import Task from "../Task";
import {Button, Card, Divider, Header} from "semantic-ui-react";
import injectSheet from 'react-jss';

const styles = theme => ({
    root: {
        margin: '0 15px',
        height: '100%'
    },
    card: {
        height: '100%'
    },
    header: {
        marginBottom: 15
    }
});

const Lane = ({lane: {name, tasks}, classes}) => (
    <div className={classes.root}>
        <Card className={classes.card}>
            <Card.Content>
                <Card.Header className={classes.header}>
                    <Header as='h2'>
                        {name}
                    </Header>
                </Card.Header>
                <Divider/>
                {tasks.length === 0
                    ? <Card.Description>No tasks. Add some tasks or drag them here!</Card.Description>
                    : <Card.Group>
                        {tasks.map((t, i) => <Task key={i} task={t}/>)}
                    </Card.Group>}
            </Card.Content>
            <Card.Content extra>
                <Button primary>Add a task</Button>
            </Card.Content>
        </Card>
    </div>
);

export default injectSheet(styles)(Lane);