"use client";
import { useState } from "react";
import { FAQ1, FAQ2, FAQ3, FAQ4 } from "./FAQsContent";
import FAQAccordian from "@/components/customcompo/accordian/faqAccordian";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const FAQs = [
    {
        id: 1,
        Question: "How UHF RFID labels work on metal surfaces ?",
        Answer: <FAQ1 />,
    },
    {
        id: 2,
        Question: "Difference between on-metal and regular RFID labels",
        Answer: <FAQ2 />,
    },
    {
        id: 3,
        Question: "How compatible are On-Metal UHF labels with different RFID readers?",
        Answer: <FAQ3 />,
    },
    {
        id: 4,
        Question: "What are RFID Hard Tags?",
        Answer: <FAQ4 />,
    },
];

const FAQsContainer = () => {

    return (
        <Box sx={{ my: 4 }}>
            {FAQs.map((item, index) => {
                return (
                    <Box
                        component={motion.div}
                        key={index}
                        initial={{ opacity: 0, x: 110 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: "true" }}>
                        <FAQAccordian
                            Title={item.Question}
                            Content={item.Answer}

                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default FAQsContainer;
