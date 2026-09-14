# HTTP Traffic Security Review

## Review Information

**Date:** 10/09/2026
**Application:** SecureBook / PortSwigger Lab 
**Feature / Endpoint Reviewed:** https://0a2c00a904b71053824bd3c700d20031.web-security-academy.net/image?filename=../../etc/passwd
**HTTP Method:** GET
**Tool:** Burp Suite\
**Review Type:** Manual HTTP Traffic Review

------------------------------------------------------------------------

## 1. Objective

**What am I reviewing?**

\[Write here\]

**What security behavior or assumption am I investigating?**

\[Write here\]

------------------------------------------------------------------------

## 2. Original HTTP Request

``` http
[Paste the original HTTP request here]
```

### Request Purpose

\[Explain what this request normally does\]

------------------------------------------------------------------------

## 3. Source

**Attacker-controlled input:**

\[Identify the exact query parameter, path parameter, header, cookie,
request-body field, etc.\]

**Original value:**

``` text
[Value]
```

**Why is this input untrusted?**

\[Write here\]

------------------------------------------------------------------------

## 4. Data Flow

Trace the attacker-controlled input through the application.

``` text
HTTP Request
    ↓
[...]
    ↓
[...]
    ↓
Security-Sensitive Operation
```

### Observed / Expected Flow

\[Explain the data flow here\]

> Clearly distinguish between behavior you observed and implementation
> details you are inferring.

------------------------------------------------------------------------

## 5. Sink

**Security-sensitive operation:**

\[Identify the sink\]

**Why is this operation security-sensitive?**

\[Write here\]

------------------------------------------------------------------------

## 6. Existing Security Controls

**Authentication:**

\[Write here\]

**Authorization:**

\[Write here\]

**Input validation:**

\[Write here\]

**Other relevant controls:**

\[Write here\]

------------------------------------------------------------------------

## 7. Security Hypothesis

Before modifying the request:

> If an attacker modifies \[INPUT\], the application may \[BEHAVIOR\]
> because \[REASON\].

------------------------------------------------------------------------

## 8. Test Performed

### Original Value

``` text
[Original value]
```

### Modified Value

``` text
[Modified value]
```

### Modified HTTP Request

``` http
[Paste modified request]
```

### Expected Secure Behaviour

\[What should a secure application do?\]

### Actual Behaviour

\[What actually happened?\]

**HTTP Status Code:**

\[Status\]

**Relevant Response:**

``` text
[Relevant response/evidence]
```

------------------------------------------------------------------------

## 9. Finding

**Security concern identified:**\
Yes / No / Needs Further Investigation

**Vulnerability category:**

\[Write here\]

**Severity:**

\[Informational / Low / Medium / High / Critical / Not Rated\]

### Evidence

\[Describe the evidence that supports your conclusion\]

------------------------------------------------------------------------

## 10. Root Cause

**What did the application trust?**

\[Write here\]

**Why was that trust unsafe?**

\[Write here\]

**What security control was missing or ineffective?**

\[Write here\]

**Where should the security control have been enforced?**

\[Write here\]

------------------------------------------------------------------------

## 11. Impact

### Directly Demonstrated Impact

\[What did your testing actually prove?\]

### Potential Additional Impact

\[What else might be possible under additional conditions?\]

------------------------------------------------------------------------

## 12. Remediation

### Recommended Fix

\[Describe how you would fix the root cause\]

### Why This Fix Works

\[Explain the security property the remediation enforces\]

### Incomplete / Bad Fixes

\[Describe fixes that might look sufficient but could still be
bypassed\]

------------------------------------------------------------------------

## 13. Retest

### Retest Procedure

\[Describe how you repeated the original attack after remediation\]

### Expected Result

\[Write here\]

### Actual Result

\[Write here\]

**Remediation verified:**\
Yes / No / Not Yet Retested

------------------------------------------------------------------------

## 14. AppSec Review Summary

**Source:**\
\[Write here\]

**Data Flow:**\
\[Write here\]

**Sink:**\
\[Write here\]

**Existing Controls:**\
\[Write here\]

**Exploitability:**\
\[Write here\]

**Root Cause:**\
\[Write here\]

**Impact:**\
\[Write here\]

**Remediation:**\
\[Write here\]

**Retest Result:**\
\[Write here\]

------------------------------------------------------------------------

## 15. Key Learning

**What security principle did this exercise teach me?**

\[Write 2-4 sentences here\]

**What should I look for when reviewing similar code or HTTP traffic in
the future?**

\[Write here\]

https://0a2c00a904b71053824bd3c700d20031.web-security-academy.net/image?filename=56.jpg