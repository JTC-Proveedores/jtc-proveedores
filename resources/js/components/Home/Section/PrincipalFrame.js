import React, {useEffect, useState} from 'react'
import {getWindowSize} from "../../Functions/General";

const PrincipalFrame = ({}) => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let height = windowSize.innerHeight - 80;

    return(
        <div className={'principalSect'} style={{height: (height + 'px')}}>
            <div className={'container'} style={{height: (height + 'px')}}>
                <div className={'title-bg'}>
                    <h1>Más que un proveedor, tu aliado estratégico</h1>
                    <div>
                        <a className="btn btn-lg btn-jtc" href="https://api.whatsapp.com/send?phone=51900169121" role="button" target={'_blank'}>
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PrincipalFrame;
