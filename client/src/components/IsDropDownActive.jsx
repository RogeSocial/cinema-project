import {PickADateList} from "./PickADateList.jsx";

import React, {useEffect} from 'react';

export const IsDropDownActive = ({btn, marginLeft1, open, openDatePicker, setDateString, setDateValue, setTestMargin, testMargin}) => (
    <div onClick={openDatePicker} style={{marginLeft: `${btn.position}px` }} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'} `}>
        {console.log("marginLeft1 " + marginLeft1)}
        <PickADateList btn={btn}
                       setOpen={openDatePicker}
                       setDateString={setDateString}
                       setDateValue={setDateValue} />
    </div>
);

/*export const IsDropDownActive = ({btn, open, openDatePicker, setDateString, setDateValue, setTestMargin, testMargin}) => {
    useEffect(() => {
        console.log('marginLeft changed');
    }, [setTestMargin(testMargin)]);

    return (
        <div onClick={openDatePicker} style={{marginLeft: `${testMargin}px`}} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'} `}>
            {console.log("setTestMargin " + setTestMargin)}
            <PickADateList btn={btn}
                           setOpen={openDatePicker}
                           setDateString={setDateString}
                           setDateValue={setDateValue} />
        </div>
    );
};*/




/*
<div onClick={openDatePicker} style={{marginLeft: `${btn.position}px`}} className={`calender-dropdown-trigger ${open ? 'active' : 'inactive'}`}>*/
/*
style={marginLeft1 ? {marginLeft: `${marginLeft1}px`} : {marginLeft: '400px'} }*/
