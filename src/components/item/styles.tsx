import styled from '@emotion/styled';
import { AlignCenter, PerfectCenter, VerticalCenter } from 'styles';

export const ItemContainer = styled.div`
    max-width:1201px;
    flex-wrap:wrap;
    ${AlignCenter}

    @media only screen and (max-width: 1240px){
        max-width:800px;
    }

    @media only screen and (max-width: 850px){
        max-width:400px;
    }

    a{
        height:auto;
        &:hover{
            #hoverItem {
                display: flex;
            #thumbItem {
                display: none;
                }
            }
        }
    }
`;

export const Item = styled.div`
    min-height:400px;
    min-width:400px;
    background:no-repeat center center url(${(porps) => porps.className || 'blue'});
    background-size:100%;
`;

export const HoverItem = styled.div`
    min-height:400px;
    min-width:400px;
    background:rgba(41,41,41,0.97);
    padding:30px;
    justify-content:space-between;
    display:none;
    flex-direction:column;
    margin-top:-400px;
    h3{
        color:#175fe8;
        display:inline;
        width:auto;
        font-size:40px;
        font-family:'Racing';
        letter-spacing:1px;
        padding-left:4px;
        border-bottom:2px solid #175fe8;
    }

    .title{
        color:#fff;
        font-size:20px;
        margin:20px 0 10px;
        font-family:'NotoM';
    }
    .desc{
        color:#989898;
        font-size:16px;
    }

    .tag{
        font-size:18px;
        font-family:'Racing';
        color:#fff;
        letter-spacing:1px;
    }

`;