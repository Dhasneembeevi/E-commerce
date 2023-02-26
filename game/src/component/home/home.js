//import { gamesDatafromApi } from "../../utils/api";
import React, { useContext, useEffect } from "react";
import "./home.css"
import { cartContext } from "../cartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const STRAPI_ACCESS_KEY = "ff4fa9312f0046af39333b46d3852b3775d2d3a828e111cc014c96538805a594858dba344701a9c7f6134560515d2c47ea8e14c43946d5fcebdcbd547708cbd97d28441639c8270d5f79715fde3cbf220fc1c88d25ce91e7709b01f870769b6b63f3ab1276e0748a289d7429d85119c7fd29c247cabdd3e86c7c629819e81b53"
const STRAPI_URL = "http://localhost:1337";

const Home = () => {
    const games = useContext(cartContext);
    const navigate = useNavigate()
    // console.log(games)
    const gamesDatafromApi = async () => {
        try {
            const gameData = await axios.get(`http://localhost:1337/api/games`, {

            })
            console.log(gameData)

            // console.log(gameData.data.data[0].attributes.Title);
            // console.log(gameData.data.data[0].attributes.Price);
            await games.setGameCart([...games.gameCart, gameData.data.data])

            return gameData;
        } catch (err) {
            console.log(err);
            return err
        }
    }

    useEffect(() => {
        gamesDatafromApi()
    }, []);
    const [image, setImage] = useState('')
    useEffect(() => {

        axios.get(`http://localhost:1337/api/upload/files`)
            .then((res) => {
                setImage(res)
                console.log(image)

            })
            .catch((err) => {
                console.log(err)
            })
        // console.log(gameData.data.data[0].attributes.Title);
        //   console.log(gameData.data.data[0].attributes.Price);
        games.setGameCart([...games.gameCart, image.data])



    }, [])


    const handleBuy = (game) => {
        games.setCartItem([...games.cartItem, game]);
        navigate("/cart")
    }

    return (
        <div>

            <section className="home-container">

                <div className="game-list">
                    {
                        image.map((ele) => {
                            return (
                                <div> <img src={ele.formats.url} /></div>
                            )

                        })
                    }
                    {games?.gameCart[0]?.map((game) => {
                        return (
                            <div key={game.id} className="game-item">

                                <h2>{game.attributes.Title} </h2>
                                <p>Price: ₹{game.attributes.Price}</p>
                                <div className="btn">
                                    <button onClick={() => { handleBuy(game) }}>Buy Now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Home;
// {
//     image.map((ele)=>{
//         <img src={ele.formats.url}/>
//     })
// }
