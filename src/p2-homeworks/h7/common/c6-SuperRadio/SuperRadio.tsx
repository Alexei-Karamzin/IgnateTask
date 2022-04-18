import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
/*import s from './SuperRadio.module.css'*/
import s from './SuperRadio2.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    /*    const mappedOptions: any[] = options ? options.map((o, i) => (
            /!*map options with key*!/
            <div className={s.formRadio}>
                <label key={name + '-' + i}>
                    <input
                        type={'radio'}
                        name={name}
                        checked={o===value}
                        value={o}
                        onChange={onChangeCallback}
                    />
                    {o}
                </label>
            </div>
        )) : []*/

    const mappedOptions: any[] = options ? options.map((o, i) => (
        /*map options with key*/
        <div>
            <label key={name + '-' + i} className={s.customCheckbox}>
                <input
                    type={'radio'}
                    name={name}
                    checked={o === value}
                    value={o}
                    onChange={onChangeCallback}
                />
                <span>{o}</span>
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
