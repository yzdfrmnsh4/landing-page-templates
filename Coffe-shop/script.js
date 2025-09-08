// Enhanced JavaScript for coffee shop landing page

document.addEventListener("DOMContentLoaded", () => {
  // Navigation scroll effect
  const navbar = document.getElementById("navbar")
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  // Handle navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view")
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Enhanced button interactions
  const buttons = document.querySelectorAll(".btn-primary, button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(0) scale(0.98)"
    })

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-2px) scale(1.02)"
    })
  })

  // Add to cart functionality (basic)
  const addToCartButtons = document.querySelectorAll('button:contains("Add to Cart")')
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Simple feedback animation
      const originalText = this.textContent
      this.textContent = "Added!"
      this.style.backgroundColor = "#10b981"

      setTimeout(() => {
        this.textContent = originalText
        this.style.backgroundColor = ""
      }, 1500)
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroImages = document.querySelectorAll("#home img")

    heroImages.forEach((img, index) => {
      const speed = 0.5 + index * 0.1
      img.style.transform = `translateY(${scrolled * speed}px)`
    })
  })

  // Loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")

    // Trigger initial animations
    setTimeout(() => {
      const heroContent = document.querySelector("#home .animate-on-scroll")
      if (heroContent) {
        heroContent.classList.add("in-view")
      }
    }, 300)
  })

  // Console log for debugging
  console.log("[v0] Coffee shop landing page loaded successfully")
  console.log("[v0] All interactive elements initialized")
})

// Utility function to check if element contains text
HTMLElement.prototype.contains = function (text) {
  return this.textContent.includes(text)
}
