import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {ThemeProvider} from 'react-jss';
import 'semantic-ui-css/semantic.css';
import './index.css';
import Board from "./components/Board";

const lanes = [
    {
        name: 'To do', tasks: [
            {
                name: 'Finish this app',
                deadline: 'Tomorrow',
                description: 'It\'s a basic kanban app with drag \'n drop.'
            }
        ]
    },
    {
        name: 'Doing', tasks: [
            {
                name: 'Finish this app',
                deadline: 'Tomorrow',
                description: 'It\'s a basic kanban app with drag \'n drop.'
            }
        ]
    },
    {
        name: 'Verify', tasks: []
    },
    {
        name: 'Done', tasks: []
    },
];

const App = props => (
    <ThemeProvider theme={{}}>
        <Board lanes={lanes}/>
    </ThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
