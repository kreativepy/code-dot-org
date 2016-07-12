import color from '../../../color';

export const createOutline = color => {
  return `
    ${color} 0 1px,
    ${color} 1px 1px,
    ${color} 1px 0px,
    ${color} 1px -1px,
    ${color} 0 -1px,
    ${color} -1px -1px,
    ${color} -1px 0,
    ${color} -1px 1px`;
};

const progressStyles = {
  dotIcon: {
    borderColor: 'transparent',
    fontSize: 24,
    verticalAlign: -4,
    color: color.white,
    textShadow: createOutline(color.lighter_gray),
    ':hover': {
      color: color.white,
      backgroundColor: 'transparent'
    }
  },
};
export default progressStyles;
