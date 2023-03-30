import React, {FC, useContext} from 'react'
import {CircularProgress} from "@pankod/refine-mui";
import {ColorModeContext} from "../../contexts";

export interface ISpinner {
}

export const ThemedSpinner: FC<ISpinner> = (props: ISpinner) => {
    const { mode } = useContext(ColorModeContext);
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress color={mode === 'light' ? "secondary" : "success"} />
        </div>
    );
};