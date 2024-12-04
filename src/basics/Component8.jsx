import React, { useEffect, useState } from 'react'

import './card.css';
import Card from './Card';
import CardForm from './CardForm';

import * as cardDataApi from './../api/cardDataApi';



function Component8() {

    const [data, setData] = useState([]);
    const [rawData, setRawData] = useState([])


    const filterData = (input) => {
        const newData = rawData.filter(
            (elem) => {
                return elem.name.toLowerCase().indexOf(input) > -1;
            }
        );
        setData(newData);
    }

    const getCardsAxios = () => {
        cardDataApi.getCardData()
        .then((response) => {
            console.log(response);
            setData(response.data);
            setRawData(response.data);
        })
        .catch(
            (error) => {
                console.log(error);
            }
        )
    }


    const getCards = () => {
        fetch("http://localhost:3000/data/cards.json")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (res) => {
                console.log(res);
                setData(res);
                setRawData(res);
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
        .finally(
            () => {
                console.log("finally");
            }
        )
    }


    useEffect(() => {
        // getCards();
        getCardsAxios();
    }, []);


    // const data = ;

    return (
        <div id="card-container-id">

                    {/* <Card input={data[0]} />
                    <Card input={data[1]} />
                    <Card input={data[2]} /> */}

            {/* {
                [
                    <Card input={data[0]} />,
                    <Card input={data[1]} />,
                    <Card input={data[2]} />
                ]
            } */}

            <CardForm filterFunc={filterData} />

            {
                data.length ? 
                data.map((item, index) => {
                    return <Card key={index} input={item} />
                }) : 
                <h1>No Results</h1>
            }
        </div>
    )
}

export default Component8