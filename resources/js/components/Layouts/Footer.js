import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {useMediaQuery} from "react-responsive";

const Footer = ({url}) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });
    return(
        <div className={'custom-footer'}>
            <div className={'row mx-0'}>
                <div className={'col-12 col-md-3'}>
                    Footer
                </div>
            </div>
        </div>
    )
};

const element = document.getElementById('footer');

if (element) {

    const props = Object.assign({}, element.dataset);

    ReactDOM.render(<Footer {...props} />, element);
}
