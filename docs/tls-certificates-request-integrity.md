# TLS Certificates Requests Integrity

1. TLS provides confidentiality, integrity, and authentication by 
- Encrypting the data that is exchanged between the client and the server while in transit.
- Ensuring that an attacker cannot modify data silently (without detection) while in transit.
- Making sure that client and server are each able to prove  to the other party that they are the entity they claim to be.

2. TLS does not provide input validation/trustworthiness. It only provides transportation/request inegrity

3. A certificate binds a hostname or identity to a public key, and a trusted issuer digitally signs that binding.

4. A Certificate Authority, or CA, is an organization trusted to issue and sign certificates.

5. Burp can inspect HTTPS because the configured browser trusts Burp's local certificate.

6. SecureBook currently has no TLS trust boundary because it runs locally over HTTP. TLS will apply when HTTPS is configured.

7. One security assumption I would investigate in securebook is if the business logic of the endpoints are enforced on the server.

