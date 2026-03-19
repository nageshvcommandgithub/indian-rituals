# Cleanup Guide: Fixing Mixed Comments Issue

## Problem
Before the fix, all rituals shared the same comment thread because `pathname` was used, which is the same for all pages (`ritual.html`). This caused comments to appear on all ritual pages.

## Solution Applied
Changed the code to use each ritual's **title** as the unique identifier, so each ritual/festival now has its own separate comment thread.

## Steps to Clean Up Old Comments

### 1. Find the Old Mixed Comments Issue

1. Go to: https://github.com/nageshvcommandgithub/indian-rituals/issues
2. Look for an issue titled: **"ritual.html"** or similar generic name
3. This issue contains all the mixed comments from before the fix

### 2. Delete the Old Issue

**Option A: Delete the Issue (Removes all old comments)**
1. Open the issue
2. Scroll to the bottom
3. Click **"Delete issue"**
4. Confirm deletion
5. All old mixed comments will be removed

**Option B: Lock the Issue (Keeps comments but prevents new ones)**
1. Open the issue
2. Click **"Lock conversation"** in the right sidebar
3. Select reason: "Resolved"
4. Add note: "Fixed - each ritual now has separate comments"
5. The old comments remain visible but no new comments can be added

### 3. Test the Fix

1. Refresh your ritual pages (clear browser cache if needed)
2. Visit different rituals:
   - http://localhost:8000/ritual.html?id=diwali-festival
   - http://localhost:8000/ritual.html?id=holi-festival
3. Each should now have its own empty comment section
4. Post a test comment on one ritual
5. Verify it doesn't appear on other rituals

### 4. Expected Behavior After Fix

When someone comments on a ritual now:
- **New GitHub Issue** is created automatically
- **Issue Title**: Exact name of the ritual (e.g., "Diwali - Festival of Lights")
- **Issue Label**: "comments" (for easy filtering)
- **Each ritual**: Has its own separate thread

## Verification Checklist

- [ ] Old "ritual.html" issue deleted or locked
- [ ] Tested commenting on Ritual A - comment only appears on Ritual A
- [ ] Tested commenting on Ritual B - comment only appears on Ritual B
- [ ] New issues have proper titles matching ritual names
- [ ] New issues have "comments" label

## Future Comments

Going forward:
- Each ritual/festival gets its own GitHub Issue
- Issue title = Ritual/Festival name
- Easy to find and moderate specific discussions
- No more mixed comments across rituals

## If You See "utterances is not installed" Error

This means the issue already exists but wasn't created by utterances:
1. Go to your repository issues
2. Find the issue with that exact ritual name
3. Close or delete that issue
4. Refresh the ritual page
5. utterances will create a new issue properly
