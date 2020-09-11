import { AnalyticsReporterContract, ServiceIds } from '@vladbasin/rn-firebase-analytics';
import { useService } from '@vladbasin/ts-dependencies-reactjs';
import { useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';

let currentScreen = "";

export const useScreenAnalytics = (name: string) => {
    const analyticsReporter = useService<AnalyticsReporterContract>(ServiceIds.analyticsReporter);

    const navigation = useNavigation();

    useEffect(() => {
        const reportScreen = (name: string) => {
            if (currentScreen === name) {
                return;
            }

            currentScreen = name;

            analyticsReporter.reportCurrentScreen(name);
        }

        reportScreen(name);

        const focusListener = navigation.addListener("didFocus", () => {
            reportScreen(name);
        });

        return () => focusListener.remove();
    }, []);
}