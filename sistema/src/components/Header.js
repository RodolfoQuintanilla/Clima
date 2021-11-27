import React, { Fragment, useState } from 'react';

const Header = ({ titulo }) => {

    //const [state, setstate] = useState(initialState);

    return (

        <Fragment>
            <nav>
                <div className="nav-wrapeer light-blue darken-2">
                    <a href="#!" className="brand-logo">{titulo}</a>
                </div>
            </nav>
        </Fragment>

    );

};

export default Header;