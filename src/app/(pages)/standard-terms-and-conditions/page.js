import { Container, Typography, Box } from "@mui/material";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import ListOrderNumber from "@/components/customcompo/Typo/listordernumber";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import { Route_Path } from "@/apis/api";

export const metadata = {
  title: "Standard Terms & Conditions of Business - SIVA IoT",
  description:
    "SIVA's standard terms and conditions, outlining the legal guidelines and agreements for using our advanced IoT solutions. Ensure compliance and clarity with our detailed policies",
  keywords:
    "SIVA's standard terms and conditions, outlining the legal guidelines and agreements for using our advanced IoT solutions. Ensure compliance and clarity with our detailed policies",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: Route_Path.STANDER_TERMS_AND_CONDITIONS,
    title: "Standard Terms & Conditions of Business - SIVA IoT",
    description:
      "SIVA's standard terms and conditions, outlining the legal guidelines and agreements for using our advanced IoT solutions. Ensure compliance and clarity with our detailed policies",
    images: [
      {
        url: `https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "sivaiot.co",
      },
    ],
  },
  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    site: "@sivaiot.co",
    creator: "@sivaiot.co",
    title: "Standard Terms & Conditions of Business - SIVA IoT",
    description:
      "SIVA's standard terms and conditions, outlining the legal guidelines and agreements for using our advanced IoT solutions. Ensure compliance and clarity with our detailed policies",
    images: [`https://sivafiles.sivagroup.co/1/images/others/Logo-1200x630.jpg`],
  },
  // Canonical URL
  alternates: {
    canonical: Route_Path.STANDER_TERMS_AND_CONDITIONS,
  },
  // Additional Metadata
  charset: "UTF-8",
};

const TermsAndConditions = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Container>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {" "}
            <PageHeading title={"Standard Terms & Conditions of Business"} />
          </Box>
          <Box>
            <Typography
              sx={{
                display: { md: "none" },
                fontSize: { xs: "calc(1.2rem + 1vw )" },
                bgcolor: "var(--green)",
                px: 1,
                color: "white",
              }}
            >
              Standard Terms & Conditions of Business
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 1 – SCOPE AND EFFECT
            </Typography>
            <Paragraph4>
              <ListOrderNumber>1.1</ListOrderNumber>
              Unless otherwise stated in a written agreement, all orders placed
              by the Buyer with SIVA Inotec Ltd. hereinafter referred to as «
              SIVA » for the purchase of labels, tags & tickets (hereinafter
              collectively referred to as 'Tags' or collectively referred to as
              'Products'), manufactured and/or distributed, sold or marketed by
              SIVA, shall be governed by these Standard Terms & Conditions of
              Business. These Standard Terms & Conditions of Business are
              supplemented or amended by specific product terms as set forth in
              the respective product data sheets (hereinafter referred to as the
              'Product Data Sheets'), including without limitation, specific
              warranty terms. Buyer recognizes that it has received a copy of
              all SIVA’ Product Data Sheets which are relevant to Buyer’s orders
              hereunder and Buyer agrees with their terms.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>1.2</ListOrderNumber>
              Notwithstanding anything to the contrary or any additional or
              supplementary terms stated in the Buyer's Conditions of Purchase,
              the placement of any order by the Buyer with SIVA is considered as
              an acceptance of these Standard Terms & Conditions of Business.
            </Paragraph4>
            <Paragraph4></Paragraph4>
          </Box>
          {/* ******* */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 2 - QUOTATIONS
            </Typography>
            <Paragraph4>
              <ListOrderNumber>2.1</ListOrderNumber>
              All quotations made by SIVA to the Buyer shall be valid for a
              period of 30 days from the date they are made unless otherwise
              specified in the quotation. The delivery time stated in a
              quotation is only an indication and starts on the later of the
              following two dates: the date on which all the information,
              documents and other elements required to process the orders are
              received by SIVA, or the date of acknowledgement of receipt of the
              order by SIVA.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber> 2.2 </ListOrderNumber>
              Prices are based on the supply of Products produced according to
              the provisions of the corresponding quotation. Should the Buyer
              desire to make any substantial change to said provisions, such as
              but not limited to changes to the specifications or the delivery
              schedule, then SIVA reserves the right to re-quote. Without
              prejudice to Section 2.1 above, the written acceptance by the
              Buyer of SIVA’s latest quotation is required before SIVA can
              proceed.
            </Paragraph4>
          </Box>
          {/* ******** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 3 - ORDERS
            </Typography>
            <Paragraph4>
              <ListOrderNumber>3.1 Orders acceptance</ListOrderNumber>
              <br />
              SIVA will accept an order by acknowledging receipt of the same to
              the Buyer. Said acknowledgement of receipt will specify the order
              reference and the scheduled date of dispatch. The order form, the
              appropriate acknowledgement of receipt, and the Standard Terms &
              Conditions of Business shall form the Contract between SIVA and
              the Buyer. No order shall be deemed to have been accepted until an
              acknowledgement of receipt has been issued by SIVA.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>3.2 Cancellation of order</ListOrderNumber>
              <br />
              Prices are based on the supply of Products produced according to
              the provisions of the corresponding quotation. Should the Buyer
              desire to make any substantial change to said provisions, such as
              but not limited to changes to the specifications or the delivery
              schedule, then SIVA reserves the right to re-quote. Without
              prejudice to Section 2.1 above, the written acceptance by the
              Buyer of SIVA’s latest quotation is required before SIVA can
              proceed.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>3.2.1 By the Buyer</ListOrderNumber>
              <br />
              All orders placed by the Buyer shall be deemed to be firm and
              binding. If the Buyer cancels an order before the scheduled date
              of delivery, it shall pay to SIVA as damages, 100% of the value of
              the order, if the order is cancelled less than 4 weeks before the
              scheduled delivery date. The damages shall amount at least to 50%
              of the value of the order, if the order is cancelled more than 4
              weeks before the scheduled delivery date.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>3.2.2 By SIVA</ListOrderNumber>
              <br />
              SIVA reserves the right to cancel or suspend all or part of an
              order if the Buyer does not comply with any of its obligations, in
              particular where payment or supply of information, documents and
              other elements required to process the order are concerned.
            </Paragraph4>
          </Box>
          {/* ****** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 4 – Payment & Incoterms
            </Typography>
            <Paragraph4>
              All prices are quoted either “Ex Works” or “FOB” or “CFR” or “CIF”
              or “DAP”, pursuant to the Incoterms 2020 issued by the
              International Chamber of Commerce. The exact Incoterms are
              mentioned in SIVA’s order acknowledgement, as quoted & agreed with
              the Buyer. Prices exclude all taxes and all other duties required
              by the relevant authorities. The cost of SIVA’s standard packaging
              is included in the price. Any non-standard packaging requests
              shall be charged separately to the Buyer.
            </Paragraph4>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 5 - TERMS OF PAYMENT
            </Typography>
            <Paragraph4>
              <ListOrderNumber>5.1</ListOrderNumber>
              SIVA’ invoices shall be paid to SIVA in full amount at thirty (30)
              days net as from their date of issuance. Where the offer does not
              contain any terms of payment, the Buyer agrees to pay 100% advance
              or provide % down payment and balance amounts prior to dispatch.
              Depending on the situation, SIVA reserves the right to vary the
              terms of payment. Buyer shall then comply with these new terms of
              payment. Any discount payment shall request SIVA’ prior approval.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber> 5.2</ListOrderNumber>
              SIVA shall be entitled, without prejudice to any other right or
              remedy, to an interest for late payment at 0.05% of the value of
              the invoice, for each day of delay, until outstanding invoice(s)
              is (are) paid in full without waiver by SIVA of its right to
              immediate payment. Such interest shall be calculated from the due
              date for payment thereof to the date of actual payment. Interests
              received by SIVA are net of withholding tax, if any. In addition,
              SIVA shall have the right not to make any further delivery,
              pursuant to the corresponding order or to any other order, until
              full payment with interests is received from the Buyer by SIVA.
            </Paragraph4>
          </Box>
          {/* ***** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 6 -RETENTION OF TITLE
            </Typography>
            <Paragraph4>
              SIVA shall retain title to the Products even after delivery to the
              Buyer, until the order has been fully paid for. Should the Buyer
              fail to pay, SIVA may claim back the Products supplied without
              prejudice to any other right or damages.
            </Paragraph4>
          </Box>
          {/* ********* */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 7 – TRANSFER OF OWNERSHIP AND RISKS
            </Typography>
            <Paragraph4>
              Depending on the Incoterms for each transaction, the rules
              concerning the Transfer of Ownership of Goods & associated risks,
              are applicable, as laid down by Incoterms ICC 2020. The Buyer
              agrees to fulfill all its payment obligations to 'SIVA', should
              the Ownership & Risks (as per ICC 2020) be with the Buyer and the
              buyer suffers a loss due to goods lost or damaged in transit.
            </Paragraph4>
          </Box>
          {/* ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 8 - WARRANTY
            </Typography>
            <Paragraph4>
              <ListOrderNumber>3.2.2 By SIVA</ListOrderNumber>
              SIVA warrants that Tags/Products supplied to Buyer shall comply
              with their functional specifications for a period of one (1) year
              as from the date of delivery thereof to the Buyer.
            </Paragraph4>
            <Paragraph4>
              This warranty shall only apply to Products which have been
              manufactured and used according to SIVA’ standard process.
            </Paragraph4>
            <Paragraph4>
              SIVA’ warranty is strictly limited to (at SIVA’ sole option):
            </Paragraph4>
            <Paragraph4>- Repair or replace the Tags/Products, or</Paragraph4>
            <Paragraph4>
              - Provide a full refund should SIVA fail or be unable to Repair or
              provide Replacement the Tags/Products Defective Products must be
              returned to SIVA in their complete original packaging, provided
              such original packaging is available and following SIVA return
              procedures. If the original packaging is not available, the Buyer
              shall ensure that the Products are returned to SIVA in a packaging
              that adequately protects said Products. No Products shall be
              returned if the acceptance number relating to the return procedure
              is missing. All Products shall be returned, at Buyer’s expense,
              with a report from the Buyer stating the complete details of the
              alleged defect. Once the defect is confirmed by SIVA, SIVA will
              also compensate the Buyer for the cost of returning the products
              to SIVA.
            </Paragraph4>
            <Paragraph4>
              Buyer shall notify SIVA of any defects affecting the Products
              within 30 working days after the same are discovered, provided
              that the 30 working days are still within the one(1) year warranty
              period.
            </Paragraph4>
            <Paragraph4>This warranty does not cover:</Paragraph4>
            <Paragraph4>
              - Engineering samples and early access products.
            </Paragraph4>
            <Paragraph4>
              - Products which have been damaged by the Buyer, or used or affix
              in an abnormal condition, or which have been stored under
              conditions which do not comply with SIVA specifications or normal
              use.
            </Paragraph4>
            <Paragraph4>
              - Products submitted to abnormal conditions (mechanical,
              electrical, thermal), abnormal conditions being defined as any
              conditions exceeding the ones stated in the product
              specifications. (technical data sheet).
            </Paragraph4>
            <Paragraph4>
              - Products which are incorrectly adjusted or defective when this
              results from use in excessive operating conditions (sundry
              temperatures, voltage and supply limits) as defined by SIVA, or
              from an incorrect choice of application by the Buyer.
            </Paragraph4>
            <Paragraph4>
              - Products modified by the Buyer or anyone other than SIVA,
              including, without limitation, configuration and adjustment
              modifications.
            </Paragraph4>
            <Paragraph4>
              - Products which are incorrectly installed or integrated by the
              Buyer or anyone other than SIVA.
            </Paragraph4>
            <Paragraph4>
              - Damages caused by products, devices or systems not supplied by
              SIVA or by events of force majeure, such as but not limited to
              acts of God Damages.
            </Paragraph4>
            <Paragraph4>
              The Products are not intended to be incorporated into, or used in
              connection with lifesaving or life support devices or systems or
              any related products. If Buyer or a third party incorporates the
              Products into, or uses the same in connection with lifesaving or
              life support devices or systems, or any related products, SIVA
              expressly excludes any liability for such use.
            </Paragraph4>
            <Paragraph4>
              The remedies provided in this Section are in lieu and to the
              exclusion of all other remedies, obligations or liabilities on the
              part of SIVA for damages, whether in contract, tort or otherwise,
              and including but not limited to, damages for any defects in the
              Products or for any injury, damage, or loss resulting from such
              defects or from any work done in connection therewith or for
              consequential loss, whether based upon lost goodwill, lost resale
              profits, impairment of other goods or arising from claims by third
              parties or otherwise.
            </Paragraph4>
            <Paragraph4>
              SIVA disclaims any express warranty not provided herein and any
              implied warranty, guaranty or representation as to performance,
              quality and absence of hidden defects, and any remedy for breach
              of contract, which but for this provision, might arise by
              implication, operation of law, custom of trade or course of
              dealing, including implied warranties of merchantability and
              fitness for a particular purpose. These warranty terms are subject
              to any specific warranty provision that may apply to certain SIVA’
              Products as such terms are defined in the respective product data
              sheets.
            </Paragraph4>
          </Box>
          {/* ********* */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 9 - ACCEPTANCE
            </Typography>
            <Paragraph4>
              <ListOrderNumber>9.1</ListOrderNumber>
              Upon delivery of the Products, the Buyer may perform acceptance
              tests, provided such tests have been previously agreed upon
              between the Buyer and SIVA (hereinafter referred to as the
              “Acceptance Tests”).
            </Paragraph4>
            <Paragraph4>
              If one batch of Products does not pass in all or in part the
              Acceptance Tests, the Buyer shall inform SIVA by registered letter
              with acknowledgement of receipt to be sent no later than 30 days
              after the Buyer has received the Products. Minor defects not
              affecting the operational use of the Products shall not give rise
              to rejection of the Products concerned. Once this 30-day period
              has expired, if no claim is received by SIVA, all Products shall
              be deemed to have been definitively accepted.
            </Paragraph4>
            <Paragraph4>
              In case of rejection of the Products pursuant to this Section,
              SIVA will issue a return authorization number. Buyer shall
              indicate said number in the delivery form to return the whole
              refused batch. It is expressly stated that any claim concerning a
              batch of defective Products shall only be accepted by SIVA if each
              of the following four conditions are met:
            </Paragraph4>
            <Paragraph4>
              - for each batch of Products considered as defective, the exact
              reason for their rejection must be given together with the results
              of the relevant tests. Samples of alleged defective Products may
              be required by SIVA for analysis purposes.
            </Paragraph4>
            <Paragraph4>
              - the batch of defective Products must be returned in complete
              original packaging, in good condition, at the Buyer's expense.
            </Paragraph4>
            <Paragraph4>
              - the Products should not have been damaged in any way (in
              particular during storage, inspection, installation).
            </Paragraph4>
            <Paragraph4>
              - the Buyer shall not have made any alteration to modification to
              the Products. Should the rejected Products prove to have failed
              the Acceptance Tests, SIVA shall replace such rejected Products
              free of charge and within a reasonable time.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>9.2</ListOrderNumber> The provisions of Article
              9.1 shall not apply to Products which have been submitted to an
              acceptance test at SIVA premises with the customer and which
              consequently are deemed to comply with the specifications, no
              return shall be accepted for these Products.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>9.3</ListOrderNumber> SIVA reserves the right to
              consider an order settled if the maximum positive or negative
              variation is 2% of the ordered quantity.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>9.4</ListOrderNumber> For custom products this
              variation may be of +/- 10%.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>9.5 </ListOrderNumber>SIVA shall invoice the
              Buyer for the actual quantities supplied
            </Paragraph4>
            <Paragraph4></Paragraph4>
            <Paragraph4></Paragraph4>
            <Paragraph4></Paragraph4>
            <Paragraph4></Paragraph4>
            <Paragraph4></Paragraph4>
          </Box>
          {/* **** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 10 – CUSTOM TAG / MAPPING / APPROVAL FOR CODING
            </Typography>
            <Paragraph4>
              The memory of the Tags supplied by SIVA is programmed according a
              pre-defined "mapping". It describes the way in which the data are
              to be coded in the memory of the Tags. The detail of this mapping
              is described in the Tags Technical Specifications. In case of a
              specific request for customization/coding of the Tags from the
              Buyer which will have to be accepted by SIVA, one or several
              "Ticket proof" documents will be issued by SIVA. Each of the
              “Ticket proofs” once approved by the Buyer (Person’s name &
              signature) shall formally release SIVA from any liabilities for
              the work carried out prior to the approval. If, at the request of
              the Buyer, there is no final proof, SIVA shall be released from
              any liability.
            </Paragraph4>
          </Box>
          {/* ********* */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 11 - CUSTOMIZATION AND MARKING
            </Typography>
            <Paragraph4>
              <ListOrderNumber>11.1 Customization</ListOrderNumber>
              <br />
              The customization of a Tag is negotiated case by case and must be
              accepted by SIVA before any order is placed with SIVA. The quality
              of the work depends to a large extent on the schedule agreed
              between SIVA and the Buyer when the order is placed. For all
              schedule changes which are due to the Buyer (for example because
              of delays in supplying the necessary information, documents,
              materials or other elements to SIVA), which disrupt the work
              schedules and may cause errors and increase the cost price, SIVA
              reserves the right to request an appropriate additional payment.
              Any customization of a Tag will be implemented by SIVA provided
              the Buyer and SIVA have agreed on all the specific terms and
              conditions which will apply to such customization, including but
              not limited to pricing adjustments, delivery schedules, respective
              rights of either Party, intellectual and industrial property
              rights.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>11.2 Marking</ListOrderNumber>
              <br />
              Products may carry a visible number which proves their final
              Quality acceptance and which allow traceability during the
              warranty period. Buyer accepts such marking.
            </Paragraph4>
          </Box>
          {/* ******** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 12 – LIABILITY LIMITATIONS
            </Typography>
            <Paragraph4>
              <ListOrderNumber>12.1 </ListOrderNumber> Except for delayed
              delivery which commands the application of liquidated damages
              pursuant to Section 12.2 below, the aggregate liability of SIVA to
              Buyer, however arising, including but not limited to liability
              arising out of contract, tort, breach of warranty, claims by third
              parties or otherwise, shall not in any event exceed the price
              effectively paid by Buyer for the Products or services which gave
              rise to the claim.{" "}
              <span style={{ textDecoration: "underline" }}>
                SIVA shall not be held liable for indirect, incidental, special,
                consequential or punitive damages.
              </span>{" "}
              Without limitation, the following damages shall be considered as
              indirect or consequential damages and will not give rise to any
              liability hereunder: loss of revenue, loss of opportunity, loss of
              goodwill, loss of clients, loss of profits, business disruption,
              loss or inaccuracy of data, deprivation of enjoyment or other
              economic loss, even if SIVA has been advised of the possibility of
              such damage. This limitation of liability shall not apply to death
              or personal injury resulting from negligence.
            </Paragraph4>
            <Paragraph4>
              <ListOrderNumber>12.2 </ListOrderNumber> Except for delayed If
              SIVA fails to meet the delivery schedule acknowledged by SIVA for
              reasons exclusively due to SIVA, SIVA shall for any delay
              exceeding a grace period of twenty (20) working days, pay to the
              Buyer as liquidated damages, the amount of 0,2 % of the price of
              the delayed batch of Products per full week of delay. Such
              liquidated damages shall not exceed 4 % of the price of the
              delayed batch of Products. Any claim for penalties hereunder shall
              be made by written notice to SIVA within a maximum of sixty (60)
              days from the delay giving rise to such penalties, failing which,
              any right to penalties or other compensation for said delay shall
              irrevocably lapse. Without prejudice to the foregoing, penalties
              can be set-off against any future SIVA’ invoice. Aforementioned
              liquidated damages shall be the Buyer’s exclusive remedy for any
              damages suffered as a result of such delay and shall be in full
              satisfaction of SIVA’ liability therefore, provided however that
              the payment of liquidated damages shall not relieve SIVA from its
              obligation to deliver the Products or from any other obligations.
            </Paragraph4>
          </Box>{" "}
          {/* ******** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 13 – INTELLECTUAL PROPERTY RIGHTS
            </Typography>
            <Paragraph4>
              In addition to the provisions of Article 11 above, any
              Intellectual Property Right belonging to SIVA at the time of
              placing the order, and any Intellectual Property Right resulting
              from any development, adaptation, modification, enhancement,
              improvement of any kind, performed by SIVA subsequently to the
              order, shall be the exclusive property of SIVA.
            </Paragraph4>
            <Paragraph4>
              "Intellectual Property Rights" means any creation, invention,
              patent, petty patent, software, registered design, copyright,
              design right, know-how, trade or service marks (filed or not), or
              any similar right in any part of the world and shall include any
              application for such patent, petty patent, trademark or design or
              similar registrable rights in any part of the world. Intellectual
              Property Rights include any and all industrial property rights or
              right to apply for title thereof.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 14 – INDEMNIFICATION FOR INFRINGEMENT OF THIRD PARTY’S
              RIGHTS
            </Typography>
            <Paragraph4>
              SIVA shall defend, at its own expense, any action brought against
              the Buyer or at its option settle any claim by a third party, to
              the extent that such action or claim alleges that SIVA’ Products,
              as delivered by SIVA to Buyer, infringe a third party's patent or
              intellectual property right, PROVIDED that the Buyer :
            </Paragraph4>
            <Paragraph4>
              - notifies SIVA promptly if any infringement is alleged, and
            </Paragraph4>
            <Paragraph4>
              - makes no admission without SIVA’ written consent, and
            </Paragraph4>
            <Paragraph4>
              - assists SIVA to conduct all negotiations and litigation, if
              requested by SIVA.
            </Paragraph4>
            <Paragraph4>
              In the event that any Product is held by a final court decision to
              constitute an actual infringement of a third party’s patent or
              intellectual property right, SIVA shall at its own costs and at
              its sole option, either obtain the right for the Buyer to continue
              using the Product or to replace or modify the Product so that it
              becomes non-infringing.
            </Paragraph4>
            <Paragraph4>
              Should none of the above solutions be commercially possible to
              implement in SIVA’ judgment, the Parties agree that SIVA will
              reimburse the Buyer of the sums paid by the Buyer to SIVA for the
              Product at the date of the court decision referred to above, in
              full satisfaction of SIVA' liability. SIVA’ defence and
              indemnification obligations hereunder only apply with respect to
              infringement of third party intellectual and/or industrial
              property rights by the structure of the Product, as delivered by
              SIVA to Buyer, or the inherent Product functionalities implemented
              solely by the Product, irrespective of the use of such Product and
              the applications implemented by Buyer. SIVA shall have no
              liability to the Buyer with respect to any claim of infringement
              (a) which arises with respect to the use of the Product by Buyer ;
              or (b) which results from the compliance by SIVA with, or the use
              by the Buyer or, any element, specifications methods imposed or
              requested by the Buyer; or (c) which results from the modification
              of the Product by anyone other than SIVA or the combination of the
              Product or any part of it (including but not limited to the
              software, any circuit, system or device) with any product,
              hardware, software, firmware, system or other element whatsoever
              not supplied by SIVA.
            </Paragraph4>
            <Paragraph4>
              This section sets forth SIVA' entire liability with respect to any
              and all claims of misappropriation and infringement of third
              party’s intellectual and/or industrial property rights.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 15 – CONFIDENTIALITY
            </Typography>
            <Paragraph4>
              <span style={{ textDecoration: "underline" }}>
                The Buyer undertakes to keep confidential
              </span>{" "}
              and not to disclose or transfer to any third party in any way
              whatsoever, part or all of the documents, data or information of
              whatever nature or kind, disclosed, transmitted or made available
              by any means to the Buyer by SIVA, and relating to the Products or
              any other proprietary or confidential information of SIVA.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 16 - FORCE MAJEURE
            </Typography>
            <Paragraph4>
              SIVA shall not be considered as liable for late delivery or
              failure in the performance of its obligations, for reasons beyond
              its reasonable control such as but not limited to fire, flood,
              earthquake, war, strikes and lock outs, inability to obtain raw
              materials, any unpredictable manufacturing problem and any other
              unforeseeable and/or unavoidable event. SIVA shall send to the
              Buyer written notice stating the delay and cause thereof, within
              at least 15 days as from the dates of the occurrence of the force
              majeure event.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 17 – APPLICABLE LAW - JURISDICTION
            </Typography>
            <Paragraph4>
              The supply contract(s) entered into between SIVA and the Buyer
              pursuant to these Standard Terms & Conditions of Business shall be
              governed by and interpreted in accordance with the laws of India,
              to the exclusion of any conflicts of laws provisions. Any dispute
              arising out of or in connection with this supply contract or any
              subsequent supply contract between SIVA and the Buyer, including,
              without limitation, with respect to its formation, validity,
              construction, performance, expiration or termination, shall be
              referred first, by notice in writing, to a senior representative
              of each party who shall meet and endeavour to resolve the dispute
              between them within 30 days of such notice. The joint written
              decision of those senior representatives shall be binding upon the
              Parties. Any dispute arising out of or in connection with the
              validity, construction, performance or termination of this supply
              contract or any subsequent supply contract between SIVA and the
              Buyer, which cannot be settled amicably pursuant to the procedure
              set forth above, will be submitted to the exclusive jurisdiction
              of the Courts of Delhi, India.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 18 - SEVERABILITY
            </Typography>
            <Paragraph4>
              Each provision herein is severable from the entire Standard Terms
              & Conditions of Business, and in the event that any provision is
              declared invalid or unenforceable, the parties shall endeavour to
              replace such provision by a provision which is valid and
              enforceable and reflects to the extent possible the original
              intent of the parties. The invalidity or unenforceability of a
              provision shall not affect the validity or enforceability of the
              other provisions herein contained, which shall remain in full
              force and effect.
            </Paragraph4>
          </Box>
          {/*  ********** */}
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              ARTICLE 19 – OTHER STANDARD TERMS AND CONDITIONS
            </Typography>
            <Paragraph4>
              Purchase orders shall be binding as to the products and services
              ordered and shall be governed by these Standard Terms & Conditions
              of Business. Other terms and pre-printed terms on or attached to
              any Buyer’s purchase order shall be void.
            </Paragraph4>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default TermsAndConditions;
