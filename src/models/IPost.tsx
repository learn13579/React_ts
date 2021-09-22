import React from "react";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    key?: any;
    children?: React.ReactNode;
}
