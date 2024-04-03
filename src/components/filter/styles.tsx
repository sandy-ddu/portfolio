import styled from '@emotion/styled';
import { AlignCenter, PerfectCenter, VerticalCenter } from 'styles';

export const Filter = styled.ul`
    width:auto;
    ${PerfectCenter}
    margin:30px 0;
    li{
        color:#164aad;
        font-family:'Racing';
        font-size:2em;
        padding:0 10px;
        cursor:pointer;
        opacity:0.3;
        &.active{
            opacity:1;
        }
    }
`;