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
  <li>The Independent Institute of Education (IIE) (2026) Harvard-Anglia Style Reference Guide. Available at: https://studylib.net/doc/harvard-anglia-style-reference-guide (studylib.net in Bing) (Accessed: 18 September 2026)</li>
</ul>


