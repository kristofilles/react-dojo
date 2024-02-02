type ButtonProps = {
    callback: () => void;
    disabled: boolean;
    label: string;
}

const Button = ({callback, disabled, label}: ButtonProps) => {
    const handleClick = () => {
        callback();
    }

    return <button className="btn" onClick={handleClick} disabled={disabled}>{label}</button>
}

export default Button;