import { useState, useEffect } from "react";
import Image from "next/image";
import axiosInstance from '../helpers/axios';
import ButtonHome from '../components/ButtonHome';

const HomeCardPokemon = ({ randomNumber, setNumBtn, numbtn }) => {

    const [pokemon, setPokemon] = useState(null);
    const [loadingPokemon, setLoadingPokemon] = useState(false);
    const [idPokemon, setIdPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon() {
            if (loadingPokemon) {
                return null;
            }
            try {
                setIdPokemon(null);
                setLoadingPokemon(true);
                const { data } = await axiosInstance.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);
                setIdPokemon(data.id);
                setPokemon(data);
                setLoadingPokemon(false);

            } catch (error) {
                console.log(error);
                setLoadingPokemon(false);
            }
        }

        getPokemon();
        // eslint-disable-next-line
    }, [randomNumber]);

    return (
        <div className='w-10/12 m-auto Card p-4 rounded-lg flex items-center justify-between flex-row '>
            <div className='flex items-center justify-center flex-col m-auto'>
                {pokemon && idPokemon ?
                    (<>
                        <figure>
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                alt={pokemon.name}
                                width="150"
                                height="150"
                            />
                        </figure>
                        <h1 className='font-semibold uppercase text-lg'>{pokemon.name} #{pokemon.id}</h1>

                        <InfoPoke pokemon={pokemon} idPokemon={idPokemon} />
                        <div className='flex justify-between items-center flex-row mt-2'>
                            <ButtonHome Text='New Pokemon' onClick={() => setNumBtn(numbtn + 1)} />
                            <ButtonHome Text='All Pokemon' />
                        </div>


                    </>)
                    :
                    'Loading...'
                }
                {
                    pokemon &&
                    typesall.map(e => {
                        return (
                            pokemon.types[0].type.name === e.name
                            &&
                            <style jsx global>
                                {`
                            body{
                                background-image: ${e.estilos.background};
                            }
                        `}
                            </style>
                        )
                    })
                }
            </div>

            <div className='flex items-center justify-center flex-col m-auto'>

                <Stats pokemon={pokemon} idPokemon={idPokemon} />
            </div>
        </div>
    );
}

const Stats = ({
    pokemon,
    idPokemon
}) => {

    return (
        pokemon && idPokemon ?
            <ul className='text-gray-600 font-medium text-xl text-right'>
                <li>Stats</li>
                {
                    pokemon &&
                    pokemon.stats.map((e, key) => {
                        return (
                            <li key={key}>
                                <small>{e.stat.name}: {e.base_stat}</small>
                            </li>
                        );
                    })
                }
            </ul>
            :
            'Loading...'
    );
}

const InfoPoke = ({
    pokemon,
    idPokemon
}) => {
    console.log(pokemon)
    return (
        pokemon && idPokemon &&
        <div className='flex items-center justify-between'>
            <small>type: {pokemon.types.map(e => {
                return (
                    <>
                        {e.type.name}
                    </>
                )
            })} </small>
            <small>height: {pokemon.height} </small>
            <small>weight: {pokemon.weight} </small>

        </div>
    )
}


export default HomeCardPokemon;



var typesall = [
    {
        name: "fire",
        estilos: {
            background: "linear-gradient(25deg, #FFE53B 0%, #FF2525 74%)",
        },
    },
    {
        name: "water",
        estilos: {
            background: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
        },
    },
    {
        name: "bug",
        estilos: {
            background: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
        },
    },
    {
        name: "normal",
        estilos: {
            background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        },
    },
    {
        name: "fighting",
        estilos: {
            background: "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
        },
    },
    {
        name: "flying",
        estilos: {
            background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        },
    },
    {
        name: "poison",
        estilos: {
            background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
            color: "#5d3069",
        },
    },
    {
        name: "ground",
        estilos: {
            background: "linear-gradient(62deg, #f3f3f3 0%, #F7CE68 100%)",
        },
    },
    {
        name: "rock",
        estilos: {
            background: "linear-gradient(62deg, #735836 0%, #a1a1ab 100%)",
        },
    },
    {
        name: "ghost",
        estilos: {
            background: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        },
    },
    {
        name: "steel",
        estilos: {
            background: "linear-gradient(67deg, #968996 0%, #a5b8bd 100%)",
        },
    },
    {
        name: "grass",
        estilos: {
            background: "linear-gradient(45deg, #85FFBD 0%, #6fc839 100%)"
        },
    },
    {
        name: "electric",
        estilos: {
            background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
        },
    },
    {
        name: "psychic",
        estilos: {
            background: "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
        },
    },
    {
        name: "ice",
        estilos: {
            background: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
        },
    },
    {
        name: "dragon",
        estilos: {
            background: "linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)"
        },
    },
    {
        name: "dark",
        estilos: {
            background: "linear-gradient(225deg, #42343f 0%, #7b6790 50%, #000000 100%)",
        },
    },
    {
        name: "fairy",
        estilos: {
            background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
        },
    },
];
