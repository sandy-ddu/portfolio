import styled from '@emotion/styled';
import { AlignCenter, PerfectCenter, VerticalCenter } from 'styles';

export const Desc = styled.div`
    width:100%;
    ${PerfectCenter}
    flex-direction:column;
    margin:40px 0;

    h3{
        font-size:4em;
        font-family:'Racing';
        color:#282828;
    }
    p{
        font-size:1.3em;
        margin-top:20px;
        color:#767676;
        font-family: 'NotoML';
    }
`;