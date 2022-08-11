import { INCREMENT } from "../new/actionType";
import {put,takevery} from 'redux-saga';

function* increment(){
    yield put({type:'INCERMENT-SUCCESS'})
}

function * watchUsers(){
    yield takevery(INCREMENT,increment)
}