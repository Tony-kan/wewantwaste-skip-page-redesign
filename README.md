## Redesign of the Skip Size Selection Page

This project includes a complete redesign of the skip size selection process to enhance user experience, clarity, and responsiveness. The following improvements were implemented to address key usability issues in the original design.

### 1. Enhanced Progress Stepper

- **Problem:** The original stepper was ambiguous, as both completed and current steps were styled with the same blue icon, making it difficult to track progress. The mobile view was not responsive and required horizontal scrolling.

- **Solution:**
  - **Clear Visual Hierarchy:** Completed steps are now marked with a distinct "done" icon. The current step is highlighted in the primary action color (blue), and future steps remain greyed out. This provides immediate and intuitive clarity on the user's progress.
  - **Responsive Mobile View:** A new **"Compact Stepper"** was implemented for smaller screens. This design avoids horizontal scrolling by displaying the current step's name and number (e.g., "Step 2: Select Size"), ensuring all progress information is visible at a glance.

### 2. Introduction of a Skip Size Guide

- **Problem:** First-time users found the "yard" sizing metric confusing, leading to research outside the application and potential user drop-off.

- **Solution:** A dedicated **"Skip Size Guide"** section has been added to the top of the page. This guide demystifies the sizing by providing:

  - Yard Ranges & Categories
  - Capacity Approximations (e.g., in number of wheelbarrows)
  - Common Use-Case Descriptions (e.g., "Ideal for small kitchen refits")

  This empowers users to make an informed decision quickly and confidently without leaving the site.

### 3. Modernized Skip Option Cards

- **Problem:** The original cards were cluttered, lacked key pricing information (like the total price including VAT), used colors that didn't blend with the site's theme, and handled restrictions in a way that was not scalable or easily noticeable.

- **Solution:** The cards have been redesigned for clarity, aesthetics, and better information architecture:
  - **Logical Layout:** Key information like yard size and a restriction icon are placed at the top for immediate visibility.
  - **Conditional Restriction Indicator:** An exclamation icon now **only** appears for skips with specific restrictions (e.g., not allowed on roads or for heavy waste). This draws attention where it's needed without cluttering cards that have no restrictions.
  - **Clear Information:** The card now clearly displays the hire period, capacity, and the final price including VAT in a high-contrast color.
  - **Improved Aesthetics:** The design uses a cleaner layout and an outlined action button that aligns with the site's overall theme, turning solid upon selection.

### 4. Clear Selection & Confirmation Flow

- **Problem:** The original interface made it seem like multiple skips could be selected, leading to confusion. The user would only discover it was a single-choice selection upon proceeding.

- **Solution:** To prevent ambiguity, a **confirmation modal** now appears immediately after a user selects a skip. This modal:

  - Confirms the single selection and disables the selection on the cards.
  - Summarizes key details: It reiterates the skip's restrictions, hire period, and total price.
  - Provides clear actions: Offers a "Continue" button to proceed or an option to close the modal and select a different skip.

  _Note: While this modal introduces a new UI pattern compared to previous pages, the trade-off was made to significantly improve the clarity and confidence of the selection process._

### 5. Code and Project Structure

The implementation follows modern React best practices using **React Router 7**. The project is organized for scalability and maintainability:

/
├── app/
│ ├── routes/ # Route-specific components and loaders
│ ├── lib/ # Utility functions, helpers (e.g., calculateTotalPrice)
│ └── constants/ # Site-wide constants
├── components/ # Reusable, shared UI components
│ └── skip-selection/ # Components grouped by feature (e.g., ConfirmationModal)
└── ...

### How to Run

#### 1. Local Development

Install dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Visit http://localhost:5173 in your browser.

#### 2. Production Build

Build the app:

```bash
npm run build
```

#### 3. Docker

Build the Docker image:

```bash
docker build -t my-app .
```

Run the Docker container:

```bash
docker run -p 3000:3000 my-app
```
