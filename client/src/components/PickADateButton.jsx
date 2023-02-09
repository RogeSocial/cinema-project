export const PickADateButton = ({btn, handleClick}) => (
    <button className="button" onClick={handleClick} disabled={btn.isDisabled}>
        {btn.text}
    </button>
);