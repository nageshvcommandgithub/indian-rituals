# Comments Setup Guide

This project uses [utterances](https://utteranc.es/) - a lightweight, open-source commenting system built on GitHub Issues.

## Why utterances?

- **Free & Open Source**: No costs, no ads
- **Privacy-Friendly**: No tracking, no cookies
- **GitHub-Integrated**: Comments are stored as GitHub Issues
- **Markdown Support**: Full markdown formatting in comments
- **Clean Design**: Matches your site's aesthetics
- **Spam-Free**: GitHub authentication prevents spam

## Setup Steps

### 1. Enable GitHub Issues

Make sure GitHub Issues are enabled for your repository:

1. Go to your repository: https://github.com/nageshvcommandgithub/indian-rituals
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Ensure **Issues** checkbox is checked

### 2. Install utterances App (One-time setup)

Install the utterances GitHub App to allow it to post comments:

1. Visit: https://github.com/apps/utterances
2. Click **Install**
3. Select your repository: `nageshvcommandgithub/indian-rituals`
4. Grant permissions
5. Click **Install**

That's it! The comments are already configured in the code.

## How It Works

- Each ritual/festival page has a unique comment thread
- Users click "Sign in with GitHub" to comment
- Comments are stored as GitHub Issues in your repository
- You can moderate comments directly from GitHub Issues
- You receive email notifications for new comments

## Configuration

The utterances configuration is in `js/ritual.js`:

```javascript
script.setAttribute('repo', 'nageshvcommandgithub/indian-rituals');
script.setAttribute('issue-term', 'pathname'); // Creates issue per URL path
script.setAttribute('theme', 'github-light'); // Theme
```

### Available Themes

You can change the theme by editing `js/ritual.js`:

- `github-light` (default)
- `github-dark`
- `preferred-color-scheme` (auto-detects user preference)
- `github-dark-orange`
- `icy-dark`
- `dark-blue`
- `photon-dark`

### Issue Mapping

Currently using `pathname` mapping, which creates one issue per ritual/festival page.

Other options:
- `url` - Issue per full URL
- `title` - Issue per page title
- `og:title` - Issue per Open Graph title
- `issue-number` - Specific issue number
- `specific-term` - Custom term

## Moderation & Deleting Comments

All comments appear as GitHub Issues, giving you full control:

### Viewing All Comments
1. Go to: https://github.com/nageshvcommandgithub/indian-rituals/issues
2. Each ritual/festival has its own issue (labeled "comments")
3. Issue title matches the ritual/festival name

### Deleting Individual Comments
1. Go to the specific issue (comment thread)
2. Find the comment you want to delete
3. Click the **"..."** menu on the comment
4. Select **"Delete"** (only available for your repository)
5. Confirm deletion

### Hiding Spam/Abusive Comments
1. Click **"..."** menu on the comment
2. Select **"Hide"**
3. Choose reason (spam, abuse, off-topic)
4. Comment will be hidden from public view

### Locking Comment Threads
To prevent further comments on a ritual:
1. Open the issue for that ritual
2. Click **"Lock conversation"** in the sidebar
3. Select reason (off-topic, resolved, too heated, spam)
4. No new comments can be added (existing ones remain visible)

### Deleting Entire Thread
To remove all comments for a ritual/festival:
1. Open the issue
2. Click **"Delete issue"** at the bottom
3. Confirm deletion
4. The thread will be recreated when someone comments again

### Editing Comments
- You can edit your own comments
- You can edit any comment in your repository (as owner)
- Click **"..."** → **"Edit"**

### Banning Users
If someone repeatedly posts spam:
1. Go to repository **Settings** → **Moderation**
2. Block the user
3. They won't be able to comment anymore

## Testing

1. Visit any ritual page: http://localhost:8000/ritual.html?id=diwali-festival
2. Scroll to the bottom
3. You'll see the utterances comment widget
4. Sign in with GitHub to test commenting

## Troubleshooting

**Comments not loading?**
- Ensure Issues are enabled in repository settings
- Verify utterances app is installed
- Check browser console for errors
- Ensure repository is public (utterances doesn't work on private repos)

**Need to change repository?**
Edit the repo name in `js/ritual.js` line with:
```javascript
script.setAttribute('repo', 'YOUR-USERNAME/YOUR-REPO');
```

## Privacy & Security

- No user data is collected by your website
- GitHub handles all authentication and data
- Comments are public (stored in public GitHub Issues)
- Users must have GitHub accounts to comment
- You control comment moderation via GitHub

## Alternative Options

If you prefer different commenting systems:

- **Disqus**: Popular but has ads (free tier)
- **Commento**: Privacy-focused, paid service
- **Facebook Comments**: Requires Facebook integration
- **Staticman**: Converts comments to data files in repo
- **giscus**: Similar to utterances but uses GitHub Discussions

The current implementation uses utterances as it's the best balance of simplicity, privacy, and cost (free).
