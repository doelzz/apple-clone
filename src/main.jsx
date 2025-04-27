import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";


Sentry.init({
    dsn: "https://f8eaee3c7e11b17db96a5f9679c727f8@o4509219316105216.ingest.de.sentry.io/4509219614818384",
    sendDefaultPii: true,

    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.metrics.metricsAggregatorIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect,
        }),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
        }),
        Sentry.feedbackIntegration({
            colorScheme: "system",

        }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

});
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
