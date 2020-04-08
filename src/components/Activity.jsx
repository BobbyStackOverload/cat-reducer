import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

import UpdateName from './UpdateName';

const Activity = ({activity, name, setActivity}) => (
    <>
    <h1>What is the cat doing?</h1>
    <p>{name} is  {activity}</p>
    <button onClick={()=> setActivity('eating')}>eating</button>
    <button onClick={()=> setActivity('playing')}>playing</button>
    <button onClick={()=> setActivity('napping')}>napping</button>
    <UpdateName />
    </>
)
const mapStateToProps = state => {
    const { activity, name } = state;
    return { activity, name };
}

export default connect(
    mapStateToProps, //mapStateToProps what do I want?
    { setActivity } //mapDispatchToProps What do I want to do?
    )(Activity);