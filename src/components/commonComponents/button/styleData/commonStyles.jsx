import styled from 'styled-components'

export const StyledButton = styled('button')`
    /* height: 52px; */
    min-width: max-content;
    padding: ${(props) => props.style.size.padding};
    border-radius: 46px;

    border: 0px solid transparent;
    background: ${(props) => props.style.color.bg.regular};

    &:hover {
        background: ${(props) => props.style.color.bg.hover};
        transform: scale(1.05);
    }
    &:active {
        background: ${(props) => props.style.color.bg.active};
        transform: scale(0.95);
    }
    &:disabled {
        background: lightgrey;
    }

    transition: all 0.5s ease-out;

    display: flex;
    flex-direction: row;
    justify-content: center;

    font-family: 'StratosSkyeng', sans-serif;
    font-size: ${(props) => String(props.style.size.font) + 'px'};
    line-height: ${(props) => String(props.style.size.font + 8) + 'px'};
    font-weight: 400;

    color: ${(props) => props.style.color.text};

    overflow: hidden;
    cursor: pointer;
`

// @font-face {
//     font-family: 'StratosSkyeng';

//     src: local('StratosSkyeng'), local('StratosSkyeng');
//     /* src: local('StratosSkyeng'), local('StratosSkyeng'),
//         url('/fonts/StratosSkyeng.woff2') format('woff2'),
//         url('/fonts/StratosSkyeng.woff') format('woff'),
//         url('/fonts/StratosSkyeng.ttf') format('truetype'); */

//     font-weight: 400;
//     font-style: normal;
// }
// font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
//     'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, 'Courier New',
//     monospace;