import { z } from "zod";

// Helpers
import { formatNumberWithCommas } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// TODO: Refactor some of the validators. Ex: name and zipCode or address and country have same rules
// Field Validators
const fieldValidators = {
    name: z
        .string()
        .min(2, { message: "Deve contenere almeno 2 caratteri" })
        .max(50, { message: "Deve contenere al massimo 50 caratteri" }),
    address: z
        .string(),
    zipCode: z
        .string(),
    city: z
        .string(),
    country: z
        .string(),
    email: z
        .preprocess(val => val === "" ? undefined : val, z.string().email().optional()),
    phone: z
        .string(),

    // Dates
    date: z
        .preprocess((arg) => (arg ? new Date(arg) : undefined), z.date().optional())
        .transform((date) =>
          date ? date.toLocaleDateString("it-IT", DATE_OPTIONS) : undefined
        ),
    // Items
    quantity: z.coerce
        .number()
        .min(1, { message: "Deve essere un numero maggiore di 0" }),
    unitPrice: z.coerce
        .number()
        .min(1, { message: "Deve essere un numero maggiore di 0" }),

    // Strings
    string: z.string().optional(),
    stringRequired: z.string(),
    stringToNumber: z.coerce.number(),
    // Charges
    stringToNumberWithMax: z.coerce.number().max(1000000),
    nonNegativeNumber: z.coerce.number().nonnegative({
        message: "Deve essere un numero positivo",
    }),
    // ! This is unused
    numWithCommas: z.coerce
        .number()
        .nonnegative({
            message: "Deve essere un numero positivo",
        })
        .transform((value) => {
            return formatNumberWithCommas(value);
        }),
};

const CustomInputSchema = z.object({
    key: z.string(),
    value: z.string(),
});

const InvoiceSenderSchema = z.object({
    name: fieldValidators.name,
    address: fieldValidators.address,
    zipCode: fieldValidators.zipCode,
    city: fieldValidators.city,
    country: fieldValidators.country,
    email: fieldValidators.email,
    phone: fieldValidators.phone,
    customInputs: z.array(CustomInputSchema).optional(),
});

const InvoiceReceiverSchema = z.object({
    name: fieldValidators.name,
    address: fieldValidators.address,
    zipCode: fieldValidators.zipCode,
    city: fieldValidators.city,
    country: fieldValidators.country,
    email: fieldValidators.email,
    phone: fieldValidators.phone,
    customInputs: z.array(CustomInputSchema).optional(),
});

const ItemSchema = z.object({
    name: fieldValidators.string,
    description: fieldValidators.string,
    quantity: fieldValidators.quantity,
    unitPrice: fieldValidators.unitPrice,
    total: fieldValidators.stringToNumber,
});

const PaymentInformationSchema = z.object({
    bankName: fieldValidators.string,
    accountName: fieldValidators.string,
    accountNumber: fieldValidators.string,
});

const DiscountDetailsSchema = z.object({
    amount: fieldValidators.stringToNumberWithMax,
    amountType: fieldValidators.string,
});

const TaxDetailsSchema = z.object({
    amount: fieldValidators.stringToNumberWithMax,
    taxID: fieldValidators.string,
    amountType: fieldValidators.string,
});

const ShippingDetailsSchema = z.object({
    cost: fieldValidators.stringToNumberWithMax,
    costType: fieldValidators.string,
});

const SignatureSchema = z.object({
    data: fieldValidators.string,
    fontFamily: fieldValidators.string.optional(),
});

const InvoiceDetailsSchema = z.object({
    invoiceLogo: fieldValidators.string,
    invoiceNumber: fieldValidators.string,
    invoiceDate: fieldValidators.date,
    dueDate: fieldValidators.date,
    purchaseOrderNumber: fieldValidators.string,
    currency: fieldValidators.string,
    language: fieldValidators.string,
    items: z.array(ItemSchema),
    paymentInformation: PaymentInformationSchema.optional(),
    taxDetails: TaxDetailsSchema.optional(),
    discountDetails: DiscountDetailsSchema.optional(),
    shippingDetails: ShippingDetailsSchema.optional(),
    subTotal: fieldValidators.nonNegativeNumber,
    totalAmount: fieldValidators.nonNegativeNumber,
    totalAmountInWords: fieldValidators.string,
    additionalNotes: fieldValidators.string,
    paymentTerms: fieldValidators.string,
    signature: SignatureSchema.optional(),
    updatedAt: fieldValidators.string,
    pdfTemplate: z.number(),
});

const InvoiceSchema = z.object({
    sender: InvoiceSenderSchema,
    receiver: InvoiceReceiverSchema,
    details: InvoiceDetailsSchema,
});

export { InvoiceSchema, ItemSchema };
