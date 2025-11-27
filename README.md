# Palindrome Word Finder

A simple HTML tool that identifies palindromic words in a given phrase by ignoring case, punctuation, and non-alphabetic characters.

## Pros
- Clean, responsive layout with centered flexbox design
- Handles case insensitivity and strips punctuation for accurate palindrome detection
- Zero dependencies; works in all modern browsers without external libraries
- Beginner-friendly code for learning string manipulation and DOM events
- Minimalist styling with intuitive input field and action button

## Cons
- Results displayed via alert dialogs which disrupt user workflow
- No on-page result display area (results only show in pop-up windows)
- No input validation for empty inputs (may return empty string as palindrome)
- Strips numerical characters (e.g., "121" becomes empty string)
- No reset/clear button to quickly start new searches
- No feedback for "no palindromes found" cases

## Takeaways
- Perfect for learning string processing and DOM event handling fundamentals
- Easy to enhance with features like:
  - Displaying results directly on the page instead of alerts
  - Adding input validation with user-friendly error messages
  - Including numerical characters by adjusting regex to `/[^a-zA-Z0-9]/g`
  - Implementing a "Clear" button to reset input fields
  - Showing "No palindromes found" when applicable
- Ideal starting point for building more advanced text analysis tools

## License
This project is licensed under the MIT License – see the LICENSE file for details.