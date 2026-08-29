import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, NavLink, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useOutletContext, useParams, redirect } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { useState, useEffect } from "react";
import { X, User, Mail, Lock, Sun, Moon, Compass, Search, Menu, Send, Heart, Star, MapPin, Clock, ArrowRight, Bookmark, ChevronLeft, ChevronRight, Instagram, Facebook, Youtube, Sparkles, Tag, MessageSquare, ThumbsUp, ArrowLeft, Calendar, ShieldCheck, DollarSign, Plane, Phone } from "lucide-react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, _loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const logo = "/assets/logo-RkWMW8gS.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-600 text-white shadow hover:bg-emerald-700 active:bg-emerald-800",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800",
        outline: "border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900",
        secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-emerald-600 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  if (!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Success! Logged in as ${email}`);
    onClose();
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-full transition-colors",
        children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "p-8 pb-4 text-center space-y-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-gray-900 dark:text-white tracking-tight", children: activeTab === "login" ? "Welcome Back, Traveler!" : "Join the Community" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Share your Philippine errands, island stories, and local guides." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex border-b border-gray-100 dark:border-gray-800 px-8", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveTab("login"),
          className: `flex-1 py-3 text-sm font-bold text-center border-b-2 transition-colors ${activeTab === "login" ? "border-emerald-600 text-emerald-600 dark:text-emerald-400" : "border-transparent text-gray-400 hover:text-gray-600"}`,
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveTab("signup"),
          className: `flex-1 py-3 text-sm font-bold text-center border-b-2 transition-colors ${activeTab === "signup" ? "border-emerald-600 text-emerald-600 dark:text-emerald-400" : "border-transparent text-gray-400 hover:text-gray-600"}`,
          children: "Create Account"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "p-8 space-y-4", children: [
      activeTab === "signup" && /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Full Name" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              required: true,
              value: name,
              onChange: (e) => setName(e.target.value),
              placeholder: "e.g. Maria Santos",
              className: "w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            }
          ),
          /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-gray-400 absolute left-3 top-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Email Address" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "name@example.com",
              className: "w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            }
          ),
          /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gray-400 absolute left-3 top-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Password" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              required: true,
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: "••••••••",
              className: "w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            }
          ),
          /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 text-gray-400 absolute left-3 top-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full py-3 font-bold rounded-xl shadow-md mt-4", children: activeTab === "login" ? "Sign In to Account" : "Register New Account" })
    ] })
  ] }) });
}
function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  useEffect(() => {
    const root2 = document.documentElement;
    if (isDark) {
      root2.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root2.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setIsDark(!isDark),
      className: "p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500",
      "aria-label": "Toggle Theme Mode",
      title: isDark ? "Switch to Light Mode" : "Switch to Dark Mode",
      children: isDark ? /* @__PURE__ */ jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(Moon, { className: "w-4 h-4 text-gray-700" })
    }
  );
}
function Header({ onSearch }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [query, setQuery] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3 px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-48 sm:w-56 transition-transform hover:scale-105", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: "Philippine Destination",
            className: "w-full h-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "hidden lg:inline-block h-6 w-px bg-gray-200 dark:bg-gray-700" }),
        /* @__PURE__ */ jsxs("p", { className: "hidden lg:flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium", children: [
          /* @__PURE__ */ jsx(Compass, { className: "w-4 h-4 animate-spin-slow" }),
          "Curated Island Travel & Errand Log"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSearchSubmit, className: "relative flex-1 md:w-64", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: query,
              onChange: (e) => {
                setQuery(e.target.value);
                if (onSearch) onSearch(e.target.value);
              },
              placeholder: "Search islands, beaches, spots...",
              className: "w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-gray-900 transition-all"
            }
          ),
          /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-gray-400 absolute left-3 top-2.5" })
        ] }),
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => setIsAuthOpen(true),
            variant: "default",
            size: "sm",
            className: "rounded-full shadow-sm gap-1.5 text-xs font-semibold px-4",
            children: [
              /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsx("span", { children: "Sign In" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(AuthModal, { isOpen: isAuthOpen, onClose: () => setIsAuthOpen(false) })
  ] });
}
const navList = [
  { txt: "Home", href: "/" },
  { txt: "Destinations", href: "/destinations" },
  { txt: "Travel Info", href: "/travel-info" },
  { txt: "Hotels", href: "/hotels" },
  { txt: "My Account", href: "/my-account" },
  { txt: "Contact", href: "/contact" }
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx("nav", { className: "bg-emerald-800 dark:bg-gray-900 relative w-full z-20 shadow-md border-t border-emerald-700/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between py-1", children: [
    /* @__PURE__ */ jsx("div", { className: "flex md:order-2 md:hidden py-1.5", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        type: "button",
        className: "inline-flex items-center p-2 text-sm text-white bg-transparent rounded-lg hover:bg-emerald-900 focus:outline-none transition-colors",
        "aria-label": "Toggle navigation menu",
        "aria-expanded": isOpen,
        children: isOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6 text-white" })
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 transition-all duration-300`,
        children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-center gap-1 py-1.5 md:py-1 text-sm font-medium", children: navList.map((nav) => {
          return /* @__PURE__ */ jsx(
            NavLink,
            {
              to: nav.href,
              onClick: () => setIsOpen(false),
              className: ({ isActive }) => `rounded-lg md:px-4 px-3 py-2 transition-all duration-150 text-white text-sm w-full md:w-auto text-left ${isActive ? "bg-emerald-950/90 font-bold text-emerald-200 shadow-inner" : "hover:bg-emerald-700/80 hover:text-emerald-100"}`,
              children: nav.txt
            },
            nav.txt
          );
        }) })
      }
    )
  ] }) });
}
function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-gray-300 border-t border-gray-800 pt-12 pb-8 mt-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-48 bg-white/90 p-2 rounded-xl", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: logo,
            alt: "Philippine Destination",
            className: "w-full h-auto object-contain"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 leading-relaxed", children: "Curated user travel blog showcase highlighting island errands, authentic travel reviews, and local guides across the Philippines." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Navigation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-emerald-400 transition-colors", children: "Home & Stories" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/destinations", className: "hover:text-emerald-400 transition-colors", children: "Destinations Explorer" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/travel-info", className: "hover:text-emerald-400 transition-colors", children: "Travel Info & Guides" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/hotels", className: "hover:text-emerald-400 transition-colors", children: "Stays & Resorts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/my-account", className: "hover:text-emerald-400 transition-colors", children: "My Traveler Profile" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Top Spots" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "hover:text-emerald-400 transition-colors cursor-pointer", children: "El Nido & Coron, Palawan" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "hover:text-emerald-400 transition-colors cursor-pointer", children: "Siargao Island Break" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "hover:text-emerald-400 transition-colors cursor-pointer", children: "Batanes Rolling Hills" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "hover:text-emerald-400 transition-colors cursor-pointer", children: "Banaue Rice Terraces" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "hover:text-emerald-400 transition-colors cursor-pointer", children: "Vigan Colonial Streets" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold text-white uppercase tracking-wider", children: "Island Newsletter" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400", children: "Get secret beach updates & travel tips delivered weekly." }),
        subscribed ? /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-400 font-semibold bg-emerald-950/60 p-3 rounded-xl border border-emerald-800", children: "✓ Thanks for subscribing! Mabuhay!" }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubscribe, className: "space-y-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter your email...",
              className: "w-full px-3.5 py-2 text-xs bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
            }
          ),
          /* @__PURE__ */ jsxs(Button, { type: "submit", size: "sm", className: "w-full rounded-xl text-xs font-bold gap-1", children: [
            /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsx("span", { children: "Subscribe Now" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Philippine Destination. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { children: "Crafted with" }),
        /* @__PURE__ */ jsx(Heart, { className: "w-3.5 h-3.5 text-red-500 fill-red-500" }),
        /* @__PURE__ */ jsx("span", { children: "for Local & Global Travelers" })
      ] })
    ] })
  ] }) });
}
const stylesheet = "/assets/index-B-uAetkH.css";
const links = () => [{
  rel: "stylesheet",
  href: stylesheet
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Scoutie+Sans:ital,wght@0,300..800;1,300..800&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white font-sans antialiased",
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  const [globalSearch, setGlobalSearch] = useState("");
  return /* @__PURE__ */ jsxs("div", {
    className: "App min-h-screen bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col font-sans",
    children: [/* @__PURE__ */ jsx(Header, {
      onSearch: setGlobalSearch
    }), /* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
      className: "flex-1",
      children: /* @__PURE__ */ jsx(Outlet, {
        context: {
          globalSearch,
          setGlobalSearch
        }
      })
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `${error.status}`;
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col items-center justify-center p-4",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-bold",
      children: message
    }), /* @__PURE__ */ jsx("p", {
      className: "mt-2 text-gray-600 dark:text-gray-400",
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const destinationsData = /* @__PURE__ */ JSON.parse(`[{"id":"el-nido","name":"El Nido","province":"Palawan","region":"MIMAROPA","category":"Beaches & Islands","description":"Towering limestone karst cliffs, secret lagoons, and turquoise waters in Bacuit Bay.","image":"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Big Lagoon","Secret Lagoon","7 Commandos Beach","Shimizu Island"],"location":"El Nido, Palawan, MIMAROPA, Philippines"},{"id":"coron","name":"Coron","province":"Palawan","region":"MIMAROPA","category":"Diving & Marine Life","description":"Famous for WWII Japanese shipwrecks, Kayangan Lake mirror waters, and thermocline lakes.","image":"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Kayangan Lake","Barracuda Lake","Twin Lagoon","WWII Shipwrecks"],"location":"Coron, Palawan, MIMAROPA, Philippines"},{"id":"puerto-princesa","name":"Puerto Princesa Underground River","province":"Palawan","region":"MIMAROPA","category":"Nature & Wildlife","description":"New 7 Wonders of Nature subterranean river flowing directly into the sea through limestone caverns.","image":"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Underground River Cave","Sabang Beach","Honda Bay","Ugong Rock"],"location":"Puerto Princesa Underground River, Palawan, MIMAROPA, Philippines"},{"id":"port-barton","name":"Port Barton","province":"Palawan","region":"MIMAROPA","category":"Beaches & Islands","description":"Quiet coastal village with laid-back beach vibe, sea turtle sanctuaries, and island hopping.","image":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Starfish Island","German Island","Inaladelan","Pamuayan Falls"],"location":"Port Barton, Palawan, MIMAROPA, Philippines"},{"id":"balabac","name":"Balabac Islands","province":"Palawan","region":"MIMAROPA","category":"Beaches & Islands","description":"Untouched southern archipelago featuring pristine sandbars, pinkish sands, and crystal-clear waters.","image":"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Onuk Island","Candaraman Sandbar","Punta Sebaring","Cape Melville"],"location":"Balabac Islands, Palawan, MIMAROPA, Philippines"},{"id":"boracay","name":"Boracay White Beach","province":"Aklan","region":"Western Visayas","category":"Beaches & Islands","description":"World-renowned powdery white sand beach, vibrant sunset sailing, and lively coastal dining.","image":"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Station 1 White Beach","Puka Shell Beach","Willy's Rock","Bulabog Beach"],"location":"Boracay White Beach, Aklan, Western Visayas, Philippines"},{"id":"siargao","name":"Siargao Island","province":"Surigao del Norte","region":"Caraga","category":"Surfing & Adventure","description":"Capital of Philippine surfing, tear-drop island filled with coconut groves, rock pools, and wave breaks.","image":"https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Cloud 9 Boardwalk","Magpupungko Rock Pools","Sugba Lagoon","Maasin River"],"location":"Siargao Island, Surigao del Norte, Caraga, Philippines"},{"id":"batanes","name":"Batanes Archipelago","province":"Batanes","region":"Cagayan Valley","category":"Culture & Heritage","description":"Rolling emerald cliffs, wind-swept lighthouses, traditional Ivatan stone houses, and Honesty Store.","image":"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Sabtang Island","Marlboro Hills","Basco Lighthouse","Chavayan Stone Village"],"location":"Batanes Archipelago, Batanes, Cagayan Valley, Philippines"},{"id":"banaue","name":"Banaue & Batad Rice Terraces","province":"Ifugao","region":"CAR","category":"Culture & Heritage","description":"2,000-year-old mountain terraces carved into the Ifugao mountain amphitheater by indigenous ancestors.","image":"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Batad Amphitheater","Tappiya Falls","Banaue Viewpoint","Bangkolo Terraces"],"location":"Banaue & Batad Rice Terraces, Ifugao, CAR, Philippines"},{"id":"sagada","name":"Sagada Mountain Province","province":"Mountain Province","region":"CAR","category":"Culture & Heritage","description":"Mist-shrouded mountain town famous for hanging coffins, Sumaguing Cave, and sea of clouds sunrise.","image":"https://images.unsplash.com/photo-1618083842247-f5d60927dfa9?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Hanging Coffins","Sumaguing Cave","Kiltepan Viewpoint","Echo Valley"],"location":"Sagada Mountain Province, Mountain Province, CAR, Philippines"},{"id":"vigan","name":"Vigan Historic City","province":"Ilocos Sur","region":"Ilocos Region","category":"Culture & Heritage","description":"UNESCO World Heritage Spanish colonial town featuring cobblestone streets and Calle Crisologo.","image":"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Calle Crisologo","Syquia Mansion","Bantay Church Bell Tower","Plaza Salcedo"],"location":"Vigan Historic City, Ilocos Sur, Ilocos Region, Philippines"},{"id":"pagudpud","name":"Pagudpud & Saud Beach","province":"Ilocos Norte","region":"Ilocos Region","category":"Road Trips & Coastal","description":"The Boracay of the North boasting wind farms, coastal viaducts, and sweeping white sand bays.","image":"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Saud Beach","Bangui Windmills","Patapat Viaduct","Kabuigan Falls"],"location":"Pagudpud & Saud Beach, Ilocos Norte, Ilocos Region, Philippines"},{"id":"la-union","name":"La Union (San Juan)","province":"La Union","region":"Ilocos Region","category":"Surfing & Adventure","description":"The surf town capital of Luzon, offering chill beach vibe, food crawls, and sunset party spots.","image":"https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Monaliza Point","Tangadan Falls","Urbiztondo Beach","Ma-Cho Temple"],"location":"La Union (San Juan), La Union, Ilocos Region, Philippines"},{"id":"mt-pulag","name":"Mount Pulag","province":"Benguet","region":"CAR","category":"Mountain Getaways","description":"3rd highest peak in the Philippines, famous for its magical sea of clouds and freezing summit views.","image":"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Sea of Clouds","Akiki Trail","Ambangeg Trail","Towering Pines"],"location":"Mount Pulag, Benguet, CAR, Philippines"},{"id":"baguio","name":"Baguio City","province":"Benguet","region":"CAR","category":"Mountain Getaways","description":"The Summer Capital of the Philippines, nestled in pine forests with cool mountain air and fresh strawberries.","image":"https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["Burnham Park","Mines View Park","Strawberry Farm","Camp John Hay"],"location":"Baguio City, Benguet, CAR, Philippines"},{"id":"hundred-islands","name":"Hundred Islands National Park","province":"Pangasinan","region":"Ilocos Region","category":"Beaches & Islands","description":"Over 120 mushroom-shaped islands scattered in Lingayen Gulf, perfect for ziplining and cave swimming.","image":"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["Governor's Island","Quezon Island","Marcos Cave","Pilgrim Island"],"location":"Hundred Islands National Park, Pangasinan, Ilocos Region, Philippines"},{"id":"tagaytay","name":"Tagaytay City","province":"Cavite","region":"Calabarzon","category":"Mountain Getaways","description":"Ridge city overlooking Taal Lake and Taal Volcano, popular for cool climate and hot Bulalo soup.","image":"https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Taal Lake Viewpoint","Picnic Grove","People's Park","Crosswinds Tagaytay"],"location":"Tagaytay City, Cavite, Calabarzon, Philippines"},{"id":"anilao","name":"Anilao, Mabini","province":"Batangas","region":"Calabarzon","category":"Diving & Marine Life","description":"Birthplace of Philippine scuba diving, renowned for macro photography and coral garden reefs.","image":"https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Cathedral Rock","Sombrero Island","Twin Rocks","Secret Bay"],"location":"Anilao, Mabini, Batangas, Calabarzon, Philippines"},{"id":"nasugbu-calatagan","name":"Nasugbu & Calatagan","province":"Batangas","region":"Calabarzon","category":"Beaches & Islands","description":"Popular weekend getaway beaches featuring sandbars, heritage lighthouses, and beach resorts.","image":"https://images.unsplash.com/photo-1520942702018-0805d25e0651?w=1200&auto=format&fit=crop&q=80","rating":4.5,"popularSpots":["Fortune Island","Cape Santiago Lighthouse","Stilt Imperial Beach","Layag Layag Beach"],"location":"Nasugbu & Calatagan, Batangas, Calabarzon, Philippines"},{"id":"mt-pinatubo","name":"Mount Pinatubo Crater Lake","province":"Zambales / Tarlac","region":"Central Luzon","category":"Surfing & Adventure","description":"Trek across vast volcanic ash fields and ride 4x4 Jeeps to reach an turquoise crater lake.","image":"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Pinatubo Crater Lake","4x4 ATV Trail","Aeta Cultural Village","Capas Shrine"],"location":"Mount Pinatubo Crater Lake, Zambales / Tarlac, Central Luzon, Philippines"},{"id":"anawangin","name":"Anawangin & Nagsasa Coves","province":"Zambales","region":"Central Luzon","category":"Beaches & Islands","description":"Pine-tree lined volcanic ash coves created by Mount Pinatubo, perfect for camping under stars.","image":"https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["Anawangin Cove","Nagsasa Cove","Capones Island","Anawangin Hill Lookout"],"location":"Anawangin & Nagsasa Coves, Zambales, Central Luzon, Philippines"},{"id":"subic-bay","name":"Subic Bay","province":"Zambales","region":"Central Luzon","category":"Nature & Wildlife","description":"Coastal bay featuring eco-tourism parks, jungle survival treks, wreck diving, and ocean adventures.","image":"https://images.unsplash.com/photo-1503756234508-e32369269deb?w=1200&auto=format&fit=crop&q=80","rating":4.5,"popularSpots":["Ocean Adventure","Zoobic Safari","El Kabayo Waterfalls","Subic Wreck Diving"],"location":"Subic Bay, Zambales, Central Luzon, Philippines"},{"id":"mt-apo","name":"Mount Apo","province":"Davao del Sur","region":"Davao Region","category":"Mountain Getaways","description":"Grandfather of Philippine Mountains, highest peak at 2,954m featuring boulder trails and sulfur vents.","image":"https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Mt Apo Summit","Lake Venado","Boulder Face","Century-old Mossy Forest"],"location":"Mount Apo, Davao del Sur, Davao Region, Philippines"},{"id":"samal-island","name":"Samal Island","province":"Davao del Norte","region":"Davao Region","category":"Beaches & Islands","description":"Island Garden City of Samal, blessed with white sand beaches, coral reefs, and bat sanctuaries.","image":"https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Hagimit Falls","Monfort Bat Sanctuary","Talikud Island","Canibad Beach"],"location":"Samal Island, Davao del Norte, Davao Region, Philippines"},{"id":"mati-dahican","name":"Mati (Dahican Beach)","province":"Davao Oriental","region":"Davao Region","category":"Surfing & Adventure","description":"7-kilometer crescent white sand beach famous for skimboarding, surfing, and sea turtle nests.","image":"https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Dahican Beach","Sleeping Dinosaur Hill","Subangan Museum","Waniban Island"],"location":"Mati (Dahican Beach), Davao Oriental, Davao Region, Philippines"},{"id":"lake-sebu","name":"Lake Sebu","province":"South Cotabato","region":"SOCCSKSARGEN","category":"Culture & Heritage","description":"Picturesque highland lake famous for T'boli indigenous weavers, lotus gardens, and 7 Waterfalls Zipline.","image":"https://images.unsplash.com/photo-1508873696983-2df515122519?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["7 Waterfalls Zipline","T'boli School of Living Traditions","Lotus Lake Cruise","Hikong Bente Waterfall"],"location":"Lake Sebu, South Cotabato, SOCCSKSARGEN, Philippines"},{"id":"asik-asik","name":"Asik-Asik Falls","province":"North Cotabato","region":"SOCCSKSARGEN","category":"Nature & Wildlife","description":"Curtain of spring water cascading straight out of a lush green cliff face in Alamada.","image":"https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Asik-Asik Spring Falls","Alamada Highlands","Dado River","Green Cliff Curtain"],"location":"Asik-Asik Falls, North Cotabato, SOCCSKSARGEN, Philippines"},{"id":"enchanted-river","name":"Enchanted River (Hinatuan)","province":"Surigao del Sur","region":"Caraga","category":"Nature & Wildlife","description":"Deep sapphire blue river nestled in jungle, famous for its mysterious depth and daily fish feeding ritual.","image":"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Blue Lagoon River","Fish Feeding Sanctuary","Sibadan Fish Cage","Rock Island"],"location":"Enchanted River (Hinatuan), Surigao del Sur, Caraga, Philippines"},{"id":"britania-islands","name":"Britania Islands","province":"Surigao del Sur","region":"Caraga","category":"Beaches & Islands","description":"Group of 24 untouched islets floating on calm clear waters with fine white sandbars.","image":"https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Naked Island Sandbar","Boslon Island","Hagakhak Island","Hiyulid Island"],"location":"Britania Islands, Surigao del Sur, Caraga, Philippines"},{"id":"camiguin","name":"Camiguin Island","province":"Camiguin","region":"Northern Mindanao","category":"Beaches & Islands","description":"The Island Born of Fire with 7 volcanoes, white sandbars, hot springs, and Sunken Cemetery.","image":"https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["White Island Sandbar","Sunken Cemetery","Katibawasan Falls","Ardent Hot Springs"],"location":"Camiguin Island, Camiguin, Northern Mindanao, Philippines"},{"id":"cagayan-de-oro","name":"Cagayan de Oro Rafting","province":"Misamis Oriental","region":"Northern Mindanao","category":"Surfing & Adventure","description":"White Water Rafting capital of the Philippines, taking thrillseekers across CDO river rapids.","image":"https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["CDO River Rafting","Mapawa Nature Park","Seven Seas Waterpark","Macahambus Cave"],"location":"Cagayan de Oro Rafting, Misamis Oriental, Northern Mindanao, Philippines"},{"id":"dahilayan","name":"Dahilayan Adventure Park","province":"Bukidnon","region":"Northern Mindanao","category":"Surfing & Adventure","description":"Cool mountain adventure park featuring Asia's longest dual zipline and alpine coaster.","image":"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Dual Zipline","Dropzone Swing","Alpine Coaster","Pine Tree Park"],"location":"Dahilayan Adventure Park, Bukidnon, Northern Mindanao, Philippines"},{"id":"tinuy-an","name":"Tinuy-an Falls","province":"Surigao del Sur","region":"Caraga","category":"Nature & Wildlife","description":"The Niagara Falls of the Philippines, a 95-meter wide 3-tier curtain waterfall in Bislig.","image":"https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["3-Tier Curtain Falls","Bamboo Raft Ride","Mist Rainbow Point","Eco Trail"],"location":"Tinuy-an Falls, Surigao del Sur, Caraga, Philippines"},{"id":"chocolate-hills","name":"Chocolate Hills","province":"Bohol","region":"Central Visayas","category":"Nature & Wildlife","description":"Geological monument of over 1,260 symmetrical conical hills turning brown in dry season.","image":"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Carmen Chocolate Hills Complex","ATV Trail Ride","Sagbayan Peak","Buggy Ride"],"location":"Chocolate Hills, Bohol, Central Visayas, Philippines"},{"id":"panglao","name":"Panglao Island","province":"Bohol","region":"Central Visayas","category":"Beaches & Islands","description":"Tropical island paradise known for Alona Beach, dolphin watching cruises, and Balicasag diving.","image":"https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Alona Beach","Balicasag Marine Sanctuary","Virgin Island Sandbar","Hinagdanan Cave"],"location":"Panglao Island, Bohol, Central Visayas, Philippines"},{"id":"loboc-river","name":"Loboc River","province":"Bohol","region":"Central Visayas","category":"Culture & Heritage","description":"Scenic green river cruise featuring buffet floating restaurants, traditional music, and paddleboarding.","image":"https://images.unsplash.com/photo-1476514525535-ce74f45864d3?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Floating Restaurant Cruise","Stand-Up Paddleboarding","Firefly Night Cruise","Tarsier Sanctuary"],"location":"Loboc River, Bohol, Central Visayas, Philippines"},{"id":"moalboal","name":"Moalboal","province":"Cebu","region":"Central Visayas","category":"Diving & Marine Life","description":"World-renowned sardine run right off Panagsama Beach alongside sea turtles and coral drop-offs.","image":"https://images.unsplash.com/photo-1544551763-92ad0374e2d3?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Panagsama Sardine Run","Pescador Island Reef","White Beach Moalboal","Turtle Point"],"location":"Moalboal, Cebu, Central Visayas, Philippines"},{"id":"oslob","name":"Oslob Whale Sharks","province":"Cebu","region":"Central Visayas","category":"Diving & Marine Life","description":"Famous coastal sanctuary for snorkeling alongside giant gentle whale sharks (Tuki).","image":"https://images.unsplash.com/photo-1544551763-71ab5e868a2d?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["Whale Shark Snorkeling","Sumilon Island Sandbar","Tumalog Falls","Cuartel Ruins"],"location":"Oslob Whale Sharks, Cebu, Central Visayas, Philippines"},{"id":"bantayan","name":"Bantayan Island","province":"Cebu","region":"Central Visayas","category":"Beaches & Islands","description":"Serene tropical getaway boasting sugar-white sand beaches, calm shallow waters, and bike routes.","image":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Kota Beach Sandbar","Paradise Beach","Ogtong Cave","Mangrove Eco Park"],"location":"Bantayan Island, Cebu, Central Visayas, Philippines"},{"id":"malapascua","name":"Malapascua Island","province":"Cebu","region":"Central Visayas","category":"Diving & Marine Life","description":"World's premier diving destination to spot pelagic Thresher Sharks at Monad Shoal reef.","image":"https://images.unsplash.com/photo-1544551763-88ab1e389d38?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Monad Shoal Thresher Dive","Bounty Beach","Lighthouse Beach","Coral Garden"],"location":"Malapascua Island, Cebu, Central Visayas, Philippines"},{"id":"kawasan-falls","name":"Kawasan Falls","province":"Cebu","region":"Central Visayas","category":"Surfing & Adventure","description":"Electric turquoise multi-tier waterfall in Badian, famous for adrenaline canyoneering cliff jumps.","image":"https://images.unsplash.com/photo-1495954222046-2c427ecb546d?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Badian Canyoneering","Kawasan Tier 1 Waterfall","Hydro-Electric Dam Jump","Bamboo Raft Pool"],"location":"Kawasan Falls, Cebu, Central Visayas, Philippines"},{"id":"siquijor","name":"Siquijor Island","province":"Siquijor","region":"Central Visayas","category":"Beaches & Islands","description":"Enchanted Island of Fire featuring Cambugahay rope swings, Century-Old Balete Tree, and coral bays.","image":"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Cambugahay Falls","Tubod Marine Sanctuary","Paliton Beach Sunset","Century Balete Tree"],"location":"Siquijor Island, Siquijor, Central Visayas, Philippines"},{"id":"apo-island","name":"Apo Island","province":"Negros Oriental","region":"Central Visayas","category":"Diving & Marine Life","description":"Community-managed marine sanctuary renowned for snorkeling right alongside friendly sea turtles.","image":"https://images.unsplash.com/photo-1544551763-66f6a7d5c90b?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Sea Turtle Sanctuary","Rock Formation Point","Boluarte Lookout","Apo Island Lighthouse"],"location":"Apo Island, Negros Oriental, Central Visayas, Philippines"},{"id":"dumaguete","name":"Dumaguete City","province":"Negros Oriental","region":"Central Visayas","category":"Culture & Heritage","description":"The City of Gentle People, famous for Boulevard boardwalk, Siliman University, and Silvanas pastry.","image":"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["Rizal Boulevard","Silliman University Campus","Belfry Tower","Pulangbato Falls"],"location":"Dumaguete City, Negros Oriental, Central Visayas, Philippines"},{"id":"manjuyod","name":"Manjuyod Sandbar","province":"Negros Oriental","region":"Central Visayas","category":"Beaches & Islands","description":"The Maldives of the Philippines, a 7-kilometer pristine white sandbar floating in Bais Bay.","image":"https://images.unsplash.com/photo-1507525428034-c78119102431?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Manjuyod Sandbar Cottages","Bais Bay Dolphin Watching","Bird Sanctuary","White Sand Strip"],"location":"Manjuyod Sandbar, Negros Oriental, Central Visayas, Philippines"},{"id":"lakawon","name":"Lakawon Island","province":"Negros Occidental","region":"Western Visayas","category":"Beaches & Islands","description":"Banana-shaped island resort featuring TawHai Floating Bar, the largest floating bar in Asia.","image":"https://images.unsplash.com/photo-1519046904884-a1239c0b1156?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["TawHai Floating Bar","Lakawon White Beach","Water Trampoline","Sunset Lounge"],"location":"Lakawon Island, Negros Occidental, Western Visayas, Philippines"},{"id":"bacolod-ruins","name":"Bacolod City (The Ruins)","province":"Negros Occidental","region":"Western Visayas","category":"Culture & Heritage","description":"City of Smiles, famous for the Taj Mahal of Negros (The Ruins), MassKara Festival, and Inasal.","image":"https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["The Ruins Mansion","Bacolod Public Plaza","Manokan Country Inasal","San Sebastian Cathedral"],"location":"Bacolod City (The Ruins), Negros Occidental, Western Visayas, Philippines"},{"id":"gigantes-islands","name":"Islas de Gigantes","province":"Iloilo","region":"Western Visayas","category":"Beaches & Islands","description":"Island group boasting Cabugao Gamay islet, Tangke saltwater lagoon, and cheap ₱1 scallops.","image":"https://images.unsplash.com/photo-1506929562872-aa110906bc32?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Cabugao Gamay Island","Tangke Saltwater Lagoon","Antonia Beach","Bantigue Sandbar"],"location":"Islas de Gigantes, Iloilo, Western Visayas, Philippines"},{"id":"guimaras","name":"Guimaras Island","province":"Guimaras","region":"Western Visayas","category":"Road Trips & Coastal","description":"Mango Capital of the Philippines, world-famous for producing the sweetest Carabao mangoes.","image":"https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Guimaras Mango Plantations","Guisi Lighthouse Ruins","Alubihod Beach","SEAFDEC Marine Reserve"],"location":"Guimaras Island, Guimaras, Western Visayas, Philippines"},{"id":"kalanggaman","name":"Kalanggaman Island","province":"Leyte","region":"Eastern Visayas","category":"Beaches & Islands","description":"Stunning postcard island with a long, pristine white sandbar stretching out into crystal waters.","image":"https://images.unsplash.com/photo-1507525428034-d2139bc83921?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Long White Sandbar","Aqua Marine Reef","Palompon Eco Tour","Kayaking Lagoon"],"location":"Kalanggaman Island, Leyte, Eastern Visayas, Philippines"},{"id":"sambawan","name":"Sambawan Island","province":"Biliran","region":"Eastern Visayas","category":"Beaches & Islands","description":"Curved volcanic island chain surrounded by coral reefs and green grassy ridge lookouts.","image":"https://images.unsplash.com/photo-1506929562872-ee9827361099?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Sambawan Ridge Viewpoint","Coral Diving Reef","Marine Sanctuary","Island Watchtower"],"location":"Sambawan Island, Biliran, Eastern Visayas, Philippines"},{"id":"sohoton-cove","name":"Sohoton Cove (Bucas Grande)","province":"Surigao del Norte","region":"Caraga","category":"Nature & Wildlife","description":"Mystical maze of limestone islets, stingless jellyfish sanctuaries, and submarine cave entryways.","image":"https://images.unsplash.com/photo-1544551763-5599d10e8d99?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Stingless Jellyfish Sanctuary","Hagukan Cave","Magkukuob Cave Jump","Titikit Islet Maze"],"location":"Sohoton Cove (Bucas Grande), Surigao del Norte, Caraga, Philippines"},{"id":"mayon-volcano","name":"Mayon Volcano","province":"Albay","region":"Bicol Region","category":"Surfing & Adventure","description":"World's most perfectly symmetrical stratovolcano, offering black lava trail ATV quad rides.","image":"https://images.unsplash.com/photo-1464822759023-a12235bb9910?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Cagsawa Ruins View","Black Lava Trail ATV","Mayon Skyline Park","Quitinday Hills"],"location":"Mayon Volcano, Albay, Bicol Region, Philippines"},{"id":"caramoan","name":"Caramoan Peninsula","province":"Camarines Sur","region":"Bicol Region","category":"Beaches & Islands","description":"Rugged peninsula with limestone islands and hidden beaches, host location for Survivor TV shows.","image":"https://images.unsplash.com/photo-1506929562872-ff77190b0b88?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Matukad Island Sandbar","Gota Beach","Lahos Island","Cotivas Sandbar"],"location":"Caramoan Peninsula, Camarines Sur, Bicol Region, Philippines"},{"id":"calaguas","name":"Calaguas Islands","province":"Camarines Norte","region":"Bicol Region","category":"Beaches & Islands","description":"Mahabang Buhangin beach featuring powdery white sand untouched by commercial development.","image":"https://images.unsplash.com/photo-1519046904884-b529944c6689?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Mahabang Buhangin Beach","Calaguas Camping Grounds","Tinaga Island","Sunset Hill"],"location":"Calaguas Islands, Camarines Norte, Bicol Region, Philippines"},{"id":"donsol-whalesharks","name":"Donsol Whale Shark Capital","province":"Sorsogon","region":"Bicol Region","category":"Diving & Marine Life","description":"Pioneer eco-tourism destination to swim alongside wild whale sharks (Butanding) in open sea.","image":"https://images.unsplash.com/photo-1544551763-1288b884d99b?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Butanding Snorkeling","Firefly River Cruise","Donsol Eco Center","Astillero Beach"],"location":"Donsol Whale Shark Capital, Sorsogon, Bicol Region, Philippines"},{"id":"matnog-pink-beach","name":"Matnog Subic Pink Beach","province":"Sorsogon","region":"Bicol Region","category":"Beaches & Islands","description":"Unique pinkish sand beach tinted by crushed red pipe corals, situated at Luzon's southernmost tip.","image":"https://images.unsplash.com/photo-1507525428034-e9188d37a112?w=1200&auto=format&fit=crop&q=80","rating":4.8,"popularSpots":["Subic Grande Pink Beach","Tikling Island","Juag Lagoon Fish Sanctuary","Calintaan Cave"],"location":"Matnog Subic Pink Beach, Sorsogon, Bicol Region, Philippines"},{"id":"mt-dulang-dulang","name":"Mount Dulang-Dulang","province":"Bukidnon","region":"Northern Mindanao","category":"Mountain Getaways","description":"2nd highest mountain peak in the Philippines, famous for its magical Avatar-like mossy forest.","image":"https://images.unsplash.com/photo-1464822759023-ff10985cc99a?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Avatar Mossy Forest","Kitanglad Mountain Range","Sacred Indigenous Peak","Manny's Trail"],"location":"Mount Dulang-Dulang, Bukidnon, Northern Mindanao, Philippines"},{"id":"puerto-galera","name":"Puerto Galera","province":"Oriental Mindoro","region":"MIMAROPA","category":"Diving & Marine Life","description":"UNESCO Biosphere Reserve featuring White Beach resorts, coral garden scuba diving, and waterfalls.","image":"https://images.unsplash.com/photo-1544551763-2280d99bc32a?w=1200&auto=format&fit=crop&q=80","rating":4.6,"popularSpots":["White Beach Puerto Galera","Sabang Reef Diving","Tamaraw Falls","Coral Garden Snorkeling"],"location":"Puerto Galera, Oriental Mindoro, MIMAROPA, Philippines"},{"id":"apo-reef","name":"Apo Reef Natural Park","province":"Occidental Mindoro","region":"MIMAROPA","category":"Diving & Marine Life","description":"World's 2nd largest contiguous coral reef system, packed with sharks, rays, and sea turtles.","image":"https://images.unsplash.com/photo-1544551763-3398c10bbd89?w=1200&auto=format&fit=crop&q=80","rating":5,"popularSpots":["Apo Island Reef Drop-off","Apo Reef Lighthouse","Mangrove Lagoon","Shark Ridge"],"location":"Apo Reef Natural Park, Occidental Mindoro, MIMAROPA, Philippines"},{"id":"tinipak-river","name":"Tinipak River & Cave","province":"Rizal","region":"Calabarzon","category":"Surfing & Adventure","description":"Crystal clear river flowing between white marble rock formations at the foot of Mt. Daraitan.","image":"https://images.unsplash.com/photo-1434394354979-b1088cd36ab1?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Tinipak White Marble River","Subterranean Cave Pool","Mt Daraitan Summit","Rock Bouldering"],"location":"Tinipak River & Cave, Rizal, Calabarzon, Philippines"},{"id":"masungi","name":"Masungi Georeserve","province":"Rizal","region":"Calabarzon","category":"Nature & Wildlife","description":"Conservation area built around 60-million-year-old limestone karsts, rope webs, and suspension bridges.","image":"https://images.unsplash.com/photo-1470071459604-a1200bc89ab0?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Sapot Giant Web","Tatlong Tatay Peak","Bayawak Rope Bridge","Limestone Sanctuary"],"location":"Masungi Georeserve, Rizal, Calabarzon, Philippines"},{"id":"baler","name":"Baler Surfing Capital","province":"Aurora","region":"Central Luzon","category":"Surfing & Adventure","description":"Historic birthland of Philippine surfing, featured in Apocalypse Now, famous for Sabang waves.","image":"https://images.unsplash.com/photo-1502680390469-a10998cc875e?w=1200&auto=format&fit=crop&q=80","rating":4.7,"popularSpots":["Sabang Beach Surfing","Millennium Balete Tree","Ditumabo Mother Falls","Diguisit Rock Formations"],"location":"Baler Surfing Capital, Aurora, Central Luzon, Philippines"},{"id":"palaui-island","name":"Palaui Island","province":"Cagayan","region":"Cagayan Valley","category":"Beaches & Islands","description":"Protected marine and nature reserve featuring Cape Engaño Lighthouse and Survivor TV setting.","image":"https://images.unsplash.com/photo-1506929562872-dd891100bb11?w=1200&auto=format&fit=crop&q=80","rating":4.9,"popularSpots":["Cape Engaño Lighthouse","Anguib Beach","Siwangag Cove","Dos Hermanas Islets"],"location":"Palaui Island, Cagayan, Cagayan Valley, Philippines"}]`);
const articlesData = /* @__PURE__ */ JSON.parse(`[{"id":"art-001","title":"Island Hopping in El Nido: Discovering Secret Lagoons & Hidden Beaches","slug":"el-nido","destinationId":"el-nido","destinationName":"El Nido","location":"El Nido, Palawan, MIMAROPA, Philippines","category":"Beaches & Islands","authorId":"user-002","author":{"name":"Elena Valdez","role":"Scuba Diving Instructor","avatar":"https://i.pravatar.cc/150?img=3"},"excerpt":"An authentic traveler's log exploring El Nido in Palawan. Read full tips, itineraries, and guides.","fullContent":"### Exploring El Nido in Palawan\\n\\nTowering limestone karst cliffs, secret lagoons, and turquoise waters in Bacuit Bay.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Big Lagoon\\n- **Adventure Pick:** Secret Lagoon\\n- **Photo Point:** 7 Commandos Beach\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"6 min read","publishedAt":"2026-08-29","tags":["Palawan","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-002","title":"Diving WWII Wrecks & Crystal Lakes: The Ultimate Coron Itinerary","slug":"coron","destinationId":"coron","destinationName":"Coron","location":"Coron, Palawan, MIMAROPA, Philippines","category":"Diving & Marine Life","authorId":"user-003","author":{"name":"Benjamin Martin","role":"Eco-Tourism Advocate","avatar":"https://i.pravatar.cc/150?img=4"},"excerpt":"An authentic traveler's log exploring Coron in Palawan. Read full tips, itineraries, and guides.","fullContent":"### Exploring Coron in Palawan\\n\\nFamous for WWII Japanese shipwrecks, Kayangan Lake mirror waters, and thermocline lakes.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Kayangan Lake\\n- **Adventure Pick:** Barracuda Lake\\n- **Photo Point:** Twin Lagoon\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"7 min read","publishedAt":"2026-08-28","tags":["Palawan","Diving&MarineLife","TravelGuide","Philippines"]},{"id":"art-003","title":"Into the Underground River: Exploring Palawan's Subterranean Wonder","slug":"puerto-princesa","destinationId":"puerto-princesa","destinationName":"Puerto Princesa Underground River","location":"Puerto Princesa Underground River, Palawan, MIMAROPA, Philippines","category":"Nature & Wildlife","authorId":"user-004","author":{"name":"Isabella Torralba","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=5"},"excerpt":"An authentic traveler's log exploring Puerto Princesa Underground River in Palawan. Read full tips, itineraries, and guides.","fullContent":"### Exploring Puerto Princesa Underground River in Palawan\\n\\nNew 7 Wonders of Nature subterranean river flowing directly into the sea through limestone caverns.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Underground River Cave\\n- **Adventure Pick:** Sabang Beach\\n- **Photo Point:** Honda Bay\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"6 min read","publishedAt":"2026-08-27","tags":["Palawan","Nature&Wildlife","TravelGuide","Philippines"]},{"id":"art-004","title":"White Beach Bliss: Sunset Cruises, Food Crawls, & Nightlife in Boracay","slug":"boracay","destinationId":"boracay","destinationName":"Boracay White Beach","location":"Boracay White Beach, Aklan, Western Visayas, Philippines","category":"Beaches & Islands","authorId":"user-005","author":{"name":"Benjamin Dubois","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=6"},"excerpt":"An authentic traveler's log exploring Boracay White Beach in Aklan. Read full tips, itineraries, and guides.","fullContent":"### Exploring Boracay White Beach in Aklan\\n\\nWorld-renowned powdery white sand beach, vibrant sunset sailing, and lively coastal dining.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Station 1 White Beach\\n- **Adventure Pick:** Puka Shell Beach\\n- **Photo Point:** Willy's Rock\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"5 min read","publishedAt":"2026-08-26","tags":["Aklan","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-005","title":"Chasing Waves & Palm Tree Forests: A Week in Siargao's Surf Paradise","slug":"siargao","destinationId":"siargao","destinationName":"Siargao Island","location":"Siargao Island, Surigao del Norte, Caraga, Philippines","category":"Surfing & Adventure","authorId":"user-006","author":{"name":"Bianca Mercado","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=7"},"excerpt":"An authentic traveler's log exploring Siargao Island in Surigao del Norte. Read full tips, itineraries, and guides.","fullContent":"### Exploring Siargao Island in Surigao del Norte\\n\\nCapital of Philippine surfing, tear-drop island filled with coconut groves, rock pools, and wave breaks.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Cloud 9 Boardwalk\\n- **Adventure Pick:** Magpupungko Rock Pools\\n- **Photo Point:** Sugba Lagoon\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"7 min read","publishedAt":"2026-08-25","tags":["Surigao del Norte","Surfing&Adventure","TravelGuide","Philippines"]},{"id":"art-006","title":"Rolling Hills & Stone Houses: A Journey to Batanes, Edge of the World","slug":"batanes","destinationId":"batanes","destinationName":"Batanes Archipelago","location":"Batanes Archipelago, Batanes, Cagayan Valley, Philippines","category":"Culture & Heritage","authorId":"user-007","author":{"name":"David Lindner","role":"Travel Photographer","avatar":"https://i.pravatar.cc/150?img=8"},"excerpt":"An authentic traveler's log exploring Batanes Archipelago in Batanes. Read full tips, itineraries, and guides.","fullContent":"### Exploring Batanes Archipelago in Batanes\\n\\nRolling emerald cliffs, wind-swept lighthouses, traditional Ivatan stone houses, and Honesty Store.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Sabtang Island\\n- **Adventure Pick:** Marlboro Hills\\n- **Photo Point:** Basco Lighthouse\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"8 min read","publishedAt":"2026-08-24","tags":["Batanes","Culture&Heritage","TravelGuide","Philippines"]},{"id":"art-007","title":"Walking Among Clouds: Hiking the 2,000-Year-Old Banaue Rice Terraces","slug":"banaue","destinationId":"banaue","destinationName":"Banaue & Batad Rice Terraces","location":"Banaue & Batad Rice Terraces, Ifugao, CAR, Philippines","category":"Culture & Heritage","authorId":"user-008","author":{"name":"Maria Ramos","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=9"},"excerpt":"An authentic traveler's log exploring Banaue & Batad Rice Terraces in Ifugao. Read full tips, itineraries, and guides.","fullContent":"### Exploring Banaue & Batad Rice Terraces in Ifugao\\n\\n2,000-year-old mountain terraces carved into the Ifugao mountain amphitheater by indigenous ancestors.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Batad Amphitheater\\n- **Adventure Pick:** Tappiya Falls\\n- **Photo Point:** Banaue Viewpoint\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"8 min read","publishedAt":"2026-08-23","tags":["Ifugao","Culture&Heritage","TravelGuide","Philippines"]},{"id":"art-008","title":"Cobblestone Streets & Colonial Charms: 48 Hours in Historic Vigan","slug":"vigan","destinationId":"vigan","destinationName":"Vigan Historic City","location":"Vigan Historic City, Ilocos Sur, Ilocos Region, Philippines","category":"Culture & Heritage","authorId":"user-009","author":{"name":"Sebastian Taylor","role":"Coastal Wanderer","avatar":"https://i.pravatar.cc/150?img=10"},"excerpt":"An authentic traveler's log exploring Vigan Historic City in Ilocos Sur. Read full tips, itineraries, and guides.","fullContent":"### Exploring Vigan Historic City in Ilocos Sur\\n\\nUNESCO World Heritage Spanish colonial town featuring cobblestone streets and Calle Crisologo.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Calle Crisologo\\n- **Adventure Pick:** Syquia Mansion\\n- **Photo Point:** Bantay Church Bell Tower\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"5 min read","publishedAt":"2026-08-22","tags":["Ilocos Sur","Culture&Heritage","TravelGuide","Philippines"]},{"id":"art-009","title":"Swimming with Millions of Sardines & Canyoneering at Kawasan Falls","slug":"moalboal","destinationId":"moalboal","destinationName":"Moalboal","location":"Moalboal, Cebu, Central Visayas, Philippines","category":"Diving & Marine Life","authorId":"user-010","author":{"name":"Samantha Pineda","role":"Coastal Wanderer","avatar":"https://i.pravatar.cc/150?img=11"},"excerpt":"An authentic traveler's log exploring Moalboal in Cebu. Read full tips, itineraries, and guides.","fullContent":"### Exploring Moalboal in Cebu\\n\\nWorld-renowned sardine run right off Panagsama Beach alongside sea turtles and coral drop-offs.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Panagsama Sardine Run\\n- **Adventure Pick:** Pescador Island Reef\\n- **Photo Point:** White Beach Moalboal\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1544551763-92ad0374e2d3?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"6 min read","publishedAt":"2026-08-21","tags":["Cebu","Diving&MarineLife","TravelGuide","Philippines"]},{"id":"art-010","title":"The Boracay of the North: Coastal Drives, Windmills, & Saud Beach","slug":"pagudpud","destinationId":"pagudpud","destinationName":"Pagudpud & Saud Beach","location":"Pagudpud & Saud Beach, Ilocos Norte, Ilocos Region, Philippines","category":"Road Trips & Coastal","authorId":"user-011","author":{"name":"Markus White","role":"Adventure & Trekking Enthusiast","avatar":"https://i.pravatar.cc/150?img=12"},"excerpt":"An authentic traveler's log exploring Pagudpud & Saud Beach in Ilocos Norte. Read full tips, itineraries, and guides.","fullContent":"### Exploring Pagudpud & Saud Beach in Ilocos Norte\\n\\nThe Boracay of the North boasting wind farms, coastal viaducts, and sweeping white sand bays.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Saud Beach\\n- **Adventure Pick:** Bangui Windmills\\n- **Photo Point:** Patapat Viaduct\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&auto=format&fit=crop&q=80","rating":4.7,"readTime":"5 min read","publishedAt":"2026-08-20","tags":["Ilocos Norte","RoadTrips&Coastal","TravelGuide","Philippines"]},{"id":"art-011","title":"Sea of Clouds & Freezing Summits: The Ultimate Mt. Pulag Trek","slug":"mt-pulag","destinationId":"mt-pulag","destinationName":"Mount Pulag","location":"Mount Pulag, Benguet, CAR, Philippines","category":"Mountain Getaways","authorId":"user-012","author":{"name":"Diego Castillo","role":"Island Explorer & Backpacker","avatar":"https://i.pravatar.cc/150?img=13"},"excerpt":"An authentic traveler's log exploring Mount Pulag in Benguet. Read full tips, itineraries, and guides.","fullContent":"### Exploring Mount Pulag in Benguet\\n\\n3rd highest peak in the Philippines, famous for its magical sea of clouds and freezing summit views.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Sea of Clouds\\n- **Adventure Pick:** Akiki Trail\\n- **Photo Point:** Ambangeg Trail\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"9 min read","publishedAt":"2026-08-19","tags":["Benguet","MountainGetaways","TravelGuide","Philippines"]},{"id":"art-012","title":"1,200 Chocolate Hills, Tarsiers, & Loboc River Paddleboarding","slug":"chocolate-hills","destinationId":"chocolate-hills","destinationName":"Chocolate Hills","location":"Chocolate Hills, Bohol, Central Visayas, Philippines","category":"Nature & Wildlife","authorId":"user-013","author":{"name":"Sarah Vance","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=14"},"excerpt":"An authentic traveler's log exploring Chocolate Hills in Bohol. Read full tips, itineraries, and guides.","fullContent":"### Exploring Chocolate Hills in Bohol\\n\\nGeological monument of over 1,260 symmetrical conical hills turning brown in dry season.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Carmen Chocolate Hills Complex\\n- **Adventure Pick:** ATV Trail Ride\\n- **Photo Point:** Sagbayan Peak\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"6 min read","publishedAt":"2026-08-18","tags":["Bohol","Nature&Wildlife","TravelGuide","Philippines"]},{"id":"art-013","title":"Cool Breezes & Taal Views: A Quick Weekend Getaway to Tagaytay","slug":"tagaytay","destinationId":"tagaytay","destinationName":"Tagaytay City","location":"Tagaytay City, Cavite, Calabarzon, Philippines","category":"Mountain Getaways","authorId":"user-014","author":{"name":"Samantha Torralba","role":"Adventure & Trekking Enthusiast","avatar":"https://i.pravatar.cc/150?img=15"},"excerpt":"An authentic traveler's log exploring Tagaytay City in Cavite. Read full tips, itineraries, and guides.","fullContent":"### Exploring Tagaytay City in Cavite\\n\\nRidge city overlooking Taal Lake and Taal Volcano, popular for cool climate and hot Bulalo soup.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Taal Lake Viewpoint\\n- **Adventure Pick:** Picnic Grove\\n- **Photo Point:** People's Park\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&auto=format&fit=crop&q=80","rating":4.7,"readTime":"4 min read","publishedAt":"2026-08-17","tags":["Cavite","MountainGetaways","TravelGuide","Philippines"]},{"id":"art-014","title":"ATV Lava Trail Adventures under the Perfect Cone of Mayon Volcano","slug":"mayon-volcano","destinationId":"mayon-volcano","destinationName":"Mayon Volcano","location":"Mayon Volcano, Albay, Bicol Region, Philippines","category":"Surfing & Adventure","authorId":"user-015","author":{"name":"Markus Anderson","role":"Eco-Tourism Advocate","avatar":"https://i.pravatar.cc/150?img=16"},"excerpt":"An authentic traveler's log exploring Mayon Volcano in Albay. Read full tips, itineraries, and guides.","fullContent":"### Exploring Mayon Volcano in Albay\\n\\nWorld's most perfectly symmetrical stratovolcano, offering black lava trail ATV quad rides.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Cagsawa Ruins View\\n- **Adventure Pick:** Black Lava Trail ATV\\n- **Photo Point:** Mayon Skyline Park\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1464822759023-a12235bb9910?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"6 min read","publishedAt":"2026-08-16","tags":["Albay","Surfing&Adventure","TravelGuide","Philippines"]},{"id":"art-015","title":"Cliff Jumps & Old Healing Traditions: Uncovering Siquijor's Magic","slug":"siquijor","destinationId":"siquijor","destinationName":"Siquijor Island","location":"Siquijor Island, Siquijor, Central Visayas, Philippines","category":"Beaches & Islands","authorId":"user-016","author":{"name":"Dominic Del Rosario","role":"Adventure & Trekking Enthusiast","avatar":"https://i.pravatar.cc/150?img=17"},"excerpt":"An authentic traveler's log exploring Siquijor Island in Siquijor. Read full tips, itineraries, and guides.","fullContent":"### Exploring Siquijor Island in Siquijor\\n\\nEnchanted Island of Fire featuring Cambugahay rope swings, Century-Old Balete Tree, and coral bays.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Cambugahay Falls\\n- **Adventure Pick:** Tubod Marine Sanctuary\\n- **Photo Point:** Paliton Beach Sunset\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"6 min read","publishedAt":"2026-08-15","tags":["Siquijor","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-016","title":"Surfing, Sunset Drinks, & Food Crawls in La Union (San Juan)","slug":"la-union","destinationId":"la-union","destinationName":"La Union (San Juan)","location":"La Union (San Juan), La Union, Ilocos Region, Philippines","category":"Surfing & Adventure","authorId":"user-017","author":{"name":"Sarah Lindner","role":"Scuba Diving Instructor","avatar":"https://i.pravatar.cc/150?img=18"},"excerpt":"An authentic traveler's log exploring La Union (San Juan) in La Union. Read full tips, itineraries, and guides.","fullContent":"### Exploring La Union (San Juan) in La Union\\n\\nThe surf town capital of Luzon, offering chill beach vibe, food crawls, and sunset party spots.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Monaliza Point\\n- **Adventure Pick:** Tangadan Falls\\n- **Photo Point:** Urbiztondo Beach\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=1200&auto=format&fit=crop&q=80","rating":4.7,"readTime":"5 min read","publishedAt":"2026-08-14","tags":["La Union","Surfing&Adventure","TravelGuide","Philippines"]},{"id":"art-017","title":"Macro Diving Paradise: Exploring Anilao's Secret Reef Gardens","slug":"anilao","destinationId":"anilao","destinationName":"Anilao, Mabini","location":"Anilao, Mabini, Batangas, Calabarzon, Philippines","category":"Diving & Marine Life","authorId":"user-018","author":{"name":"Gabriel Torralba","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=19"},"excerpt":"An authentic traveler's log exploring Anilao, Mabini in Batangas. Read full tips, itineraries, and guides.","fullContent":"### Exploring Anilao, Mabini in Batangas\\n\\nBirthplace of Philippine scuba diving, renowned for macro photography and coral garden reefs.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Cathedral Rock\\n- **Adventure Pick:** Sombrero Island\\n- **Photo Point:** Twin Rocks\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"7 min read","publishedAt":"2026-08-13","tags":["Batangas","Diving&MarineLife","TravelGuide","Philippines"]},{"id":"art-018","title":"Pinatubo Crater Trek: 4x4 Rides Across Black Volcanic Ash Fields","slug":"mt-pinatubo","destinationId":"mt-pinatubo","destinationName":"Mount Pinatubo Crater Lake","location":"Mount Pinatubo Crater Lake, Zambales / Tarlac, Central Luzon, Philippines","category":"Surfing & Adventure","authorId":"user-019","author":{"name":"Zoe Schneider","role":"Adventure & Trekking Enthusiast","avatar":"https://i.pravatar.cc/150?img=20"},"excerpt":"An authentic traveler's log exploring Mount Pinatubo Crater Lake in Zambales / Tarlac. Read full tips, itineraries, and guides.","fullContent":"### Exploring Mount Pinatubo Crater Lake in Zambales / Tarlac\\n\\nTrek across vast volcanic ash fields and ride 4x4 Jeeps to reach an turquoise crater lake.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Pinatubo Crater Lake\\n- **Adventure Pick:** 4x4 ATV Trail\\n- **Photo Point:** Aeta Cultural Village\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"7 min read","publishedAt":"2026-08-12","tags":["Zambales / Tarlac","Surfing&Adventure","TravelGuide","Philippines"]},{"id":"art-019","title":"Island Hopping in Balabac: Finding the Philippines' Purest Sandbars","slug":"balabac","destinationId":"balabac","destinationName":"Balabac Islands","location":"Balabac Islands, Palawan, MIMAROPA, Philippines","category":"Beaches & Islands","authorId":"user-020","author":{"name":"Lucas Del Rosario","role":"Coastal Wanderer","avatar":"https://i.pravatar.cc/150?img=21"},"excerpt":"An authentic traveler's log exploring Balabac Islands in Palawan. Read full tips, itineraries, and guides.","fullContent":"### Exploring Balabac Islands in Palawan\\n\\nUntouched southern archipelago featuring pristine sandbars, pinkish sands, and crystal-clear waters.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Onuk Island\\n- **Adventure Pick:** Candaraman Sandbar\\n- **Photo Point:** Punta Sebaring\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"8 min read","publishedAt":"2026-08-11","tags":["Palawan","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-020","title":"Grandfather of Peaks: Scaling Mount Apo's Sulfur Vents & Boulders","slug":"mt-apo","destinationId":"mt-apo","destinationName":"Mount Apo","location":"Mount Apo, Davao del Sur, Davao Region, Philippines","category":"Mountain Getaways","authorId":"user-021","author":{"name":"Aria Smith","role":"Island Explorer & Backpacker","avatar":"https://i.pravatar.cc/150?img=22"},"excerpt":"An authentic traveler's log exploring Mount Apo in Davao del Sur. Read full tips, itineraries, and guides.","fullContent":"### Exploring Mount Apo in Davao del Sur\\n\\nGrandfather of Philippine Mountains, highest peak at 2,954m featuring boulder trails and sulfur vents.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Mt Apo Summit\\n- **Adventure Pick:** Lake Venado\\n- **Photo Point:** Boulder Face\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"9 min read","publishedAt":"2026-08-10","tags":["Davao del Sur","MountainGetaways","TravelGuide","Philippines"]},{"id":"art-021","title":"Skimboarding & 7-Kilometer White Sands at Dahican Beach, Mati","slug":"mati-dahican","destinationId":"mati-dahican","destinationName":"Mati (Dahican Beach)","location":"Mati (Dahican Beach), Davao Oriental, Davao Region, Philippines","category":"Surfing & Adventure","authorId":"user-022","author":{"name":"Juan Torralba","role":"Digital Nomad & Writer","avatar":"https://i.pravatar.cc/150?img=23"},"excerpt":"An authentic traveler's log exploring Mati (Dahican Beach) in Davao Oriental. Read full tips, itineraries, and guides.","fullContent":"### Exploring Mati (Dahican Beach) in Davao Oriental\\n\\n7-kilometer crescent white sand beach famous for skimboarding, surfing, and sea turtle nests.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Dahican Beach\\n- **Adventure Pick:** Sleeping Dinosaur Hill\\n- **Photo Point:** Subangan Museum\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"5 min read","publishedAt":"2026-08-09","tags":["Davao Oriental","Surfing&Adventure","TravelGuide","Philippines"]},{"id":"art-022","title":"T'boli Weavers, Lotus Lakes, & Ziplining over 7 Waterfalls in Lake Sebu","slug":"lake-sebu","destinationId":"lake-sebu","destinationName":"Lake Sebu","location":"Lake Sebu, South Cotabato, SOCCSKSARGEN, Philippines","category":"Culture & Heritage","authorId":"user-023","author":{"name":"Ethan Anderson","role":"Digital Nomad & Writer","avatar":"https://i.pravatar.cc/150?img=24"},"excerpt":"An authentic traveler's log exploring Lake Sebu in South Cotabato. Read full tips, itineraries, and guides.","fullContent":"### Exploring Lake Sebu in South Cotabato\\n\\nPicturesque highland lake famous for T'boli indigenous weavers, lotus gardens, and 7 Waterfalls Zipline.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** 7 Waterfalls Zipline\\n- **Adventure Pick:** T'boli School of Living Traditions\\n- **Photo Point:** Lotus Lake Cruise\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1508873696983-2df515122519?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"6 min read","publishedAt":"2026-08-08","tags":["South Cotabato","Culture&Heritage","TravelGuide","Philippines"]},{"id":"art-023","title":"The Sapphire Wonder: Swimming in Hinatuan's Enchanted Blue River","slug":"enchanted-river","destinationId":"enchanted-river","destinationName":"Enchanted River (Hinatuan)","location":"Enchanted River (Hinatuan), Surigao del Sur, Caraga, Philippines","category":"Nature & Wildlife","authorId":"user-024","author":{"name":"Maria Torralba","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=25"},"excerpt":"An authentic traveler's log exploring Enchanted River (Hinatuan) in Surigao del Sur. Read full tips, itineraries, and guides.","fullContent":"### Exploring Enchanted River (Hinatuan) in Surigao del Sur\\n\\nDeep sapphire blue river nestled in jungle, famous for its mysterious depth and daily fish feeding ritual.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Blue Lagoon River\\n- **Adventure Pick:** Fish Feeding Sanctuary\\n- **Photo Point:** Sibadan Fish Cage\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"5 min read","publishedAt":"2026-08-07","tags":["Surigao del Sur","Nature&Wildlife","TravelGuide","Philippines"]},{"id":"art-024","title":"7 Volcanoes, Hot Springs, & White Sandbars: The Island of Camiguin","slug":"camiguin","destinationId":"camiguin","destinationName":"Camiguin Island","location":"Camiguin Island, Camiguin, Northern Mindanao, Philippines","category":"Beaches & Islands","authorId":"user-025","author":{"name":"Mia Rivers","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=26"},"excerpt":"An authentic traveler's log exploring Camiguin Island in Camiguin. Read full tips, itineraries, and guides.","fullContent":"### Exploring Camiguin Island in Camiguin\\n\\nThe Island Born of Fire with 7 volcanoes, white sandbars, hot springs, and Sunken Cemetery.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** White Island Sandbar\\n- **Adventure Pick:** Sunken Cemetery\\n- **Photo Point:** Katibawasan Falls\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"7 min read","publishedAt":"2026-08-06","tags":["Camiguin","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-025","title":"Thresher Sharks at Dawn: Monad Shoal Diving in Malapascua","slug":"malapascua","destinationId":"malapascua","destinationName":"Malapascua Island","location":"Malapascua Island, Cebu, Central Visayas, Philippines","category":"Diving & Marine Life","authorId":"user-026","author":{"name":"Javier Villanueva","role":"Coastal Wanderer","avatar":"https://i.pravatar.cc/150?img=27"},"excerpt":"An authentic traveler's log exploring Malapascua Island in Cebu. Read full tips, itineraries, and guides.","fullContent":"### Exploring Malapascua Island in Cebu\\n\\nWorld's premier diving destination to spot pelagic Thresher Sharks at Monad Shoal reef.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Monad Shoal Thresher Dive\\n- **Adventure Pick:** Bounty Beach\\n- **Photo Point:** Lighthouse Beach\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1544551763-88ab1e389d38?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"8 min read","publishedAt":"2026-08-05","tags":["Cebu","Diving&MarineLife","TravelGuide","Philippines"]},{"id":"art-026","title":"The Maldives of Negros: Floating Cottages on Manjuyod Sandbar","slug":"manjuyod","destinationId":"manjuyod","destinationName":"Manjuyod Sandbar","location":"Manjuyod Sandbar, Negros Oriental, Central Visayas, Philippines","category":"Beaches & Islands","authorId":"user-027","author":{"name":"Daniel Schneider","role":"Travel Photographer","avatar":"https://i.pravatar.cc/150?img=28"},"excerpt":"An authentic traveler's log exploring Manjuyod Sandbar in Negros Oriental. Read full tips, itineraries, and guides.","fullContent":"### Exploring Manjuyod Sandbar in Negros Oriental\\n\\nThe Maldives of the Philippines, a 7-kilometer pristine white sandbar floating in Bais Bay.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Manjuyod Sandbar Cottages\\n- **Adventure Pick:** Bais Bay Dolphin Watching\\n- **Photo Point:** Bird Sanctuary\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1507525428034-c78119102431?w=1200&auto=format&fit=crop&q=80","rating":4.8,"readTime":"5 min read","publishedAt":"2026-08-04","tags":["Negros Oriental","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-027","title":"Taj Mahal of Negros & MassKara Smiles: A Bacolod Cultural Tour","slug":"bacolod-ruins","destinationId":"bacolod-ruins","destinationName":"Bacolod City (The Ruins)","location":"Bacolod City (The Ruins), Negros Occidental, Western Visayas, Philippines","category":"Culture & Heritage","authorId":"user-028","author":{"name":"Enzo Dela Cruz","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=29"},"excerpt":"An authentic traveler's log exploring Bacolod City (The Ruins) in Negros Occidental. Read full tips, itineraries, and guides.","fullContent":"### Exploring Bacolod City (The Ruins) in Negros Occidental\\n\\nCity of Smiles, famous for the Taj Mahal of Negros (The Ruins), MassKara Festival, and Inasal.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** The Ruins Mansion\\n- **Adventure Pick:** Bacolod Public Plaza\\n- **Photo Point:** Manokan Country Inasal\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80","rating":4.7,"readTime":"6 min read","publishedAt":"2026-08-03","tags":["Negros Occidental","Culture&Heritage","TravelGuide","Philippines"]},{"id":"art-028","title":"Cheap Scallops & Turquoise Lagoons: Exploring Islas de Gigantes","slug":"gigantes-islands","destinationId":"gigantes-islands","destinationName":"Islas de Gigantes","location":"Islas de Gigantes, Iloilo, Western Visayas, Philippines","category":"Beaches & Islands","authorId":"user-029","author":{"name":"Elena O'Connor","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=30"},"excerpt":"An authentic traveler's log exploring Islas de Gigantes in Iloilo. Read full tips, itineraries, and guides.","fullContent":"### Exploring Islas de Gigantes in Iloilo\\n\\nIsland group boasting Cabugao Gamay islet, Tangke saltwater lagoon, and cheap ₱1 scallops.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Cabugao Gamay Island\\n- **Adventure Pick:** Tangke Saltwater Lagoon\\n- **Photo Point:** Antonia Beach\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1506929562872-aa110906bc32?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"6 min read","publishedAt":"2026-08-02","tags":["Iloilo","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-029","title":"Postcard Sandbars & Crystalline Seas: Camping on Kalanggaman Island","slug":"kalanggaman","destinationId":"kalanggaman","destinationName":"Kalanggaman Island","location":"Kalanggaman Island, Leyte, Eastern Visayas, Philippines","category":"Beaches & Islands","authorId":"user-030","author":{"name":"Javier Valdez","role":"Local Guide & Historian","avatar":"https://i.pravatar.cc/150?img=31"},"excerpt":"An authentic traveler's log exploring Kalanggaman Island in Leyte. Read full tips, itineraries, and guides.","fullContent":"### Exploring Kalanggaman Island in Leyte\\n\\nStunning postcard island with a long, pristine white sandbar stretching out into crystal waters.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Long White Sandbar\\n- **Adventure Pick:** Aqua Marine Reef\\n- **Photo Point:** Palompon Eco Tour\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1507525428034-d2139bc83921?w=1200&auto=format&fit=crop&q=80","rating":5,"readTime":"7 min read","publishedAt":"2026-08-01","tags":["Leyte","Beaches&Islands","TravelGuide","Philippines"]},{"id":"art-030","title":"Stingless Jellyfish Sanctuaries & Secret Caves in Sohoton Cove","slug":"sohoton-cove","destinationId":"sohoton-cove","destinationName":"Sohoton Cove (Bucas Grande)","location":"Sohoton Cove (Bucas Grande), Surigao del Norte, Caraga, Philippines","category":"Nature & Wildlife","authorId":"user-031","author":{"name":"Noah Johnson","role":"Foodie & Cultural Blogger","avatar":"https://i.pravatar.cc/150?img=32"},"excerpt":"An authentic traveler's log exploring Sohoton Cove (Bucas Grande) in Surigao del Norte. Read full tips, itineraries, and guides.","fullContent":"### Exploring Sohoton Cove (Bucas Grande) in Surigao del Norte\\n\\nMystical maze of limestone islets, stingless jellyfish sanctuaries, and submarine cave entryways.\\n\\n### Top Highlights & Itinerary Tips:\\n- **Must-Visit Spot:** Stingless Jellyfish Sanctuary\\n- **Adventure Pick:** Hagukan Cave\\n- **Photo Point:** Magkukuob Cave Jump\\n\\n### Travel Advice for Backpackers:\\n- **Best Season:** November to April dry season.\\n- **What to Pack:** Reusable water bottle, reef-safe sunscreen, dry bag, and local currency (PHP cash).\\n- **Local Hospitality:** Always greet locals with a warm 'Mabuhay!'","heroImage":"https://images.unsplash.com/photo-1544551763-5599d10e8d99?w=1200&auto=format&fit=crop&q=80","rating":4.9,"readTime":"7 min read","publishedAt":"2026-08-00","tags":["Surigao del Norte","Nature&Wildlife","TravelGuide","Philippines"]}]`);
const commentsData = /* @__PURE__ */ JSON.parse(`[{"id":"comment-0001","articleId":"art-001","destinationId":"el-nido","userId":"user-018","author":"Gabriel Torralba","avatar":"https://i.pravatar.cc/150?img=19","date":"2026-08-20","text":"The underwater marine life here is world class. Best dive of my life!","likes":31},{"id":"comment-0002","articleId":"art-001","destinationId":"el-nido","userId":"user-094","author":"Lucas Reyes","avatar":"https://i.pravatar.cc/150?img=25","date":"2026-08-10","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":22},{"id":"comment-0003","articleId":"art-001","destinationId":"el-nido","userId":"user-083","author":"Freja Kowalski","avatar":"https://i.pravatar.cc/150?img=14","date":"2026-08-10","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":22},{"id":"comment-0004","articleId":"art-001","destinationId":"el-nido","userId":"user-026","author":"Javier Villanueva","avatar":"https://i.pravatar.cc/150?img=27","date":"2026-08-23","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":16},{"id":"comment-0005","articleId":"art-001","destinationId":"el-nido","userId":"user-096","author":"Marco Pineda","avatar":"https://i.pravatar.cc/150?img=27","date":"2026-08-25","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":34},{"id":"comment-0006","articleId":"art-002","destinationId":"coron","userId":"user-065","author":"Markus Smith","avatar":"https://i.pravatar.cc/150?img=66","date":"2026-08-16","text":"The underwater marine life here is world class. Best dive of my life!","likes":34},{"id":"comment-0007","articleId":"art-002","destinationId":"coron","userId":"user-068","author":"Patricia Cruz","avatar":"https://i.pravatar.cc/150?img=69","date":"2026-08-29","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":11},{"id":"comment-0008","articleId":"art-002","destinationId":"coron","userId":"user-029","author":"Elena O'Connor","avatar":"https://i.pravatar.cc/150?img=30","date":"2026-08-14","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":30},{"id":"comment-0009","articleId":"art-003","destinationId":"puerto-princesa","userId":"user-003","author":"Benjamin Martin","avatar":"https://i.pravatar.cc/150?img=4","date":"2026-08-21","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":30},{"id":"comment-0010","articleId":"art-003","destinationId":"puerto-princesa","userId":"user-046","author":"Elena Castillo","avatar":"https://i.pravatar.cc/150?img=47","date":"2026-08-18","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":32},{"id":"comment-0011","articleId":"art-003","destinationId":"puerto-princesa","userId":"user-014","author":"Samantha Torralba","avatar":"https://i.pravatar.cc/150?img=15","date":"2026-08-09","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":8},{"id":"comment-0012","articleId":"art-003","destinationId":"puerto-princesa","userId":"user-090","author":"Gabriel Ocampo","avatar":"https://i.pravatar.cc/150?img=21","date":"2026-08-21","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":30},{"id":"comment-0013","articleId":"art-004","destinationId":"boracay","userId":"user-011","author":"Markus White","avatar":"https://i.pravatar.cc/150?img=12","date":"2026-08-13","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":12},{"id":"comment-0014","articleId":"art-004","destinationId":"boracay","userId":"user-059","author":"Kenji Vance","avatar":"https://i.pravatar.cc/150?img=60","date":"2026-08-23","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":23},{"id":"comment-0015","articleId":"art-004","destinationId":"boracay","userId":"user-012","author":"Diego Castillo","avatar":"https://i.pravatar.cc/150?img=13","date":"2026-08-14","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":17},{"id":"comment-0016","articleId":"art-004","destinationId":"boracay","userId":"user-092","author":"Andrea Gonzales","avatar":"https://i.pravatar.cc/150?img=23","date":"2026-08-04","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":23},{"id":"comment-0017","articleId":"art-004","destinationId":"boracay","userId":"user-013","author":"Sarah Vance","avatar":"https://i.pravatar.cc/150?img=14","date":"2026-08-25","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":10},{"id":"comment-0018","articleId":"art-005","destinationId":"siargao","userId":"user-051","author":"Julian Dubois","avatar":"https://i.pravatar.cc/150?img=52","date":"2026-08-12","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":28},{"id":"comment-0019","articleId":"art-005","destinationId":"siargao","userId":"user-003","author":"Benjamin Martin","avatar":"https://i.pravatar.cc/150?img=4","date":"2026-08-24","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":40},{"id":"comment-0020","articleId":"art-005","destinationId":"siargao","userId":"user-062","author":"Ramon Valdez","avatar":"https://i.pravatar.cc/150?img=63","date":"2026-08-10","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":18},{"id":"comment-0021","articleId":"art-005","destinationId":"siargao","userId":"user-082","author":"Bianca Valdez","avatar":"https://i.pravatar.cc/150?img=13","date":"2026-08-20","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":23},{"id":"comment-0022","articleId":"art-006","destinationId":"batanes","userId":"user-099","author":"Emma Vance","avatar":"https://i.pravatar.cc/150?img=30","date":"2026-08-14","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":39},{"id":"comment-0023","articleId":"art-006","destinationId":"batanes","userId":"user-058","author":"Angelica Mercado","avatar":"https://i.pravatar.cc/150?img=59","date":"2026-08-28","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":26},{"id":"comment-0024","articleId":"art-006","destinationId":"batanes","userId":"user-052","author":"Patricia Castillo","avatar":"https://i.pravatar.cc/150?img=53","date":"2026-08-10","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":13},{"id":"comment-0025","articleId":"art-006","destinationId":"batanes","userId":"user-080","author":"Bianca Navarro","avatar":"https://i.pravatar.cc/150?img=11","date":"2026-08-18","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":14},{"id":"comment-0026","articleId":"art-006","destinationId":"batanes","userId":"user-001","author":"Daniel Schneider","avatar":"https://i.pravatar.cc/150?img=2","date":"2026-08-29","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":35},{"id":"comment-0027","articleId":"art-007","destinationId":"banaue","userId":"user-068","author":"Patricia Cruz","avatar":"https://i.pravatar.cc/150?img=69","date":"2026-08-16","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":17},{"id":"comment-0028","articleId":"art-007","destinationId":"banaue","userId":"user-054","author":"Isabella Torralba","avatar":"https://i.pravatar.cc/150?img=55","date":"2026-08-15","text":"The underwater marine life here is world class. Best dive of my life!","likes":27},{"id":"comment-0029","articleId":"art-007","destinationId":"banaue","userId":"user-023","author":"Ethan Anderson","avatar":"https://i.pravatar.cc/150?img=24","date":"2026-08-05","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":21},{"id":"comment-0030","articleId":"art-007","destinationId":"banaue","userId":"user-093","author":"Charlotte Brown","avatar":"https://i.pravatar.cc/150?img=24","date":"2026-08-22","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":9},{"id":"comment-0031","articleId":"art-007","destinationId":"banaue","userId":"user-003","author":"Benjamin Martin","avatar":"https://i.pravatar.cc/150?img=4","date":"2026-08-09","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":22},{"id":"comment-0032","articleId":"art-008","destinationId":"vigan","userId":"user-100","author":"Dominic Gonzales","avatar":"https://i.pravatar.cc/150?img=31","date":"2026-08-16","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":20},{"id":"comment-0033","articleId":"art-008","destinationId":"vigan","userId":"user-060","author":"Beatrice Torralba","avatar":"https://i.pravatar.cc/150?img=61","date":"2026-08-05","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":37},{"id":"comment-0034","articleId":"art-008","destinationId":"vigan","userId":"user-008","author":"Maria Ramos","avatar":"https://i.pravatar.cc/150?img=9","date":"2026-08-21","text":"The underwater marine life here is world class. Best dive of my life!","likes":14},{"id":"comment-0035","articleId":"art-009","destinationId":"moalboal","userId":"user-041","author":"Sophie Vance","avatar":"https://i.pravatar.cc/150?img=42","date":"2026-08-02","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":41},{"id":"comment-0036","articleId":"art-009","destinationId":"moalboal","userId":"user-065","author":"Markus Smith","avatar":"https://i.pravatar.cc/150?img=66","date":"2026-08-18","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":6},{"id":"comment-0037","articleId":"art-009","destinationId":"moalboal","userId":"user-054","author":"Isabella Torralba","avatar":"https://i.pravatar.cc/150?img=55","date":"2026-08-26","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":6},{"id":"comment-0038","articleId":"art-010","destinationId":"pagudpud","userId":"user-027","author":"Daniel Schneider","avatar":"https://i.pravatar.cc/150?img=28","date":"2026-08-20","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":10},{"id":"comment-0039","articleId":"art-010","destinationId":"pagudpud","userId":"user-084","author":"Bianca Navarro","avatar":"https://i.pravatar.cc/150?img=15","date":"2026-08-06","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":14},{"id":"comment-0040","articleId":"art-010","destinationId":"pagudpud","userId":"user-095","author":"Charlotte Weber","avatar":"https://i.pravatar.cc/150?img=26","date":"2026-08-24","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":29},{"id":"comment-0041","articleId":"art-010","destinationId":"pagudpud","userId":"user-099","author":"Emma Vance","avatar":"https://i.pravatar.cc/150?img=30","date":"2026-08-17","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":10},{"id":"comment-0042","articleId":"art-011","destinationId":"mt-pulag","userId":"user-042","author":"Ramon Ramos","avatar":"https://i.pravatar.cc/150?img=43","date":"2026-08-04","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":24},{"id":"comment-0043","articleId":"art-011","destinationId":"mt-pulag","userId":"user-069","author":"Benjamin Taylor","avatar":"https://i.pravatar.cc/150?img=70","date":"2026-08-06","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":9},{"id":"comment-0044","articleId":"art-011","destinationId":"mt-pulag","userId":"user-017","author":"Sarah Lindner","avatar":"https://i.pravatar.cc/150?img=18","date":"2026-08-12","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":28},{"id":"comment-0045","articleId":"art-012","destinationId":"chocolate-hills","userId":"user-067","author":"Benjamin Kowalski","avatar":"https://i.pravatar.cc/150?img=68","date":"2026-08-23","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":26},{"id":"comment-0046","articleId":"art-012","destinationId":"chocolate-hills","userId":"user-076","author":"Joshua Sison","avatar":"https://i.pravatar.cc/150?img=7","date":"2026-08-13","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":20},{"id":"comment-0047","articleId":"art-012","destinationId":"chocolate-hills","userId":"user-076","author":"Joshua Sison","avatar":"https://i.pravatar.cc/150?img=7","date":"2026-08-03","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":25},{"id":"comment-0048","articleId":"art-013","destinationId":"tagaytay","userId":"user-017","author":"Sarah Lindner","avatar":"https://i.pravatar.cc/150?img=18","date":"2026-08-24","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":13},{"id":"comment-0049","articleId":"art-013","destinationId":"tagaytay","userId":"user-059","author":"Kenji Vance","avatar":"https://i.pravatar.cc/150?img=60","date":"2026-08-29","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":39},{"id":"comment-0050","articleId":"art-013","destinationId":"tagaytay","userId":"user-040","author":"Gabriel Valdez","avatar":"https://i.pravatar.cc/150?img=41","date":"2026-08-02","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":25},{"id":"comment-0051","articleId":"art-014","destinationId":"mayon-volcano","userId":"user-080","author":"Bianca Navarro","avatar":"https://i.pravatar.cc/150?img=11","date":"2026-08-12","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":22},{"id":"comment-0052","articleId":"art-014","destinationId":"mayon-volcano","userId":"user-057","author":"Mia Schneider","avatar":"https://i.pravatar.cc/150?img=58","date":"2026-08-14","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":41},{"id":"comment-0053","articleId":"art-014","destinationId":"mayon-volcano","userId":"user-081","author":"Sebastian Lindner","avatar":"https://i.pravatar.cc/150?img=12","date":"2026-08-05","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":25},{"id":"comment-0054","articleId":"art-014","destinationId":"mayon-volcano","userId":"user-088","author":"Maria Ocampo","avatar":"https://i.pravatar.cc/150?img=19","date":"2026-08-10","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":28},{"id":"comment-0055","articleId":"art-014","destinationId":"mayon-volcano","userId":"user-053","author":"Sebastian White","avatar":"https://i.pravatar.cc/150?img=54","date":"2026-08-26","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":8},{"id":"comment-0056","articleId":"art-015","destinationId":"siquijor","userId":"user-004","author":"Isabella Torralba","avatar":"https://i.pravatar.cc/150?img=5","date":"2026-08-17","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":36},{"id":"comment-0057","articleId":"art-015","destinationId":"siquijor","userId":"user-003","author":"Benjamin Martin","avatar":"https://i.pravatar.cc/150?img=4","date":"2026-08-27","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":5},{"id":"comment-0058","articleId":"art-015","destinationId":"siquijor","userId":"user-006","author":"Bianca Mercado","avatar":"https://i.pravatar.cc/150?img=7","date":"2026-08-12","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":26},{"id":"comment-0059","articleId":"art-015","destinationId":"siquijor","userId":"user-044","author":"Camille Pineda","avatar":"https://i.pravatar.cc/150?img=45","date":"2026-08-22","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":27},{"id":"comment-0060","articleId":"art-016","destinationId":"la-union","userId":"user-066","author":"Elena Dela Cruz","avatar":"https://i.pravatar.cc/150?img=67","date":"2026-08-15","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":39},{"id":"comment-0061","articleId":"art-016","destinationId":"la-union","userId":"user-019","author":"Zoe Schneider","avatar":"https://i.pravatar.cc/150?img=20","date":"2026-08-12","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":26},{"id":"comment-0062","articleId":"art-016","destinationId":"la-union","userId":"user-099","author":"Emma Vance","avatar":"https://i.pravatar.cc/150?img=30","date":"2026-08-11","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":42},{"id":"comment-0063","articleId":"art-016","destinationId":"la-union","userId":"user-013","author":"Sarah Vance","avatar":"https://i.pravatar.cc/150?img=14","date":"2026-08-22","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":31},{"id":"comment-0064","articleId":"art-016","destinationId":"la-union","userId":"user-014","author":"Samantha Torralba","avatar":"https://i.pravatar.cc/150?img=15","date":"2026-08-15","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":26},{"id":"comment-0065","articleId":"art-017","destinationId":"anilao","userId":"user-025","author":"Mia Rivers","avatar":"https://i.pravatar.cc/150?img=26","date":"2026-08-17","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":27},{"id":"comment-0066","articleId":"art-017","destinationId":"anilao","userId":"user-065","author":"Markus Smith","avatar":"https://i.pravatar.cc/150?img=66","date":"2026-08-14","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":22},{"id":"comment-0067","articleId":"art-017","destinationId":"anilao","userId":"user-057","author":"Mia Schneider","avatar":"https://i.pravatar.cc/150?img=58","date":"2026-08-24","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":6},{"id":"comment-0068","articleId":"art-017","destinationId":"anilao","userId":"user-083","author":"Freja Kowalski","avatar":"https://i.pravatar.cc/150?img=14","date":"2026-08-26","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":14},{"id":"comment-0069","articleId":"art-018","destinationId":"mt-pinatubo","userId":"user-021","author":"Aria Smith","avatar":"https://i.pravatar.cc/150?img=22","date":"2026-08-03","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":15},{"id":"comment-0070","articleId":"art-018","destinationId":"mt-pinatubo","userId":"user-014","author":"Samantha Torralba","avatar":"https://i.pravatar.cc/150?img=15","date":"2026-08-13","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":19},{"id":"comment-0071","articleId":"art-018","destinationId":"mt-pinatubo","userId":"user-004","author":"Isabella Torralba","avatar":"https://i.pravatar.cc/150?img=5","date":"2026-08-13","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":25},{"id":"comment-0072","articleId":"art-019","destinationId":"balabac","userId":"user-088","author":"Maria Ocampo","avatar":"https://i.pravatar.cc/150?img=19","date":"2026-08-27","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":42},{"id":"comment-0073","articleId":"art-019","destinationId":"balabac","userId":"user-046","author":"Elena Castillo","avatar":"https://i.pravatar.cc/150?img=47","date":"2026-08-17","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":39},{"id":"comment-0074","articleId":"art-019","destinationId":"balabac","userId":"user-088","author":"Maria Ocampo","avatar":"https://i.pravatar.cc/150?img=19","date":"2026-08-24","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":40},{"id":"comment-0075","articleId":"art-020","destinationId":"mt-apo","userId":"user-077","author":"Ethan Lindner","avatar":"https://i.pravatar.cc/150?img=8","date":"2026-08-09","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":30},{"id":"comment-0076","articleId":"art-020","destinationId":"mt-apo","userId":"user-047","author":"Benjamin Lindner","avatar":"https://i.pravatar.cc/150?img=48","date":"2026-08-11","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":12},{"id":"comment-0077","articleId":"art-020","destinationId":"mt-apo","userId":"user-096","author":"Marco Pineda","avatar":"https://i.pravatar.cc/150?img=27","date":"2026-08-05","text":"The underwater marine life here is world class. Best dive of my life!","likes":39},{"id":"comment-0078","articleId":"art-020","destinationId":"mt-apo","userId":"user-036","author":"Marco Ocampo","avatar":"https://i.pravatar.cc/150?img=37","date":"2026-08-19","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":19},{"id":"comment-0079","articleId":"art-021","destinationId":"mati-dahican","userId":"user-045","author":"Sarah White","avatar":"https://i.pravatar.cc/150?img=46","date":"2026-08-03","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":16},{"id":"comment-0080","articleId":"art-021","destinationId":"mati-dahican","userId":"user-037","author":"Julian Kowalski","avatar":"https://i.pravatar.cc/150?img=38","date":"2026-08-12","text":"Very detailed guide with realistic travel budgets. Highly recommended read for backpackers!","likes":13},{"id":"comment-0081","articleId":"art-021","destinationId":"mati-dahican","userId":"user-093","author":"Charlotte Brown","avatar":"https://i.pravatar.cc/150?img=24","date":"2026-08-11","text":"The underwater marine life here is world class. Best dive of my life!","likes":14},{"id":"comment-0082","articleId":"art-021","destinationId":"mati-dahican","userId":"user-037","author":"Julian Kowalski","avatar":"https://i.pravatar.cc/150?img=38","date":"2026-08-08","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":25},{"id":"comment-0083","articleId":"art-021","destinationId":"mati-dahican","userId":"user-092","author":"Andrea Gonzales","avatar":"https://i.pravatar.cc/150?img=23","date":"2026-08-09","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":19},{"id":"comment-0084","articleId":"art-022","destinationId":"lake-sebu","userId":"user-066","author":"Elena Dela Cruz","avatar":"https://i.pravatar.cc/150?img=67","date":"2026-08-19","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":36},{"id":"comment-0085","articleId":"art-022","destinationId":"lake-sebu","userId":"user-003","author":"Benjamin Martin","avatar":"https://i.pravatar.cc/150?img=4","date":"2026-08-14","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":29},{"id":"comment-0086","articleId":"art-022","destinationId":"lake-sebu","userId":"user-097","author":"Elena Dubois","avatar":"https://i.pravatar.cc/150?img=28","date":"2026-08-11","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":12},{"id":"comment-0087","articleId":"art-023","destinationId":"enchanted-river","userId":"user-081","author":"Sebastian Lindner","avatar":"https://i.pravatar.cc/150?img=12","date":"2026-08-21","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":12},{"id":"comment-0088","articleId":"art-023","destinationId":"enchanted-river","userId":"user-098","author":"Isabella Castillo","avatar":"https://i.pravatar.cc/150?img=29","date":"2026-08-07","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":30},{"id":"comment-0089","articleId":"art-023","destinationId":"enchanted-river","userId":"user-009","author":"Sebastian Taylor","avatar":"https://i.pravatar.cc/150?img=10","date":"2026-08-14","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":12},{"id":"comment-0090","articleId":"art-023","destinationId":"enchanted-river","userId":"user-096","author":"Marco Pineda","avatar":"https://i.pravatar.cc/150?img=27","date":"2026-08-27","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":28},{"id":"comment-0091","articleId":"art-023","destinationId":"enchanted-river","userId":"user-011","author":"Markus White","avatar":"https://i.pravatar.cc/150?img=12","date":"2026-08-17","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":34},{"id":"comment-0092","articleId":"art-024","destinationId":"camiguin","userId":"user-069","author":"Benjamin Taylor","avatar":"https://i.pravatar.cc/150?img=70","date":"2026-08-13","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":40},{"id":"comment-0093","articleId":"art-024","destinationId":"camiguin","userId":"user-038","author":"Kristine Mendoza","avatar":"https://i.pravatar.cc/150?img=39","date":"2026-08-25","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":12},{"id":"comment-0094","articleId":"art-024","destinationId":"camiguin","userId":"user-059","author":"Kenji Vance","avatar":"https://i.pravatar.cc/150?img=60","date":"2026-08-13","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":13},{"id":"comment-0095","articleId":"art-024","destinationId":"camiguin","userId":"user-023","author":"Ethan Anderson","avatar":"https://i.pravatar.cc/150?img=24","date":"2026-08-11","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":18},{"id":"comment-0096","articleId":"art-024","destinationId":"camiguin","userId":"user-069","author":"Benjamin Taylor","avatar":"https://i.pravatar.cc/150?img=70","date":"2026-08-01","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":34},{"id":"comment-0097","articleId":"art-025","destinationId":"malapascua","userId":"user-080","author":"Bianca Navarro","avatar":"https://i.pravatar.cc/150?img=11","date":"2026-08-01","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":40},{"id":"comment-0098","articleId":"art-025","destinationId":"malapascua","userId":"user-024","author":"Maria Torralba","avatar":"https://i.pravatar.cc/150?img=25","date":"2026-08-10","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":15},{"id":"comment-0099","articleId":"art-025","destinationId":"malapascua","userId":"user-058","author":"Angelica Mercado","avatar":"https://i.pravatar.cc/150?img=59","date":"2026-08-25","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":41},{"id":"comment-0100","articleId":"art-026","destinationId":"manjuyod","userId":"user-048","author":"Juan Del Rosario","avatar":"https://i.pravatar.cc/150?img=49","date":"2026-08-12","text":"Make sure to book your island tours early in the morning to avoid the crowd.","likes":42},{"id":"comment-0101","articleId":"art-026","destinationId":"manjuyod","userId":"user-098","author":"Isabella Castillo","avatar":"https://i.pravatar.cc/150?img=29","date":"2026-08-07","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":25},{"id":"comment-0102","articleId":"art-026","destinationId":"manjuyod","userId":"user-059","author":"Kenji Vance","avatar":"https://i.pravatar.cc/150?img=60","date":"2026-08-07","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":37},{"id":"comment-0103","articleId":"art-027","destinationId":"bacolod-ruins","userId":"user-072","author":"Katrina Ocampo","avatar":"https://i.pravatar.cc/150?img=3","date":"2026-08-11","text":"The underwater marine life here is world class. Best dive of my life!","likes":29},{"id":"comment-0104","articleId":"art-027","destinationId":"bacolod-ruins","userId":"user-065","author":"Markus Smith","avatar":"https://i.pravatar.cc/150?img=66","date":"2026-08-05","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":37},{"id":"comment-0105","articleId":"art-027","destinationId":"bacolod-ruins","userId":"user-038","author":"Kristine Mendoza","avatar":"https://i.pravatar.cc/150?img=39","date":"2026-08-27","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":26},{"id":"comment-0106","articleId":"art-027","destinationId":"bacolod-ruins","userId":"user-045","author":"Sarah White","avatar":"https://i.pravatar.cc/150?img=46","date":"2026-08-08","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":14},{"id":"comment-0107","articleId":"art-028","destinationId":"gigantes-islands","userId":"user-027","author":"Daniel Schneider","avatar":"https://i.pravatar.cc/150?img=28","date":"2026-08-02","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":41},{"id":"comment-0108","articleId":"art-028","destinationId":"gigantes-islands","userId":"user-033","author":"Daniel Taylor","avatar":"https://i.pravatar.cc/150?img=34","date":"2026-08-21","text":"The information in this article was super helpful for planning our itinerary! Thanks for sharing.","likes":41},{"id":"comment-0109","articleId":"art-028","destinationId":"gigantes-islands","userId":"user-032","author":"Miguel Aquino","avatar":"https://i.pravatar.cc/150?img=33","date":"2026-08-05","text":"Palawan and Cebu are absolutely stunning. Can't wait for our trip next month!","likes":18},{"id":"comment-0110","articleId":"art-028","destinationId":"gigantes-islands","userId":"user-052","author":"Patricia Castillo","avatar":"https://i.pravatar.cc/150?img=53","date":"2026-08-12","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":37},{"id":"comment-0111","articleId":"art-029","destinationId":"kalanggaman","userId":"user-002","author":"Elena Valdez","avatar":"https://i.pravatar.cc/150?img=3","date":"2026-08-26","text":"The photo spots mentioned in this blog are spot on! Captured amazing sunset shots.","likes":18},{"id":"comment-0112","articleId":"art-029","destinationId":"kalanggaman","userId":"user-053","author":"Sebastian White","avatar":"https://i.pravatar.cc/150?img=54","date":"2026-08-27","text":"Batanes and Mt. Pulag look surreal! Definitely adding them to my bucket list.","likes":3},{"id":"comment-0113","articleId":"art-029","destinationId":"kalanggaman","userId":"user-050","author":"Katrina Torralba","avatar":"https://i.pravatar.cc/150?img=51","date":"2026-08-15","text":"Great travel tips regarding eco-tourism fees and cash ATMs. Saved us a lot of trouble!","likes":40},{"id":"comment-0114","articleId":"art-029","destinationId":"kalanggaman","userId":"user-027","author":"Daniel Schneider","avatar":"https://i.pravatar.cc/150?img=28","date":"2026-08-28","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":17},{"id":"comment-0115","articleId":"art-030","destinationId":"sohoton-cove","userId":"user-099","author":"Emma Vance","avatar":"https://i.pravatar.cc/150?img=30","date":"2026-08-17","text":"The underwater marine life here is world class. Best dive of my life!","likes":13},{"id":"comment-0116","articleId":"art-030","destinationId":"sohoton-cove","userId":"user-095","author":"Charlotte Weber","avatar":"https://i.pravatar.cc/150?img=26","date":"2026-08-02","text":"The food recommendations here were top notch! Tried the local delicacies and loved them.","likes":41},{"id":"comment-0117","articleId":"art-030","destinationId":"sohoton-cove","userId":"user-001","author":"Daniel Schneider","avatar":"https://i.pravatar.cc/150?img=2","date":"2026-08-09","text":"Mabuhay! Thank you for showcasing the beautiful culture and warm hospitality of the Philippines.","likes":8}]`);
const destinations$1 = destinationsData;
const articles = articlesData;
const comments = commentsData;
const places = articles.map((art) => {
  const artComments = comments.filter((c) => c.articleId === art.id);
  return {
    id: art.slug,
    articleId: art.id,
    destination: art.destinationName,
    title: art.title,
    category: art.category,
    excerpt: art.excerpt,
    description: art.excerpt,
    fullContent: art.fullContent,
    img: art.heroImage,
    location: art.location,
    rating: art.rating,
    featured: art.id === "art-001" || art.id === "art-005" || art.id === "art-008",
    publishedAt: art.publishedAt,
    readTime: art.readTime,
    author: art.author,
    tags: art.tags,
    comments: artComments
  };
});
const categories = [
  "All Stories",
  "Beaches & Islands",
  "Surfing & Adventure",
  "Culture & Heritage",
  "Diving & Marine Life",
  "Nature & Wildlife",
  "Road Trips & Coastal",
  "Mountain Getaways"
];
const FALLBACK_IMAGE$3 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";
function HeroSection({ post }) {
  if (!post) return null;
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full rounded-3xl overflow-hidden shadow-2xl mb-12 group border border-gray-100 dark:border-gray-800", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gray-900", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: post.img,
          alt: post.destination,
          onError: (e) => {
            e.target.src = FALLBACK_IMAGE$3;
          },
          className: "w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/40 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-6 sm:p-10 md:p-14 max-w-3xl min-h-[460px] flex flex-col justify-end text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow", children: "🔥 Featured Story" }),
        /* @__PURE__ */ jsx("span", { className: "bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30", children: post.category }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-amber-400 text-xs font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full", children: [
          /* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5 fill-amber-400" }),
          /* @__PURE__ */ jsxs("span", { children: [
            post.rating,
            ".0 / 5.0"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-3 group-hover:text-emerald-300 transition-colors drop-shadow-md", children: post.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-gray-200 line-clamp-2 mb-6 max-w-2xl font-normal leading-relaxed", children: post.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: post.author.avatar,
              alt: post.author.name,
              onError: (e) => {
                e.target.src = "https://i.pravatar.cc/150?img=33";
              },
              className: "w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400 shadow"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-white", children: post.author.name }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] text-gray-300", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3 text-emerald-400" }),
                post.destination
              ] }),
              /* @__PURE__ */ jsx("span", { children: "•" }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-gray-400" }),
                post.readTime
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: `/post/${post.id}`, children: /* @__PURE__ */ jsxs(Button, { className: "bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full px-6 py-2.5 shadow-lg group-hover:translate-x-1 transition-all", children: [
          /* @__PURE__ */ jsx("span", { children: "Read Story" }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] }) })
      ] })
    ] })
  ] });
}
const FALLBACK_IMAGE$2 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";
function PostFeed({ posts, itemsPerPage = 6 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [savedPosts, setSavedPosts] = useState({});
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const paginatedPosts = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };
  if (posts.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-12 text-center border border-gray-100 dark:border-gray-800 shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "🏝️" }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-800 dark:text-white", children: "No Destination Stories Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 max-w-md mx-auto", children: "We couldn't find any travel stories matching your search or category filter. Try clearing filters or searching for another spot!" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: paginatedPosts.map((post) => {
      var _a, _b, _c;
      const isSaved = savedPosts[post.id];
      return /* @__PURE__ */ jsxs(
        "article",
        {
          className: "bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: post.img,
                  alt: post.destination,
                  onError: (e) => {
                    e.target.src = FALLBACK_IMAGE$2;
                  },
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm", children: post.category }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: (e) => toggleSave(post.id, e),
                  className: `absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow ${isSaved ? "bg-emerald-600 text-white" : "bg-black/30 text-white hover:bg-black/50"}`,
                  "aria-label": "Save story",
                  children: /* @__PURE__ */ jsx(Bookmark, { className: `w-3.5 h-3.5 ${isSaved ? "fill-white" : ""}` })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3 text-emerald-400" }),
                /* @__PURE__ */ jsx("span", { children: post.destination })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-emerald-600" }),
                    post.readTime
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-amber-500 font-bold", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-amber-400" }),
                    post.rating,
                    ".0"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Link, { to: `/post/${post.id}`, className: "block", children: /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug", children: post.title }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed", children: post.excerpt })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: (_a = post.author) == null ? void 0 : _a.avatar,
                      alt: (_b = post.author) == null ? void 0 : _b.name,
                      onError: (e) => {
                        e.target.src = "https://i.pravatar.cc/150?img=33";
                      },
                      className: "w-7 h-7 rounded-full object-cover ring-1 ring-emerald-500"
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: (_c = post.author) == null ? void 0 : _c.name })
                ] }),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: `/post/${post.id}`,
                    className: "inline-flex items-center gap-1 font-bold text-emerald-600 hover:text-emerald-700 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Read More" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        },
        post.id
      );
    }) }),
    totalPages > 1 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm text-xs font-semibold", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => handlePageChange(currentPage - 1),
          disabled: currentPage === 1,
          variant: "outline",
          size: "sm",
          className: "rounded-xl gap-1 text-xs",
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Previous" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("span", { className: "text-gray-600 dark:text-gray-400 font-medium", children: [
        "Page ",
        /* @__PURE__ */ jsx("strong", { className: "text-gray-900 dark:text-white font-bold", children: currentPage }),
        " of",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-gray-900 dark:text-white font-bold", children: totalPages })
      ] }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          onClick: () => handlePageChange(currentPage + 1),
          disabled: currentPage === totalPages,
          variant: "outline",
          size: "sm",
          className: "rounded-xl gap-1 text-xs",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Next" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] });
}
function MarkdownContent({ content }) {
  if (!content) return null;
  const lines = content.split("\n");
  const parseInline = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return /* @__PURE__ */ jsx("strong", { className: "font-bold text-gray-900 dark:text-white", children: part.slice(2, -2) }, idx);
      }
      return part;
    });
  };
  const renderedElements = [];
  let currentList = [];
  let listType = null;
  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === "ol") {
        renderedElements.push(
          /* @__PURE__ */ jsx("ol", { className: "list-decimal ml-6 space-y-1.5 my-3 text-gray-700 dark:text-gray-300", children: currentList.map((item, i) => /* @__PURE__ */ jsx("li", { children: parseInline(item) }, i)) }, `ol-${renderedElements.length}`)
        );
      } else {
        renderedElements.push(
          /* @__PURE__ */ jsx("ul", { className: "list-disc ml-6 space-y-1.5 my-3 text-gray-700 dark:text-gray-300", children: currentList.map((item, i) => /* @__PURE__ */ jsx("li", { children: parseInline(item) }, i)) }, `ul-${renderedElements.length}`)
        );
      }
      currentList = [];
      listType = null;
    }
  };
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }
    if (trimmed.startsWith("### ")) {
      flushList();
      renderedElements.push(
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-extrabold text-gray-900 dark:text-white mt-6 mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-emerald-500 rounded-full inline-block" }),
          parseInline(trimmed.slice(4))
        ] }, index)
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      renderedElements.push(
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-gray-900 dark:text-white mt-8 mb-3", children: parseInline(trimmed.slice(3)) }, index)
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (listType !== "ul") flushList();
      listType = "ul";
      currentList.push(trimmed.slice(2));
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (listType !== "ol") flushList();
      listType = "ol";
      currentList.push(trimmed.replace(/^\d+\.\s/, ""));
    } else {
      flushList();
      renderedElements.push(
        /* @__PURE__ */ jsx("p", { className: "my-2.5 leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base font-normal", children: parseInline(trimmed) }, index)
      );
    }
  });
  flushList();
  return /* @__PURE__ */ jsx("div", { className: "space-y-1.5 font-sans", children: renderedElements });
}
function Sidebar({
  searchQuery,
  onSearchChange,
  categories: categories2,
  selectedCategory,
  onCategorySelect,
  allPosts
}) {
  const topTags = ["Palawan", "Surfing", "Culture", "Volcano", "SardineRun", "Batanes", "Bohol", "UndergroundRiver"];
  const popularPosts = allPosts.slice(0, 4);
  return /* @__PURE__ */ jsxs("aside", { className: "w-full lg:w-80 space-y-8 flex-shrink-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm text-center space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-20 h-20 mx-auto", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://i.pravatar.cc/150?img=68",
            alt: "Travel Curator",
            className: "w-full h-full rounded-full object-cover ring-4 ring-emerald-500/20 shadow-md"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 right-0 p-1.5 bg-emerald-600 text-white rounded-full text-xs", children: /* @__PURE__ */ jsx(Compass, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 dark:text-white text-base", children: "Juan Dela Cruz" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-600 dark:text-emerald-400 font-medium", children: "Island Travel Curator & Guide" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 leading-relaxed", children: "Log of local errands, hidden island beaches, and travel insights across the 7,641 islands of the Philippines." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-800", children: [
        /* @__PURE__ */ jsx(Instagram, { className: "w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" }),
        /* @__PURE__ */ jsx(Facebook, { className: "w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" }),
        /* @__PURE__ */ jsx(Youtube, { className: "w-4 h-4 hover:text-emerald-600 transition-colors cursor-pointer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsxs("h4", { className: "font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-emerald-600" }),
        /* @__PURE__ */ jsx("span", { children: "Search Stories" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: searchQuery,
          onChange: (e) => onSearchChange(e.target.value),
          placeholder: "Filter by keyword...",
          className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsxs("h4", { className: "font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Compass, { className: "w-4 h-4 text-emerald-600" }),
        /* @__PURE__ */ jsx("span", { children: "Categories" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1 text-xs", children: categories2.map((cat) => {
        const count = cat === "All Stories" ? allPosts.length : allPosts.filter((p) => p.category === cat).length;
        const isSelected = selectedCategory === cat;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => onCategorySelect(cat),
            className: `w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${isSelected ? "bg-emerald-600 text-white font-bold shadow-sm" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
            children: [
              /* @__PURE__ */ jsx("span", { children: cat }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400"}`,
                  children: count
                }
              )
            ]
          },
          cat
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4", children: [
      /* @__PURE__ */ jsxs("h4", { className: "font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-emerald-600" }),
        /* @__PURE__ */ jsx("span", { children: "Trending Guides" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: popularPosts.map((post) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/post/${post.id}`,
          className: "flex items-center gap-3 group",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: post.img,
                alt: post.title,
                className: "w-14 h-14 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1 overflow-hidden", children: [
              /* @__PURE__ */ jsx("h5", { className: "text-xs font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug", children: post.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-gray-400 font-medium", children: [
                post.readTime,
                " • ★ ",
                post.rating,
                ".0"
              ] })
            ] })
          ]
        },
        post.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3", children: [
      /* @__PURE__ */ jsxs("h4", { className: "font-bold text-gray-900 dark:text-white text-sm flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-emerald-600" }),
        /* @__PURE__ */ jsx("span", { children: "Popular Tags" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 text-xs", children: topTags.map((tag) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "bg-gray-100 dark:bg-gray-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:text-emerald-700 dark:hover:text-emerald-300 text-gray-600 dark:text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors cursor-pointer",
          children: [
            "#",
            tag
          ]
        },
        tag
      )) })
    ] })
  ] });
}
function Home({ searchQuery, onSearchChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const featuredPost = places.find((p) => p.featured) || places[0];
  const filteredPosts = places.filter((post) => {
    const matchesSearch = searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.destination.toLowerCase().includes(searchQuery.toLowerCase()) || post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Stories" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-10", children: [
    !searchQuery && selectedCategory === "All Stories" && /* @__PURE__ */ jsx(HeroSection, { post: featuredPost }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight", children: searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory === "All Stories" ? "Latest Destination Stories" : `${selectedCategory} Guides` }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 dark:text-gray-400 font-medium", children: [
          "Showing ",
          filteredPosts.length,
          " curated stories from local & foreign backpackers"
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs", children: categories.map((cat) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSelectedCategory(cat),
          className: `px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? "bg-emerald-600 text-white shadow-md" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-800"}`,
          children: cat
        },
        cat
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-10", children: [
      /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(PostFeed, { posts: filteredPosts, itemsPerPage: 6 }) }),
      /* @__PURE__ */ jsx(
        Sidebar,
        {
          searchQuery,
          onSearchChange,
          categories,
          selectedCategory,
          onCategorySelect: setSelectedCategory,
          allPosts: places
        }
      )
    ] })
  ] });
}
const meta$8 = () => {
  return [{
    title: "Philippine Destination | Curated Island Travel & Errand Log"
  }, {
    name: "description",
    content: "Explore the best islands, beaches, and travel guides in the Philippines."
  }];
};
const home = UNSAFE_withComponentProps(function HomeRoute() {
  const {
    globalSearch,
    setGlobalSearch
  } = useOutletContext();
  return /* @__PURE__ */ jsx(Home, {
    searchQuery: globalSearch,
    onSearchChange: setGlobalSearch
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
function CommentSection({ initialComments }) {
  const [commentsList, setCommentsList] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [likesMap, setLikesMap] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;
    const added = {
      id: `comment-new-${Date.now()}`,
      articleId: "current",
      destinationId: "current",
      userId: "guest-user",
      author: authorName,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50) + 1}`,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      text: newComment,
      likes: 0
    };
    setCommentsList([added, ...commentsList]);
    setNewComment("");
    setAuthorName("");
  };
  const handleLike = (id, currentLikes) => {
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] !== void 0 ? prev[id] : currentLikes) + 1
    }));
  };
  return /* @__PURE__ */ jsxs("section", { className: "bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-800 shadow-sm space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 text-emerald-600" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Reader Comments (",
          commentsList.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400 font-medium", children: "Join the Discussion" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-gray-50 dark:bg-gray-800/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 space-y-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider", children: "Leave a Comment" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          required: true,
          value: authorName,
          onChange: (e) => setAuthorName(e.target.value),
          placeholder: "Your Name (e.g. Alex Traveler)",
          className: "w-full px-4 py-2.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        }
      ) }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          rows: 3,
          required: true,
          value: newComment,
          onChange: (e) => setNewComment(e.target.value),
          placeholder: "Share your experience, tips, or questions about this destination...",
          className: "w-full px-4 py-2.5 text-xs bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxs(Button, { type: "submit", size: "sm", className: "rounded-xl gap-1.5 font-bold text-xs px-5", children: [
        /* @__PURE__ */ jsx(Send, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ jsx("span", { children: "Post Comment" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: commentsList.map((item) => {
      const likesCount = likesMap[item.id] !== void 0 ? likesMap[item.id] : item.likes;
      return /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex gap-4 bg-gray-50/50 dark:bg-gray-800/20", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.avatar,
            alt: item.author,
            onError: (e) => {
              e.target.src = "https://i.pravatar.cc/150?img=33";
            },
            className: "w-9 h-9 rounded-full object-cover ring-2 ring-emerald-500/20 flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h5", { className: "font-bold text-xs text-gray-900 dark:text-white", children: item.author }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-400", children: item.date })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed", children: item.text }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex items-center gap-4 text-[11px]", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleLike(item.id, item.likes),
              className: "flex items-center gap-1 text-gray-400 hover:text-emerald-600 transition-colors font-medium",
              children: [
                /* @__PURE__ */ jsx(ThumbsUp, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  likesCount,
                  " Likes"
                ] })
              ]
            }
          ) })
        ] })
      ] }, item.id);
    }) })
  ] });
}
const FALLBACK_IMAGE$1 = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";
function ArticleDetail() {
  var _a, _b, _c, _d, _e;
  const { id } = useParams();
  const post = places.find((p) => p.id === id) || places[0];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  if (!post) {
    return /* @__PURE__ */ jsxs("div", { className: "py-20 text-center space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Story Not Found" }),
      /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Button, { children: "Return Home" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-10", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsx("span", { children: "Back to All Destination Stories" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-10", children: [
      /* @__PURE__ */ jsxs("main", { className: "flex-1 space-y-8", children: [
        /* @__PURE__ */ jsxs("article", { className: "bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-10 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: post.category }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 text-amber-500 font-bold", children: /* @__PURE__ */ jsxs("span", { children: [
              "★ ",
              post.rating,
              ".0 Rating"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight", children: post.title }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100 dark:border-gray-800 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: (_a = post.author) == null ? void 0 : _a.avatar,
                  alt: (_b = post.author) == null ? void 0 : _b.name,
                  onError: (e) => {
                    e.target.src = "https://i.pravatar.cc/150?img=33";
                  },
                  className: "w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 dark:text-white", children: (_c = post.author) == null ? void 0 : _c.name }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-[11px]", children: (_d = post.author) == null ? void 0 : _d.role })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5 text-emerald-600" }),
                post.publishedAt
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3.5 h-3.5 text-emerald-600" }),
                post.readTime
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: post.img,
                alt: post.destination,
                onError: (e) => {
                  e.target.src = FALLBACK_IMAGE$1;
                },
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-emerald-400" }),
              /* @__PURE__ */ jsx("span", { children: post.location })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 dark:text-white text-base sm:text-lg leading-relaxed border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-r-lg", children: post.description }),
            /* @__PURE__ */ jsx(MarkdownContent, { content: post.fullContent || post.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx(Tag, { className: "w-4 h-4 text-emerald-600" }),
            (_e = post.tags) == null ? void 0 : _e.map((tag) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full",
                children: [
                  "#",
                  tag
                ]
              },
              tag
            ))
          ] })
        ] }),
        /* @__PURE__ */ jsx(CommentSection, { initialComments: post.comments || [] })
      ] }),
      /* @__PURE__ */ jsx(
        Sidebar,
        {
          searchQuery: "",
          onSearchChange: () => {
          },
          categories,
          selectedCategory: "All Stories",
          onCategorySelect: () => {
          },
          allPosts: places
        }
      )
    ] })
  ] });
}
const meta$7 = () => {
  return [{
    title: "Destination Article | Philippine Destination"
  }, {
    name: "description",
    content: "Read detailed travel guide and island experiences."
  }];
};
const articleDetail = UNSAFE_withComponentProps(function ArticleDetailRoute() {
  return /* @__PURE__ */ jsx(ArticleDetail, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: articleDetail,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80";
function Destinations() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const filtered = destinations$1.filter((dest) => {
    const matchesSearch = search === "" || dest.name.toLowerCase().includes(search.toLowerCase()) || dest.province.toLowerCase().includes(search.toLowerCase()) || dest.category.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion === "All" || dest.region.toLowerCase().includes(selectedRegion.toLowerCase());
    return matchesSearch && matchesRegion;
  });
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Explore 7,641 Islands" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-black tracking-tight", children: "Philippine Destinations" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-emerald-100 max-w-2xl", children: "Browse curated tourist destinations, hidden beaches, mountain peaks, and diving sanctuaries across Luzon, Visayas, and Mindanao." }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 flex flex-col sm:flex-row gap-3 max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search destination, island, province...",
            className: "w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl focus:outline-none focus:bg-white focus:text-gray-900 placeholder:text-emerald-200 transition-all"
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-emerald-200 absolute left-3.5 top-3.5" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((item) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.image,
                  alt: item.name,
                  onError: (e) => {
                    e.target.src = FALLBACK_IMAGE;
                  },
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider", children: item.category }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3 text-emerald-400" }),
                /* @__PURE__ */ jsx("span", { children: item.province })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-emerald-600 dark:text-emerald-400", children: item.region }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-amber-500 font-bold", children: [
                    /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-amber-400" }),
                    item.rating,
                    ".0"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors", children: item.name }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed", children: item.description })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-400", children: [
                  "Spots: ",
                  (_a = item.popularSpots) == null ? void 0 : _a[0]
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: `/post/${item.id}`,
                    className: "font-bold text-emerald-600 hover:text-emerald-700 transition-colors",
                    children: "View Guide →"
                  }
                )
              ] })
            ] })
          ]
        },
        item.id
      );
    }) })
  ] });
}
const meta$6 = () => {
  return [{
    title: "Destinations | Philippine Destination"
  }, {
    name: "description",
    content: "Browse top destinations across the Philippines."
  }];
};
const destinations = UNSAFE_withComponentProps(function DestinationsRoute() {
  return /* @__PURE__ */ jsx(Destinations, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: destinations,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
function TravelInfo() {
  const guides = [
    {
      icon: Sun,
      title: "Best Time to Visit",
      desc: "The dry season runs from November to April. December to February offers cooler temperatures, while March to May is peak beach weather."
    },
    {
      icon: ShieldCheck,
      title: "Eco-Tourism & Rules",
      desc: "Reef-safe sunscreen is strictly required in Palawan & Siargao. Respect local wildlife, marine sanctuaries, and practice Leave No Trace."
    },
    {
      icon: DollarSign,
      title: "Currency & Payments",
      desc: "Philippine Peso (PHP). Always carry cash in remote islands as small boats and sari-sari stores do not accept credit cards or GCash."
    },
    {
      icon: Plane,
      title: "Island Transfers",
      desc: "Domestic flights (Cebu Pacific, AirAsia, PAL) link Manila & Cebu to regional airports. Ferries connect nearby island clusters."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Essential Backpacker Tips" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-black tracking-tight", children: "Philippine Travel Info" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-emerald-100 max-w-2xl", children: "Everything you need to know before visiting the Philippines: weather, island logistics, eco-tourism guidelines, and currency tips." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: guides.map((item, idx) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed", children: item.desc })
          ]
        },
        idx
      );
    }) })
  ] });
}
const meta$5 = () => {
  return [{
    title: "Travel Info | Philippine Destination"
  }, {
    name: "description",
    content: "Essential Philippines travel requirements, guidelines, and FAQs."
  }];
};
const travelInfo = UNSAFE_withComponentProps(function TravelInfoRoute() {
  return /* @__PURE__ */ jsx(TravelInfo, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: travelInfo,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
function loader() {
  return redirect("/destinations");
}
const bookingRedirect = UNSAFE_withComponentProps(function BookingRedirectRoute() {
  return null;
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bookingRedirect,
  loader
}, Symbol.toStringTag, { value: "Module" }));
function Booking() {
  const { destination } = useParams();
  return /* @__PURE__ */ jsx("div", { className: "py-12 max-w-3xl mx-auto px-4 sm:px-6 space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Island Booking Concierge" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-2xl sm:text-3xl font-black text-gray-900 dark:text-white capitalize", children: [
        "Reserve Tour: ",
        (destination == null ? void 0 : destination.replace("-", " ")) || "Philippine Adventure"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 max-w-md mx-auto", children: "Book licensed local guides, island-hopping boats, and environmental permits seamlessly." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-gray-700 dark:text-gray-300", children: "Target Travel Date" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-gray-700 dark:text-gray-300", children: "Number of Guests" }),
        /* @__PURE__ */ jsxs("select", { className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500", children: [
          /* @__PURE__ */ jsx("option", { children: "1 Traveler (Solo Backpacker)" }),
          /* @__PURE__ */ jsx("option", { children: "2 Travelers (Couple)" }),
          /* @__PURE__ */ jsx("option", { children: "3 - 5 Travelers (Group)" }),
          /* @__PURE__ */ jsx("option", { children: "6+ Travelers (Private Charter)" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full py-3 font-bold rounded-xl shadow-md mt-4", children: "Check Availability & Confirm Booking" })
    ] })
  ] }) });
}
const meta$4 = () => {
  return [{
    title: "Book Trip | Philippine Destination"
  }, {
    name: "description",
    content: "Reserve tours and flights to top Philippine island destinations."
  }];
};
const booking = UNSAFE_withComponentProps(function BookingRoute() {
  return /* @__PURE__ */ jsx(Booking, {});
});
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: booking,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
function Hotels() {
  const stays = [
    {
      name: "El Nido Resort at Miniloc Island",
      location: "El Nido, Palawan",
      price: "₱18,500 / night",
      rating: 4.9,
      tag: "Luxury Eco-Resort",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Nay Palad Hideaway",
      location: "General Luna, Siargao",
      price: "₱24,000 / night",
      rating: 5,
      tag: "All-Inclusive Villa",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80"
    },
    {
      name: "Henann Crystal Sands Resort",
      location: "Station 1, Boracay",
      price: "₱8,200 / night",
      rating: 4.8,
      tag: "Beachfront & Skypool",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Staycations & Eco-Resorts" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-black tracking-tight", children: "Featured Island Hotels" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-emerald-100 max-w-2xl", children: "Top-rated beachfront resorts, eco-villas, and backpacker hostels across popular Philippine destinations." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: stays.map((stay, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-gray-100", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: stay.image,
                alt: stay.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full", children: stay.tag })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 flex-1 flex flex-col justify-between space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 font-medium text-emerald-600", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3" }),
                  stay.location
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-amber-500 font-bold", children: [
                  /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-amber-400" }),
                  stay.rating
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white leading-snug", children: stay.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-black text-gray-900 dark:text-white", children: stay.price }),
              /* @__PURE__ */ jsx(Button, { size: "sm", className: "rounded-xl text-xs font-bold", children: "Book Stay" })
            ] })
          ] })
        ]
      },
      idx
    )) })
  ] });
}
const meta$3 = () => {
  return [{
    title: "Hotels & Resorts | Philippine Destination"
  }, {
    name: "description",
    content: "Discover luxury resorts and budget stays in the Philippines."
  }];
};
const hotels = UNSAFE_withComponentProps(function HotelsRoute() {
  return /* @__PURE__ */ jsx(Hotels, {});
});
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hotels,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function MyAccount() {
  return /* @__PURE__ */ jsx("div", { className: "py-8 max-w-4xl mx-auto px-4 sm:px-6 space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://i.pravatar.cc/150?img=12",
          alt: "User Profile",
          className: "w-24 h-24 rounded-full object-cover ring-4 ring-emerald-500/20 shadow-md"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black text-gray-900 dark:text-white", children: "Maria Santos" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-600 dark:text-emerald-400 font-bold", children: "Island Explorer & Backpacker" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 flex items-center justify-center sm:justify-start gap-1 pt-1", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-emerald-500" }),
          /* @__PURE__ */ jsx("span", { children: "Quezon City, Philippines • Member since 2025" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-gray-100 dark:border-gray-800 grid grid-cols-3 gap-4 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-xl font-black text-gray-900 dark:text-white", children: "14" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 font-medium", children: "Stories Read" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-xl font-black text-gray-900 dark:text-white", children: "6" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 font-medium", children: "Saved Spots" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl", children: [
        /* @__PURE__ */ jsx("span", { className: "block text-xl font-black text-gray-900 dark:text-white", children: "2" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 font-medium", children: "Reviews Posted" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center sm:justify-end pt-4", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "rounded-xl text-xs font-bold", children: "Edit Profile" }) })
  ] }) });
}
const meta$2 = () => {
  return [{
    title: "My Account | Philippine Destination"
  }, {
    name: "description",
    content: "Manage your saved destinations and account settings."
  }];
};
const myAccount = UNSAFE_withComponentProps(function MyAccountRoute() {
  return /* @__PURE__ */ jsx(MyAccount, {});
});
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: myAccount,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "py-8 max-w-7xl mx-auto px-4 sm:px-6 space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 text-white space-y-4 shadow-xl", children: [
      /* @__PURE__ */ jsx("span", { className: "bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Get in Touch" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-5xl font-black tracking-tight", children: "Contact & Community" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-emerald-100 max-w-2xl", children: "Have questions about island travel, local permits, or submitting your own story? Reach out to our team." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "Send Us a Message" }),
        submitted ? /* @__PURE__ */ jsxs("div", { className: "p-6 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 text-emerald-800 dark:text-emerald-300 space-y-2", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-sm", children: "✓ Message Received!" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Thank you for reaching out. Our team will respond within 24 hours." })
        ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Your Name",
                className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                required: true,
                placeholder: "name@example.com",
                className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300", children: "Message" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                rows: 4,
                required: true,
                placeholder: "Ask a question or suggest a new island destination...",
                className: "w-full px-4 py-2.5 text-xs bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full py-3 font-bold rounded-xl shadow-md", children: [
            /* @__PURE__ */ jsx(Send, { className: "w-4 h-4 mr-2" }),
            /* @__PURE__ */ jsx("span", { children: "Send Message" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "Community Contact Info" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-600 dark:text-gray-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-emerald-600" }),
            /* @__PURE__ */ jsx("span", { children: "Manila & Cebu Hubs, Philippines" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-emerald-600" }),
            /* @__PURE__ */ jsx("span", { children: "hello@philippinedestination.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-emerald-600" }),
            /* @__PURE__ */ jsx("span", { children: "+63 (2) 8123-4567" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const meta$1 = () => {
  return [{
    title: "Contact Us | Philippine Destination"
  }, {
    name: "description",
    content: "Get in touch with the Philippine Destination team."
  }];
};
const contact = UNSAFE_withComponentProps(function ContactRoute() {
  return /* @__PURE__ */ jsx(Contact, {});
});
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [{
    title: "Page Not Found | Philippine Destination"
  }, {
    name: "description",
    content: "The page you are looking for does not exist."
  }];
};
const notFound = UNSAFE_withComponentProps(function NotFoundRoute() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-[60vh] flex flex-col items-center justify-center text-center px-4",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-6xl font-black text-emerald-700 dark:text-emerald-400",
      children: "404"
    }), /* @__PURE__ */ jsx("h2", {
      className: "text-2xl font-bold mt-4 text-gray-900 dark:text-white",
      children: "Page Not Found"
    }), /* @__PURE__ */ jsx("p", {
      className: "mt-2 text-gray-600 dark:text-gray-400 max-w-md",
      children: "Sorry, the page or destination story you were trying to reach could not be found."
    }), /* @__PURE__ */ jsx(Link, {
      to: "/",
      className: "mt-6 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full transition-all shadow-md",
      children: "Return to Home"
    })]
  });
});
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: notFound,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DbWPZ3rk.js", "imports": ["/assets/jsx-runtime-D_zvdyIk.js", "/assets/chunk-BV7QT456-Bp3fYdDL.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": true, "module": "/assets/root-ClCG-YB3.js", "imports": ["/assets/jsx-runtime-D_zvdyIk.js", "/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/button-BHhnIOLR.js", "/assets/createLucideIcon-XOXrgOGL.js", "/assets/mail-B6XykX_v.js", "/assets/sun-BT7u4zot.js", "/assets/compass-Cx4r42mN.js", "/assets/search-CeIRBV1u.js", "/assets/send-8GUOqBsd.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/home-CI9KnYOU.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/destinations-B4C-9Z5p.js", "/assets/button-BHhnIOLR.js", "/assets/star-C87q2pgg.js", "/assets/map-pin-orymWCTH.js", "/assets/Sidebar-E4osqC73.js", "/assets/createLucideIcon-XOXrgOGL.js", "/assets/compass-Cx4r42mN.js", "/assets/search-CeIRBV1u.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/article-detail": { "id": "routes/article-detail", "parentId": "root", "path": "post/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/article-detail-HCstZbJP.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/destinations-B4C-9Z5p.js", "/assets/Sidebar-E4osqC73.js", "/assets/button-BHhnIOLR.js", "/assets/createLucideIcon-XOXrgOGL.js", "/assets/send-8GUOqBsd.js", "/assets/map-pin-orymWCTH.js", "/assets/compass-Cx4r42mN.js", "/assets/search-CeIRBV1u.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/destinations": { "id": "routes/destinations", "parentId": "root", "path": "destinations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/destinations-BoJs_yeD.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/destinations-B4C-9Z5p.js", "/assets/search-CeIRBV1u.js", "/assets/map-pin-orymWCTH.js", "/assets/star-C87q2pgg.js", "/assets/createLucideIcon-XOXrgOGL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/travel-info": { "id": "routes/travel-info", "parentId": "root", "path": "travel-info", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/travel-info-DebApRUH.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/sun-BT7u4zot.js", "/assets/createLucideIcon-XOXrgOGL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/booking-redirect": { "id": "routes/booking-redirect", "parentId": "root", "path": "booking", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/booking-redirect-DOIDAa2I.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/booking": { "id": "routes/booking", "parentId": "root", "path": "booking/:destination", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/booking-CH7cig4d.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/button-BHhnIOLR.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/hotels": { "id": "routes/hotels", "parentId": "root", "path": "hotels", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/hotels-D73kjeoH.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/button-BHhnIOLR.js", "/assets/map-pin-orymWCTH.js", "/assets/star-C87q2pgg.js", "/assets/createLucideIcon-XOXrgOGL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/my-account": { "id": "routes/my-account", "parentId": "root", "path": "my-account", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/my-account-JSoo4hZZ.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/button-BHhnIOLR.js", "/assets/map-pin-orymWCTH.js", "/assets/createLucideIcon-XOXrgOGL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/contact-DN8iQumg.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js", "/assets/button-BHhnIOLR.js", "/assets/send-8GUOqBsd.js", "/assets/map-pin-orymWCTH.js", "/assets/mail-B6XykX_v.js", "/assets/createLucideIcon-XOXrgOGL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/not-found": { "id": "routes/not-found", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasDefaultExport": true, "hasErrorBoundary": false, "module": "/assets/not-found-Dl2DdJoT.js", "imports": ["/assets/chunk-BV7QT456-Bp3fYdDL.js", "/assets/jsx-runtime-D_zvdyIk.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-e7d6895b.js", "version": "e7d6895b", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "v8_passThroughRequests": false, "v8_trailingSlashAwareDataRequests": false, "unstable_previewServerPrerendering": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/article-detail": {
    id: "routes/article-detail",
    parentId: "root",
    path: "post/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/destinations": {
    id: "routes/destinations",
    parentId: "root",
    path: "destinations",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/travel-info": {
    id: "routes/travel-info",
    parentId: "root",
    path: "travel-info",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/booking-redirect": {
    id: "routes/booking-redirect",
    parentId: "root",
    path: "booking",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/booking": {
    id: "routes/booking",
    parentId: "root",
    path: "booking/:destination",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/hotels": {
    id: "routes/hotels",
    parentId: "root",
    path: "hotels",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/my-account": {
    id: "routes/my-account",
    parentId: "root",
    path: "my-account",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/not-found": {
    id: "routes/not-found",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
