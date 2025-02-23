import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import '../styles/App.css'
import prmgmCert from '../assets/prmgm-cert.png';
import promgmtCert from '../assets/Promgmt-certificate.png';
import udemyCert from '../assets/udemy-cert.png';

const CertificationSec = () => {
    const certifications = [
        {
            id: 1,
            title: "Product Management",
            issuer: "DevCareer X UK-Nigeria Tech Hub",
            date: "2024",
            certificateUrl: prmgmCert
        },
        {
            id: 2,
            title: "Product Management 2",
            issuer: "Great Learning",
            date: "2023",
            certificateUrl: promgmtCert
        },
        {
            id: 3,
            title: "Azure Developer Associate",
            issuer: "Will be added soon",
            date: "2012",
            certificateUrl: udemyCert
        },
        {
            id: 4,
            title: "Software Testing",
            issuer: "Udemy",
            date: "2022",
            certificateUrl: udemyCert
        }
    ];

    const [flippedCard, setFlippedCard] = useState(null);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center mb-8">Certifications</h1>
            <h5>Showcasing the Pinnacle of Achievement: My Badge of Expertise and Certifications</h5>
            <div className="grid-container items-center">
                {certifications.map((cert) => (
                    <div
                        key={cert.id}
                        className="card-container h-64"
                        onMouseEnter={() => setFlippedCard(cert.id)}
                        onMouseLeave={() => setFlippedCard(null)}
                    >
                        <div
                            className={`card ${flippedCard === cert.id ? 'flip' : ''}`}
                        >
                            <Card className="card-front">
                                <CardHeader>
                                    <CardTitle>{cert.title}</CardTitle>
                                    <CardDescription>{cert.issuer}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                                </CardContent>
                            </Card>

                            <Card className="card-back">
                                <CardContent className="p-0">
                                    <img
                                        src={cert.certificateUrl}
                                        alt={`${cert.title} Certificate`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificationSec;
