import React from "react";

function Button (props) {
return(
<button type="button" className="btn btn-primary" {...props}>{props.children}</button>
)
}

export default Button;