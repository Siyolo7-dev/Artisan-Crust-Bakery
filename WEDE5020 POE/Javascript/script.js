// Send a form to Formspree and show the result
function sendToFormspree(form, onDone) {
    const btn = form.querySelector('button[type="submit"]');
    const label = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "SENDING..."; }
    const data = new FormData(form);
    const file = form.querySelector('input[type="file"]');
    if (file && file.files.length === 0) data.delete(file.name);
    fetch("https://formspree.io/f/xwllqylz", {
        method: "POST", body: data, headers: { Accept: "application/json" }
    }).then(function (r) {
        if (!r.ok) throw new Error("bad");
        onDone(); form.reset();
    }).catch(function () {
        alert("Sorry, we couldn't send that. Please try again or call 081 649 1150.");
    }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = label; }
    });
}

// Show a friendly on-page Thank You after a form is sent
function showThankYou(form, name, detail) {
    const safeName = String(name || "").replace(/[<>&"]/g, "");
    const panel = document.createElement("div");
    panel.className = "thank-you-panel";
    panel.innerHTML =
        '<div class="thank-you-check">&#10003;</div>' +
        "<h3>Thank you" + (safeName ? ", " + safeName : "") + "!</h3>" +
        "<p>" + detail + "</p>" +
        '<button type="button" class="thank-you-again">Send another message</button>';
    form.style.display = "none";
    form.parentNode.insertBefore(panel, form.nextSibling);
    panel.querySelector(".thank-you-again").addEventListener("click", function () {
        panel.remove();
        form.reset();
        form.style.display = "";
    });
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
}
// ==========================
// LIVE CART BADGE (global)
// ==========================
function updateCartBadge() {
    let cart = [];
    try { cart = JSON.parse(localStorage.getItem("cart")) || []; } catch (e) { cart = []; }
    const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    document.querySelectorAll("#cart-count-badge").forEach(b => {
        b.textContent = count;
        b.classList.toggle("has-items", count > 0);
        b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
    });
}
window.addEventListener("storage", e => { if (e.key === "cart") updateCartBadge(); });
window.addEventListener("pageshow", updateCartBadge);
document.addEventListener("DOMContentLoaded", updateCartBadge);

// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Burger Menu Toggle
    // ==========================
    const burgerBtn = document.querySelector(".burger-btn");
    const nav = document.querySelector(".main-nav");

    burgerBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close menu when a link is clicked (mobile)
    document.querySelectorAll(".main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });

    // ==========================
    // Buttons Navigation
    // ==========================

    const quoteBtn = document.getElementById("quoteBtn");
    if (quoteBtn) {
        quoteBtn.addEventListener("click", () => {
            window.location.href = "Assets/Orders.html";
        });
    }

    const menuBtn = document.getElementById("menuBtn");
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            window.location.href = "Assets/Menu.html";
        });
    }

    const storyBtn = document.getElementById("storyBtn");
    if (storyBtn) {
        storyBtn.addEventListener("click", () => {
            window.location.href = "Assets/Our Story .html";
        });
    }

    const chatBtn = document.getElementById("chatBtn");
    if (chatBtn) {
        chatBtn.addEventListener("click", () => {
            window.location.href = "Assets/Get in Touch .html";
        });
    }

    // ==========================
    // Dynamic Footer Year
    // ==========================
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ==========================
    // Smooth Scrolling
    // ==========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ==========================
    // Fade In Animation
    // ==========================
    const sections = document.querySelectorAll(
        ".taste-section, .seasonal-menu, .our-story, .local-section, .reviews-section, .follow-us, .chat-section"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});

document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // FOOTER YEAR
    // ======================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ======================
    // ACTIVE PAGE LINK
    // ======================
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            currentPage &&
            href.includes(currentPage)
        ) {
            link.classList.add("current-page");
        }
    });

    // ======================
    // MENU CATEGORY SWITCHING
    // ======================
    const categories = document.querySelectorAll(".menu-categories h2");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            categories.forEach(item =>
                item.classList.remove("active")
            );

            category.classList.add("active");

        });

    });

    // ======================
    // FADE-IN ANIMATIONS
    // ======================
    const sections = document.querySelectorAll(
        ".seasonal-hero, .kitchen-section, .menu-column"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // FOOTER YEAR
    // =========================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // =========================
    // ACTIVE PAGE NAVIGATION
    // =========================
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            currentPage &&
            href.toLowerCase() === currentPage.toLowerCase()
        ) {
            link.classList.add("current-page");
        }
    });

    // =========================
    // CAKE PRICE LIST BUTTON
    // =========================
    const cakeBtn = document.getElementById("cakeBtn");

    if (cakeBtn) {
        cakeBtn.addEventListener("click", () => {

            // Change path if needed
            window.location.href = "https://advtechonline-my.sharepoint.com/:b:/r/personal/st10482267_rcconnect_edu_za/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fst10482267%5Frcconnect%5Fedu%5Fza%2FDocuments%2FCRUST%2DBakery%2Dstandard%2Dcakes%2DJuly%2D2025%2Epdf&parent=%2Fpersonal%2Fst10482267%5Frcconnect%5Fedu%5Fza%2FDocuments&share=cQp0uGRAnb%5FBTYCiE%2D0swTpdEgUCqNiMvHWX5g0FmVrQZowC5w";

            // OR PDF
            // window.open("../Documents/CakePriceList.pdf");
        });
    }

    // =========================
    // BREAD PRICE LIST BUTTON
    // =========================
    const breadBtn = document.getElementById("breadBtn");

    if (breadBtn) {
        breadBtn.addEventListener("click", () => {

            // Change path if needed
            window.location.href = "https://advtechonline-my.sharepoint.com/:b:/r/personal/st10482267_rcconnect_edu_za/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fst10482267%5Frcconnect%5Fedu%5Fza%2FDocuments%2FCRUST%2DBakery%2DBread%2DPrice%2DList%2DOct%2D2025%2Epdf&parent=%2Fpersonal%2Fst10482267%5Frcconnect%5Fedu%5Fza%2FDocuments&share=cQoa05p%2DOKftRICL5%5FFonYRCEgUCPhGXLz5o%2DkWF051mAagt1w";

            // OR PDF
            // window.open("../Documents/BreadPriceList.pdf");
        });
    }

    // =========================
    // COLLECTION DATE
    // =========================
    const dateInput = document.getElementById("date");

    if (dateInput) {

        const today = new Date();
        const minDate = today.toISOString().split("T")[0];

        dateInput.setAttribute("min", minDate);
    }

    // =========================
    // FILE UPLOAD PREVIEW
    // =========================
    const fileInput = document.getElementById("reference");

    if (fileInput) {

        fileInput.addEventListener("change", function () {

            if (this.files.length > 0) {

                alert(
                    "Uploaded: " +
                    this.files[0].name
                );

            }

        });

    }

    // =========================
    // ORDER FORM
    // =========================
    const quoteForm =
        document.getElementById("quoteForm");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullname =
                document.getElementById("fullname").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const order =
                document.getElementById("order").value.trim();

            const date =
                document.getElementById("date").value;

            if (
                fullname === "" ||
                phone === "" ||
                email === "" ||
                order === "" ||
                date === ""
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;
            }

            sendToFormspree(quoteForm, function () {
                showThankYou(quoteForm, fullname, "Your quote request has been sent. We'll get back to you as soon as possible — usually within a day.");
            });

        });

    }

});

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FOOTER YEAR
    // ==========================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ==========================
    // ACTIVE NAVIGATION
    // ==========================
    const currentPage =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            currentPage &&
            href.toLowerCase() === currentPage.toLowerCase()
        ) {
            link.classList.add("current-page");
        }

    });

    // ==========================
    // FILTER GALLERY
    // ==========================
    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter =
                button.dataset.filter;

            galleryItems.forEach(item => {

                const category =
                    item.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

    // ==========================
    // LIGHTBOX GALLERY
    // ==========================
    const images =
        document.querySelectorAll(".gallery-item img");

    const lightbox =
        document.getElementById("lightbox-modal");

    const lightboxImg =
        document.getElementById("lightbox-img");

    const caption =
        document.getElementById("lightbox-caption");

    const closeBtn =
        document.querySelector(".close-btn");

    images.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

            caption.textContent =
                image.alt;

        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }

    window.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

    // ==========================
    // CLICK PRODUCT TO SHOP
    // ==========================
    galleryItems.forEach(item => {

        item.addEventListener("dblclick", () => {

            window.location.href =
                "Cart.html";

        });

    });

    // ==========================
    // SCROLL ANIMATION
    // ==========================
    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        }, {
            threshold: 0.2
        });

    galleryItems.forEach(item => {

        observer.observe(item);

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // FOOTER YEAR
    // ======================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ======================
    // ACTIVE PAGE
    // ======================
    const currentPage =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            currentPage &&
            href.toLowerCase() === currentPage.toLowerCase()
        ) {
            link.classList.add("current-page");
        }

    });

    // ======================
    // TEXT LOAD ANIMATION
    // ======================

    const textElements = document.querySelectorAll(
        "h1, h2, h3, p"
    );

    textElements.forEach((element, index) => {

        setTimeout(() => {

            element.classList.add("text-show");

        }, index * 100);

    });

    // ======================
    // SCROLL ANIMATION
    // ======================

    const sections = document.querySelectorAll(
        ".epic-journey, .lowcarb-story, .local-history, .about-section, .brand-promise, .family-section, .delights-section, .team-section"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "section-show"
                );

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        observer.observe(section);

    });

    // ======================
    // IMAGE HOVER EFFECT
    // ======================

    const images =
        document.querySelectorAll("img");

    images.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform =
                "scale(1.05)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform =
                "scale(1)";

        });

    });

    // ======================
    // SCROLL TO TOP
    // ======================

    const scrollBtn =
        document.getElementById("scrollTopBtn");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                scrollBtn.style.display =
                    "block";

            } else {

                scrollBtn.style.display =
                    "none";

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // ======================
    // CLICKABLE TEAM CARDS
    // ======================

    document.querySelectorAll(".team-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                card.classList.toggle("active-team");

            });

        });

});

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // YEAR
    // ==========================

    const year = document.getElementById("year");

    if(year){
        year.textContent =
            new Date().getFullYear();
    }

    // ==========================
    // ACTIVE PAGE
    // ==========================

    const currentPage =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if(
                href &&
                currentPage &&
                href.toLowerCase() ===
                currentPage.toLowerCase()
            ){

                link.classList.add(
                    "current-page"
                );

            }

        });

    // ==========================
    // CATEGORY FILTER
    // ==========================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const products =
        document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const category =
                button.dataset.category;

            products.forEach(product => {

                const productCategory =
                    product.dataset.category;

                if(
                    category === "all" ||
                    productCategory === category
                ){

                    product.style.display =
                        "block";

                } else {

                    product.style.display =
                        "none";

                }

            });

        });

    });

    // ==========================
    // SEARCH BAR
    // ==========================

    const searchInput =
        document.getElementById(
            "shop-search"
        );

    if(searchInput){

        searchInput.addEventListener("keyup", () => {

            const value =
                searchInput.value
                .toLowerCase();

            products.forEach(product => {

                const productName =
                    product.querySelector("h3")
                    .textContent
                    .toLowerCase();

                if(
                    productName.includes(
                        value
                    )
                ){

                    product.style.display =
                        "block";

                } else {

                    product.style.display =
                        "none";

                }

            });

        });

    }

    // ==========================
    // CLICKABLE PRODUCT IMAGES
    // ==========================

    document
        .querySelectorAll(
            ".product-image"
        )
        .forEach(image => {

            image.addEventListener(
                "click",
                () => {

                    window.open(
                        image.src,
                        "_blank"
                    );

                }
            );

        });

    // ==========================
    // ADD TO CART
    // ==========================

    const cartButtons =
        document.querySelectorAll(
            ".add-to-cart-btn"
        );

    const toast =
        document.getElementById(
            "toast"
        );

    cartButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const item = {

                    name:
                        button.dataset.name,

                    price:
                        parseFloat(
                            button.dataset.price
                        ),

                    quantity: 1

                };

                let cart =
                    JSON.parse(
                        localStorage.getItem(
                            "cart"
                        )
                    ) || [];

                const existing =
                    cart.find(
                        product =>
                        product.name ===
                        item.name
                    );

                if(existing){

                    existing.quantity++;

                }else{

                    cart.push(item);

                }

                localStorage.setItem(
                    "cart",
                    JSON.stringify(cart)
                );

                updateCartBadge();

                if(toast){

                    toast.classList.add(
                        "show-toast"
                    );

                    setTimeout(() => {

                        toast.classList.remove(
                            "show-toast"
                        );

                    }, 2000);

                }

            }

        );

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // CART HELPERS
    // ==========================

    const getCart = () =>
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const saveCart = cart => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
        updateCartBadge();
    };

    // ==========================
    // CART COUNT BADGE
    // ==========================

    const badge =
        document.getElementById(
            "cart-count-badge"
        );

    if (badge) {

        const count = getCart().reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );

        badge.textContent = count;

    }

    // ==========================
    // CART PAGE RENDER
    // ==========================

    const cartTable =
        document.getElementById(
            "cart-items"
        );

    if (cartTable) {

        const emptyMsg =
            document.getElementById(
                "cart-empty"
            );

        const cartContent =
            document.getElementById(
                "cart-content"
            );

        const totalEl =
            document.getElementById(
                "cart-total"
            );

        const renderCart = () => {

            const cart = getCart();

            cartTable.innerHTML = "";

            if (cart.length === 0) {

                emptyMsg.style.display =
                    "block";

                cartContent.style.display =
                    "none";

                if (badge) {
                    badge.textContent = 0;
                }

                return;

            }

            emptyMsg.style.display =
                "none";

            cartContent.style.display =
                "block";

            let total = 0;
            let count = 0;

            cart.forEach((item, index) => {

                const subtotal =
                    item.price *
                    item.quantity;

                total += subtotal;
                count += item.quantity;

                const row =
                    document.createElement(
                        "tr"
                    );

                row.innerHTML = `
                    <td>${item.name}</td>
                    <td class="qty-cell">
                        <button class="qty-btn" data-index="${index}" data-action="decrease">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
                    </td>
                    <td>R${item.price.toFixed(2)}</td>
                    <td>R${subtotal.toFixed(2)}</td>
                    <td><button class="remove-btn" data-index="${index}">Remove</button></td>
                `;

                cartTable.appendChild(row);

            });

            totalEl.textContent =
                "R" + total.toFixed(2);

            if (badge) {
                badge.textContent = count;
            }

        };

        renderCart();

        // Quantity + remove buttons
        cartTable.addEventListener(
            "click",
            e => {

                const btn =
                    e.target.closest(
                        "button"
                    );

                if (!btn) return;

                const index = parseInt(
                    btn.dataset.index,
                    10
                );

                const cart = getCart();

                if (
                    btn.classList.contains(
                        "remove-btn"
                    )
                ) {

                    cart.splice(index, 1);

                } else if (
                    btn.dataset.action ===
                    "increase"
                ) {

                    cart[index].quantity++;

                } else if (
                    btn.dataset.action ===
                    "decrease"
                ) {

                    cart[index].quantity--;

                    if (
                        cart[index]
                            .quantity <= 0
                    ) {

                        cart.splice(
                            index,
                            1
                        );

                    }

                } else {

                    return;

                }

                saveCart(cart);
                renderCart();

            }
        );

        // Clear cart
        const clearBtn =
            document.getElementById(
                "clear-cart-btn"
            );

        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                () => {

                    saveCart([]);
                    renderCart();

                }
            );

        }

        // Checkout
        const checkoutBtn =
            document.getElementById(
                "checkout-btn"
            );

        if (checkoutBtn) {

            checkoutBtn.addEventListener(
                "click",
                () => {

                    const cart = getCart();

                    if (
                        cart.length === 0
                    ) {

                        alert(
                            "Your cart is empty."
                        );

                        return;

                    }

                    const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);
                    const orderNo = "CB" + Date.now().toString().slice(-6);
                    const params = new URLSearchParams({
                        order: orderNo,
                        total: total.toFixed(2),
                        items: cart.map(i => i.quantity + "x " + i.name).join("|")
                    });

                    saveCart([]);
                    window.location.href = "ThankYou.html?" + params.toString();

                }
            );

        }

    }

});


document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FOOTER YEAR
    // ==========================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ==========================
    // ACTIVE NAVIGATION
    // ==========================
    const currentPage =
        window.location.pathname.split("/").pop();

    document.querySelectorAll(".main-nav a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                href &&
                currentPage &&
                href.toLowerCase() === currentPage.toLowerCase()
            ) {
                link.classList.add("current-page");
            }

        });

    // ==========================
    // PAGE LOAD ANIMATION
    // ==========================
    const textElements =
        document.querySelectorAll(
            "h1, h2, h3, p, label"
        );

    textElements.forEach((item, index) => {

        setTimeout(() => {

            item.classList.add(
                "text-visible"
            );

        }, index * 100);

    });

    // ==========================
    // CONTACT FORM
    // ==========================
    const form =
        document.getElementById(
            "contactForm"
        );

    if (form) {

        form.addEventListener(
            "submit",
            function (e) {

                e.preventDefault();

                const name =
                    document.getElementById("name")
                    .value.trim();

                const email =
                    document.getElementById("email")
                    .value.trim();

                const message =
                    document.getElementById("message")
                    .value.trim();

                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    alert(
                        "Please complete all fields."
                    );

                    return;
                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailPattern.test(email)
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }

                sendToFormspree(form, function () {
                    showThankYou(form, name, "Your message has been sent. We'll be in touch soon — keep an eye on your inbox.");
                });

            }
        );

    }

    // ==========================
    // SCROLL ANIMATIONS
    // ==========================
    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );

    document
        .querySelectorAll(
            ".contact-section, .contact-bar"
        )
        .forEach(section => {

            observer.observe(section);

        });

    // ==========================
    // CLICKABLE MAP
    // ==========================
    const map =
        document.querySelector(
            ".map-container iframe"
        );

    if (map) {

        map.addEventListener(
            "click",
            () => {

                window.open(
                    "https://maps.google.com/?q=1A Duke Road, Rondebosch, Cape Town",
                    "_blank"
                );

            }
        );

    }

});

document.addEventListener('DOMContentLoaded', () => {
  // 1. Account Navigation Tabs
  const tabButtons = document.querySelectorAll('.account-tabs .tab-btn[data-tab]');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetElement = document.getElementById(targetTab);
        if (targetElement) {
          targetElement.classList.add('active');
        }
      });
    });
  }

  // 2. Profile Details Form Handler
  const profileForm = document.getElementById('profile-form');
  const displayName = document.getElementById('user-display-name');
  const avatarInitials = document.getElementById('avatar-initials');
  const profileMsg = document.getElementById('profile-msg');

  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('first-name').value.trim();
      const lastName = document.getElementById('last-name').value.trim();

      if (firstName && lastName) {
        if (displayName) displayName.textContent = `${firstName} ${lastName}`;
        if (avatarInitials) {
          avatarInitials.textContent = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
        }
        if (profileMsg) {
          profileMsg.textContent = 'Account details updated successfully!';
          setTimeout(() => { profileMsg.textContent = ''; }, 3000);
        }
      }
    });
  }

  // 3. Password & Security Form Handler
  const securityForm = document.getElementById('security-form');
  const securityMsg = document.getElementById('security-msg');

  if (securityForm) {
    securityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newPass = document.getElementById('new-password').value;
      const confirmPass = document.getElementById('confirm-password').value;

      if (newPass !== confirmPass) {
        securityMsg.style.color = '#d9534f';
        securityMsg.textContent = 'Passwords do not match. Please try again.';
        return;
      }

      securityMsg.style.color = '#2e7d32';
      securityMsg.textContent = 'Password changed successfully!';
      securityForm.reset();
      setTimeout(() => { securityMsg.textContent = ''; }, 3000);
    });
  }

  // 4. Dark Mode Support & Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('.theme-icon');
  const themeLabel = themeToggleBtn?.querySelector('.theme-label');

  // Check saved theme preferences
  if (localStorage.getItem('crustTheme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeLabel) themeLabel.textContent = 'Light Mode';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');

      localStorage.setItem('crustTheme', isDark ? 'dark' : 'light');

      if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
      if (themeLabel) themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }

  // 5. Interactive Order Tracker Modal
  const trackerModal = document.getElementById('tracker-modal');
  const modalClose = document.getElementById('modal-close');
  const trackBtns = document.querySelectorAll('.track-order-btn');
  const modalTitle = document.getElementById('modal-order-title');

  if (trackBtns.length > 0 && trackerModal) {
    trackBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const orderId = btn.getAttribute('data-order');
        const status = btn.getAttribute('data-status');

        if (modalTitle) modalTitle.textContent = `Order Status: #${orderId}`;

        // Reset step classes
        document.querySelectorAll('.tracker-steps .step').forEach(step => {
          step.classList.remove('step-active', 'step-completed');
        });

        const stepBaking = document.getElementById('step-baking');
        const stepTransit = document.getElementById('step-transit');
        const stepDelivered = document.getElementById('step-delivered');

        // Dynamically adjust tracker visual steps based on order status
        if (status === 'baking') {
          stepBaking?.classList.add('step-active');
        } else if (status === 'delivered') {
          stepBaking?.classList.add('step-completed');
          stepTransit?.classList.add('step-completed');
          stepDelivered?.classList.add('step-active');
        }

        trackerModal.classList.add('active');
      });
    });
  }

  if (modalClose && trackerModal) {
    modalClose.addEventListener('click', () => {
      trackerModal.classList.remove('active');
    });

    trackerModal.addEventListener('click', (e) => {
      if (e.target === trackerModal) {
        trackerModal.classList.remove('active');
      }
    });
  }

  // 6. Sign Out Button
  const logoutBtn = document.getElementById('logout-trigger');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to sign out?')) {
        window.location.href = '../Index.html';
      }
    });
  }
});
