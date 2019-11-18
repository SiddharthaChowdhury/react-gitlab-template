import React from "react";
import "./inputRadio.scss";

export interface IInputRadioConfig {
    checked?: boolean;
    label: string;
    styles?: React.CSSProperties;
    value: string | number;
}

interface IInputRadioProps {
    config: Array<IInputRadioConfig>;
    onChange: (result: any) => any;
    [key: string]: any;
}

export const InputRadio: React.FC<IInputRadioProps> = ({config, onChange, ...rest}) => {
    const [configInfo, setActive] = React.useState(config);

    if (!configInfo || !Array.isArray(configInfo)){
        return null;
    }

    const handleChange = (e: any) => {
        const modifiedConf: any = configInfo.map(( item, key) => {
            if(item.value === e.target.value) {
                item.checked = true;
                return item;
            }

            item.checked = false;
            return item;
        })

        setActive(modifiedConf);

        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <>
            {configInfo.map(({checked, label, styles, value}, key) => {
                return (
                    <label className="radio-container" style={styles || {}} key={key}>{label}
                        <input  type="radio" 
                                name="gradiogrp" 
                                checked={checked} 
                                className={"input"}
                                value={value}
                                onChange={handleChange}
                                {...rest}
                            />
                        <span className="checkmark"></span>
                    </label>
                )
            })}
        </>
    )
}