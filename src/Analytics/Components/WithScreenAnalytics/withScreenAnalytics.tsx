import React from "react";
import { useScreenAnalytics } from '../../Hooks/useScreenAnalytics';

export const withScreenAnalytics = function<T>(name: string, Component: React.ComponentType<T>) {
    return (props: T) => {
        useScreenAnalytics(name);

        return (<Component {...props} />);
    }
}