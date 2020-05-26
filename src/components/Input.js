import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import './Input.module.css' 

const defaultOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: true,
    allowLeadingZeros: false,
}

const Input = ({ maskOptions, ...inputProps }) => {
    const currencyMask = createNumberMask(defaultOptions)
    return <MaskedInput type="text" mask={currencyMask} {...inputProps} />
}

export default Input