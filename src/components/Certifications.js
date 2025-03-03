import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import '../styles/App.css';
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
            certificateUrl: promgmtCert
        },
        {
            id: 2,
            title: "Product Management 2",
            issuer: "Great Learning",
            date: "2023",
            certificateUrl: prmgmCert
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
        <div className="grid-container">
            {certifications.map((cert) => (
                <div
                    key={cert.id}
                    className="card-container"
                    onMouseEnter={() => setFlippedCard(cert.id)}
                    onMouseLeave={() => setFlippedCard(null)}
                >
                    <div className={`card ${flippedCard === cert.id ? 'flip' : ''}`}>
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
                                    className="object-cover"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CertificationSec;