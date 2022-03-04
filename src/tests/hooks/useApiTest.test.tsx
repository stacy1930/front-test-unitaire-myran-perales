// __tests__/fetch.test.js

import React from "react";

import { rest } from "msw";

import { setupServer } from "msw/node";

import { render, waitFor, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "../../App";



const server = setupServer(

    rest.get(

        "http://localhost:8000/api/products",

        (req, res, ctx) => {

            return res(

                ctx.json(
                    [
                        {

                            "id": 1,
                            "name": "Rick Sanchez",
                            "price": 45.6,
                            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 1


                        },
                        {
                            "id": 2,
                            "name": "Morty Smith",
                            "price": 35.98,
                            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 2
                        },
                        {
                            "id": 3,
                            "name": "Summer Smith",
                            "price": 67.6,
                            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 3
                        }
                    ]

                )

            );

        }

    )

);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());



test("load product mock", async () => {

    const { container } = render(<App />);

    await waitFor(() => screen.getByText(/Morty/i));
    expect(container.getElementsByTagName("img").length).toBe(5);

});