export default {
    // applicant protocol is a subset of exchange protocol
    // used on client side to interact with applicant & issuer dwn
    protocol: 'https://formfree.github.io/.well-known/protocols/dcx/credential-applicant',
    published: false,
    types: {
        "application": {
            "schema": "https://formfree.github.io/.well-known/schemas/dcx/application.json",
            "dataFormats": [
                "application/json"
            ]
        },
        "manifest": {
            "schema": "https://formfree.github.io/.well-known/schemas/dcx/manifest.json",
            "dataFormats": [
                "application/json"
            ]
        },
        "response": {
            "schema": "https://formfree.github.io/.well-known/schemas/dcx/response.json",
            "dataFormats": [
                "application/json"
            ]
        },
        "invoice": {
            "schema": "https://formfree.github.io/.well-known/schemas/dcx/invoice.json",
            "dataFormats": [
                "application/json"
            ]
        }
    },
    structure: {
        // issuers publish manifests to describe the data they can provide
        manifest: {},
        // applicants can apply for a credential
        application: {
            // a credential response might be sent in response to an application
            response: {
                $actions: [
                    {
                        who: 'recipient',
                        of: 'application',
                        can: ['create', 'update'],
                    },
                    {
                        who: 'author',
                        of: 'application',
                        can: ['read'],
                    },
                ],
            },
            // an invoice might be sent in response to an application
            invoice: {
                $actions: [
                    {
                        who: 'recipient',
                        of: 'application',
                        can: ['create', 'update'],
                    },
                    {
                        who: 'author',
                        of: 'application',
                        can: ['read'],
                    },
                ],
            },
        },
    },
};
