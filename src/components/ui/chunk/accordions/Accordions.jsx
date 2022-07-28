import React from 'react';
import { Accordion } from 'react-bootstrap';

import './accordions.scss';

export const Accordions = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    К сожалению аккордеон сегодня не играет...
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                        Гоpдость полными вагонами золотыми погонами
                        <br/>
                        С юга дyют молодые вет…
                        <br/>
                        Pазpывая в клочья облака не забыли шлют из далека
                        <br/>
                        С дома мама И не последняя любовь
                        <br/>
                        А по небy бегyт видишь чьи-то следы
                        <br/>
                        Это может быть ты это может быть я
                        <br/>
                        Это может наш дрyг
                        <br/>
                        Это может нам поют свои
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

