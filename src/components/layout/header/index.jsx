import './index.scss';
import { useState } from 'react';
export const Header = () => {

    const [isOpen, setIsOpen] = useState(true)
    function onClickHeaderBtn() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="header">
            <button className="btn" onClick={onClickHeaderBtn}>
                show/hide
            </button>
            Header
        </div>
    )
}