import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import spreadsheet from '../api/spreadsheet';
import Header from './Header';
import Home from './Home';
import Process from './Process';
import Projects from './Projects';
import Project from './Project';
import './../style/fonts.css'
import './../style/style.css'

class App extends React.Component {

    state = { 
        contents: [],
    }
    
    componentDidMount = async (term) => {
        const response = await spreadsheet.get('1/public/full?alt=json', {
            params: { query: term }
        });
        
        //console.log(response.data.feed.entry);
        this.setState({contents: response.data.feed.entry});

    }

    

    render() {

        return (
            <div>
                <BrowserRouter>
                    <div className = "ui container">
                        <Header />
                        <Route exact path = "/">
                            <Home contents={this.state.contents}/>
                        </Route>
                        <Route exact path = "/process">
                            <Process />
                        </Route>
                        <Route exact path = "/projects">
                            <Projects contents={this.state.contents}/>
                        </Route>
                        <Route exact path="/project/:id" component={(props) => 
                            <Project {...props} contents={this.state.contents}/>
                            }/>
                    </div>
                </BrowserRouter>
            </div>

        );

    }

};


export default App;