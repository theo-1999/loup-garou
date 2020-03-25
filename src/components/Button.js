import React from 'react';


/*export const Button = (props) => {
  const { onClick, children } = props;
  return (<button onClick={onClick}> { children }</button>);
}

*/


class Button extends React.Component  {
  render(props){
   const onClick = this.props; 
   const children = this.props ;
    return (
      <button onClick={onClick}>{children}</button>)
  }
  
}



export default Button;