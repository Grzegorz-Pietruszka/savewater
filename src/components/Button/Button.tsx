import React, {FC} from 'react';
import './Button.scss';

const Button: FC = ({children}:any) => {
    return (
        <button>{children}</button>
    );
};

export default Button;
