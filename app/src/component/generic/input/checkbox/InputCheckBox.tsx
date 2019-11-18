  
import React from "react";
import "./inputCheckBox.scss";

export interface IInputCheckBoxConfig {
    checked?: boolean;
    label?: string;
    styles?: React.CSSProperties;
    onChange?: (status: boolean) => any;
}

interface IInputCheckBoxProps {
    config: IInputCheckBoxConfig;
    [key: string]: any;
}

export const InputCheckBox: React.FC<IInputCheckBoxProps> = ({config, ...rest}) => {
    const {checked, label, styles, onChange} = config;
    const [isChecked, setChecked] = React.useState(!!checked);

    const handleChange = (e: any) => {
        const status = !isChecked;
        setChecked(status);

        if(onChange) {
            onChange(status);
        }
    }

    return (
        <label className="container" style={styles || {}}>{label}
            <input type="checkbox" 
                checked={isChecked} 
                className="input"
                onChange={handleChange}
                {...rest}
            />
            <span className="checkmark"/>
        </label>
    )
}