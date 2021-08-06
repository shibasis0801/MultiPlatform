import React from "react";
import Desktop from "../Desktop/Desktop";
import { withRouter } from "react-router";
import {useMobileStatus} from "./modules/useMobileStatus";

interface ContainerProps extends React.ComponentProps<any> {}

function Container(props: ContainerProps) {
    const isMobile = false && useMobileStatus();

    return !isMobile ? (
        <Desktop>
            {props.children}
        </Desktop>
    ) : (null);
}

export default withRouter(Container);
