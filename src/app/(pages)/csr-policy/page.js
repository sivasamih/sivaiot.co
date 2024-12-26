import { List, ListItemText, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Paragraph4 from "@/components/customcompo/Typo/paragraph4";
import PageHeading from "@/components/customcompo/Typo/pageHeading";
import ListOrderNumber from "@/components/customcompo/Typo/listordernumber";

const CSRPolicy = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Container>
          <PageHeading title={"CSR Policy"} />

          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              1. Purpose
            </Typography>
            <Paragraph4>
              Siva IoT CSR policy is aimed at providing guidelines for
              effectively structuring CSR initiatives undertaken by the company,
              adhering to the Companies Act 2013 on mandatory and voluntary
              basis.
            </Paragraph4>
          </Box>
          {/* ****** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              2. Scope
            </Typography>
            <Paragraph4>This policy shall apply to Siva IoT.</Paragraph4>
          </Box>
          {/* ****** */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              3. Mission Statement of the CSR Policy
            </Typography>
            <Paragraph4>
              Siva strives to contribute to solve social issues through
              sustainable CSR initiatives on its own and/or through various
              implementing agencies, as the case may be. By recognizing,
              identifying and prioritizing social issues, Siva aims to implement
              well-planned CSR initiatives through collaboration with employees,
              consultation and communication with various stakeholders and
              various implementing agencies, if required, and more specifically
              in line with Schedule VII read with Section 135 of The Companies
              Act, 2013 (including various amendments therein, existing and
              forthcoming, as the case may be).
            </Paragraph4>
          </Box>
          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              4. Framework
            </Typography>
            <Paragraph4>
              Siva CSR Policy outlines the Framework for ensuring that CSR
              spends are within the areas or subjects specified in Schedule VII
              and boundaries laid down by the Mission Statement of the Policy
              and the Law by laying down decision criteria’s required to be met
              by every CSR initiative and is within the CSR expenditure limits,
              if any, laid down by this Policy.
            </Paragraph4>
          </Box>
          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              5. Decision Criteria's for approving CSR Initiatives
            </Typography>
            <Paragraph4>
              Siva will emphasize, focus, select and plan CSR initiatives on its
              own and/or through some implementing agencies, in accordance with
              the Companies Act, 2013 (activities outlined in Schedule VII – as
              on date of formulation of present policy) by referring to the
              following selection criteria :
            </Paragraph4>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                The CSR initiatives must adhere to the Companies Act, 2013
                covering activities specified under schedule VII thereof.
              </ListItemText>
              <ListItemText>
                The CSR initiatives must emphasize Mission, Values and Vision of
                Company’s Identity. The CSR Initiatives should be sustainable
                and capable of evaluation at different phases of execution.
              </ListItemText>
              <ListItemText>
                Mechanism for measuring the impact of CSR initiative must be
                well defined.
              </ListItemText>
              <ListItemText>
                CSR initiatives should also take into consideration, social
                values which can be shared and jointly implemented through
                collaboration and extension with various implementing agencies
                in India.
              </ListItemText>
              <ListItemText>
                Relevance to Company’s theme of Social Innovation business
                should also be considered.
              </ListItemText>
            </List>
          </Box>
          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              6. Overall CSR Expenditure Limit & Approval Process
            </Typography>

            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                The total amount of CSR spent on all initiatives during any
                financial year should be at least 2% of the average net profits
                (present threshold limit as per applicable provisions) i.e. net
                profits means profit as determined pursuant to provisions of
                Section 198 of The Companies Act, 2013 (as defined in the
                Companies Act, 2013) and shall be sacrosanct with
                directions/guidelines of MCA in this regard.
              </ListItemText>
              <ListItemText>
                The Board of Directors of Siva is empowered to approve any CSR
                initiatives under this policy, as long as they adhere to the
                criteria’s and the expenditure limits as listed out in this
                policy.
              </ListItemText>
              <ListItemText>
                The Board of Directors should be updated and informed about such
                CSR initiatives at frequent intervals.
              </ListItemText>
              <ListItemText>
                Company may engage international organizations for designing,
                monitoring and evaluation of the CSR projects or programs as per
                its CSR policy as well as for capacity building of their own
                personnel for CSR.
              </ListItemText>
              <ListItemText>
                Company may also collaborate with other companies for
                undertaking projects or programs or CSR activities in such a
                manner that the CSR committees of respective companies are in a
                position to report separately on such projects or programs in
                accordance with these rules.
              </ListItemText>
              <ListItemText>
                The Board shall satisfy itself that the funds so disbursed have
                been utilized for the purposes and in the manner as approved by
                it and the Chief Financial Officer or the person responsible for
                financial management shall certify to the effect.
              </ListItemText>
              <ListItemText>
                In case of ongoing project, the Board shall monitor the
                implementation of the project with reference to the approved
                timelines and year-wise allocation and shall be competent to
                make modifications, if any, for smooth implementation of the
                project within the overall permissible time period.
              </ListItemText>
            </List>
            <Paragraph4 sx={{ mt: 1 }}>
              The CSR expenditure shall include all expenditure including
              contribution to corpus or on projects or programs relating to CSR
              activities approved by the Board of Directors but does not include
              any expenditure on an item not in conformity or not in line with
              activities stated under Schedule VII of the Act.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              The company shall give preference to the local area and areas
              around it where it operates, for spending the amount earmarked for
              Corporate Social Responsibility activities.
            </Paragraph4>
            <Paragraph4>
              If the company fails to spend such amount, the Board shall, in its
              report made under clause (o) of sub-section (3) of section 134,
              specify the reasons for not spending the amount and, unless the
              unspent amount relates to any ongoing project referred, transfer
              such unspent amount to a Fund specified in Schedule VII, within a
              period of six months of the expiry of the financial year.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              If the company spends an amount in excess of the obligation,
              company may set off such excess amount against the requirement to
              spend for such number of succeeding financial years and in such
              manner, as may be prescribed and deemed appropriate by Board.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              The board shall also ensure that the administrative overheads does
              not exceed five percent of total CSR expenditure of the company
              for the financial year.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              Board shall ensure that any surplus arising out of the CSR
              activities shall not form part of the business profit of a company
              and shall be ploughed back into the same project or shall be
              transferred to the Unspent CSR Account and spent in pursuance of
              CSR policy and annual action plan of the company or transfer such
              surplus amount to a Fund specified in Schedule VII, within a
              period of six months of the expiry of the financial year.
            </Paragraph4>
            <Paragraph4 sx={{ mt: 1 }}>
              Board to ensure compliance with provisions of Rule 7 in specific
              and other rules of The Companies (Corporate Social Responsibility)
              Rules, 2014 including amendments therein all the time.
            </Paragraph4>
          </Box>
          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              7. CSR Activities under Schedule VII of Companies Act, 2013
            </Typography>

            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                Eradicating hunger, poverty and malnutrition, promoting
                preventive health care health care and sanitation, and making
                available safe drinking water;
              </ListItemText>
              <ListItemText>
                Promoting education, including special education and employment
                enhancing vocation skills especially among children, women,
                elderly, and the differently abled and livelihood enhancement
                projects;
              </ListItemText>
              <ListItemText>
                Promoting gender equality, empowering women, setting up homes
                and hostels for women and orphans; setting up old age homes, day
                care centers and such other facilities for senior citizens and
                measures for reducing inequalities faced by socially and
                economically backward groups;
              </ListItemText>
              <ListItemText>
                Ensuring environmental sustainability, ecological balance,
                protection of flora and fauna, animal welfare, agroforestry,
                conservation of natural resources and maintaining quality of
                soil, air and water;
              </ListItemText>
              <ListItemText>
                Protection of national heritage, art and culture including
                restoration of buildings and sites of historical importance and
                works of art; setting up public libraries; promotion and
                development of traditional arts and handicrafts;
              </ListItemText>
              <ListItemText>
                Measures for the benefit of armed forces veterans, war widows
                and their dependents;
              </ListItemText>
              <ListItemText>
                Training to promote rural sports, nationally recognized sports,
                Paralympic sports and Olympic sports;
              </ListItemText>
              <ListItemText>
                Contribution to the Prime Minister's National Relief Fund or any
                other fund set up by the Central Government for socio-economic
                development and relief and welfare of the Scheduled Castes, the
                Scheduled Tribes, and other backward classes, minorities and
                women;
              </ListItemText>
              <ListItemText>
                Contributions or funds provided to technology incubators located
                within academic institutions which are approved by the Central
                Government;
              </ListItemText>
              <ListItemText>Rural Development Projects; and</ListItemText>
              <ListItemText>Slum area development</ListItemText>
            </List>
            <Paragraph4 sx={{ mt: 1 }}>
              The aforesaid is based on Schedule VII of The Companies Act, 2013
              and further, the Company will review the sectors/activities from
              time to time and make additions/ deletions/ clarifications to the
              above sectors/activities.
            </Paragraph4>
          </Box>

          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              8. Expenditure on CSR capabilities
            </Typography>
            <Paragraph4>
              The Company may build CSR capabilities of their own personnel as
              well as of their Implementing Agencies and such expenditure shall
              not exceed 5% of the total CSR spend of the Company as stated in
              the Rules from time to time. Determination of whether a particular
              expenses fall within this 5% cap can be decided in consultation of
              the Chief Financial Officer of the Company or the person
              responsible for financial management based on the clarification
              available from time to time in this regard.
            </Paragraph4>
          </Box>
          {/*  **********  */}
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontSize: { xs: "calc(1rem + 1vw )", md: "calc(0.5rem + 1vw)" },
                mb: 0,
              }}
            >
              9. Implementation
            </Typography>
            <Paragraph4>
              <ListOrderNumber>In view of Section 135 (9):</ListOrderNumber>{" "}
              <br />
              Where the amount to be spent by a company under Section 135 (5)
              does not exceed fifty lakh rupees, the requirement for
              constitution of the Corporate Social Responsibility Committee
              shall not be applicable and the functions of such Committee shall,
              in such cases, be discharged by the Board of Directors of such
              company, hence no committee is being constituted as of now and all
              the functions shall be discharged by the Board only, a gist of
              functions are as hereunder:
            </Paragraph4>
            <List
              sx={{
                listStyleType: "disclosure-closed",
                pl: { xs: 2, md: 4 },
                "& .MuiTypography-root": {
                  fontSize: {
                    xs: "calc(0.8rem + 1vw )",
                    md: "calc(0.2rem + 1vw)",
                    color: "var(--lightGray)",
                    lineHeight: 1.2,
                  },
                  display: "list-item",
                },
                "& .MuiListItemText-root::marker": {
                  fontSize: {
                    xs: "calc(0.5rem + 1vw)",
                    md: "calc(0.1rem + 1vw)",
                    color: "black",
                  },
                },
              }}
            >
              <ListItemText>
                Formulate CSR Policy and seek approval of Board
              </ListItemText>
              <ListItemText>
                Recommend CSR activities as stated under Schedule VII of the Act
              </ListItemText>
              <ListItemText>
                Approve to undertake CSR activities, if necessary, in
                collaboration with companies/other Companies/firms/NGOs (termed
                implementing agencies or even otherwise) etc., and to separately
                report the same in line with the CSR Rules
              </ListItemText>
              <ListItemText>Recommend the CSR Budget</ListItemText>
              <ListItemText>
                Spend the allocated CSR amount on the CSR activities
              </ListItemText>
              <ListItemText>
                Create transparent monitoring mechanism for implementation of
                CSR initiatives in India
              </ListItemText>
              <ListItemText>Monitor CSR Policy from time to time</ListItemText>
            </List>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default CSRPolicy;
