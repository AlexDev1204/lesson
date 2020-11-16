import React, { Fragment } from "react";
import { connect } from "react-redux";

import { onFavorite, onBuy } from "../../store/actions";

import { Heading, Wrapper, Item, Text, Row, Button } from "./styled";

const List = ({ posts, favorites, basket, onFavorite, onBuy }) => {
  const onAdd = (id, type) => () => {
    const isFavorites = type === "favorites";
    const arr = isFavorites ? [...favorites] : [...basket];
    if (!arr.includes(id)) arr.push(id);
    else arr.splice(arr.indexOf(id), 1);
    localStorage.setItem(isFavorites ? "favorites" : "basket", JSON.stringify(arr));
    isFavorites ? onFavorite(arr) : onBuy(arr);
  };

  const renderItems = () => {
    const _posts = [...posts];
    return _posts.map(({ title, id, body, userId }) => {
      return (
        <Item dir="column" key={id} p="20px">
          <Heading fSize={16} m="0 0 15px" h="57px">
            {title}
          </Heading>
          <Text>{body}</Text>
          <Row>
            <Button choosen={favorites.includes(id)} onClick={onAdd(id, "favorites")}>
              Favorite
            </Button>
            <Button choosen={basket.includes(id)} onClick={onAdd(id, "basket")} dark>
              Buy
            </Button>
          </Row>
        </Item>
      );
    });
  };

  return (
    <Fragment>
      <Heading white>List</Heading>
      <Wrapper>{renderItems()}</Wrapper>
    </Fragment>
  );
};

export default connect(({ posts, favorites, basket }) => ({ posts, favorites, basket }), { onFavorite, onBuy })(List);
