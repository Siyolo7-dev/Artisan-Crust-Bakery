#Crust-Bakery
Artisan Crust Bakery Website Development Project

<h1>Project title<br></h1> Website creation for Artisan Crust Bakery<br><br> 

Student Information<br>

Student Name: Siyolo Botile<br>
Student Number: St10482267<br>
Course: Diploma in IT Management<br>
Institution: Rosebank International Braamfontein<br>
Module: WEDE5020<br>

<h1>Project: Website Development -Part 1<br></h1>

<h2>Project Overview:</h2><br>
•	Name: Artisan Crust Bakery
•	History: Artisan Crust is a family-owned bakery established in 2021 by head baker David Miller. We have a physical shop front where we sell sour dough bread, seasonal treats, and custom order cakes. 
•	Mission Statement: Bake genuine, nourishing bread and treats using old fashion fermentation techniques with locally sourced organic ingredients. 
•	Vision Statement: To be the premier destination for specialty baked goods and celebration cakes. 
•	Target Audience: Local Community, foodies, couples hosting downtown weddings, corporate event planners. 


<h2>Website Goals and Objectives</h2><br>
<ul>
  <li>Goals: Online ordering/pickup pre-orders, custom cake inquiry forms and increase local brand awareness</li>
  <li>Key Performance Indicators (KPIs)</li>
  <li>Take inR3,000/month through online pre-order revenue</li>
  <li>Receive 15+ completed custom cake inquires a week</li>
  <li>Increase local organic website traffic by 30% in 90 days</li>
</ul>
<h2>Key Features and Functionality:</h2>
<ul>
  <li>1.Online Pre-Order & E-Commerce System Daily Menu & Pre-Order Storefront: A card-based menu layout showcasing sourdough breads and seasonal pastries, integrated via Shopify Buy Button SDK or WooCommerce API.  Time-Slot Pickup Selector: Checkout functionality that lets customers select specific daily time slots for storefront pickup.  Persistent "Order for Pickup" Action Bar: A mobile-optimized navigation bar that provides instant access to the pre-order portal from any page.  Seamless Mobile Checkout: Responsive cart and checkout flow designed for smooth ordering on smartphones</li>
  <li>2.Custom Cake Inquiry Workflow Structured Inquiry Form: A dedicated workflow to capture over 15 weekly custom cake and celebration inquiries, replacing inefficient Instagram DMs and phone calls.  Image Attachment Uploader: File upload capability allowing customers to attach inspiration photos, sketch samples, or color palettes with their inquiries.  Custom Cakes Gallery: High-resolution image showcase highlighting past custom occasion cakes for weddings, birthdays, and corporate events</li>
  <li>3.Core Pages & Information Architecture Homepage: Features media-rich hero sections, brand introductions, featured products, and direct Call to Actions (CTAs) for pre-orders and custom inquiries.  Our Story (About Us): Dedicated page covering master baker David Miller's history, company mission, vision statement, and team member profiles.  Contact & Location: Features direct contact details, storefront hours, and interactive Google Maps integration for store directions</li>
  <li>4. Brand Design & Technical Architecture Visual Identity & Styling: Warm brand aesthetic utilizing Warm Bread Gold (#D4A359), Deep Charcoal (#2C2C2C), and Cream White (#FAF3E0) paired with Playfair Display and Lato typography.  Frontend Tech Stack: Modern web build using HTML5, CSS3, and JavaScript (React / Next.js framework).  Hosting & Domain: Deployed on Vercel or Netlify with standard custom .com domain configuration</li>
</ul>
<h2>Timelines and Milestones</h2>
<ul>
  <li>Week 1: Wireframing, designing product catalogue & receiving hi-res photos</li>
  <li>Weeks 2–3: Designing frontend, responsiveness and styling</li>
  <li>Weeks 4–5: Adding shopping cart logic & pickup scheduler feature</li>
  <li>Week 6: UAT and training for staff order dashboard</li>
  <li>Week 7: Going live and submitting to search engines for local SEO</li>
</ul>
<h2>Part one details:</h2><br>
<ul>
  <li>Private GitHub</li>
  <li>Wireframes for all</li>
  <li>Visual for setup</li>
  <li>README file in an academic file</li>
</ul>
<h2>Sitemap:</h2><br>
<img width="1264" height="843" alt="Gemini_Generated_Image_ktdvn4ktdvn4ktdv" src="https://github.com/user-attachments/assets/62010da1-2da3-48bc-8bf4-3fdde2899fbe" />
"
<h2>Changelog</h2><br>
August 14: Changed README file on GitHub<br>

<h1>Date Updated:16/09/2026</h1>

<h1>Project: Website Development -Part 2<br></h1>

<h2>Part Two Details</h2><br>
<ul>
  <li>Added New Pages</li>
  <li>Menu</li>
  <li>Order</li>
  <li>Gallery</li>
  <li>Our Story</li>
</ul>
<h2>The Old Pages</h2>
<p>The Old Pages Were</p>
<ul>
  <li>Homepage</li>
  <li>About Us</li>
  <li>Enquiry</li>
  <li>Contact Us</li>
  <li>Services</li>
</ul>

<h1>Date Updated:17/09/2026</h1>
<h1>Changes Made</h1>
<h2>HTML Cleanup for the Homepage</h2>
<ul>
  <li>Removed invalid nestedtags</li>
  <li>Consolidated duplicate footer sections into one</li>
  <li>Updated heading hierarchy sections)</li>
</ul>

<h2>File Naming</h2>
Renamed files with spaces (Build A Cake .html, Checkout .html) → Build-A-Cake.html, Checkout.html

<h2>Styling</h2>

Added inline styles (color: white; background-color: gray; background-image) into CSS/style.css

Created reusable banner classes (.banner-home, .banner-menu) for background images

<h2>Accessibility</h2>

Improved alt text for images (e.g., alt="Freshly baked chocolate cake")

Added aria-label="Search" to search box for screen reader support

<h2>Navigation</h2>
Wrapped navigation links in <nav> with <ul> for semantic clarity

<h1>General Changes to the Build A Cake Page</h1>

Good move shifting inline styles into style.css. This improves maintainability and keeps HTML clean.
Consistent use of classes (.banner, .footer, .builder, .step, .option) makes styling reusable and scalable.

<h1>Specific Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; were moved into CSS.
Suggest creating a .site-header class with background and text color rules. This avoids repeating inline styles across pages.

<h2>Banner</h2>
Inline background-image moved into CSS classes like .banner-build.
This allows different banners (home, menu, build) to share common styling while swapping background images in CSS.
Text Colors
Inline style="color: white;" on headings replaced with CSS rules (.banner h1, .banner h2).
Cleaner and easier to adjust globally.

<h2>Footer</h2>
Consolidated duplicate <footer> tags.
Styles for .footer, .footer-container, .footer-column now live in CSS, making layout consistent across pages.
Builder Section
Classes .step, .options, .option introduced for cake builder steps.
This enables flexbox/grid styling in CSS instead of relying on inline formatting.

<h1>General Changes Made To The Checkout Page</h1>
Good structure: clear separation of order summary, delivery options, unique code, and footer.
Consistent use of classes (.checkout-container, .order-summary, .order-item, .delivery-options, .order-code, .confirm-btn) makes styling reusable.

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-checkout.
This allows different banners (home, menu, checkout) to share common styling while swapping background images in CSS.
Text Colors
Inline style="color: white;" on headings replaced with CSS rules (.banner h1, .banner h2).
Cleaner and easier to adjust globally.

<h2>Order Summary</h2>
order-item and .totals classes introduced for layout.
Flexbox/grid styling in CSS replaces inline formatting.

<h2>Buttons</h2>
Confirm-btn styled in CSS for consistent look and hover states.
Inline styles removed.

<h2>Footer</h2>
Consolidated duplicate <footer> tags.
Styles for .footer, .footer-container, .footer-column now live in CSS, ensuring consistency across pages.

<h2>Accessibility</h2>
Alt text improved (alt="Chocolate Cake", alt="Cupcakes").
Consider adding :hover and :focus states in CSS for buttons and links to improve usability

<h2>Accessibility</h2>
Alt text improved (alt="Vanilla sponge cake", alt="Chocolate sponge cake").
Consider adding :hover and :focus states in CSS for buttons and links to improve usability.

<h1>Review Comments on Cart Page Refactor</h1><br>
<h2>General</h2>
Strong structure: clear cart header, items, coupon section, summary, recommended products, and footer.
Good use of semantic classes (.cart-container, .cart-item, .cart-summary, .recommended, .recommend-grid).

<h1>HTML → CSS Changes</h1><br>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-cart.
This allows different banners (home, menu, cart) to share common styling while swapping background images in CSS.

<h2>Cart Items</h2>
Cart-item, .item-details, .item-price, .remove-btn introduced for layout and styling.
Flexbox/grid styling in CSS replaces inline formatting.

<h2>Quantity Controls</h2>
Buttons and input styled via .quantity button and .quantity input in CSS.
Inline styles added. 

<h2>Coupon Section</h2>
Coupon-section class added for styling input and button consistently.
Inline formatting replaced with CSS rules.

<h2>Cart Summary</h2>
Cart-summary styled in CSS for alignment and emphasis.
Checkout button (.checkout-btn) styled with hover states.

<h2>Recommended Products</h2>
Recommend-grid and .recommend-item classes introduced for product suggestions.
CSS grid/flexbox used for layout instead of inline formatting.

<h2>Footer</h2>
Consolidated duplicate <footer> tags.
Styles for .footer, .footer-container, .footer-column now live in CSS, ensuring consistency across pages.

<h2>Accessibility</h2>
Alt text improved (alt="Chocolate Cake", alt="Cupcakes", alt="Brownies").
Consider adding :hover and :focus states in CSS for buttons and links to improve usability.

<h1>Review Comments on Contact Us Page Refactor</h1><br>
<h2>General</h2>
Strong structure: clear contact info, CTA, embedded map, chat box, and footer.
Good use of semantic classes (.contact-container, .contact-info, .contact-cta, .map-container).

<h1>HTML → CSS Changes</h1><br>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-contact.
This allows different banners (home, menu, contact) to share common styling while swapping background images in CSS.

<h2>Contact Info</h2>
Contact-info styled in CSS for spacing, typography, and alignment.
Inline formatting removed.
CTA Section
contact-cta and .quote-btn styled in CSS for consistent button design.
Inline styles replaced with reusable CSS rules.

<h2>Map</h2>
Inline style="border:0;" on <iframe> should be moved into CSS (.map-container iframe { border: 0; }).
Width and height can be controlled via CSS for responsiveness.

<h2>Footer</h2>
Consolidated duplicate <footer> tags.
Styles for .footer, .footer-container, .footer-column now live in CSS, ensuring consistency across pages.

<h2>Accessibility</h2>
Alt text not needed for iframe, but consider adding title="CRUST Bakery Location" for screen readers.
Add aria-label to the “GET A QUOTE” button for clarity.

<h1>Review Comments on Gallery Page Refactor</h1><br>
<h2>General</h2
Clear and simple structure: header, gallery images, footer, and chat box.
Good use of semantic classes (.footer, .footer-container, .footer-column)<br>

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
No banner section like other pages. Might consider adding it. 
Inline styles for background images should be moved into CSS.

<h2>Gallery Images</h2>
Images are hardcoded with width="400" height="400".
Recommend using a .gallery-grid class in CSS with responsive sizing (flexbox or grid).
Inline sizing can be removed in favor of CSS rules.

<h2>Footer</h2>
Duplicate <footer> tags present. Consolidate into one <footer> block.
Styles for .footer, .footer-container, .footer-column should be handled in CSS.

<h2>Accessibility</h2>
Alt text is too generic (alt="food"). Replace with descriptive alt text like alt="Custom decorated cake" or alt="Shark themed cake".
Improves SEO and accessibility.

<h1>Review Comments on Menu Page Refactor</h1>
<h2>General</h2>
Strong structure: clear categories (Cakes & Tarts, Biscuits & Bites, Savoury & Condiments), product grids, and consistent use of .product-card.
Good semantic separation with <section>, <header>, and .category.

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-menu.
This allows different banners (home, menu, checkout) to share common styling while swapping background images in CSS.

<h2>Product Grid</h2>
Product-grid and .product-card classes introduced for layout and styling.
Inline formatting removed; CSS handles spacing, hover effects, and responsiveness.

<h2>Buttons</h2>
Cart-btn styled in CSS for consistent look and hover states.
Inline styles added.

<h2>Category Sections</h2>
Each category (Cakes & Tarts, Biscuits & Bites, Savoury & Condiments) uses .category for styling.
Breadcrumb and sorting text should be styled via CSS instead of inline.

<h2>Footer</h2>
Footer will be included in this file. 

<h2>Accessibility</h2>
Alt text present, but some are too generic (alt="food"). Replace with descriptive alt text like alt="Hummingbird cake with cream cheese frosting".
Add aria-label to “Add to Cart” buttons for clarity.

<h1>Review Comments on Orders Page Refactor</h1>
<h2>General</h2>
Strong structure: banner, order instructions, price list buttons, order form, footer, and chat box.
Good use of form elements (<input>, <textarea>, <button>), making the page functional.

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-orders.
This allows different banners (home, menu, orders) to share common styling while swapping background images in CSS.

<h2>Buttons</h2>
Inline <button><h2 style="color: white;">Get a Quote</h2></button> is invalid HTML (heading inside button).
Replace with <button class="quote-btn">Get a Quote</button> and style via CSS.

<h2>Form</h2>
Form inputs (text, tel, email, date, textarea) should be styled via .form-input, .form-label, .form-textarea classes in CSS.
Inline placeholders are fine, but spacing and alignment should be handled in CSS.
File Input
file-input class introduced for styling file upload.
Inline formatting removed.

<h2>Footer</h2>
Duplicate <footer> tags present. Consolidate into one <footer> block.
Styles for .footer, .footer-container, .footer-column should be handled in CSS.

<h2>Accessibility</h2>
Labels correctly linked to inputs via for attributes.
Add aria-label or aria-describedby for optional fields (like flavour, size) to improve clarity.
Ensure buttons (.send-btn, .quote-btn) have hover/focus states in CSS<br>

<h1>Review Comments on Our Story Page Refactor</h1>
<h2>General</h2><br>
Strong narrative structure: three main story sections (Epic Journey, Low‑Carb, Local History) plus a team showcase.
Good use of semantic grouping with .team-section and .team-grid.

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-story.
This allows different banners (home, menu, story) to share common styling while swapping background images in CSS.

<h2>Story Sections</h2>
Currently using nested <p> tags (invalid HTML). Replace with <div> or <span> for inner text alignment.
Inline style="text-align: center;" should be moved into CSS (.story-text { text-align: center; }).

<h2>Team Section</h2>
team-grid and .team-card introduced for layout.
CSS should handle spacing, alignment, and responsive design (grid/flexbox).
Inline formatting removed.

<h2>Footer</h2>
Duplicate <footer> tags present. Consolidate into one <footer> block.
Styles for .footer, .footer-container, .footer-column should be handled in CSS.

<h2>Accessibility</h2>
Alt text present, but some are too generic (alt="food", alt="history"). Replace with descriptive alt text like alt="Jamie Tucker baking low-carb pastries".
Ensure team images have descriptive alt text (e.g., alt="Nokwanda smiling behind the coffee counter").<br>

<h1>Review Comments on Shop Page Refactor</h1>
<h2>General</h2>
Strong layout: clear cake categories (All Cakes, Classic Cakes, Celebration Cakes, Fun Size Cakes) with text and image pairing.
Good use of semantic grouping with .cake-category, .cake-text, and .cake-image.

<h1>HTML → CSS Changes</h1>
<h2>Header</h2>
Inline background-color: grey; and color: white; should be moved into style.css.
Suggest creating a .site-header class with background and text color rules.

<h2>Banner</h2>
Inline background-image moved into CSS via .banner-shop.
This allows different banners (home, menu, shop) to share common styling while swapping background images in CSS.

<h2>Category Sections</h2>
Inline style="background-color: #40e0d0;", #e75480, #4CAF50, #FFD54F should be moved into CSS classes (.turquoise, .pink, .green, .yellow).
This keeps HTML clean and makes color themes reusable.

<h2>Cake Text</h2>
Inline formatting removed; CSS should handle background colors, padding, and typography.
lead-time class introduced for styling lead time notes consistently.

<h2>Images</h2>
Cake-image img should be styled in CSS for sizing and responsiveness.
Inline attributes removed in favor of CSS rules.

<h2>Footer</h2>
Duplicate <footer> tags present. Consolidate into one <footer> block.
Styles for .footer, .footer-container, .footer-column should be handled in CSS.

<h2>Accessibility</h2>
Alt text is descriptive (alt="Slice of chocolate cake with frosting and macarons").
Ensure consistent descriptive alt text across all product images.
Add hover/focus states for category sections and buttons in CSS.

<h1>Date Updated:18/09/2026</h1>

<h1>Reference List</h1>
<h1>Part 1</h1>
<ul>
  <li>Duckett, J. (2011) HTML and CSS: Design and Build Websites. Indianapolis: Wiley.</li>
  <li>Freeman, E. and Robson, E. (2005) Head First HTML with CSS & XHTML. Sebastopol: O’Reilly Media.</li>
  <li>Mozilla Developer Network (MDN) (2026) HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (developer.mozilla.org in Bing) (Accessed: 18 September 2026).</li>
</ul>

<h1>Reference List</h1>
<h1>Part 2</h1>
<ul>
  <li>Meyer, E. (2006) CSS: The Definitive Guide. 3rd edn. Sebastopol: O’Reilly Media.</li>
  <li>Keith, J. (2010) HTML5 for Web Designers. New York: A Book Apart.</li>
</ul>

<h1>Date Updated:01/11/2026</h1>

<h1>Project: Website Development -Portfolio of Evidence (POE)<br></h1>

<h2>POE Details</h2><br>
<ul>
  <li>Added New Pages</li>
  <li>Shop</li>
  <li>Cart</li>
  <li>Account</li>
  <li>Get In Touch</li>
</ul>
<h2>The Old Pages</h2>
<p>The Old Pages Were</p>
<ul>
  <li>Homepage</li>
  <li>About Us</li>
  <li>Enquiry</li>
  <li>Contact Us</li>
  <li>Services</li>
  <li>Build a Cake</li>
</ul>

<h1>Homepage</h1>
<h2>Changes Made</h2>

<h2>Homepage Launch</h2>

<h2>Added</h2>
<ul>
  <li>Responsive homepage structure for Crust Bakery</li>
  <li>Header navigation with burger menu support</li>
  <li>Hero banner and welcome section</li>
  <li>"A Taste of Crust" promotional section with quote CTA</li>
  <li>Featured product carousel showcasing 9 best-selling bakery items</li>
  <li>Healthy lifestyle and low-carb product marketing sections</li>
  <li>Seasonal Menu promotion area</li>
  <li>Our Story section highlighting bakery history</li>
  <li>Local supplier showcase ("Crust Loves Local")</li>
  <li>Customer testimonials section</li>
  <li>Instagram gallery section</li>
  <li>Contact CTA ("Let's Chat")</li>
  <li>Scroll-to-top button</li>
  <li>Comprehensive footer with address, trading hours, and contact information</li>
</ul>

<h1>Features</h1>
<ul>
  <li>Cart badge counter integration</li>
  <li>Shop, Gallery, Orders, Account, and Contact navigation.</li>
  <li>Product cards with images, pricing, and descriptions.</li>
  <li>External CSS styling support.</li>
  <li>External JavaScript functionality support.</li>
  <li>Dynamic copyright year placeholder.</li>
</ul>


<h1>Improvements</h1>
<ul>
  <li>Strong bakery-focused branding and storytelling.</li>
  <li>Multiple call-to-action buttons to increase engagement.</li>
  <li>Product-focused browsing experience.</li>
  <li>Mobile-friendly navigation foundation.</li>
</ul><br>
<h1>Status</h1>
Homepage Functionality Complete

<h1>CRUST BAKERY WEBSITE</h1>

<p>A modern, responsive bakery website built with **HTML5, CSS3, and JavaScript**, designed to showcase artisan breads, pastries, custom cakes, and online ordering services for Crust Bakery</p>

<h1>Overview</h1>

<p>The Crust Bakery website delivers a premium digital experience that allows customers to</p>
<ul>
  <li>Browse bakery products and seasonal offerings</li>
  <li>View custom cake galleries</li>
  <li>Submit quote requests</li>
  <li>Shop products online</li>
  <li>Manage customer accounts</li>
  <li>Track orders</li>
  <li>Manage shopping cart items</li>
  <li>Explore bakery history and local partnerships</li>
  <li>Contact the bakery directly</li>
</ul>

<h1>Features</h1>
<h2>Homepage</h2>
<ul>
  <li>Responsive navigation bar</li>
  <li>Mobile burger menu</li>
  <li>Hero banner</li>
  <li>Product carousel</li>
  <li>Best sellers section</li>
  <li>Seasonal menu showcase</li>
  <li>Customer testimonials</li>
  <li>Local supplier showcase</li>
  <li>Instagram gallery</li>
  <li>Contact CTA</li>
</ul>

<h1>Gallery</h1>
<ul>
  <li>>Category filtering</li>
  <li>Product showcase grid</li>
  <li>Responsive image gallery</li>
  <li>Lightbox image preview</li>
</ul>

<h1>Account Page</h1>
<ul>
  <li>Customer profile management</li>
  <li>Order history tracking</li>
  <li>Payment methods section</li>
  <li>Password & security settings</li>
  <li> Dark mode toggle</li>
  <li>Order status tracking modal</li>
</ul>

<h1>Shopping Cart</h1>
<ul>
  <li>Dynamic cart display</li>
  <li>Quantity management</li>
  <li>Order summary</li>
  <li>Checkout functionality</li>
  <li>Cart badge counter</li>
</ul>

<h1>Global Features</h1>
<ul>
  <li>Responsive design</li>
  <li>External CSS architecture</li>
  <li>Shared JavaScript functionality</li>
  <li>Scroll-to-top button</li>
  <li>Reusable footer component</li>
</ul>

<h1>Project Structure</h1>

```text
CRUST-BAKERY/
│
├── Index.html
│
├── Assets/
│   ├── Menu.html
│   ├── Orders.html
│   ├── Gallery.html
│   ├── Shop.html
│   ├── Cart.html
│   ├── Account.html
│   ├── OurStory.html
│   └── GetInTouch.html
│
├── CSS/
│   └── style.css
│
├── Javascript/
│   └── script.js
│
├── Images/
│   ├── Cake picture.jpg
│   ├── Croissants.jpg
│   ├── Wild Blueberry Muffins.jpeg
│   ├── Celebration Layer Cake.jpeg
│   ├── Brownies.jpeg
│   └── ...
│
└── README.md
```

---

<h1>HTML Structure</h1>

<p>The website follows a reusable page layout</p>

```html
<body>

  <header class="site-header">
    Navigation
  </header>

  <main>
    Page Content
  </main>

  <button id="scrollTopBtn">
    ↑
  </button>

  <footer class="footer">
    Footer Content
  </footer>

</body><br>
<h1>Main Components</h1>
Header
├── Logo
├── Navigation Menu
├── Cart Badge
└── Burger Menu

Homepage
├── Hero Banner
├── Taste of Crust
├── Best Sellers Carousel
├── Seasonal Menu
├── Our Story
├── Local Suppliers
├── Reviews
├── Instagram Feed
└── Contact CTA

Footer
├── Address
├── Trading Hours
├── Contact Details
└── Copyright
```

---

<h1>CSS Structure</h1>

The stylesheet is organized into reusable sections:

```css
/* Reset & Base Styling */

/* Header & Navigation */

/* Buttons */

/* Hero Sections */

/* Product Cards */

/* Carousel */

/* Gallery */

/* Forms */

/* Cart */

/* Account Dashboard */

/* Footer */

/* Responsive Media Queries */
```

<h1>Key CSS Modules</h1>

text
Navigation
Product Cards
Carousel
Gallery Grid
Account Dashboard
Cart Layout
Buttons
Forms
Footer
Responsive Layouts
<h1>JavaScript Structure</h1>

The main JavaScript file manages website interactions.

```javascript
document.addEventListener("DOMContentLoaded", () => {

   initializeBurgerMenu();
   initializeCarousel();
   initializeGalleryFilters();
   initializeCart();
   initializeAccountTabs();
   initializeScrollTop();

});
```

<h1>Functional Modules</h1>
text
script.js
│
├── Burger Menu Toggle
├── Product Carousel Controls
├── Gallery Filtering
├── Lightbox Viewer
├── Cart Management
├── Cart Badge Updates
├── Account Tab Navigation
├── Profile Form Handling
├── Password Validation
├── Theme Toggle
├── Order Tracker Modal
├── Scroll To Top Button
└── Dynamic Copyright Year
```

---

<h1>Responsive Design</h1>

<p>The website is optimized for</p>

| Device | Support |
|----------|----------|
| Mobile Phones | ✅ |
| Tablets | ✅ |
| Laptops | ✅ |
| Desktop Screens | ✅ |

<h1>Technologies Used</h1>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (ES6)</li>
  <li>Unsplash Images</li>
  <li>Responsive Web Design</li>
</ul> 

<h1>Future Improvements</h1>
<ul>
  <li>User authentication system</li>
  <li>Online payment gateway integration</li>
  <li>Wishlist functionality</li>
  <li>Product search feature</li>
  <li>Email notifications</li>
  <li>Customer rewards dashboard</li>
  <li>Backend order management</li>
  <li>Database integration</li>
  <li>Progressive Web App (PWA)</li>
</ul>

<h1>Menu</h1>
<ul>
  <li>Seasonal food and drink menu</li>
  <li>Product pricing display</li>
  <li>Smoothie and beverage listings</li>
  <li>Category-based layout</li>
</ul>

<h1>Orders</h1>
<ul>
  <li>Custom order request section</li>
  <li>Bread and cake pricing access</li>
  <li>Embedded quote request form</li>
  <li>Order information and notice periods</li>
</ul>

<h1>Contact Page</h1>
<ul>
  <li>Contact form integration</li>
  <li>Embedded Google Maps location</li>
  <li>Business contact information</li>
  <li>Email and phone links</li>
</ul>
CRUST-BAKERY/
│
├── Index.html
│
├── Assets/
│   ├── Menu.html
│   ├── Orders.html
│   ├── Gallery.html
│   ├── Shop.html
│   ├── Cart.html
│   ├── Account.html
│   ├── OurStory.html
│   └── GetInTouch.html
│
├── CSS/
│   └── style.css
│
├── Javascript/
│   └── script.js
│
├── Images/
│   ├── Bakery Images
│   ├── Product Images
│   ├── Cake Images
│   ├── Pastry Images
│   └── Gallery Assets
│
└── README.md

<h1>Homepage Structure</h1>
Homepage
│
├── Header
│   ├── Logo
│   ├── Navigation
│   ├── Cart Badge
│   └── Burger Menu
│
├── Hero Banner
│
├── A Taste of Crust
│
├── Healthy Indulgence Section
│
├── Best Sellers Carousel
│
├── Freshness Banner
│
├── Seasonal Menu
│
├── Our Story
│
├── Crust Loves Local
│
├── Reviews Section
│
├── Follow Us Gallery
│
├── Contact CTA
│
└── Footer

<h1>Gallery Page Structure</h1>
Gallery
│
├── Gallery Hero
├── Category Filters
├── Gallery Grid
├── Lightbox Modal
└── Footer

Based on Gallery.html. 【1-8f0be3】
<h1>Orders Page Structure</h1>
Orders
│
├── Hero Section
├── Order Information
├── Cake Price List Button
├── Bread Price List Button
├── Embedded Google Form
└── Footer

Based on Orders.html. 【2-f997a5】

<h1>Account Page Structure</h1>
Account Dashboard
│
├── User Profile Header
├── Dark Mode Toggle
├── Sidebar Navigation
│
├── Personal Details
├── Order History
├── Payment Methods
├── Security Settings
│
├── Order Tracking Modal
└── Footer
Based on Account .html. 【3-efa1d8】

<h1>Contact Page Structure</h1>
Get In Touch
│
├── Google Maps Embed
├── Contact Form
├── Contact Information
└── Footer
Based on Get in Touch .html. 【4-924b5a】

<h1>CSS Structure</h1>
<p>The stylesheet uses reusable sections and component-based styling.</p>

```css
/* Reset & Base Styles */

/* Typography */

/* Header & Navigation */

/* Buttons */

/* Hero Sections */

/* Product Cards */

/* Carousel */

/* Gallery Grid */

/* Lightbox */

/* Forms */

/* Contact Page */

/* Cart Layout */

/* Account Dashboard */

/* Footer */

/* Scroll To Top Button */

/* Mobile Navigation */

/* Responsive Breakpoints */

<h1>CSS Component Architecture</h1>
style.css
│
├── Global Variables
├── Layout Containers
├── Navigation
├── Hero Sections
├── Buttons
├── Product Cards
├── Carousel
├── Gallery
├── Forms
├── Tables
├── Cart Components
├── Dashboard Components
├── Footer
└── Media Queries

<h1>Shop Page</h1>
<ul>
  <li>Product search functionality</li>
  <li>Category filters</li>
  <li>Add-to-cart functionality</li>
  <li>Product badges</li>
  <li>Shopping experience</li>
</ul>

style.css
│
├── Variables*│
├── Global Styles
│
├── Header
│*├── Navigation
│
├── Hero Sections*│
├── Product Components
│
├── Car*usel Components
│
├── Gallery Comp*nents
│
├── Shop Components
│
├── *art Components
│
├── Account Compo*ents
│
├── Contact Components
│
├─* Footer Components
│
└── Responsiv* Breakpoints

<h1>JavaScript Architecture</h1>
<p>All website inte*actions are controlled through a central JavaScript file</p>
<h1>Initialization</h1>

javascript
document.add*ventListener("DOMContentLoaded", (* => {

    initBurgerMenu();
    initCarousel();
    initGalleryFilters();
    initLightbox();
    initShopFilters();
    initShoppingCart();
    initAccountTabs();
    initThemeToggle();
    initOrderTracking();
    initScrollTop();

});
```

<h1>JavaScript Modules</h1>
script.js
│
├── Navigation
│   └── Burger Menu Toggle
│
├── Homepage
│   ├── Product Carousel
│   └── CTA Navigation
│
├── Gallery
│   ├── Image Filters
│   └── Lightbox Modal
│
├── Shop
│   ├── Product Search
│   ├── Category Filters
│   ├── Add To Cart
│   └── Product Management
│
├── Cart
│   ├── Quantity Updates
│   ├── Remove Product
│   ├── Calculate Total
│   └── Checkout Actions
│
├── Account
│   ├── Tab Navigation
│   ├── Profile Updates
│   ├── Security Controls
│   ├── Theme Toggle
│   └── Order Tracking
│
├── Utility Functions
│   ├── Scroll To Top
│   ├── Dynamic Year
│   └── Toast Notifications
│
└── Local Storage
    ├── Cart Storage
    └── User Preferences

<h1>Page Summary</h1>

| Page | Purpose |
|--------|----------|
| Homepage | Main business showcase |
| Menu | Food & beverage menu |
| Orders | Custom order requests |
| Gallery | Product showcase |
| Shop | Online shopping |
| Cart | Basket management |
| Account | Customer dashboard |
| Our Story | Company history |
| Contact | Customer communication |

<h1>Author</h1>

<h1>Siyolo Botile</h1>

<h1>Front-End Web Development Project</h1>
<h1>License</h1>

<p>This project is developed for educational and portfolio purposes</p>

© Crust Bakery. All Rights Reserved.


