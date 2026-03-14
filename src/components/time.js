//import libraries
import moment from 'moment';
import { Text } from 'native-base';
import { Component } from 'react';

// create a component
class Time extends Component {

    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment( this.date || moment.now() ).fromNow();
        return (
            <Text note style={{marginHorizontal:10}}>{time}</Text>
        );
    }
}

//make this component available to the app
export default Time;