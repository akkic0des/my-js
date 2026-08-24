const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const getStartedButton = document.querySelector(".get-started");
const contactForm = document.querySelector("#contact-form");

let companyName = "TechNova Solutions";
let currentYear = new Date().getFullYear();

console.log("Welcome to " + companyName);
console.log("Current year:", currentYear);

function showMessage(message) {
    console.log(message);
}

function greetUser(name) {
    return "Welcome to TechNova, " + name + "!";
}

console.log(greetUser("Developer"));

if (getStartedButton) {
    getStartedButton.addEventListener("click", function() {
        alert("Welcome to TechNova Solutions!");
    });
}

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message has been submitted.");
        contactForm.reset();
    });
}

const services = [
    "Web Development",
    "Software Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Data Analytics"
];

console.log("Our services:");
console.log(services);

services.forEach(function(service) {
    console.log("Service:", service);
});

const serviceNames = services.map(function(service) {
    return service.toUpperCase();
});

console.log(serviceNames);

const company = {
    name: "TechNova Solutions",
    industry: "Technology",
    location: "India",
    employees: 50,
    services: services,
    introduce: function() {
        return "We are " + this.name + ", a technology company.";
    }
};

console.log(company.name);
console.log(company.industry);
console.log(company.location);
console.log(company.introduce());

const employees = company.employees;

if (employees > 100) {
    console.log("TechNova is a large company.");
} else if (employees > 50) {
    console.log("TechNova is a medium-sized company.");
} else {
    console.log("TechNova is a growing company.");
}

for (let i = 0; i < services.length; i++) {
    console.log("Service " + (i + 1) + ":", services[i]);
}

const heroHeading = document.querySelector(".hero h1");

if (heroHeading) {
    heroHeading.addEventListener("click", function() {
        heroHeading.textContent = "Build the Future with TechNova!";
    });

    heroHeading.addEventListener("dblclick", function() {
        heroHeading.style.transform = "scale(1.05)";
    });
}

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});

document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});

let visitorCount = 0;

function increaseVisitorCount() {
    visitorCount++;
    console.log("Visitors:", visitorCount);
}

increaseVisitorCount();
increaseVisitorCount();
increaseVisitorCount();

const today = new Date();

console.log("Today:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());

setTimeout(function() {
    console.log("TechNova JavaScript is running!");
}, 2000);

let seconds = 0;

const timer = setInterval(function() {
    seconds++;
    console.log("Website running for:", seconds, "seconds");

    if (seconds === 5) {
        clearInterval(timer);
    }
}, 1000);

localStorage.setItem("companyName", "TechNova Solutions");

const savedCompany = localStorage.getItem("companyName");

console.log("Saved company:", savedCompany);

const darkModeButton = document.querySelector("#dark-mode");

if (darkModeButton) {
    darkModeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const user = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        };

        console.log("User object:", user);
    });
}

const developerName = "Akshat";

const welcomeMessage = `
Hello ${developerName}!
Welcome to ${companyName}.
`;

console.log(welcomeMessage);

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20));

const longServiceNames = services.filter(function(service) {
    return service.length > 15;
});

console.log("Long service names:", longServiceNames);

const aiService = services.find(function(service) {
    return service.includes("AI");
});

console.log("AI service:", aiService);

function searchService(keyword) {
    const result = services.filter(function(service) {
        return service.toLowerCase().includes(keyword.toLowerCase());
    });

    return result;
}

console.log(searchService("web"));
console.log(searchService("AI"));

try {
    console.log(company.name);
} catch (error) {
    console.log("Something went wrong:", error);
}

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("API data:", data);
    } catch (error) {
        console.log("API error:", error);
    }
}

getData();

console.log("TechNova JavaScript loaded!");