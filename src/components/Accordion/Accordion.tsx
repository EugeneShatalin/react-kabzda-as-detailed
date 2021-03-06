import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle
                    title={props.titleValue}
                    setAccordionCollapsed={props.setAccordionCollapsed}
                    collapsed={props.collapsed}
                />
                {!props.collapsed && <AccordionBody />}
            </div>
        );
    }


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}