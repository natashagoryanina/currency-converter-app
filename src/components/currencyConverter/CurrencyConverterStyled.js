import styled from "styled-components";

export const CurrencyConverterContainer = styled.div`

    .back-btn {
        margin: 15px 0 0 15px;
        padding: 2px 10px;

        background-color: #8cb3e6;
        border: 1px solid #fff;
        border-radius: 12px;
        color: #061E47;

        font-family: inherit;
        font-weight: 600;
        font-size: 17px;
        cursor: pointer;

        transition: box-shadow .2s ease-in-out;
    }

    .back-btn:not([disabled]):hover {
        background-color: #fff;
        box-shadow: 0 0 .25rem rgba(255, 255, 255, 0.5), -.125rem -.125rem 1rem rgba(255, 255, 255, 0.5), .125rem .125rem 1rem rgba(255, 255, 255, 0.5);
    }

    .currency-converter {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 100px;

        &_wrapper {
            &:not(:last-child) {
                margin-right: 15px;
            }
        }

        &_input {
            margin-left: 15px;
            padding: 3px 13px;

            font-family: inherit;
            font-weight: 600;
            font-size: 17px;

            color: #061E47;
            background-color: #8cb3e6;
            border: 1px solid #ffffffcc;
            border-bottom-left-radius: 12px;
            border-top-left-radius: 12px;

            cursor: pointer;

            &:focus {
                outline: none;
            }
        }

        &_label {
            font-weight: 600;
            font-size: 17px;
            color: #fff;
        }

        &_select {
            padding: 3px 13px;
            width: 100px;

            appearance: none;
            outline: none;
            color: #8cb3e6;
            background-color: #061E47;
            border: 1px solid #ffffffcc;
            border-bottom-right-radius: 12px;
            border-top-right-radius: 12px;

            text-align: center;
            font-family: inherit;
            font-size: inherit;
            font-weight: inherit;
            cursor: pointer;
        }
    }

`;