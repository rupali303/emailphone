import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "./Accordion.css"

const Accordion2 = () => {
    const [sections, setSections] = useState([]);
    const [header, setHeader] = useState('');
    const [details, setDetails] = useState('');

    const addSection = () => {
        const newSection = {
            header,
            details
        };

        setSections([...sections, newSection]);
        setHeader('');
        setDetails('');
    };

    return (
        <div className="Acc">
            <div className="add">
                <h2>Add Section</h2>
                <div className="form-group">
                    <label style={{fontWeight:"bold"}} htmlFor="header">Section Header</label><br />
                    <InputText
                        id="header"
                        value={header}
                        onChange={(e) => setHeader(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label style={{fontWeight:"bold"}} htmlFor="details">Section Details</label><br />
                    <InputText
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>
                <Button label="Add" onClick={addSection} className="custom-button" />

            </div>
            <div className="accord">
                <Accordion multiple activeIndex={[0]}>
                    {sections.map((section, index) => (
                        <AccordionTab key={index} header={section.header}>
                            <p>{section.details}</p>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default Accordion2;