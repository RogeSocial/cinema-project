export const PickADateButton = ({btn, handleClick}) => (
    <button className="button date-buttons" onClick={handleClick} disabled={btn.isDisabled}>
        {btn.text}
    </button>
);