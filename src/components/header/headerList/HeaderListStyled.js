import styled from "styled-components";

export const HeaderListContainer = styled.div`
    display: flex;
    align-items: center;

    .header-list {
        display: flex;
        align-items: center;

        &_item {
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;

            &:not(:last-child) {
                margin-right: 20px;
            }
        }

        &_link {
            text-decoration: none;
            color: #fff;

            &-active {
                text-decoration: none;
                color: #89b8f5;
            }

            &:hover {
                color: #68A4F1;
            }
        }
    }
`;
