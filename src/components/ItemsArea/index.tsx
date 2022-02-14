import React, { useEffect, useState } from "react";
import { Api } from "../../Api";
import { delay } from "../../util/Delay/inde";
import Loader4Bubbles from "../Loaders/Loader4Bubbles";
import LoaderBubble from "../Loaders/LoaderBubble";
import LoaderCircle from "../Loaders/LoaderCircle";
import LoaderDoubleSpinner from "../Loaders/LoaderDoubleSpinner";

import {
  Container,
  Title,
  ListItems,
  ItemContent,
  ItemImageContent,
  ItemImage,
  ItemDetails,
  ItemDetailsButtonsContent,
  ItemButton,
  ItemButtonDefault,
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
} from "./styles";

const ItemsArea: React.FC = () => {
  const url = "/pokemon?offset=0&limit=20";
  const [dataFinded, setDataFinded] = useState([]);

  useEffect(() => {
    (async () => {
      await delay(5000);
      searchPokemons();
    })();
  }, []);

  const searchPokemons = async () => {
    await Api.get(url)
      .then((response: any) => {
        let results = response.data.results;
        if (results) {
          let dataUser = results;
          setDataFinded(dataUser);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Title>
        <div>Today</div>
        <div>
          <AboutIcon1 />
          <AboutIcon2 />
          <AboutIcon3 />
        </div>
      </Title>

      <ListItems>
        <LoaderBubble show={false /*dataFinded.length === 0*/} />
        <LoaderCircle show={false /*dataFinded.length === 0*/} />
        <Loader4Bubbles show={false /*dataFinded.length === 0*/} />
        <LoaderDoubleSpinner show={dataFinded.length === 0} />
        {dataFinded?.map((data: any, idx: number) => {
          return (
            <ItemContent key={idx}>
              <ItemImageContent>
                <ItemImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${
                    idx + 1
                  }.png`}
                />
              </ItemImageContent>
              <ItemDetails>
                <h3>{data.name}</h3>
                <span>
                  <strong>Abilities: </strong>
                  {data.sprites}
                </span>
                <ItemDetailsButtonsContent>
                  <ItemButton type="button" value="See Json" />
                  <ItemButtonDefault type="button" value="See this Pokemon" />
                </ItemDetailsButtonsContent>
              </ItemDetails>
            </ItemContent>
          );
        })}
      </ListItems>
    </Container>
  );
};

export default ItemsArea;
