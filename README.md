# FormFree Protocols & Schemas

This repo contains .well-known files for FormFree Holdings Corporation

- [Credentials](/.well-known/credential/)
- [Manifests](/.well-known/manifest/)
- [Protocols](/.well-known/protocol/)
- [Schemas](/.well-known/schema/)

## DCX

For more information about DCX, check out the following links

- [TBD54566975/incubation-dcx](https://github.com/TBD54566975/incubation-dcx) TBD incubation repo
- [@dcx-protocol/root](https://www.npmjs.com/package/@dcx-protocol/root) NPMJS Package

### Protocols

These are DWN protocols for the issuer and applicant side of DCX, as well as the full exchange (both sides).
Protocols define the CRUD operations permitted by on the different DWN records defined in the [Schemas](#schemas) section below.
Credential Exchange Protocol is not implemented directly. It is implemented separately but is provided here for reference.

- [DCX Protocol](/.well-known/protocol/dcx.json)
- [DCX Issuer Protocol](/.well-known/protocol/dcx-issuer.json)
- [DCX Applicant Protocol](/.well-known/protocol/dcx-applicant.json)

### Schemas

- [DCX Application Record Schema](/.well-known/schema/application.json)
  - Schema definition for application DWN records
  - Submitted by DCX applicants to DCX issuer DWNs
  - Includes the actual input credential proofs of credentials currently held by DCX applicants
  - Used to request a new output credential from a DCX issuer

- [DCX Manifest Record Schema](/.well-known/schema/manifest.json)
  - Schema definition for manifest DWN records 
  - Created by issuers in their own DWNs
  - Conforms to the DIF spec for [credential manifests](https://github.com/TBD54566975/incubation-dcx?tab=readme-ov-file#credential-manifest)
  - Defines the input credentials required to obtain an output credential and the type of output credential
  - Read by applicants and used to know what credentials they need to acquire before requesting an output credential from a DCX issuer

- [DCX Response Record Schema](/.well-known/schema/response.json)
  - Schema definition for response DWN records; 
  - Created by DCX issuers in response to an application record
  - Contains either an approval + output VC or a denial + reasoning

- [DCX Invoice Record Schema](/.well-known/schema/invoice.json)
  -  Optional Schema definition for invoice DWN records
  -  Created by DCX issuers and sent to DCX applicant DWNs
  -  Currently unimplemented in the DCX npm package