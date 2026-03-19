# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added - 2026-03-19

#### Comments System
- Added public discussion section on all ritual/festival detail pages
- Integrated utterances commenting system using GitHub Issues
- Comments section appears below ritual content and above related rituals
- Users can sign in with GitHub to leave comments
- Full Markdown support in comments
- Comments stored as GitHub Issues for easy moderation
- Created COMMENTS_SETUP.md with detailed setup instructions

#### Hindu Festivals Content
- Added 12 major Hindu festivals with comprehensive details:
  1. Diwali - Festival of Lights
  2. Holi - Festival of Colors
  3. Navratri & Durga Puja - Nine nights celebrating Goddess Durga
  4. Ganesh Chaturthi - Birthday of Lord Ganesha
  5. Janmashtami - Krishna's Birthday
  6. Maha Shivaratri - Great night of Shiva
  7. Dussehra / Vijayadashami - Victory of good over evil
  8. Makar Sankranti / Pongal - Harvest festival
  9. Raksha Bandhan - Sacred brother-sister bond
  10. Onam - Kerala's harvest festival
  11. Ugadi / Gudi Padwa - New Year celebration
  12. Ram Navami - Birth of Lord Rama

Each festival includes:
- Practice and celebration details
- Cultural and spiritual meaning
- Scientific reasoning and health benefits
- Historical context and origins
- Regional variations across India

### Modified - 2026-03-19

#### Files Changed
- `ritual.html`: Added comments section structure
- `js/ritual.js`: Added loadComments() function to initialize utterances widget
- `css/styles.css`: Added styling for comments section
- `README.md`: Updated features list and added comments section documentation
- `data/rituals.json`: Expanded from 8 rituals to 20 entries (8 rituals + 12 festivals)

#### Documentation
- Updated README with comments feature
- Created COMMENTS_SETUP.md for utterances installation guide
- Created CHANGELOG.md (this file)

## Project Statistics

- **Total Entries**: 20 (8 rituals + 12 festivals)
- **Categories**: 5 (Daily Life, Temple Visits, Life Events, Festivals, Gestures)
- **New Feature**: Community comments and discussions
- **Tech Stack**: Vanilla HTML, CSS, JavaScript + utterances
- **Cost**: $0 (fully free and open-source)

## Next Steps

To complete the comments setup:
1. Enable GitHub Issues in repository settings
2. Install utterances GitHub App
3. Test commenting on ritual pages

See COMMENTS_SETUP.md for detailed instructions.
