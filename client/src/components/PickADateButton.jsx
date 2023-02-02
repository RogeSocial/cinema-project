export const PickADateButton = ({btn, handleClick}) => (
    /*<button className={`button" ${btn.active ? 'active' : 'inactive'}`} onClick={handleClick}>*/
        <button className="button" onClick={handleClick}>
        {/*{buttons.text}*/}
        {btn.text}
    </button>
);


