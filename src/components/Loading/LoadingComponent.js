import React from 'react';
import styleLoading from './LoadingComponent.module.css'
import {useSelector} from "react-redux";

function LoadingComponent() {

    const {isLoading} = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img alt='' height={150} src='./img/Spin.gif'/>
            </div>
        );
    } else {
        return ''
    }
}

export default LoadingComponent;