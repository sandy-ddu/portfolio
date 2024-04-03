import styled from '@emotion/styled';
import { PerfectCenter } from 'styles';
import { PortfolioBg } from 'assets/images';

export const Contents = styled.div`
    width:100%;
    ${PerfectCenter}
    flex-direction:column;
    padding:20px;
    background:no-repeat center center fixed url(${PortfolioBg});
    background-size:calc(100% - 42px);
`;


