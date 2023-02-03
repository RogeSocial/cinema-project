export const PickADateButton = ({btn, handleClick}) => (
    /*<button className={`button" ${btn.active ? 'active' : 'inactive'}`} onClick={handleClick}>*/
        <button className="button" onClick={handleClick} disabled={btn.isDisabled}>
        {/*{buttons.text}*/}
        {btn.text}
    </button>
);


