# Feature Notes: Storage Usage Tile

## Context
We need a storage usage indicator on the NSAW Configuration Page. Customers keep running out of storage and don't realize until things break. Support is getting escalations.

## The Problem
- Customers can't easily see how much ADW storage they've used
- They hit storage limits unexpectedly
- Causes data load failures and support escalations
- Recent examples: Mitchell & Ness (FAW-63069), 2nd Swing, Charge Electrical Services

## What We Need
A tile/card on the Configuration page that shows:
- How much storage is allocated to this subscription
- How much is currently used
- Visual indicator of usage level (normal vs. warning vs. critical)

## Storage Tiers by Subscription
- Standard: 1 TB entitled
- Premium: 3 TB entitled
- Enterprise: 5 TB entitled

## Key Insight from Engineering
"Entitled storage" is not the same as "accessible storage." A customer might be entitled to 1 TB but actually have 1.2 TB accessible due to historical provisioning. The percentage calculation MUST use accessible storage as the denominator, not entitled storage, or the percentages will be wrong.

## UI States Needed
- Normal: Under 80% usage - just informational
- Warning: 80-95% usage - yellow/orange, maybe a message
- Critical: Over 95% - red, urgent message, maybe link to docs
- Unavailable: When we can't fetch storage data - graceful fallback

## API Dependency
Need REST endpoint from Provisioning team. They said they can provide:
- entitled_storage_gb
- accessible_storage_gb
- used_storage_gb
- subscription_tier

## Questions/Risks
- What refresh rate? Real-time feels unnecessary for storage
- Do we show this to all users or just admins?
- What happens if the API times out?
- Should users be able to click through to detailed storage breakdown?

## PM Notes
- This is a "parity" feature — competitors have this
- Low engineering effort but high visibility fix
- Could reduce ~5 escalations per month
- Design should be consistent with other tiles on Config page
