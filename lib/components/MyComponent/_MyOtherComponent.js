import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {action, observable} from 'mobx-react';

@observer
export default class _MyOtherComponent extends Component {

    @observable counter = 0;

    @action increment = () => {
        this.counter = this.counter + 1;
    };

    render() {
        return (
            <button onClick={this.increment}>{this.counter}</button>
        );
    }
}
