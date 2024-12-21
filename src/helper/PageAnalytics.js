/* eslint-disable no-unused-vars */
import ReactGA from 'react-ga';

import React, { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactGA.initialize('G-DH0Q67F6M3');

const firebaseConfig = {
    apiKey: "AIzaSyA7HqVJraosPJCzRctzTXHBesxQbuiDAaM",
    authDomain: "siva-8213a.firebaseapp.com",
    projectId: "siva-8213a",
    storageBucket: "siva-8213a.firebasestorage.app",
    messagingSenderId: "911371407666",
    appId: "1:911371407666:web:8a223957f6584c307cc72b",
    measurementId: "G-DH0Q67F6M3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function PageAnalytics({ navBranchNameTitle, menusection }) {

    const headers = {
        "Content-Type": "application/json",
    };

    useEffect(() => {

        try {
            ReactGA.pageview(window.location.pathname + window.location.search);
        } catch (ex) { }
    }, []);

    return (
        <>

        </>
    );
}
