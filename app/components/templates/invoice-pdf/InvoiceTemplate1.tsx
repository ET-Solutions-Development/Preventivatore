import React from "react";

// Components
import { InvoiceLayout } from "@/app/components";

// Helpers
import { formatNumberWithCommas, isDataUrl } from "@/lib/helpers";

// Variables
import { DATE_OPTIONS } from "@/lib/variables";

// Types
import { InvoiceType } from "@/types";

const InvoiceTemplate = (data: InvoiceType) => {
    const { sender, receiver, details } = data;

    return (
        <InvoiceLayout data={data}>
            <div className="flex justify-between">
                <div>
                    {details.invoiceLogo && (
                        <img
                            src={details.invoiceLogo}
                            width={50}
                            height={50}
                            alt={`Logo of ${sender.name}`}
                        />
                    )}
                    <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600">
                        {sender.name}
                    </h1>
                </div>
                <div className="text-right">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Preventivo #
                    </h2>
                    <span className="mt-1 block text-gray-500">
                        {details.invoiceNumber}
                    </span>
                    <address className="mt-4 not-italic text-gray-800">
                        {sender.address}
                        <br />
                        {sender.zipCode}, {sender.city}
                        <br />
                        {sender.country}
                        <br />
                    </address>
                </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        Destinatario:
                    </h3>
                    <h3 className="text-md font-semibold text-gray-800">
                        {receiver.name}
                    </h3>
                    
                    <address className="mt-2 not-italic text-gray-500">
                        {receiver.address ? receiver.address + ", ": null} 
                        {receiver.zipCode ? receiver.zipCode + ", " : null}
                        <br />
                        {receiver.city ? receiver.city : null}  
                        <br />
                    </address>
                </div>
                <div className="sm:text-right space-y-2">
                    <div className="flex flex-col  gp-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="flex gap-1 flex-row justify-end">
                            <dt className=" font-semibold text-gray-800">
                                Data:
                            </dt>
                            <dd className=" text-gray-500">
                                {
                                details.invoiceDate ?
                                new Date(details.invoiceDate).toLocaleDateString("it-IT", DATE_OPTIONS) : null
                                }
                            </dd>
                        </dl>
                        {details.dueDate && (
                        <dl className="flex gap-1 flex-row justify-end">
                            <dt className=" font-semibold text-gray-800">
                                Data Scadenza:
                            </dt>
                            <dd className=" text-gray-500">
                                {new Date(details.dueDate).toLocaleDateString(
                                    "it-IT",
                                    DATE_OPTIONS
                                )}
                            </dd>
                        </dl>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="border border-gray-200 p-4 rounded-lg space-y-1">
                    <div className="hidden sm:grid sm:grid-cols-5">
                        <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                            Descrizione
                        </div>
                        <div className="text-left text-xs font-medium text-gray-500 uppercase">
                            Qta.
                        </div>
                        <div className="text-left text-xs font-medium text-gray-500 uppercase">
                            Prezzo Unitario
                        </div>
                        <div className="text-right text-xs font-medium text-gray-500 uppercase">
                            Totale
                        </div>
                    </div>
                    <div className="hidden sm:block border-b border-gray-200"></div>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-1">
                        {details.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="col-span-full sm:col-span-2 border-b border-gray-300">
                                    <p className="font-medium text-gray-800">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="border-b border-gray-300">
                                    <p className="text-gray-800">
                                        {item.quantity}
                                    </p>
                                </div>
                                <div className="border-b border-gray-300">
                                    <p className="text-gray-800">
                                        {item.unitPrice} {details.currency}
                                    </p>
                                </div>
                                <div className="border-b border-gray-300">
                                    <p className="sm:text-right text-gray-800">
                                        {item.total} {details.currency}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="sm:hidden border-b border-gray-200"></div>
                </div>
            </div>

            <div className="mt-2 flex sm:justify-end">
                <div className="sm:text-right space-y-2">
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800">
                                Subtotale:
                            </dt>
                            <dd className="col-span-2 text-gray-500">
                                {formatNumberWithCommas(
                                    Number(details.subTotal)
                                )}{" "}
                                {details.currency}
                            </dd>
                        </dl>
                        {details.discountDetails?.amount != undefined &&
                            details.discountDetails?.amount > 0 && (
                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800">
                                        Discount:
                                    </dt>
                                    <dd className="col-span-2 text-gray-500">
                                        {details.discountDetails.amountType ===
                                        "amount"
                                            ? `- ${details.discountDetails.amount} ${details.currency}`
                                            : `- ${details.discountDetails.amount}%`}
                                    </dd>
                                </dl>
                            )}
                        {details.taxDetails?.amount != undefined &&
                            details.taxDetails?.amount > 0 && (
                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800">
                                        IVA:
                                    </dt>
                                    <dd className="col-span-2 text-gray-500">
                                        {details.taxDetails.amountType ===
                                        "amount"
                                            ? `+ ${details.taxDetails.amount} ${details.currency}`
                                            : `+ ${details.taxDetails.amount}%`}
                                    </dd>
                                </dl>
                            )}
                        {details.shippingDetails?.cost != undefined &&
                            details.shippingDetails?.cost > 0 && (
                                <dl className="grid sm:grid-cols-5 gap-x-3">
                                    <dt className="col-span-3 font-semibold text-gray-800">
                                        Spedizione:
                                    </dt>
                                    <dd className="col-span-2 text-gray-500">
                                        {details.shippingDetails.costType ===
                                        "amount"
                                            ? `+ ${details.shippingDetails.cost} ${details.currency}`
                                            : `+ ${details.shippingDetails.cost}%`}
                                    </dd>
                                </dl>
                            )}
                        <dl className="grid sm:grid-cols-5 gap-x-3">
                            <dt className="col-span-3 font-semibold text-gray-800">
                                Totale:
                            </dt>
                            <dd className="col-span-2 text-gray-500">
                                {formatNumberWithCommas(
                                    Number(details.totalAmount)
                                )}{" "}
                                {details.currency}
                            </dd>
                        </dl>
                        {details.totalAmountInWords && (
                            <dl className="grid sm:grid-cols-5 gap-x-3">
                                <dt className="col-span-3 font-semibold text-gray-800">
                                    Totale in lettere:
                                </dt>
                                <dd className="col-span-2 text-gray-500">
                                    <em>
                                        {details.totalAmountInWords}{" "}
                                        {details.currency}
                                    </em>
                                </dd>
                            </dl>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className="my-4">
                  {details.additionalNotes ? (
                    <div className="my-2">
                        <p className="font-semibold text-blue-600">
                            Note aggiuntive:
                        </p>
                        <p className="font-regular text-gray-800">
                            {details.additionalNotes}
                        </p>
                    </div>
                  ) : null}

                  {details.paymentTerms ? (
                    <div className="my-2">
                        <p className="font-semibold text-blue-600">
                            Termini di pagamento:
                        </p>
                        <p className="font-regular text-gray-800">
                            {details.paymentTerms}
                        </p>
                    </div>
                  ) : null}
                    {/* <div className="my-2">
                        <span className="font-semibold text-md text-gray-800">
                            Informazioni di pagamento:
                            <p className="text-sm">
                                Banca: {details.paymentInformation?.bankName}
                            </p>
                            <p className="text-sm">
                                Intestatario:
                                {details.paymentInformation?.accountName}
                            </p>
                            <p className="text-sm">
                                Numero del conto:
                                {details.paymentInformation?.accountNumber}
                            </p>
                        </span>
                    </div> */}
                </div>
                <p className="text-gray-500 text-sm">
                  Per qualsiasi informazione, contattare:
                </p>
                <div>
                    <p className="block text-sm font-medium text-gray-800">
                        {sender.email}
                    </p>
                    <p className="block text-sm font-medium text-gray-800">
                        {sender.phone}
                    </p>
                </div>
            </div>

            {/* Signature */}
            {details?.signature?.data && isDataUrl(details?.signature?.data) ? (
                <div className="mt-6">
                    <p className="font-semibold text-gray-800">Firma:</p>
                    <img
                        src={details.signature.data}
                        width={120}
                        height={60}
                        alt={`Signature of ${sender.name}`}
                    />
                </div>
            ) : details.signature?.data ? (
                <div className="mt-6">
                    <p className="text-gray-800">Firma:</p>
                    <p
                        style={{
                            fontSize: 30,
                            fontWeight: 400,
                            fontFamily: `${details.signature.fontFamily}, cursive`,
                            color: "black",
                        }}
                    >
                        {details.signature.data}
                    </p>
                </div>
            ) : null}
        </InvoiceLayout>
    );
};

export default InvoiceTemplate;
