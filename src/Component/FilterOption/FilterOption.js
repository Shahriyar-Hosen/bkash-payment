import React, { useState } from 'react';
import { ReactComponent as Down } from "../../images/Icon/Down.svg";
import { ReactComponent as UpIcon } from "../../images/Icon/Up.svg";

const SelectInput = ({ options, selectedOption, setSelectedOption }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-[200px] relative text-lg'>
            <button onClick={() => setOpen(!open)} className={`flex justify-between w-100 items-center py-1 px-2 ${open && "bg-slate-100 rounded-t-md"} `}>
                <div>{selectedOption === undefined || selectedOption === "Default" ? "Filter by price" : selectedOption}</div>
                {!open ? <Down width={20} height={20} fill={"gray"} /> : <UpIcon width={20} height={20} fill={"gray"} />}

            </button>
            <div
                className={`${!open ? "hidden" : null} absolute z-10 w-100 bg-slate-100 cursor-pointer rounded-b-md transition delay-700 duration-300 `}

            >
                {options.map((option) => (
                    <>
                        <div className="w-100 w-100 py-1 px-2 hover:bg-[#FF4A17] hover:text-white transition delay-100" onClick={() => {
                            setSelectedOption(option);
                            setOpen(false)
                        }}> {option} </div>
                        <hr />
                    </>
                ))}
            </div>
        </div>
    );
};

export default SelectInput;