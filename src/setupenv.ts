import { setAppBuilderConfig } from '@infragistics/appbuilder-sdk';

setAppBuilderConfig({
    hideSharingOptions: true,
    personalWorkspaceLabel: 'myExperiences',
    baseUrl: 'https://localhost:7092/',                                 // Your AppBuilder ON-PREM/SDK backend server url
    skipAuth: true,
    disableCodegen: true,
    disableAnalytics: true,
    disablePublishToGithub: true,
    shellTheme: {
        typeface: 'Public Sans',
        colors: {
            primary: '#2D8DFF',
            grays: '#9A9DA2',
            success: '#31AB2B',
            warn: '#F2C200',
            error: '#DB372A',
            aux1: '#068E6B', // Teal
            aux2: '#9C27B0', // Purple
        },
    },
});


