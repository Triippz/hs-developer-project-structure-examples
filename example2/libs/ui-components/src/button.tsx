import React from "react";
import { Button } from "@hubspot/ui-extensions";
import {ButtonProps} from "@hubspot/ui-extensions/types";

export interface CompanyButtonProps extends ButtonProps {
    customProp?: any;
}

const CompanyButton = (props: CompanyButtonProps) => {
    return (
        <Button
            {...props}
            // Maybe add custom company colors here
        />
    )
}

export default CompanyButton;