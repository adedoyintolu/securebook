Browser
   |
   | serviceId = 813
   |
=== TRUST BOUNDARY =================
   |
   | Control:
   | - Zod validates structure
   | - Auth identifies user
   | - Authorization checks booking ownership
   |
   v
Express
   |
   | Parameterized query
   |
=== TRUST BOUNDARY =================
   |
   | Control:
   | - DB accessible only from backend
   | - Least-privileged DB user
   |
   v
PostgreSQL

=====================================================================================================================

[ User / Browser ]
        |
        |  req.params
        |  req.query
        |  req.body
        |
======== TRUST BOUNDARY ========
        |
        v
[ Express Route ]
        |
        v
[ Zod Validation ]
        |
        v
[ Authentication ]
        |
        v
[ Authorization ]
        |
        v
[ Service ]
        |
======== TRUST BOUNDARY ========
        |
        v
[ PostgreSQL ]