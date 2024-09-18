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
 * Google
 */
export const GOOGLE_SC_VERIFICATION = process.env.GOOGLE_SC_VERIFICATION;

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
        email: "info@et.life",
        phone: "+390142276608",
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
        invoiceLogo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjciIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCA2NyA0MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY3LjAwMDEgMjQuNjkzN0g1NS42NjIxQzU3LjMzMDMgMjkuMjcyMyA2MS44NjU1IDMyLjQ3NDUgNjYuODE3NyAzMi41MDE5VjQyLjI0MDNDNTUuMzQ5NCA0Mi4xODU0IDQ1LjcwNTYgMzIuMzk3OCA0NS43MDU2IDIwLjMwNzFWMC40MzAxNzZINTUuNDAxNVYxNC43MTQxSDY3LjAwMDFWMjQuNjkzN1oiIGZpbGw9IiNCMkYwNDIiLz4KPHBhdGggZD0iTTguODg2NDcgMzguNDRDMTIuNDA2MiA0MC45MTMyIDE2LjYwMzMgNDIuMjQwMyAyMC45MDUgNDIuMjQwM1YzMy4wMTY3QzE4LjUwMTMgMzMuMDE2NyAxNi4xNTYgMzIuMjc1MiAxNC4xODkyIDMwLjg5MzJDMTIuMjIyNCAyOS41MTEyIDEwLjcyOTggMjcuNTU2MiA5LjkxNTA1IDI1LjI5NDdDOS4xMDAyOSAyMy4wMzMyIDkuMDAzMDIgMjAuNTc1NCA5LjYzNjUyIDE4LjI1NjZDMTAuMjcgMTUuOTM3OCAxMS42MDM0IDEzLjg3MDkgMTMuNDU0OSAxMi4zMzc5QzE1LjMwNjMgMTAuODA0OCAxNy41ODU3IDkuODgwMjMgMTkuOTgxOSA5LjY5MDI3QzIyLjM3ODIgOS41MDAzMSAyNC43NzQ3IDEwLjA1NDIgMjYuODQ0NiAxMS4yNzY0QzI4LjY2NzYgMTIuMzUyOSAzMC4xNTkgMTMuOTAxNiAzMS4xNjU4IDE1Ljc1MTlIMjEuMDM0OVYyNS4yMzA2TDI3LjUyNzEgMjUuMjMzOEwzMC4zODM3IDI1LjIzMDZMMzIuMzgxNiAyNS4yMzM4SDQxLjQ0MzNDNDIuMjQ1NiAyMS4wMDc1IDQxLjcyNDUgMTYuNjM2NiAzOS45NTExIDEyLjcxNzRDMzguMTc3OCA4Ljc5ODEzIDM1LjIzODUgNS41MjE0IDMxLjUzNDMgMy4zMzQxNEMyNy44MzAxIDEuMTQ2ODkgMjMuNTQxMyAwLjE1NTYyMiAxOS4yNTMgMC40OTU1NjhDMTQuOTY0NyAwLjgzNTUxNSAxMC44ODU3IDIuNDkwMTIgNy41NzIzNiA1LjIzMzY3QzQuMjU5MDMgNy45NzcyMyAxLjg3Mjc2IDExLjY3NjEgMC43MzkwNTQgMTUuODI1OEMtMC4zOTQ2NTMgMTkuOTc1NSAtMC4yMjA1OSAyNC4zNzM5IDEuMjM3NSAyOC40MjFDMi42OTU1OSAzMi40NjgxIDUuMzY2NzEgMzUuOTY2OSA4Ljg4NjQ3IDM4LjQ0WiIgZmlsbD0iI0IyRjA0MiIvPgo8L3N2Zz4K",
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
