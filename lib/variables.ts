// Types
import { SignatureColor, SignatureFont } from "@/types";

/**
 * Environment
 */
export const ENV = process.env.NODE_ENV;

/**
 * Websites
 */
export const BASE_URL = "https://preventivo.etsolutions.cloud";

/**
 * API endpoints
 */
export const GENERATE_PDF_API = "/api/invoice/generate";
export const SEND_PDF_API = "/api/invoice/send";
export const EXPORT_INVOICE_API = "/api/invoice/export";

/**
 * External API endpoints
 */
export const CURRENCIES_API =
    "https://openexchangerates.org/api/currencies.json";

/**
 * Chromium for Puppeteer
 */
export const CHROMIUM_EXECUTABLE_PATH =
    "https://github.com/Sparticuz/chromium/releases/download/v122.0.0/chromium-v122.0.0-pack.tar";

/**
 * Tailwind
 */
export const TAILWIND_CDN =
    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

/**
 * Nodemailer
 */
export const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
export const NODEMAILER_PW = process.env.NODEMAILER_PW;

/**
 * I18N
 */
export const LOCALES = [
    { code: "it", name: "Italiano" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español"},
    { code: "fr", name: "Français" }
];
export const DEFAULT_LOCALE = LOCALES[0].code;

/**
 * Signature variables
 */
export const SIGNATURE_COLORS: SignatureColor[] = [
    { name: "black", label: "Black", color: "rgb(0, 0, 0)" },
    { name: "dark blue", label: "Dark Blue", color: "rgb(0, 0, 128)" },
    {
        name: "crimson",
        label: "Crimson",
        color: "#DC143C",
    },
];

export const SIGNATURE_FONTS: SignatureFont[] = [
    {
        name: "Dancing Script",
        variable: "var(--font-dancing-script)",
    },
    { name: "Parisienne", variable: "var(--font-parisienne)" },
    {
        name: "Great Vibes",
        variable: "var(--font-great-vibes)",
    },
    {
        name: "Alex Brush",
        variable: "var(--font-alex-brush)",
    },
];

/**
 * Form date options
 */
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

/**
 * Form defaults
 */
export const FORM_DEFAULT_VALUES = {
    sender: {
        name: "ET s.r.l.",
        address: "Corso Valentino 149",
        zipCode: "15033",
        city: "Casale Monferrato",
        country: "Italia",
        email: "allie@et.life",
        phone: "+393292879799",
        customInputs: [],
    },
    receiver: {
        name: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        email: "",
        phone: "",
        customInputs: [],
    },
    details: {
        invoiceLogo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDM0IiBoZWlnaHQ9IjQzNCIgdmlld0JveD0iMCAwIDQzNCA0MzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MzQiIGhlaWdodD0iNDM0IiBmaWxsPSIjQjJGMDQyIi8+CjxwYXRoIGQ9Ik0zMzggMjI4LjYyOUgyOTcuMzg2QzMwMy4zNjEgMjQ1LjE2NSAzMTkuNjA3IDI1Ni43MyAzMzcuMzQ2IDI1Ni44MjlWMjkyQzI5Ni4yNjYgMjkxLjgwMiAyNjEuNzIxIDI1Ni40NTMgMjYxLjcyMSAyMTIuNzg3VjE0MUgyOTYuNDUyVjE5Mi41ODhIMzM4VjIyOC42MjlaIiBmaWxsPSIjMDAwOTI2Ii8+CjxwYXRoIGQ9Ik0xMjkuODMyIDI3OC4yNzVDMTQyLjQ0IDI4Ny4yMDcgMTU3LjQ3NCAyOTIgMTcyLjg4NCAyOTJWMjU4LjY4OUMxNjQuMjczIDI1OC42ODkgMTU1Ljg3MiAyNTYuMDEgMTQ4LjgyNyAyNTEuMDE5QzE0MS43ODIgMjQ2LjAyOCAxMzYuNDM1IDIzOC45NjcgMTMzLjUxNyAyMzAuOEMxMzAuNTk4IDIyMi42MzIgMTMwLjI1IDIxMy43NTYgMTMyLjUxOSAyMDUuMzgxQzEzNC43ODggMTk3LjAwNyAxMzkuNTY1IDE4OS41NDIgMTQ2LjE5NyAxODQuMDA1QzE1Mi44MjkgMTc4LjQ2OSAxNjAuOTkzIDE3NS4xMyAxNjkuNTc3IDE3NC40NDNDMTc4LjE2MSAxNzMuNzU3IDE4Ni43NDUgMTc1Ljc1OCAxOTQuMTYgMTgwLjE3MkMyMDAuNjkgMTg0LjA2IDIwNi4wMzIgMTg5LjY1MyAyMDkuNjM5IDE5Ni4zMzVIMTczLjM0OVYyMzAuNTY4TDE5Ni42MDUgMjMwLjU4TDIwNi44MzcgMjMwLjU2OEwyMTMuOTk0IDIzMC41OEgyNDYuNDU0QzI0OS4zMjcgMjE1LjMxNiAyNDcuNDYxIDE5OS41MzEgMjQxLjEwOCAxODUuMzc2QzIzNC43NTYgMTcxLjIyMSAyMjQuMjI4IDE1OS4zODcgMjEwLjk1OSAxNTEuNDg4QzE5Ny42OSAxNDMuNTg4IDE4Mi4zMjcgMTQwLjAwOCAxNjYuOTY2IDE0MS4yMzZDMTUxLjYwNSAxNDIuNDY0IDEzNi45OTMgMTQ4LjQ0IDEyNS4xMjUgMTU4LjM0OEMxMTMuMjU2IDE2OC4yNTcgMTA0LjcwOCAxODEuNjE2IDEwMC42NDcgMTk2LjYwMkM5Ni41ODYzIDIxMS41ODkgOTcuMjA5OCAyMjcuNDc0IDEwMi40MzMgMjQyLjA5MUMxMDcuNjU2IDI1Ni43MDcgMTE3LjIyNCAyNjkuMzQzIDEyOS44MzIgMjc4LjI3NVoiIGZpbGw9IiMwMDA5MjYiLz4KPC9zdmc+Cg==",
        invoiceNumber: "",
        invoiceDate: "",
        dueDate: "",
        items: [
            {
                name: "",
                description: "",
                quantity: 0,
                unitPrice: 0,
                total: 0,
            },
        ],
        currency: "EUR",
        language: "Italiano",
        taxDetails: {
            amount: 0,
            amountType: "amount",
            taxID: "",
        },
        discountDetails: {
            amount: 0,
            amountType: "amount",
        },
        shippingDetails: {
            cost: 0,
            costType: "amount",
        },
        paymentInformation: {
            bankName: "",
            accountName: "",
            accountNumber: "",
        },
        additionalNotes: "",
        paymentTerms: "",
        totalAmountInWords: "",
        pdfTemplate: 1,
    },
};

/**
 * ? DEV Only
 * Form auto fill values for testing
 */
export const FORM_FILL_VALUES = {
    sender: {
        name: "John Doe",
        address: "123 Main St",
        zipCode: "12345",
        city: "Anytown",
        country: "USA",
        email: "johndoe@example.com",
        phone: "123-456-7890",
    },
    receiver: {
        name: "Jane Smith",
        address: "456 Elm St",
        zipCode: "54321",
        city: "Other Town",
        country: "Canada",
        email: "janesmith@example.com",
        phone: "987-654-3210",
    },
    details: {
        invoiceLogo: "",
        invoiceNumber: "INV0001",
        invoiceDate: new Date(),
        dueDate: new Date(),
        items: [
            {
                name: "Product 1",
                description: "Description of Product 1",
                quantity: 4,
                unitPrice: 50,
                total: 200,
            },
            {
                name: "Product 2",
                description: "Description of Product 2",
                quantity: 5,
                unitPrice: 50,
                total: 250,
            },
            {
                name: "Product 3",
                description: "Description of Product 3",
                quantity: 5,
                unitPrice: 80,
                total: 400,
            },
        ],
        currency: "USD",
        language: "English",
        taxDetails: {
            amount: 15,
            amountType: "percentage",
            taxID: "987654321",
        },
        discountDetails: {
            amount: 5,
            amountType: "percentage",
        },
        shippingDetails: {
            cost: 5,
            costType: "percentage",
        },
        paymentInformation: {
            bankName: "Bank Inc.",
            accountName: "John Doe",
            accountNumber: "445566998877",
        },
        additionalNotes: "Thank you for your business",
        paymentTerms: "Net 30",
        signature: {
            data: "",
        },
        subTotal: "850",
        totalAmount: "850",
        totalAmountInWords: "Eight Hundred Fifty",
        pdfTemplate: 1,
    },
};
